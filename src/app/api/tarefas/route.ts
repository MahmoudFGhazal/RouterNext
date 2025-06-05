import { NextResponse } from "next/server";

let tarefas = ["oi", "tacjau"];

export async function GET(request: Request){
    return NextResponse.json(tarefas);
}