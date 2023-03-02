import Logo from '../../assets/logo.png';
import NepalGif from '../../assets/nepal.gif';

function Header({ change, handleChange }) {
	return (
		<header className="flex flex-col md:flex-row items-center justify-between header-banner">
			<div className="pl-0 lg:pl-4">
				<img src={Logo} alt="logo" className="w-[90px] md:w-[100px]" />
			</div>
			<div className="text-center text-[#d33434]  py-2 tracking-wider">
				<h3 className="text-sm font-bold">
					{!change ? 'Nepal Government' : 'नेपाल सरकार'}
				</h3>
				<h3 className="text-sm font-bold">
					{!change
						? 'Ministry of Physical Infrastructure and Transport'
						: 'भौतिक पूर्वाधार तथा यातायात मन्त्रालय'}
				</h3>
				<h1 className="text-lg font-bold">
					{!change
						? 'Department of Transport Management'
						: 'यातायात व्यवस्था विभाग'}
				</h1>
				<h2 className="text-md font-bold">
					{!change ? 'Minbhawan, Kathmandu' : 'मीनभवन, काठमाडौं'}
				</h2>
			</div>
			<div className=" md:pr-4">
				<img
					className="hidden md:block w-[60px]"
					src={NepalGif}
					alt="Nepal Flag"
				/>
			</div>
		</header>
	);
}

export default Header;
