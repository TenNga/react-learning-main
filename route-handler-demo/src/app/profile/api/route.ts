import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers()

    cookies().set("resultsPerPage","20");

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));
    
    console.log(cookies().get("resultsPerPage"))

    return new Response("<h1>Profile Data here</h1>", {
        headers: {
            "Content-Type": "text/html",
        }
    })
}