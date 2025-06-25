import { Link } from 'react-router-dom';

export default function Footer() {

  const currentyear = new Date().getFullYear();

  return (
    <footer className='flex items-center justify-between bg-[#fc8a23] p-3'>
      <p className=' text-black text-xl'>LeetInsights@{currentyear}</p>
      <Link to="/privacy" className="text-xl text-black cursor-pointer">
        Privacy Policy
      </Link>
    </footer>
  )
}