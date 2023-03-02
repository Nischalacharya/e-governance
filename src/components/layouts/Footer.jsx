function Footer({ change }) {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer p-5 bg-purple-700 text-white text-center">
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
