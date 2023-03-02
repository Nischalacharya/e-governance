function License({ change }) {
	return (
		<section className="w-full lg:w-[1000px] mx-auto">
			<div>
				<h1 className="text-center text-3xl font-bold mt-7 mb-4 uppercase">
					{!change ? 'Demographic Details' : 'जनसांख्यिकीय विवरण'}
				</h1>
				<div className="flex flex-col items-center lg:block">
					<h2 className="text-2xl font-semibold mt-6 mb-2">
						{!change ? 'Application Details' : 'आवेदन विवरण'}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-0">
						<div className="flex flex-col my-3">
							<label>{!change ? 'First Name' : 'पहिलो नाम'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter First Name' : 'पहिलो नाम प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Middle Name' : 'बीचको नाम'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter middle Name' : 'बीचको नाम प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Last Name' : 'थर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter last name ' : 'थर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Date of Birth (BS)' : 'जन्म मिति (BS)'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter date of birth (BS) YYYY/MM/DD'
										: 'जन्म मिति प्रविष्ट गर्नुहोस् YYYY/MM/DD'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Date of Birth (AD)' : 'जन्म मिति (AD)'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter date of birth (AD) YYYY/MM/DD'
										: 'जन्म मिति प्रविष्ट गर्नुहोस् YYYY/MM/DD'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Age' : 'उमेर'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={!change ? 'Enter age' : 'उमेर प्रविष्ट गर्नुहोस्'}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Blood Group' : 'रक्त समूह'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter blood group' : 'रक्त समूह प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Gender' : 'लिङ्ग'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter gender' : 'लिङ्ग प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Occupation' : 'पेशा'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter occupation' : 'पेशा प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Education' : 'शिक्षा'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter education' : 'शिक्षा प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Citizenship No.' : 'नागरिकता नम्बर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter citizenship no.'
										: 'नागरिकता नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change
									? 'Citizenship Issued District'
									: 'नागरिकता जारी गरिएको जिल्ला'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter citizenship issued district'
										: 'नागरिकता जारी गरिएको जिल्ला प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Passport No.' : 'राहदानी नम्बर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter passport no.'
										: 'राहदानी नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change
									? 'Passport Issued District'
									: 'राहदानी जारी गरिएको जिल्ला प्रविष्ट गर्नुहोस्'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter passport issued district'
										: 'राहदानी जारी गरिएको जिल्ला प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Identity Mark' : 'पहिचान चिन्ह'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter identity mark'
										: 'पहिचान चिन्ह प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center lg:block">
					<h2 className="text-2xl font-semibold mt-6 mb-2">
						{!change ? 'Witness Details' : 'साक्षी विवरण'}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-0">
						<div className="flex flex-col my-3">
							<label>{!change ? 'First Name' : 'पहिलो नाम'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter First Name' : 'पहिलो नाम प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Middle Name' : 'बीचको नाम'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter middle Name' : 'बीचको नाम प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Last Name' : 'थर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter last name ' : 'थर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Relationship' : 'सम्बन्ध'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter relationship' : 'सम्बन्ध प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center lg:block">
					<h2 className="text-2xl font-semibold mt-6 mb-2">
						{!change ? 'Trainer Details' : 'प्रशिक्षक विवरण'}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-0">
						<div className="flex flex-col my-3">
							<label>{!change ? 'Name' : 'नाम'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={!change ? 'Enter Name' : 'नाम प्रविष्ट गर्नुहोस्'}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'License No' : 'इजाजतपत्र नम्बर'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter license no.'
										: 'इजाजतपत्र नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-center text-3xl font-bold mt-16 mb-4 uppercase">
					{!change ? 'Address Details' : 'ठेगाना विवरण'}
				</h1>
				<div className="flex flex-col items-center lg:block">
					<h2 className="text-2xl font-semibold mt-6 mb-2">
						{!change ? 'Permanent Address' : 'स्थाई ठेगाना'}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-0">
						<div className="flex flex-col my-3">
							<label>{!change ? 'Zone' : 'क्षेत्र'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter zone' : 'क्षेत्र प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'District' : 'जिल्ला'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter district name' : 'जिल्ला प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Village' : 'गाउँ'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter village' : 'गाउँ प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Ward No.' : 'वार्ड नम्बर'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter ward no.' : 'वार्ड नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Tole' : 'टोल'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={!change ? 'Enter tole' : 'टोल प्रविष्ट गर्नुहोस्'}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Block No.' : 'ब्लक नम्बर'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter block no.' : 'ब्लक नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Mobile No.' : 'मोबाइल नम्बर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter mobile no.'
										: 'मोबाइल नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Office Contact No.' : 'कार्यालय सम्पर्क नम्बर '}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter office contact no.'
										: 'कार्यालय सम्पर्क नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Contact No.' : 'सम्पर्क नम्बर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter contact no.'
										: 'सम्पर्क नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Email Address' : 'इमेल ठेगाना'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter email address'
										: 'इमेल ठेगाना प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center lg:block">
					<h2 className="text-2xl font-semibold mt-6 mb-2">
						{!change ? 'Present Address' : 'अहिलेकाे ठेगाना'}
					</h2>
					<div className="flex items-center mb-4 self-start pl-[4.5rem] md:pl-11 lg:pl-0">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="default-checkbox"
							className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
						>
							{!change ? 'Same as permanent address' : 'वर्तमान ठेगाना जस्तै'}
						</label>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-0">
						<div className="flex flex-col my-3">
							<label>{!change ? 'Zone' : 'क्षेत्र'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter zone' : 'क्षेत्र प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'District' : 'जिल्ला'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter district name' : 'जिल्ला प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Village' : 'गाउँ'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter village' : 'गाउँ प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Ward No.' : 'वार्ड नम्बर'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter ward no.' : 'वार्ड नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Tole' : 'टोल'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={!change ? 'Enter tole' : 'टोल प्रविष्ट गर्नुहोस्'}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Block No.' : 'ब्लक नम्बर'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change ? 'Enter block no.' : 'ब्लक नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Mobile No.' : 'मोबाइल नम्बर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter mobile no.'
										: 'मोबाइल नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Office Contact No.' : 'कार्यालय सम्पर्क नम्बर '}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter office contact no.'
										: 'कार्यालय सम्पर्क नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Contact No.' : 'सम्पर्क नम्बर'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change
										? 'Enter contact no.'
										: 'सम्पर्क नम्बर प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Email Address' : 'इमेल ठेगाना'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								placeholder={
									!change
										? 'Enter email address'
										: 'इमेल ठेगाना प्रविष्ट गर्नुहोस्'
								}
							/>
						</div>
						<div></div>
						<div className="flex flex-col mt-3 mb-8">
							<button className="bg-purple-600 py-2 px-8 rounded-sm text-white self-end">
								{!change ? 'Submit' : 'पेश गर्नुहोस्'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default License;
