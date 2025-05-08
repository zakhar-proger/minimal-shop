import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit") || 12);
  const page = Number(searchParams.get("page") || 1);
  const skip = (page - 1) * limit;

  const sort = searchParams.get("sort") || "popular";

  let orderBy: any;
  switch (sort) {
    case "price_asc":
      orderBy = { price: "asc" };
      break;
    case "price_desc":
      orderBy = { price: "desc" };
      break;
    case "newest":
      orderBy = { createdAt: "desc" };
      break;
    // case "rating":
    //   orderBy = { rating: "desc" };
    //   break;
    default:
      orderBy = { createdAt: "desc" }; // популярность = новизна по умолчанию
      break;
  }

  const products = await prisma.product.findMany({
    skip,
    take: limit,
    orderBy,
    include: {
      images: true,
    },
  });

  return NextResponse.json(products);
}
