type prepType = {
    params:{ id: string }
}
function BlogPage({params}:prepType) {
    return(
        <h1>Blog Page {params.id}</h1>
    )

};

export default BlogPage;