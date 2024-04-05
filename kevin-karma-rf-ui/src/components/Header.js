import React from "react";
import headerIcon from '../icons/RF_logo.jpg';
import styles from '../styles/header.module.scss'

function Header() {
    return(
        //Each component will have it own SCSS module follow <componentName>.module.scss
        <div className={styles.header_container}>
            <div className={styles.header_left}>
                  <img className={styles.header_logo} src={headerIcon} alt='RainFocus Summit' />
                <div className={styles.header_text}>
                    <h1 className={styles.header_text_heading}>RainFocus Summit</h1>
                    <p className={styles.header_text_para}>December 15th</p>
                    <p className={styles.header_text_para}>Lehi, Utah</p>
                </div>
            </div>
          
            <div className={styles.edit_event_container}>
                <a className={styles.button_primary} href='#' rel="Event event">edit event</a>
            </div>
        </div>
    )
}

export default Header;