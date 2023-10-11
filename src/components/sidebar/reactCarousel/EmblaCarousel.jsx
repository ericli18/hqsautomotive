import './embla.css';
import Carousel from './Carousel.jsx';

const OPTIONS = { containScroll: 'trimSnaps' };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const EmblaCarousel = (props) => {

    return (
        <section className="sandbox__carousel">
            <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
    );
};

export default EmblaCarousel;
