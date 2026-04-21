import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import hangmanThumbnail from "../../assets/images/thumbnails/hangman_thumbnail.png";
import permutationThumbnail from "../../assets/images/thumbnails/permutation_thumbnail.png";

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
    <div className="flex w-full bg-[#f8fff1] justify-center">
      <div className="max-w-5xl py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-[minmax(280px,1fr)_minmax(280px,1fr)]">
        {/* Left Column -- Text */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lime-950 tracking-tight ">
            Challenge Your Mind.
          </h1>
          <p className="text-lg text-lime-900/80 font-medium py-4">
            Swipe through our latest puzzle games. Whether you love cracking
            codes or guessing words, your next challenge awaits.
          </p>
          <div className="flex justify-center w-full">
            <button className="px-8 py-3 bg-lime-700 text-white font-bold rounded-full shadow-lg hover:bg-lime-800 hover:scale-105 transition-all active:scale-95">
              Play Now
            </button>
          </div>
        </div>

        {/* Right Column -- Carousel */}
        <div className="flex justify-center items-center p-4">
          <div className="relative flex max-w-lg md:w-full aspect-video items-center justify-center bg-gray-300 overflow-hidden">
            {/* Left Arrow Button */}
            <button
              onClick={leftPush} //updates index
              disabled={currentIndex == 0}
              className="absolute left-3 text-lime-900 z-50 bg-white/80 rounded-full shadow-md hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <IoIosArrowBack size={30} />
            </button>

            {/* Thumbnail "Train" */}
            <div
              className="flex w-full transition-all ease-in-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="min-w-full object-cover justify-center">
                <img src={hangmanThumbnail} alt="Hangman Thumbnail" />
              </div>
              <div className="min-w-full object-cover justify-center">
                <img src={permutationThumbnail} alt="Permutation Thumbnail" />
              </div>
              <div className="min-w-full h-full flex flex-col justify-center items-center bg-linear-to-br from-lime-800 to-lime-950 text-white p-6 text-center">
                <h2 className="text-2xl font-bold tracking-widest">
                  COMING SOON
                </h2>
                <p className="text-lime-200 mt-2 text-sm">
                  More games are in development!
                </p>
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={rightPush} //updates index
              disabled={currentIndex == totalSlides - 1}
              className="absolute right-3 text-lime-900 z-50 bg-white/80 rounded-full shadow-md hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <IoIosArrowForward size={30} />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
