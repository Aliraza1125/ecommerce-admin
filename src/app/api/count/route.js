import { NextResponse } from "next/server";
import count from './count.json'

export async function GET(){
   return NextResponse.json(count)
}