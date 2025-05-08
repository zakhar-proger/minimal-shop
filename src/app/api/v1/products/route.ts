import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit") || 12);
  const page = Number(searchParams.get("page") || 1);
  const skip = (page - 1) * limit;

  const products = await prisma.product.findMany({
    skip,
    take: limit,
    include: {
      images: true,
    },
  });

  return NextResponse.json(products);
}
