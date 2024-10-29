import { useState, useEffect, useRef } from "react";
import "../App.css";

const AnimatedStats = () => {
  const stats = [
    { value: 5000, label: "Attendees", prefix: "", suffix: "+" },
    { value: 20, label: "Years Of Experience", prefix: "", suffix: "+" },
    { value: 350, label: "Franchises in Gujarat", prefix: "", suffix: "+" },
    { value: 5, label: "Trusted Parents", prefix: "", suffix: "L+" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCounter = (end, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldStart) return;

      let startTime = null;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-6xl mx-auto poppins-light mt-2"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 shadow-sm rounded-sm p-4">
        {stats.map((stat, index) => {
          const count = useCounter(stat.value, 2000, isVisible);
          return (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.prefix}
                {isVisible ? count : 0}
                {stat.suffix}
              </h3>
              <p className="text-md text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedStats;
