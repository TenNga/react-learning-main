import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request: Request, {params} : {params : {id: string}}){
    const paramId = parseInt(params.id);
    if(paramId > comments.length) {
        redirect('/comments');
    }
    const comment = comments.find(c => c.id === paramId);
    return Response.json(comment);
}

export async function PATCH(request: Request, {params}:{params:{id: string}}){
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(c => c.id === parseInt(params.id));
    comments[index].text = text;

    return Response.json(comments[index]);
}

export async function DELETE(_request:Request, {params}:{params: {id: string}}) {
    const index = comments.findIndex(c => c.id === parseInt(params.id));
    comments.splice(index,1);
    return Response.json(comments[index]);
}