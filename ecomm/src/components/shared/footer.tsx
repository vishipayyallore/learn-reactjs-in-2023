// components/Footer.tsx

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-0 absolute bottom-0 w-full h-30 text-white bg-gradient-to-r from-blue-600 to-blue-900">
            <div className="container" style={{ margin: 0, padding: 0 }}>
                <p style={{ margin: 10, padding: 0 }}>eCommerce Shop Application &copy; {currentYear}.</p>
            </div>
        </footer>
    );
};

export default Footer;
