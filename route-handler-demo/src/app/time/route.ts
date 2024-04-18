export const dynamic = "force-dynamic"; //DO NOT CACHE RESPONSE

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
};