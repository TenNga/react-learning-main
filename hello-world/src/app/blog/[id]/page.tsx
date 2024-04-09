import { Metadata } from "next";
import Link from "next/link";

type prepType = {
    params:{ id: string }
}

export const generateMetadata = async({params}:prepType):Promise<Metadata> => {
    const title = await new Promise(resolve=>{
        setTimeout(() => {
            resolve(`number ${params.id}`)
        }, 100);
    })
    return {
        title: `Blog ${title}`,
    };
};

function BlogPage({params}:prepType) {
    return(
        <>
            <Link href='/blog'>Main Blog</Link>
            <h1>Blog Page {params.id}</h1>
        </>
    )

};

export default BlogPage;