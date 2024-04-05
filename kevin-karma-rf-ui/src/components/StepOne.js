import React from "react";
import styles from '../styles/stepone.module.scss';
import stepStyles from '../styles/step.module.scss'; //Share style

function StepOne() {
    const stepText = [
        {
            title: 'General',
            desc: 'Define Attendee types & attributes'
        },
        {
            title: 'Title',
            desc: 'Description that explains the value goes here. Description that explains the value goes here. '
        },
        {
            title: 'Title',
            desc: 'Description that explains the value goes here. Description that explains the value goes here. '
        }
    ];
    const StepOneBody = () => stepText.map(text => {
        return (
            <div className={styles.step_text_body}>
                <h2 className={stepStyles.step_text_heading}>{text.title}</h2>
                <p className={stepStyles.step_text_para}>{text.desc}</p>
            </div>
        )
    })
    return(
        <div className={styles.step_one_container}>
            <h2 className={stepStyles.step_heading}>Step 1: <span className={stepStyles.step_heading_sub}>Base settings</span></h2>
            <div className={styles.step_text_container}>
                <StepOneBody />
            </div>
        </div>
    );
};

export default StepOne;