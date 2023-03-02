import React from 'react';

function DemographicDetails() {
	return (
		<div>
			<h1 className="text-center text-3xl font-bold mt-7 mb-4 uppercase">
				Demographic Details
			</h1>
			<div>
				<h2 className="text-2xl font-semibold mt-6 mb-2">
					Application Details
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="flex flex-col my-3">
						<label>First Name</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter first name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Middle Name</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter middle name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Last Name</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter last name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Date of Birth (BS)</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter date of birth (BS) YYYY/MM/DD"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Date of Birth (AD)</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter date of birth (AD) YYYY/MM/DD"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Age</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter age"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Blood Group</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter blood group"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Gender</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter gender"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Occupation</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter occupation"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Education</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter education"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Citizenship No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter citizenship no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">
							Citizenship Issued District
						</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter citizenship issued district"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Passport No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter passport no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Passport Issued District</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter passport issued district"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Identity Mark</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter identity mark"
						/>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-semibold mt-12 mb-2">Witness Details</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="flex flex-col my-3">
						<label>First Name</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter first name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Middle Name</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter middle name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Last Name</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter last name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Relationship</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter relationship"
						/>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-semibold mt-12 mb-2">Trainer Details</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="flex flex-col my-3">
						<label>Name</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">License No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter license no."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DemographicDetails;
