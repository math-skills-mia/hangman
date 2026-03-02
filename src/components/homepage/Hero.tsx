import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = 3;

  const leftPush = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const rightPush = () => {
    setCurrentIndex(currentIndex + 1);
  };

  console.log(currentIndex);

  return (
    <div className="flex w-full bg-white justify-center">
      <div className="max-w-2xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Column -- Text */}
        <div className="flex items-center justify-center">
          <h1 className="mx-auto">Start Playing</h1>
        </div>

        {/* Right Column -- Carousel */}
        <div className="flex h-48 aspect-video items-center justify-center bg-gray-300 overflow-hidden">
          {/* Left Arrow Button */}
          <button
            onClick={leftPush} //updates index
            disabled={currentIndex == 0}
            className="text-lime-950 z-50"
          >
            <IoIosArrowBack size={22} />
          </button>

          {/* Thumbnail "Train" */}
          <div
            className={"flex w-full transition-all ease-in-out duration-500"}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="min-w-full bg-red-500">image 1</div>
            <div className="min-w-full bg-blue-500">image 2</div>
            <div className="min-w-full bg-green-500">image 3</div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={rightPush}
            disabled={currentIndex == totalSlides - 1}
            className="text-lime-950 z-50"
          >
            <IoIosArrowForward size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
