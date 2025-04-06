
import { useEffect, useRef, useState } from 'react';
import '../styles/components/carousel.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Promotion } from '@/models/promotion.model';

type CarouselProps = {
    data: Promotion[],
    carouselTitle?: string,
    isArrow?: boolean,
    isIndicator?: boolean,
    isAutoPlay?: boolean,
    autoPlayInterval?: number
}

const Carousel = ({ data, isArrow = true, isIndicator = true, carouselTitle, isAutoPlay = true, autoPlayInterval = 3500 }: CarouselProps) => {
    const [slide, setSlide] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const nextSlide = () => {
        setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }

    const previousSlide = () => {
        setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const distance = touchStartX.current - touchEndX.current;
        const isSwipe = Math.abs(distance) > 50; // Umbral mínimo

        if (!isSwipe) return;

        if (distance > 0) {
            nextSlide(); // Swipe izquierda
        } else {
            previousSlide(); // Swipe derecha
        }
    };

    useEffect(() => {
        if (isAutoPlay) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [isAutoPlay, slide]);

    return (
        <div className={carouselTitle != undefined ? 'carousel isTitle' : 'carousel'}>
            {carouselTitle && <h2 className='carousel-title'>{carouselTitle}</h2>}
            <div
                className="carousel-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {isArrow && <ArrowBackIosIcon className='arrow arrow-left' onClick={previousSlide} />}
                {data?.map((item, index) => (
                    <img
                        className={slide === index ? "slide" : "slide slide-hidden"}
                        src={item.imageUrl}
                        alt='imagen-carousel'
                        key={`${index}-imageCarousel`}
                    />
                ))}
                {isArrow && <ArrowForwardIosIcon className='arrow arrow-right' onClick={nextSlide} />}
                {isIndicator && (
                    <span className='indicators'>
                        {data?.map((_, index) => (
                            <button
                                onClick={() => setSlide(index)}
                                className={slide === index ? "indicator" : "indicator indicator-inactive"}
                                key={`indicator-${index}`}
                            ></button>
                        ))}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Carousel;