import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	FaBars,
	FaTimes,
	FaTwitter,
	FaFacebook,
	FaPhone,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Navbar({ change, handleChange }) {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	return (
		<nav className="w-full sticky top-0 bg-purple-700 text-white text-lg font-normal z-10 flex items-center justify-between py-3 px-2 md:px-8 md:flex-row md:py-1 lg:flex-row lg:py-0">
			<div className="flex items-center md:mb-2 z-10 lg:mt-1 w-[300px] h-[50px]">
				<Link to="/" className="hover:text-gray-300 duration-200">
					<h1 className="text-xl w-full font-normal ml-2">
						{!change ? 'Home' : 'गृहपृष्ठ'}
					</h1>
				</Link>
				<button
					onClick={handleChange}
					className="text-white font-semibold ml-5 hover:text-gray-300 duration-200"
				>
					ने / E
				</button>
			</div>

			<div
				onClick={handleClick}
				className="absolute right-4 top-5 cursor-pointer lg:hidden hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			>
				{!open ? (
					<FaBars size={25} className="cursor-pointer" />
				) : (
					<FaTimes size={25} className="cursor-pointer" />
				)}
			</div>

			<ul
				className={`w-full flex flex-col items-start bg-purple-700 absolute top-12 left-0 mt-3 pl-0 md:pl-5 lg:static lg:flex lg:flex-row lg:justify-end lg:mt-0 lg:py-2 opacity-100  ${
					open ? 'top-0' : 'opacity-0 hidden'
				}`}
			>
				<li className="my-3 md:my-2 lg:mx-2 lg:mt-3" onClick={handleClick}>
					<Link
						className="text-white hover:text-gray-300 duration-200"
						to="/license"
					>
						{!change ? 'Driving License' : 'चालक अनुमतिपत्र'}
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-2 lg:mt-3" onClick={handleClick}>
					<Link
						className="text-white hover:text-gray-300 duration-200"
						to="/quiz"
					>
						{!change ? 'Exam' : 'परीक्षा'}
					</Link>
				</li>
				
			</ul>
			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://github.com/namgellama"
							target="_blank"
						>
							Email <HiOutlineMail size={30} color="white" />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://www.linkedin.com/in/namgel-lama-9b2164193/"
							target="_blank"
						>
							4474922
							<FaPhone size={30} color="white" />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="mailto: namgeltamang14@gmail.com"
							target="_blank"
						>
							Facebook <FaFacebook size={30} color="white" />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565569]">
						<a
							className="flex justify-between items-center w-full text-gray-100"
							target="_blank"
						>
							Twitter <FaTwitter size={30} color="white" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
