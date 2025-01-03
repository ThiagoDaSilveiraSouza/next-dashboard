import { NextResponse } from "next/server";
import { ProductList } from "../data";



export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const product = ProductList.find((product) => product.id === Number(id));
  if (product !== undefined) {
    return NextResponse.json({ data: product }, { status: 200 });
  }

  return NextResponse.json({
    status: 404,
    statusText: "Produto não encontrado",
  }, { status: 404 });
}