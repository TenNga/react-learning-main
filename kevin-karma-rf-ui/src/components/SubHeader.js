import React from "react";
import styles from '../styles/subheader.module.scss';

function SubHeader() {
    return(
        <div className={styles.sub_header_container}>
            <h1 className={styles.sub_header_heading}>Event setup guide</h1>
            <p className={styles.sub_header_para}>See the available list of modules below. We suggest that you start with the attendee module.</p>
        </div>
    );
};

export default SubHeader;