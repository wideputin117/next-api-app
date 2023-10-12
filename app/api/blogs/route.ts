// this is api routes 

import { addPost, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

// get api
export const GET= async (req: Request, res: Response)=> {
    try{
        // your code here
        const posts =getPosts();
        return NextResponse.json({message: "Post fetched", posts},
        {status:200},
    )
    }catch(err){
        return NextResponse.json(
            {message: "error" ,err},
            {status: 500,},
        )
    }
}

// post api
export const POST = async (req: Request, res: Response)=>{
    const {title,des} = await req.json();
    try{
        const post = { title, des, date: new Date, id: Date.now().toString()};
        addPost(post);
        return NextResponse.json({message:"Post fetched",post},
        {status:201},
    )
    }
    catch(err){
        return NextResponse.json(
            {message:"error", err },
            {
                status: 500, 
            },
        )
    }
}