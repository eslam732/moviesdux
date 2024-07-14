import React from "react";
import '../styles.css';

export default function Footer(){
    const cuurentYear = new Date().getFullYear();
    return(
        <footer className="footer">
            <p className="footer-text">
                {cuurentYear} MovieDux
            </p>
        </footer>
    );
}