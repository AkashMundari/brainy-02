/* eslint-disable react/no-unknown-property */
import "../App.css";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { TbBrandZoom } from "react-icons/tb";
const Introduction = () => {
  return (
    <>
      <style>{`
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .hand-zoom {
          animation: zoomInOut 0.8s infinite ease-in-out;
        }
         .cta-button {
      padding: 15px 30px;
      font-size: 24px;
      font-weight: bold;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      border-radius: 5px;
      background: #ffffff;
      color: #b7ce21;
      animation: backgroundChange 0.8s  infinite;
    }

    @keyframes backgroundChange {
      0%, 100% {
        background: #ffffff;
        color: #b7ce21;
      }
      50% {
        background: #b7ce21;
        color: #ffffff;
      }
    }

    .cta-button:hover {
      animation-duration: 1.5s;
    }
      `}</style>
      <div className="p-5 md:pl-10 md:pr-10 pt-5 ">
        <div id="introduction" className=" md:pl-10 md:pr-10">
          <div className="grid gap-6 md:flex ">
            <div className="introduction-img mt-5 md:mt-0"></div>
            <div className="p-2">
              <p className="mt-2 poppins-light text-lg">
                Is your child focused enough? Are you concerned about their
                <span className="font-bold bg-yellow-200">
                  {" "}
                  academic performance
                </span>
                , math skills, or amount of screen time? You're not by yourself.
                Every parent wants their child grown up with the self-assurance,
                intelligence, and skills necessary to take on the difficulties
                of life.
              </p>
              <p className="mt-4 poppins-light text-lg">
                At{" "}
                <span className="font-bold bg-yellow-200">Brainy Abacus</span>,
                we are aware that the key to long-term success is having a more
                intelligent and keen mind. Through{" "}
                <span className="font-bold bg-yellow-200">brain training</span>,
                we unlock your child’s potential. Our Brainy Abacus program
                enhances mental arithmetic, sharpens cognitive skills,
                strengthens focus, conquers math anxiety, and introduces memory
                techniques alongside Vedic math to give them an academic edge.
              </p>
              <p className="mt-4 poppins-light text-lg">
                Join our{" "}
                <span className="font-bold bg-yellow-200">free webinar</span> to
                learn how early brain training can set your child on the path to
                a brighter future
              </p>
            </div>
          </div>

          <div className="webinar-details bg-[#024978] grid justify-center text-center items-center mt-8 pt-10 pb-10 poppins-medium gap-8 md:flex md:gap-10 md:justify-around ">
            <div className="flex flex-col justify-center items-center">
              <p className="text-white ">
                <SlCalender size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">November 12th</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
              <p>
                <FaRegClock size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">10 am EST</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
              <p>
                <FaMicrophone size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">Duration 1 Hour</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
              <p>
                <TbBrandZoom size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">Platform : Zoom</p>
            </div>
            <div className="mt-5 md:mt-0">
              <button className="cta-button group relative bg-lime-600 text-white px-8 py-4 rounded-sm hover:bg-lime-500 transition-colors duration-300">
                <span className="text-xl font-semibold">
                  CLAIM YOUR SPOT NOW
                </span>
                <div className="hand-zoom absolute -bottom-4 -right-2">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                  >
                    <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <iframe
              width="80%"
              height="300"
              className="md:h-[550px]"
              src="https://www.youtube.com/embed/T_mbKEbLbXQ?si=IYSF6n-m6cHVvk5D"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
