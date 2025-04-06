
import { useEffect, useState } from 'react';
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
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }
    const previusSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    useEffect(() => {
        if (isAutoPlay) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [isAutoPlay, , slide]);


    return (
        <div className={carouselTitle != undefined ? 'carousel isTitle' : 'carousel'}>
            {carouselTitle && <h2 className='carousel-title'>{carouselTitle}</h2>}
            <div className="carousel-container">

                {
                    isArrow && <ArrowBackIosIcon className='arrow arrow-left' onClick={previusSlide} />
                }
                {data?.map((item, index) => {
                    return (
                        <img className={slide === index ? "slide" : "slide slide-hidden"} src={item.imageUrl} alt='imagen-carousel' key={`${index}-imageCarousel`} />)
                })
                }
                {
                    isArrow && <ArrowForwardIosIcon className='arrow arrow-right' onClick={nextSlide} />
                }

                {
                    isIndicator && <span className='indicators'>
                        {data?.map((_, index: number) => {
                            return (
                                <button onClick={() => setSlide(index)} className={slide == index ? "indicator" : "indicator indicator-inactive"} key={`indicator-${index}`}></button>
                            )
                        })}
                    </span>
                }

            </div>
        </div>
    )
}

export default Carousel