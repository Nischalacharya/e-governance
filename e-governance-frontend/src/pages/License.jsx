import { useState } from "react";
import axios from "axios";
function License({ change }) {

	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState(''); // added this 
	const [lastName, setLastName] = useState('');
	const [dobBS, setDobBS] = useState('');
	const [dobAD, setDobAD] = useState('');
	const [age, setAge] = useState('');
	const [bloodGroup, setBloodGroup] = useState('');
	const [gender, setGender] = useState('');
	const [occupation, setOccupation] = useState('');
	const [education, setEducation] = useState('');
	const [citizenshipNo, setCitizenshipNo] = useState('');
	const [citizenshipIssuedDistrict, setCitizenshipIssuedDistrict] = useState('');
	const [passportNo, setPassportNo] = useState('');
	const [passportIssuedDistrict, setPassportIssuedDistrict] = useState('');
	const [identityMark, setIdentityMark] = useState('');
	const [permanentzone, setPermanentZone] = useState('');
	const [permanentdistrict, setPermanentDistrict] = useState('');
	const [permanentvillage, setPermanentVillage] = useState('');
	const [permanentward, setPermanentWard] = useState('');
	const [permanenttole, setPermanentTole] = useState('');
	const [permanentblockNo, setPermanentBlockNo] = useState('');
	const [permanentmobileNo, setPermanentMobileNo] = useState('');
	const [permanenttelNo, setPermanentTelNo] = useState('');
	const [permanentContact, setPermanentContact] = useState('');
	const [permanentemail, setPermanentEmail] = useState('');
	const [presentZone, setPresentZone]= useState('');
	const [presentDistrict, setPresentDistrict] = useState('');
	const [presentVillage, setPresentVillage] = useState('');
	const [presentWard, setPresentWard] = useState('');
	const [presentTole, setPresentTole] = useState('');
	const [presentBlockNo, setPresentBlockNo] = useState('');
	const [presentMobileNo, setPresentMobileNo] = useState('');
	const [presentOfficeContactNo, setPresentOfficeContactNo] = useState('');
	const [presentTelNo, setPresentTelNo] = useState('');
	const [presentEmail, setPresentEmail] = useState('');


  
  
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  try {
		const response = await axios.post('/api/userDetails', { firstName,middleName, lastName, dobBS, dobAD, age, bloodGroup, gender, occupation, education, citizenshipNo, citizenshipIssuedDistrict, passportNo, passportIssuedDistrict, identityMark, permanentzone, permanentdistrict, permanentvillage, permanentward, permanenttole, permanentblockNo, permanentmobileNo, permanenttelNo, permanentContact, permanentemail, presentZone, presentDistrict, presentVillage, presentWard, presentTole, presentBlockNo, presentMobileNo, presentOfficeContactNo, presentTelNo, presentEmail });
		console.log(response.data);
		setFirstName('');
		setLastName('');
		setMiddleName('');
	  } catch (error) {
		console.error(error);
	  }
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
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
							<label>{!change ? 'First Name*' : 'पहिलो नाम*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change ? 'Enter First Name' : 'पहिलो नाम प्रविष्ट गर्नुहोस्'
								}
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}

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
								value={middleName}
								onChange={(e) => setMiddleName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Last Name*' : 'थर*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter last name ' : 'थर प्रविष्ट गर्नुहोस्'
								}
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Date of Birth (BS)*' : 'जन्म मिति (BS)*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={
									!change
										? 'Enter date of birth (BS) YYYY/MM/DD'
										: 'जन्म मिति प्रविष्ट गर्नुहोस् YYYY/MM/DD'
								}
								value={dobBS}
								onChange={(e) => setDobBS(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Date of Birth (AD)*' : 'जन्म मिति (AD)*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change
										? 'Enter date of birth (AD) YYYY/MM/DD'
										: 'जन्म मिति प्रविष्ट गर्नुहोस् YYYY/MM/DD'
								}
								value={dobAD}
								onChange={(e) => setDobAD(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Age*' : 'उमेर*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={!change ? 'Enter age' : 'उमेर प्रविष्ट गर्नुहोस्'}
								value={age}
								onChange={(e) => setAge(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Blood Group*' : 'रक्त समूह*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change ? 'Enter blood group*' : 'रक्त समूह प्रविष्ट गर्नुहोस्*'
								}
								value={bloodGroup}
								onChange={(e) => setBloodGroup(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Gender*' : 'लिङ्ग*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={
									!change ? 'Enter gender' : 'लिङ्ग प्रविष्ट गर्नुहोस्'
								}
								value={gender}
								onChange={(e) => setGender(e.target.value)}
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
								value={occupation}
								onChange={(e) => setOccupation(e.target.value)}
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
								value={education}
								onChange={(e) => setEducation(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Citizenship No.*' : 'नागरिकता नम्बर*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change
										? 'Enter citizenship no.'
										: 'नागरिकता नम्बर प्रविष्ट गर्नुहोस्'
								}
								value={citizenshipNo}
								onChange={(e) => setCitizenshipNo(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change
									? 'Citizenship Issued District*'
									: 'नागरिकता जारी गरिएको जिल्ला*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={
									!change
										? 'Enter citizenship issued district'
										: 'नागरिकता जारी गरिएको जिल्ला प्रविष्ट गर्नुहोस्'
								}
								value={citizenshipIssuedDistrict}
								onChange={(e) => setCitizenshipIssuedDistrict(e.target.value)}
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
								value={passportNo}
								onChange={(e) => setPassportNo(e.target.value)}

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
								value={passportIssuedDistrict}
								onChange={(e) => setPassportIssuedDistrict(e.target.value)}
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
								value={identityMark}
								onChange={(e) => setIdentityMark(e.target.value)}
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
							<label>{!change ? 'Zone*' : 'क्षेत्र*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change ? 'Enter zone' : 'क्षेत्र प्रविष्ट गर्नुहोस्'
								}
								value = {permanentzone}
								onChange = {(e) => setPermanentZone(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'District*' : 'जिल्ला*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={
									!change ? 'Enter district name' : 'जिल्ला प्रविष्ट गर्नुहोस्'
								}
								value = {permanentdistrict}
								onChange = {(e) => setPermanentDistrict(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Village*' : 'गाउँ*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change ? 'Enter village' : 'गाउँ प्रविष्ट गर्नुहोस्'
								}
								value = {permanentvillage}
								onChange = {(e) => setPermanentVillage(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Ward No.*' : 'वार्ड नम्बर*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={
									!change ? 'Enter ward no.' : 'वार्ड नम्बर प्रविष्ट गर्नुहोस्'
								}
								value = {permanentward}
								onChange = {(e) => setPermanentWard(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Tole*' : 'टोल*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={!change ? 'Enter tole' : 'टोल प्रविष्ट गर्नुहोस्'}
								value = {permanenttole}
								onChange = {(e) => setPermanentTole(e.target.value)}
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
								value = {permanentblockNo}
								onChange = {(e) => setPermanentBlockNo(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Mobile No*.' : 'मोबाइल नम्बर*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change
										? 'Enter mobile no.'
										: 'मोबाइल नम्बर प्रविष्ट गर्नुहोस्'
								}
								value = {permanentmobileNo}
								onChange = {(e) => setPermanentMobileNo(e.target.value)}
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
								value = {permanenttelNo}
								onChange = {(e) => setPermanentTelNo(e.target.value)}
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
								value = {permanentContact}
								onChange = {(e) => setPermanentContact(e.target.value)}
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
								value = {permanentemail}
								onChange = {(e) => setPermanentEmail(e.target.value)}
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
							<label>{!change ? 'Zone*' : 'क्षेत्र*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change ? 'Enter zone' : 'क्षेत्र प्रविष्ट गर्नुहोस्'
								}
								value={presentZone}
								onChange={(e) => setPresentZone(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'District*' : 'जिल्ला*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={
									!change ? 'Enter district name' : 'जिल्ला प्रविष्ट गर्नुहोस्'
								}
								value={presentDistrict}
								onChange={(e) => setPresentDistrict(e.target.value)}

							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Village*' : 'गाउँ*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								placeholder={
									!change ? 'Enter village' : 'गाउँ प्रविष्ट गर्नुहोस्'
								}
								value={presentVillage}
								onChange={(e) => setPresentVillage(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label className="lg:ml-[6.3rem]">
								{!change ? 'Ward No.*' : 'वार्ड नम्बर*'}
							</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px] self-end"
								required
								placeholder={
									!change ? 'Enter ward no.' : 'वार्ड नम्बर प्रविष्ट गर्नुहोस्'
								}
								value={presentWard}
								onChange={(e) => setPresentWard(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Tole*' : 'टोल*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={!change ? 'Enter tole' : 'टोल प्रविष्ट गर्नुहोस्'}
								value={presentTole}
								onChange={(e) => setPresentTole(e.target.value)}
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
								value={presentBlockNo}
								onChange={(e) => setPresentBlockNo(e.target.value)}
							/>
						</div>
						<div className="flex flex-col my-3">
							<label>{!change ? 'Mobile No.*' : 'मोबाइल नम्बर*'}</label>
							<input
								type="text"
								className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[350px] lg:w-[400px]"
								required
								placeholder={
									!change
										? 'Enter mobile no.'
										: 'मोबाइल नम्बर प्रविष्ट गर्नुहोस्'
								}
								value={presentMobileNo}
								onChange={(e) => setPresentMobileNo(e.target.value)}
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
								value={presentOfficeContactNo}
								onChange={(e) => setPresentOfficeContactNo(e.target.value)}
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
								value={presentTelNo}
								onChange={(e) => setPresentTelNo(e.target.value)}
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
								value={presentEmail}
								onChange={(e) => setPresentEmail(e.target.value)}
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
				</form>
		</div>
	);
}

export default License;
