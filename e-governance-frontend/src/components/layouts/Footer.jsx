import { Link } from 'react-router-dom';

function Footer({ change }) {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer p-5 bg-purple-700 text-white text-center">
			<ul className='flex items-center justify-center'> 
				<li className="my-3 " >
					<Link
						className="text-white hover:text-gray-300 duration-200"
						to="/"
					>
						{!change ? 'Transport Law' : 'यातायात कानून'}
					</Link>
				</li>
				<li
					className="my-3 "
				>
					<Link
						className="text-white hover:text-gray-300 duration-200"
						to="/"
					>
						{!change ? 'Gallery' : 'फोटो ग्यालरी'}
					</Link>
				</li>
				<li
					className="my-3 "
				>
					<Link
						className="text-white hover:text-gray-300 duration-200"
						to="/"
					>
						{!change ? 'FAQ' : 'बारम्बार सोधिने प्रश्नहरू'}
					</Link>
				</li>
			</ul>
			<p>
				{!change
					? `Copright © ${footerYear}, Nepal Government, Department of Transport Management
					`
					: `प्रतिलिपि अधिकार © ${footerYear}, नेपाल सरकार, यातायात व्यवस्था
				विभाग`}
			</p>
		</footer>
	);
}

export default Footer;
