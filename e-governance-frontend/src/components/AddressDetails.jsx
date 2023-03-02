import React from 'react';

function AddressDetails() {
	return (
		<div>
			<h1 className="text-center text-3xl font-bold mt-16 mb-4 uppercase">
				Address Details
			</h1>
			<div>
				<h2 className="text-2xl font-semibold mt-6 mb-2">Permanent Address</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="flex flex-col my-3">
						<label>Zone</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter zone"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">District</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter district name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Village</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter village"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Ward No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter ward no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Tole</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter tole"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Block No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter block no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Mobile No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter mobile no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Office Contact No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter office contact no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Contact No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter contact no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Email Address</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter email address"
						/>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-semibold mt-6 mb-2">Present Address</h2>
				<div class="flex items-center mb-4">
					<input
						id="default-checkbox"
						type="checkbox"
						value=""
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						for="default-checkbox"
						class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>
						Same as permanent address
					</label>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="flex flex-col my-3">
						<label>Zone</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter zone"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">District</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter district name"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Village</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter village"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Ward No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter ward no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Tole</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter tole"
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Block No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter block no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Mobile No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter mobile no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Office Contact No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter office contact no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label>Contact No.</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px]"
							placeholder="Enter contact no."
						/>
					</div>
					<div className="flex flex-col my-3">
						<label className="lg:ml-[6.3rem]">Email Address</label>
						<input
							type="text"
							className="border border-gray-300 mt-2 rounded-md px-4 py-2 w-[400px] self-end"
							placeholder="Enter email address"
						/>
					</div>
					<div></div>
					<div className="flex flex-col mt-3 mb-8">
						<button className="bg-purple-600 py-2 px-8 rounded-sm text-white self-end">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddressDetails;
