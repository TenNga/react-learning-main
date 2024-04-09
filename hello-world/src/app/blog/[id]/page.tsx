import { Metadata } from "next";

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
        <h1>Blog Page {params.id}</h1>
    )

};

export default BlogPage;