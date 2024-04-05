import React from "react";
import styles from '../styles/steptwo.module.scss';
import stepStyles from '../styles/step.module.scss'; //Share style
import addRegistration from '../icons/add-circle-outline.svg';
import arrowIcon from '../icons/logic-arrow.svg';

function StepTwo() {
    const stepText = [
        {
            title: 'Attendee Registration',
            desc: 'Start by creating a general registration workflow'
        },
        {
            title: 'Attendee Registration',
            desc: 'Start by creating a general registration workflow'
        },
        {
            title: 'Attendee Registration',
            desc: 'Start by creating a general registration workflow'
        }
    ];
    const StepTwoBody = () => stepText.map(text => {
        return (
            // need unique key but due to nature of this challenge and having same copy text, we ignore for now
            <div className={stepStyles.step_each_card}> 
                <div className={styles.step_each_card_header_container}>
                    <img className={styles.step_each_card_icon} src={arrowIcon} alt="Arrow pointer"/>
                    <h2 className={stepStyles.step_text_heading}>{text.title}</h2>
                </div>
                <p className={stepStyles.step_text_para}>{text.desc}</p>
            </div>
        )
    })

    const StepTwoAddRegistration = () => {
        return(
            <div className={stepStyles.step_register}> 
                <img className={styles.step_register_icon} src={addRegistration} alt="Add registration workflow" />
                <p className={stepStyles.step_text_para}>add registration workflow</p>
            </div>
        )
    }
    return(
        <div className={styles.step_two_container}>
            <h2 className={stepStyles.step_heading}>Step 2: <span className={stepStyles.step_heading_sub}>Build registration workflows.</span></h2>
            <div className={styles.step_card_container}>
                <StepTwoBody />
                <StepTwoAddRegistration />
            </div>
        </div>
    );
};

export default StepTwo;