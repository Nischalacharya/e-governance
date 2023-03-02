import park1 from './assets/park1.png';
import park2 from './assets/park2.png';
import park3 from './assets/park3.png';
import park4 from './assets/park4.png';

const questions = [
	{
		titleNepali: 'जेब्रा क्रसिङको उपयोग के हो ?',
		titleEnglish: 'What is the use of zebra crossing ?',
		optionsNepali: [
			{ id: 0, text: 'उभिन', isCorrect: false },
			{ id: 1, text: 'पैदल यात्रीले बाटो काट्न', isCorrect: true },
			{ id: 2, text: 'सवारी साधन रोक्न', isCorrect: false },
			{ id: 3, text: 'सवारी साधन कुदाउँन', isCorrect: false },
		],
		optionsEnglish: [
			{ id: 0, text: 'Stand', isCorrect: false },
			{ id: 1, text: 'For the pedestrians to cross the road', isCorrect: true },
			{ id: 2, text: 'Stop the vehicle', isCorrect: false },
			{ id: 3, text: 'Run the vehicle', isCorrect: false },
		],
	},
	{
		titleNepali: 'बढी उकालोमा सवारी चलाउँदा कुन गियर चलाउनु पर्छ् ?',
		titleEnglish: 'Which gear should we use while going in an inclined path ?',
		optionsNepali: [
			{ id: 0, text: 'एक गियरमा', isCorrect: true },
			{ id: 1, text: 'दई गियरमा', isCorrect: false },
			{ id: 2, text: 'तीन गियरमा', isCorrect: false },
			{ id: 3, text: 'चार गियरमा', isCorrect: false },
		],
		optionsEnglish: [
			{ id: 0, text: 'One gear', isCorrect: true },
			{ id: 1, text: 'Two gear', isCorrect: false },
			{ id: 2, text: 'Three gear', isCorrect: false },
			{ id: 3, text: 'Four gear', isCorrect: false },
		],
	},
	{
		titleNepali: 'ओभरटेक गर्दा कुन साइडबाट गर्नुपर्छ् ?',
		titleEnglish: 'From which side, should we overtake ?',
		optionsNepali: [
			{ id: 0, text: 'बायाँ साइडबाट', isCorrect: false },
			{ id: 1, text: 'दायाँ साइडबाट', isCorrect: true },
			{ id: 2, text: 'दबुै साइडबाट', isCorrect: false },
			{ id: 3, text: 'माथिको सबै', isCorrect: false },
		],
		optionsEnglish: [
			{ id: 0, text: 'Left side', isCorrect: false },
			{ id: 1, text: 'Right side', isCorrect: true },
			{ id: 2, text: 'Both side', isCorrect: false },
			{ id: 3, text: 'All of the above', isCorrect: false },
		],
	},
	{
		titleNepali: 'नेपालमा सडकको कुन छेउमा मानिसले सवारी चलाउँछन् ?',
		titleEnglish:
			'On which side of the road do people drive their vehicle in Nepal ?',
		optionsNepali: [
			{ id: 0, text: 'दायाँ साइडबाट', isCorrect: false },
			{ id: 1, text: 'बायाँ साइडबाट', isCorrect: true },
			{ id: 2, text: 'जुन पक्ष उपलब्ध छ', isCorrect: false },
			{ id: 3, text: 'माथिको कुनै पनि हैन', isCorrect: false },
		],
		optionsEnglish: [
			{ id: 0, text: 'Right side', isCorrect: false },
			{ id: 1, text: 'Left side', isCorrect: true },
			{ id: 2, text: 'Whatever side available', isCorrect: false },
			{ id: 3, text: 'None of the above', isCorrect: false },
		],
	},
	{
		titleNepali: 'नो पार्किङको संकेत के हो ?',
		titleEnglish: 'What is the sign of no parking ?',
		optionsNepali: [
			{ id: 0, text: '', image: park4, isCorrect: false },
			{ id: 1, text: '', image: park2, isCorrect: false },
			{ id: 2, text: '', image: park3, isCorrect: false },
			{ id: 3, text: '', image: park1, isCorrect: true },
		],
		optionsEnglish: [
			{ id: 0, text: '', image: park4, isCorrect: false },
			{ id: 1, text: '', image: park2, isCorrect: false },
			{ id: 2, text: '', image: park3, isCorrect: false },
			{ id: 3, text: '', image: park1, isCorrect: true },
		],
	},
];

export default questions;
