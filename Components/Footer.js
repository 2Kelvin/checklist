const Footer = ({ length }) => {
    return (
        <footer>
            <p>
               You have {length} {length === 1 ? "thing" : "things"} to do </p>
        </footer>
    );
};

export default Footer;