import React from "react";
import styles from '../styles/stepthree.module.scss';
import stepStyles from '../styles/step.module.scss';
import computerIcon from '../icons/computer.svg';

function StepThree() {
    const stepAttendee = [
        {
            title: 'Attendee Portal',
            desc: 'Manage the portal that attendees will see after they’ve register for your event.'
        }
    ];

    const StepThreeBody = () => stepAttendee.map(text => {
        return (
            // need unique key but due to nature of this challenge and having same copy text, we ignore for now
            <div className={stepStyles.step_each_card}> 
                <div className={styles.step_attendee_card_header_container}>
                    <img className={styles.step_attendee_icon} src={computerIcon} alt="Computer Icon"/>
                    <h2 className={stepStyles.step_text_heading}>{text.title}</h2>
                </div>
                <p className={stepStyles.step_text_para}>{text.desc}</p>
            </div>
        )
    })

    return(
        <div className={styles.step_three_container}>
            <h2 className={stepStyles.step_heading}>Step 3: <span className={stepStyles.step_heading_sub}>Design attendee experiences.</span></h2>
            <div className={styles.step_attendee_container}>
               <StepThreeBody />
            </div>
        </div>
    );
};

export default StepThree;