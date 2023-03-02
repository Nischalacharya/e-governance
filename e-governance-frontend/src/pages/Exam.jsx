import { useEffect, useRef, useState } from 'react';
import questions from '../questions';

function Exam({ change }) {
	const [formData, setFormData] = useState([]);
	const [data, setData] = useState('');
	const [disable, setDisable] = useState(false);

	let seconds = questions.length * 15;
	const [countdown, setCountdown] = useState(seconds);

	const timerId = useRef();
	useEffect(() => {
		timerId.current = setInterval(() => {
			setCountdown((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(timerId.current);
	}, []);

	useEffect(() => {
		if (countdown <= 0) {
			clearInterval(timerId.current);
			alert('Time end');
			checkAnswer();
			alert(`${marks > passmarks ? 'Pass' : 'Fail'}`);
		}
	}, [countdown]);

	const handleChange = (e) => {
		const target = e.target;
		const value = target.value;

		setFormData([...formData, value]);
		setData(data);
		console.log(data);
	};

	let marks = 0;
	let passmarks = Math.floor(0.6 * questions.length);
	const checkAnswer = () => {
		for (let i = 0; i < questions.length; i++) {
			for (let j = 0; j < formData.length; j++) {
				if (
					questions[i].answerNepali === formData[j] ||
					questions[i].answerEnglish === formData[j]
				) {
					marks += 1;
				}
			}
		}
	};

	const showResult = () => {
		checkAnswer();
		alert(`${marks > passmarks ? 'Pass' : 'Fail'}`);
		setCountdown(0);
	};

	return (
		<section className="w-full text-center lg:text-left lg:w-[1000px] mx-auto py-6">
			<h1 className="text-center text-3xl font-semibold mb-10 ">
				{!change
					? 'Vehicle License Written Exam'
					: 'सवारी साधन लाइसेन्स लिखित परीक्षा'}
				<span className="ml-8">
					{!change ? 'Timer: ' : 'टाइमर:'} {countdown}
				</span>
			</h1>
			{questions.map((question) => (
				<div key={question._id} className="text-lg block mb-12">
					<h2 className="text-lg">
						{!change ? question.titleEnglish : question.titleNepali}
					</h2>
					<div className="mt-4">
						<div className="flex justify-center lg:justify-start items-center mb-4 flex-wrap">
							{!change
								? question.answersEnglish.map((item, index) => (
										<div key={index} className="flex items-center mr-10">
											<input
												type="radio"
												value={item}
												name={question._id}
												className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												onChange={handleChange}
												disabled={countdown === 0 ? true : false}
											/>
											<label className="ml-2 text-base font-medium text-black">
												{item}
											</label>
										</div>
								  ))
								: question.answersNepali.map((item, index) => (
										<div key={index} className="flex items-center mr-10">
											<input
												type="radio"
												value={item}
												name={question._id}
												className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												onChange={handleChange}
												disabled={countdown === 0 ? true : false}
											/>
											<label className="ml-2 text-base font-medium text-black">
												{item}
											</label>
										</div>
								  ))}
						</div>
					</div>
				</div>
			))}

			<button
				className="bg-purple-700 px-4 py-1 text-white rounded-sm"
				onClick={showResult}
			>
				{!change ? 'Submit' : 'पेश गर्नुहोस्'}
			</button>
		</section>
	);
}

export default Exam;
