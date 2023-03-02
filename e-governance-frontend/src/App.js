import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import License from './pages/License';
import Home from './pages/Home';
import Exam from './pages/Exam';
import Quiz from './pages/Quiz';

function App() {
	const [change, setChange] = useState(true);
	const handleChange = () => setChange(!change);

	return (
		<>
			<Header change={change} />
			<Navbar change={change} handleChange={handleChange} />
			<Routes>
			<Route path="/" element={<Home change={change} />} />
				<Route path="/license" element={<License change={change} />} />
				<Route path="/exam" element={<Exam change={change} />} />
				<Route path="quiz" element={<Quiz change={change} />} />

			</Routes>

			<Footer change={change} />
		</>
	);
}

export default App;
