import { NextResponse } from "next/server";

export async function GET(){
    const users = [
        {id:1, name: "john doe"},
        {id:2, name: "john does"},

    ]

    return NextResponse.json(users);
}