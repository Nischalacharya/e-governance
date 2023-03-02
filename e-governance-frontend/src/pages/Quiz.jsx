import { useEffect, useRef, useState } from 'react';
import questions from '../questions';

function Quiz({ change }) {
	const [showResults, setShowResults] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	let passmarks = Math.floor(0.6 * questions.length);

	let seconds = questions.length * 12;
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
			setShowResults(true);
		}
	}, [countdown]);

	// Helper Functions

	/* A possible answer was clicked */
	const optionClicked = (isCorrect) => {
		// Increment the score
		if (isCorrect) {
			setScore(score + 1);
		}

		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
			setCountdown(0);
		}
	};

	return (
		<div className="text-center">
			{/* 1. Header  */}
			<h1 className="text-3xl py-6">
				{!change
					? 'Vehicle License Written Exam'
					: 'सवारी साधन लाइसेन्स लिखित परीक्षा'}
			</h1>

			{/* 2. Current Score  */}
			<h2 className="py-4 text-2xl">
				{!change ? 'Score: ' : 'अन्क​: '} {score}
				<span className="ml-8">
					{!change ? 'Timer: ' : 'टाइमर:'} {countdown}
				</span>
			</h2>

			{/* 3. Show results or show the question game  */}
			{showResults ? (
				/* 4. Final Results */
				<div className="w-[90%] md:w-[70%] mx-auto h-[280px] lg:[200px] my-16 bg-purple-700 p-4 rounded-md text-white">
					<h1 className="text-2xl">
						{countdown === 0 && (!change ? 'Time up' : 'समय सकियो')}
					</h1>
					<h1 className="text-3xl mt-4">
						{!change ? 'Final Results' : 'अन्तिम परिणाम'}
					</h1>
					<h2 className="text-3xl mt-4">
						{!change
							? `${score} out of ${questions.length} correct - `
							: `${questions.length} मध्ये ${score} सही - `}
						({(score / questions.length) * 100}%)
					</h2>
					<p className="text-3xl mt-4">
						{score >= passmarks
							? !change
								? 'Pass'
								: 'पास'
							: !change
							? 'Fail'
							: 'असफल'}
					</p>
				</div>
			) : (
				/* 5. Question Card  */
				<div className="w-[80%] h-auto mx-auto bg-purple-700 p-4 rounded-2xl mb-8 text-white">
					{/* Current Question  */}
					<h2 className="text-2xl py-3  font-semibold">
						{!change
							? `Question: ${currentQuestion + 1} out of ${questions.length}`
							: `प्रश्न: ${currentQuestion + 1} मध्ये ${questions.length}`}
					</h2>
					<h3 className=" text-2xl font-semibold py-1">
						{!change
							? questions[currentQuestion].titleEnglish
							: questions[currentQuestion].titleNepali}
					</h3>

					{/* List of possible answers  */}
					<ul>
						{!change
							? questions[currentQuestion].optionsEnglish.map((option) => {
									return (
										<li
											className="mt-2 bg-gray-300 p-4 border border-white  text-black text-lg font-semibold"
											key={option.id}
											onClick={() => optionClicked(option.isCorrect)}
										>
											{option.text}
											{option.image && (
												<img
													className="w-[70px] h-[70px] mx-auto"
													src={option.image}
													alt=""
												/>
											)}
										</li>
									);
							  })
							: questions[currentQuestion].optionsNepali.map((option) => {
									return (
										<li
											className="mt-2 bg-gray-300
											text-black  p-4 border border-white text-lg font-semibold"
											key={option.id}
											onClick={() => optionClicked(option.isCorrect)}
										>
											{option.text}
											{option.image && (
												<img
													className="w-[70px] h-[70px] mx-auto"
													src={option.image}
													alt=""
												/>
											)}
										</li>
									);
							  })}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Quiz;
