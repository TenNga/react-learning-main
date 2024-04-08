type prepType = {
    parems:{ id: string }
}
function BlogPage({parems}:prepType) {
    return(
        <h1>Blog Page {parems.id}</h1>
    )

};

export default BlogPage;