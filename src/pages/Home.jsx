import Carousel from '../components/shared/Carousel';
import Carousel1 from '../assets/slide1.jfif';
import Carousel2 from '../assets/slide2.jfif';
import Carousel3 from '../assets/slide3.jpg';

function Home() {
	const slides = [Carousel1, Carousel2, Carousel3];

	return <Carousel slides={slides} />;
}

export default Home;
