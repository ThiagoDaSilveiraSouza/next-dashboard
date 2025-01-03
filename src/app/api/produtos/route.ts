import { NextResponse } from "next/server";
import { ProductList } from "./data";

export async function GET() {
  return NextResponse.json({
    data: ProductList
  })
} 