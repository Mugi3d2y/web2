import "./Footer.css";
import React from "react";

interface FooterProps {
    title: string;
    children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
    return (
        <footer>
            <p>{props.title}</p>
            <a>{props.children}</a>
        </footer>
    )
}

export default Footer