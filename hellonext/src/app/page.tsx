import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <div className='flex justify-left p-5 bg-gray-700 text-white gap-5'>
          <div>
            <h1 className='font-semibold'>Swamy PKV</h1>
          </div>

          <div className='flex gap-5'>
            <Link href='/projects'>Projects</Link>
            <Link href='/resume'>Resume</Link>
            <Link href='/contactus'>Contact Us</Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-5'>
        <h1 className='text-2xl font-semibold'>Welcome to my website</h1>
      </div>
    </>
  )
}
