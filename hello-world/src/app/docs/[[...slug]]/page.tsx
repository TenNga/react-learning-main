type paramType = {
    params: {
        slug: string[]
    }
}
function Docs({params}:paramType) {
    
    const renderFeature = () => {
        switch (params.slug?.length) {
            case 2:
                return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}.</h1>
            case 1:
                return <h1>Viewing docs for feature {params.slug[0]}.</h1>
            default:
                return <h1>Docs Home Page</h1>
        }
    }
    return(
         <>{renderFeature()}</>
    )
};

export default Docs;