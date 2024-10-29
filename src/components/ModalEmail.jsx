import { X } from "lucide-react";

const ModalEmail = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 pt-6 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[90vh] flex flex-col mt-14 ">
        {/* Fixed Header */}
        <div className="flex justify-center items-center relative pt-5">
          <h1 className="text-2xl font-semibold">Contact Us</h1>

          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full absolute right-6"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <p className="text-sm md:text-lg">
          Have any questions? Send us a message.
        </p>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-6 py-4">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value=""
                onChange=""
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address *"
                required
                value=""
                onChange=""
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message *"
                required
                value=""
                onChange=""
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"
              />
            </div>

            <div>
              <input
                type="text"
                name="antispam"
                placeholder="Antispam question: 7 + 5 = ?"
                required
                value=""
                onChange=""
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#024978] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#035c94] transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEmail;
