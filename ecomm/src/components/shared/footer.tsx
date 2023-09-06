// components/Footer.tsx

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-0 m-0 absolute bottom-0 w-full text-white bg-gradient-to-r from-blue-600 to-blue-900" style={{ height: 30 }}>
            <div className="container" style={{ margin: 0, padding: 0 }}>
                <p style={{ margin: 5, padding: 0, fontSize: 14 }}>eCommerce Shop Application &copy; {currentYear}.</p>
            </div>
        </footer>
    );
};

export default Footer;
