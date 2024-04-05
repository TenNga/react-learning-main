import React from "react";
import styles from '../styles/stepfour.module.scss';
import stepStyles from '../styles/step.module.scss';
import whiteComputerIcon from '../icons/computer_white.svg';

function StepFour() {
    const stepAttendee = [
        {
            title: 'Exhibitor List',
            desc: 'Manage the portal that attendees will see after they’ve register for your event.'
        },
        {
            title: 'Exhibitor List',
            desc: 'Manage the portal that attendees will see after they’ve register for your event.'
        },
        {
            title: 'Exhibitor List',
            desc: 'Manage the portal that attendees will see after they’ve register for your event.'
        },
        {
            title: 'Exhibitor List',
            desc: 'Manage the portal that attendees will see after they’ve register for your event.'
        },
        {
            title: 'Exhibitor List',
            desc: 'Manage the portal that attendees will see after they’ve register for your event.'
        },
    ];

    const StepFourBody = () => stepAttendee.map(text => {
        return (
            // need unique key but due to nature of this challenge and having same copy text, we ignore for now
            <div className={styles.step_each_card}> 
                <div className={styles.step_build_card_header_container}>
                    <img className={styles.step_build_icon} src={whiteComputerIcon} alt="Computer Icon"/>
                    <h2 className={stepStyles.step_text_heading}>{text.title}</h2>
                </div>
                <p className={stepStyles.step_text_para}>{text.desc}</p>
            </div>
        )
    })
    return(
        <div className={styles.step_four_container}>
            <h2 className={stepStyles.step_heading}>Step 4: <span className={stepStyles.step_heading_sub}>Build your exhibitor platform.</span></h2>
            <div className={styles.step_build_container}>
                <StepFourBody />
            </div>
        </div>
    );
};

export default StepFour;