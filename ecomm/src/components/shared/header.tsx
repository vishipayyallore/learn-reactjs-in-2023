import Link from "next/link";

const Header = () => {
    return (
        <div className='flex justify-left p-5 bg-gray-700 text-white gap-5'>
            <div>
                <h1 className='font-semibold'>Swamy PKV</h1>
            </div>

            <div className='flex gap-5'>
                <Link href='/'>Home</Link>
                <Link href='/orders'>Orders</Link>
                <Link href='/profile'>Profile</Link>
            </div>
        </div>
    );
};

export default Header;