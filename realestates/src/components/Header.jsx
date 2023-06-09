import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    const navigate = useNavigate();

    function pathMathRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

    return (
        <div className="bg-blue-500 border-b shadow-sm shadow-blue-800 sticky top-0 z-50">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div>
                    <img src="./images/RealEstates.PNG" alt="logo" className="h-5 cursor-pointer shadow-blue-800 shadow-md border" onClick={() => navigate("/")} />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-white border-b-[3px] ${pathMathRoute("/") && "text-black border-b-red-500"}`}
                            onClick={() => navigate("/")}>Home</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-white border-b-[3px] ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}
                            onClick={() => navigate("/offers")}>Offers</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-white border-b-[3px] ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`}
                            onClick={() => navigate("/sign-in")}>Sign in</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}