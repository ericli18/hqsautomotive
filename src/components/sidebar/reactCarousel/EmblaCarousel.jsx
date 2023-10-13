import './embla.css';
import Carousel from './Carousel.jsx';

const OPTIONS = { containScroll: 'trimSnaps', loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const EmblaCarousel = (props) => {

    return (
        <section className="sandbox__carousel">
            <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
    );
};

export default EmblaCarousel;
