import { notFound } from "next/navigation";

type paramType = {
    params: {
        reviewId: string,
        id: string
    }
}
function ReviewPage ({params}:paramType) {
    if(parseInt(params.reviewId) > 100) {
        notFound();
    } else if (parseInt(params.reviewId) > 50) {
        throw new Error('Error loading review more than 50 < 100!!')
    }
    return(
        <h1>Blog: {params.id}, Review: {params.reviewId}.</h1>
    )
};

export default ReviewPage;