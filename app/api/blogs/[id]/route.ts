// this an dynamic id route for dynamic routes

import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async(req: Request)=>{
    try{
   const id = req.url.split("blogs/")[1];
   const post = getById(id);
   console.log(id);
   if(!post){
 return NextResponse.json({message:"error"},{status:404})
   }
return NextResponse.json({message:"Ok",post},{status:200})
} 
catch(err){
  return NextResponse.json({message:"Error",err},{status:404})
}
    // get a post by id
}

// put request
export const PUT= async(req: Request)=>{
    try{
        const {title, des} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePost(id, title, des);
        return NextResponse.json({message:"Ok"},{status:200})
    }catch(err){
        return NextResponse.json({message:"error occurred",err},{status:500})
    }
    //update by using dynamic id
}

// delete route
export const DELETE= async(req: Request)=>{
    try{
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message:"Ok"},{status:200});
    }catch(err){
        return NextResponse.json({message:"Error Deleting",err},{status:500})
    }
    //this will delete by id
}