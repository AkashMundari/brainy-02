import {
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">
          For more information or support, feel free to contact us.
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Phone : +91 1234567890</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email : info@brainchildlearning.in</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {/* Email */}
          <a
            href="https://www.linkedin.com/in/BrainyIndia"
            className="bg-[#0b66c3] p-2 rounded-md hover:bg-[#448cd4] transition-colors duration-200"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>

          <a
            href="https://www.youtube.com/c/brainyindia"
            className="bg-red-600 p-2 rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            <Youtube className="h-5 w-5 text-white" />
          </a>

          {/* Twitter */}
          <a
            href="https://www.instagram.com/brainyindia/"
            className=" p-2 rounded-md insta-logo transition-colors duration-200"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/bcl.ind/?fref=ts"
            className="bg-blue-800 p-2 rounded-md hover:bg-blue-900 transition-colors duration-200"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
