import { useState } from "react";
import { Quote } from "lucide-react";
import "../App.css";

const Reviews = () => {
  const testimonials = [
    {
      quote:
        "Brainy Abacus has boosted my child's confidence in math beyond my expectations!",
      author: "Mrs. Swati",
      link: "https://youtu.be/aWfF68TiErI",
    },
    {
      quote:
        "The Brainy Abacus program has really impacted my child's ability to focus and overall academic performance.",
      author: "Mr. Amit",
    },
    {
      quote:
        "It's a game-changer! This program has really improved the math skills and the self-confidence of my child significantly.",
      author: "Mr. Divyesh",
    },
    {
      quote:
        "The interactive lessons and personalized progress tracking have made learning both fun and effective for my child. Thank you, Brainy Abacus!",
      author: "Mrs. Jyoti",
    },
    {
      quote:
        "Skepticism aside, the results speak for themselves. The Brainy Abacus program built a great math foundation and fueled my child's love for learning.",
      author: "Mrs. Khushbu",
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
      // On desktop, show 3 items
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleItems.push(testimonials[index]);
      }
      return visibleItems;
    };

    return (
      <div
        className="w-full max-w-6xl mx-auto py-8 mt-5 px-4 poppins-light"
        id="reviews"
      >
        <div className="text-2xl text-center font-medium poppins-light-italic">
          “Hear from Parents Who’ve Experienced Remarkable Changes”
        </div>
        <div className="testimony-img w-full mb-4 mt-2"></div>
        <div className="relative">
          {/* Desktop View (3 cards) */}
          <div className="hidden md:flex gap-6 transition-all duration-300 ">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex-1"
              >
                <div className="text-4xl mb-4 text-center ">
                  <Quote size={30} color="#0470b5" />
                </div>
                <p className=" mb-4 ">{testimonial.quote}</p>
                <p className=" italic">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Mobile View (1 card) */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl  mb-4">
                <Quote size={30} color="#0470b5" />
              </div>
              <p className=" mb-4">{testimonials[currentIndex].quote}</p>
              <p className="italic">— {testimonials[currentIndex].author}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
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
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TestimonialSlider />
    </div>
  );
};

export default Reviews;
