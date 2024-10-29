import "../App.css";

const AboutAuthor = () => {
  return (
    <>
      <>
        <div
          className="max-w-6xl mx-auto px-4 pb-12 pt-20 poppins-light "
          id="host"
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              About The Host
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Expert who will be conducting this webinar
            </p>
          </div>

          {/* Host Info Container */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 ">
            {/* Image Container */}
            <div className="author w-full md:w-1/3"></div>

            {/* Content Container */}
            <div className="w-full md:w-2/3">
              {/* Name and Title */}

              <div className="mt-5 md:mt-16">
                <ul className="list-disc list-outside pl-5 sm:pl-6 text-gray-800 text-xl space-y-3">
                  <li>
                    <span className="font-bold bg-yellow-200">
                      20+years of experience
                    </span>{" "}
                    in brain development and mental arithmetic
                  </li>
                  <li>
                    Experts educators specializing in{" "}
                    <span className="font-bold bg-yellow-200">
                      {" "}
                      abacus training
                    </span>{" "}
                    and
                    <span className="font-bold bg-yellow-200">
                      {" "}
                      cognitive skills
                    </span>
                  </li>
                  <li>
                    Proven track record in{" "}
                    <span className="font-bold bg-yellow-200">enhancing</span>{" "}
                    children's learning and
                    <span className="font-bold bg-yellow-200">
                      {" "}
                      academic performance
                    </span>
                  </li>
                  <li>
                    Focused on innovative,{" "}
                    <span className="font-bold bg-yellow-200">fun</span>, and{" "}
                    <span className="font-bold bg-yellow-200">engaging</span>{" "}
                    teaching methods
                  </li>
                  <li>
                    Hosts vary by center but all bring{" "}
                    <span className="font-bold bg-yellow-200">
                      extensive knowledge
                    </span>{" "}
                    and dedication
                  </li>
                  <li>
                    Committed to{" "}
                    <span className="font-bold bg-yellow-200">
                      helping children
                    </span>{" "}
                    unlock their{" "}
                    <span className="font-bold bg-yellow-200">
                      full potential
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutAuthor;
