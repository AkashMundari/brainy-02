/* eslint-disable react/no-unknown-property */
import { useState } from "react";
// import { Quote } from "lucide-react";
import "../App.css";

const VideoReviews = () => {
  const testimonials = [
    {
      author: "Mrs Neeta Gawde",
      embed: "https://www.youtube.com/embed/aWfF68TiErI?si=0u8lzlRhsh6D3ZBD",
    },
    {
      author: "Mrs Satya Gandhi",
      embed: "https://www.youtube.com/embed/lqhJR9RBTHI?si=mHzb9CnIREy5PdLt",
    },
    {
      author: "Mrs Shalini Singh",
      embed: "https://www.youtube.com/embed/1mHRQxv6ILU?si=Eu7MlQqcVMm62esL",
    },
  ];

  const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    const getVisibleTestimonials = () => {
      const visibleItems = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleItems.push(testimonials[index]);
      }
      return visibleItems;
    };

    return (
      <div className="w-full max-w-6xl mx-auto py-8 mt-5 px-4 poppins-light">
        <div className="relative">
          {/* Desktop View (3 cards) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
              >
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src={testimonial.embed}
                    title={`${testimonial.author}'s Review`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h3 className="mt-4 text-center text-lg font-medium">
                  {testimonial.author}
                </h3>
              </div>
            ))}
          </div>

          {/* Mobile View (1 card) */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src={testimonials[currentIndex].embed}
                  title={`${testimonials[currentIndex].author}'s Review`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="mt-4 text-center text-lg font-medium">
                {testimonials[currentIndex].author}
              </h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-800 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <TestimonialSlider />;
};

export default VideoReviews;
