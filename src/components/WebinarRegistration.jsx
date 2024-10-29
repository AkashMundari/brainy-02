import "../App.css";
import { User, Phone, Calendar, Mail, MapPin, Building2 } from "lucide-react";
import ModalTerms from "./ModalTerms";
import { useState } from "react";

const WebinarRegistration = () => {
  const [showModalTerms, setShowModalTerms] = useState(false);

  const benefits = [
    {
      title: "Unlock the Secret to Lifelong Success",
      description:
        "Discover the proven process to transform unproductive screen time into a powerful tool for your child's future.",
    },
    {
      title: "Dive into the Science Behind Brainy Abacus",
      description:
        "Learn how our program accelerates brain development and sharpens critical cognitive skills.",
    },
    {
      title: "Why Brain Training Beats Physical Exercise",
      description:
        "Understand why developing your child's mind is just as crucial—if not more—than physical activity for their future success.",
    },
    {
      title: "Strengthen Focus, Memory & Intelligence",
      description:
        "Explore how Brainy Abacus improves focus, memory, intelligence, and key brain functions through mental arithmetic.",
    },
    {
      title: "Live Math Demo",
      description:
        "Watch students solve complex math problems using only their minds—no calculators or pencils!",
    },
    {
      title: "Simplify Learning with Digiphyb!",
      description:
        "See how our unique method breaks down even the most challenging concepts into easy, digestible lessons.",
    },
    {
      title: "Experience AI-Powered Learning",
      description:
        "Get an inside look at our revolutionary AI-powered Abacus app, the world's top tool for advanced brain training.",
    },
    {
      title: "Personalized Learning Path for Every Child",
      description:
        "Discover how Brainy Abacus tailors its curriculum to suit your child’s unique learning pace, ensuring steady progress and a customized experience that builds confidence and mastery.",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add further logic here to handle the form submission
    console.log("Form submitted");
  };

  return (
    <>
      <style>{`
       
    .pulse-button {
      width: 100%;
     
      background-color: #145f91;
      color: white;
      padding: 0.75rem;
      border-radius: 0.375rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      animation: pulse-scale 1.5s ease-in-out infinite;
    }

    .pulse-button:hover {
      background-color: #0470b5;
    }

    @keyframes pulse-scale {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.03); /* Reduced from default scale to limit expansion */
      }
    }
      `}</style>
      <div className="w-full max-w-6xl mx-auto poppins-light mt-10  p-5 rounded-sm">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-2">
            What You'll Gain from the Webinar
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            In just one hour, our free webinar will help you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-xl ">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" p-6 rounded-lg">
          <div className="w-full flex justify-center items-center py-4 ">
            <form
              className="w-full md:w-[500px]  space-y-4 bg-blue-200 rounded-lg shadow-lg p-5"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-2">
                Join the Webinar
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Please fill in the details below to secure your spot in our
                upcoming free webinar.
              </p>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Child's Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Child's Age"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="City/Town"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Area"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="pulse-button w-full bg-[#145f91] text-white py-3 rounded-md font-medium hover:bg-[#0470b5] transition-colors"
                style={{
                  animation: "pulse-scale 0.8s ease-in-out infinite",
                }}
              >
                CLAIM YOUR SPOT NOW
              </button>

              <p className="text-xs text-center text-gray-500">
                By clicking sign up you agree to our{" "}
                <button
                  className="text-[#0470b5]"
                  onClick={() => setShowModalTerms(true)}
                >
                  Terms
                </button>{" "}
                and read our{" "}
                <button
                  className="text-[#0470b5]"
                  onClick={() => setShowModalTerms(true)}
                >
                  Privacy Policy
                </button>
              </p>
              {showModalTerms && (
                <ModalTerms onClose={() => setShowModalTerms(false)} />
              )}
            </form>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center mt-10"
          id="about"
        >
          <h1 className="text-4xl poppins-semibold mb-8 pt-4">
            Inside the Brainy Abacus Program
          </h1>
          <iframe
            width="100%"
            className="md:w-2/3 md:h-[500px]"
            height="335"
            src="https://www.youtube.com/embed/WnvdaZhTNnI?si=LwQuOvGK3fkbZ1ot"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default WebinarRegistration;
