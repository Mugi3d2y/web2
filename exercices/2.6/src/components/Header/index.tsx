import React from "react";
import "./Header.css";

interface HeaderProps {
    image: string;
    children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
    return (
        <header
            className="header"
            style={{ backgroundImage: `url(${props.image})` }}
        >
            <div className="header__content">{props.children}</div>
        </header>
    );
};

export default Header;