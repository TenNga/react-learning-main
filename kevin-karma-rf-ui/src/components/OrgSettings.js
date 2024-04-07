import React from "react";
import PortalIcon from '../icons/Person Portal.png';
import styles from '../styles/orgsetting.module.scss';
import Step from "./Step";

function OrgSettings() {
    return(
        <section className={styles.org_setting_container}>
            <div className={styles.org_setting_header}>
                <img className={styles.org_setting_icon} src={PortalIcon} alt="Portal Icon" />
                <h1 className={styles.org_setting_heading}>Org Settings</h1>
            </div>
            <Step stepCount={"one"}/>
            <Step stepCount={"two"}/>
            <Step stepCount={"three"}/>
            <Step stepCount={"four"}/>
        </section>
    )
};

export default OrgSettings;