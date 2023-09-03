import Link from "next/link";

const Header = () => {
    return (
        <div className='flex justify-between p-5 bg-gray-700 text-white gap-5 items-center'>
            <Link className="text-2xl font-bold" href='/'>eCommerece</Link>

            <div className='flex gap-5'>
                <Link href='/orders'>Orders</Link>
                <Link href='/profile'>Profile</Link>
            </div>
        </div>
    );
};

export default Header;