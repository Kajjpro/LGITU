import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,

) {
 const books =await prisma.book.findMany({

 })
  return NextResponse.json(books);


}
