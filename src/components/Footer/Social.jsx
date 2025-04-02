import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Social(){
    return (
        <div className="flex space-x-4 justify-center p-4 flex-wrap">
            <div className="w-full text-center font-bold">Contact Us:</div>
            <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full  text-black hover:bg-violet-700 transition"
            >
                <FaFacebookF size={18} />
            </a>
            <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full text-black hover:bg-violet-700 transition"
            >
                <FaInstagram size={18} />
            </a>
            <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full text-black hover:bg-violet-800 transition"
            >
                <FaLinkedinIn size={18} />
            </a>
        </div>
    );
}
export default Social;