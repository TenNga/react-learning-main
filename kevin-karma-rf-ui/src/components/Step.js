import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

function Step({stepCount}){
    // render base on prop value so that one component is used to render steps
    const allSteps = {
        "one": StepOne,
        "two": StepTwo,
        "three": StepThree,
        "four": StepFour,
    }

    const RenderStep = allSteps[stepCount];
    return(
        <div>
            <RenderStep />
        </div>
        
    )
};

export default Step;