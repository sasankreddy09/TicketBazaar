import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import { FcGoogle} from "react-icons/fc";
import {FaFacebook } from "react-icons/fa"
function Nav() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex sticky z-[999] justify-between items-center bg-violet-600 inset-x-0 top-0 h-16 px-6">
        <h1 className="text-white text-xl font-bold">
          <Link to="/">Ticket<span className="text-violet-900 text-xll">B</span>azaar</Link>
        </h1>
        <div className="flex items-center bg-white border border-gray-400 rounded-lg px-3 py-1 w-1/3 hover:border-violet-800 focus-within:border-blue-500 transition">
          <input 
            type="text" 
            placeholder="Search for movies..." 
            className="w-full outline-none bg-transparent px-2 py-1"
          />
          <button className="text-violet-600 font-semibold">🔍</button>
        </div>
        <div>
          <button className="bg-white text-violet-600 px-4 py-2 m-2 rounded-lg hover:bg-gray-200 transition">
            <Link to="/About">About Us</Link>
          </button>
          <button 
            onClick={() => setShowModal(true)} 
            className="bg-white text-violet-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Sign In
          </button>
        </div>
      </div>
      {showModal && (
        <div 
          className="fixed z-[700] inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-100"
          onClick={() => setShowModal(false)} 
        >
          <div 
            className="bg-white p-8 rounded-lg w-[30%] flex-column items-center shadow-lg transform transition-transform duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
          <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-violet-500 hover:text-violet-700">
          <X size={24} />
          </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            <div className="w-full flex flex-col text-center">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-[90%] m-2 px-4 py-2 border-2 border-purple-300 focus:border-violet-600 outline-none rounded"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-[90%] m-2 px-4 py-2 border-2 border-purple-300 focus:border-violet-600 outline-none rounded"
            />
            <button className="w-[90%] h-10 m-2 px-4 py-2 border-2  hover:border-purple-300 focus:border-violet-600 outline-none rounded flex items-center justify-center gap-2">
            <FcGoogle size={18} />Google
            </button>
            <button className="w-[90%] h-10 m-2 px-4 py-2 border-2  hover:border-purple-300 focus:border-violet-600 outline-none flex items-center justify-center gap-2 rounded">
            <FaFacebook size={18} />  Facebook
            </button>
            <button className="w-[90%] bg-violet-600 text-white m-2 py-2 rounded-lg hover:bg-violet-700 ">
              Login
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
