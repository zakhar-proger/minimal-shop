import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit");

  const products = await prisma.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
    take: limit ? Number(limit) : undefined,
    include: {
      images: true,
    },
  });

  return NextResponse.json(products);
}
