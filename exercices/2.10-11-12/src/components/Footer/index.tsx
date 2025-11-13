import "./Footer.css";
import React from "react";

interface FooterProps {
    title: string;
    children: React.ReactNode;
}

const Footer = ({title, children}: FooterProps) => {
    return (
        <footer>
            <p>{title}</p>
            <a>{children}</a>
        </footer>
    )
}

export default Footer