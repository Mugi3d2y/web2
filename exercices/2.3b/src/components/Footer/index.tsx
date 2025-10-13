import "./Footer.css"


interface FooterProps {
    title:string;
}


const Footer = (props: FooterProps) => {
    return (
        <footer className="read-the-docs">{props.title}</footer>
    )
};

export default Footer