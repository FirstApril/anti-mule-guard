import { useState, useEffect } from 'react';
import bgSlide1 from '@/assets/grandmacriedwithsmile_-1.png';
import bgSlide2 from '@/assets/bg-slide-1.jpg';
import bgSlide3 from '@/assets/bg-slide-1.jpg';

const backgroundImages = [bgSlide1, bgSlide2, bgSlide3];

export const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 200000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
};
