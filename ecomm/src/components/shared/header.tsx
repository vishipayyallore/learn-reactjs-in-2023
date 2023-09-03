import Link from "next/link";

const Header = () => {
    return (
        <div className='flex justify-between p-5 text-white gap-5 items-center h-6 bg-gradient-to-r from-blue-600 to-blue-900'>
            <Link className="text-2xl font-bold" href='/'>eCommerece</Link>

            <div className='flex gap-5'>
                <Link href='/orders'>Orders</Link>
                <Link href='/profile'>Profile</Link>
            </div>
        </div>
    );
};

export default Header;