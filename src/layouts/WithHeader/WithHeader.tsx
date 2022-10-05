import React from "react";
import style from "./WithHeader.module.css"
import Image from "next/image"

const WithHeader = ({ children }) => {
    return (
        <>
            <nav className={style.topNav}>
                <Image src="/images/logo.png" width="75" height="75" layout="fixed"/>
                <label style={{marginLeft: "8px"}}>Braindaid</label>
            </nav>
            <div className={style.pageContainer}>
                {children}
            </div>
            
        </>
    )
    
}

export default WithHeader;