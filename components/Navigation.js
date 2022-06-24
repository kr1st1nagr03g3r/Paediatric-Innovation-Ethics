import React from 'react';
import styles from '../styles/Nav.module.css'


class Navigation extends React.Component {
    state = {}
    render() {
        return (
            // <div className={styles.bar}>
            //     <div className={styles.logo}><Link href="#">PBT</Link></div>
            //     <div className={styles.link}><Link href="#">HOME</Link></div>
            //     <div className={styles.link}><Link href="#">RESEARCH</Link></div>
            //     <details closed>
            //         <summary>
            //             MODEL OVERVIEW&nbsp;
            //         </summary>
            //         <div className={styles.detaillink}>
            //             <span className={styles.span}><Link href="#">DRUG DISCOVERY</Link></span>
            //             <span className={styles.span}><Link href="#">DRUG DISCOVERY / PRE-CLINICAL</Link></span>
            //             <span className={styles.span}><Link href="#">PRE-CLINICAL</Link></span>
            //             <span className={styles.span}><Link href="#">IND</Link></span>
            //             <span className={styles.span}><Link href="#">CLINICAL TRIALS</Link></span>
            //             <span className={styles.span}><Link href="#">NDA</Link></span>
            //             <span className={styles.span}><Link href="#">MANUFACTURING AND DISTRIBUTING</Link></span>
            //         </div>
            //     </details>
            //     <div className={styles.link}><Link href="#">CONTACT</Link></div>
            // </div>


            <div className={styles.navbar}>
                <h1 className="text-[100px] font-bold text-white">PBT</h1>
                <a href="#home">HOME</a>
                <a href="#research">RESEARCH</a>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>MODEL OVERVIEW
                        <i clasNames={styles.fa}>&nbsp;▼</i>
                    </button>
                    <div className={styles.dropdowncontent}>
                        <a href="#">DRUG DISCOVERY</a>
                        <a href="#">DRUG DISCOVERY / PRE-CLINICAL</a>
                        <a href="#">PRE-CLINICAL</a>
                        <a href="#">IND</a>
                        <a href="#">CLINICAL TRIALS</a>
                        <a href="#">NDA</a>
                        <a href="#">MANUFACTURING AND DISTRIBUTING</a>
                    </div>
                </div>
                <a href="#research">CONTACT</a>
            </div>


        );
    }
}


export default Navigation;