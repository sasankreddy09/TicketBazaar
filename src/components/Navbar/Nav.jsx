function Nav() {
    return (
      <>
        <div className="flex sticky z-[999] justify-between items-center bg-violet-600 inset-x-0 top-0 h-16 px-6">
          <h1 className="text-white text-xl font-bold">Ticket<span className="text-violet-900 text-xll">B</span>azaar</h1>
          <div className="flex items-center bg-white border border-gray-400 rounded-lg px-3 py-1 w-1/3 hover:border-violet-800 focus-within:border-blue-500 transition">
            <input 
              type="text" 
              placeholder="Search for the movies..." 
              className="w-full outline-none bg-transparent px-2 py-1"
            />
            <button className="text-violet-600 font-semibold">🔍</button>
          </div>
          <div>
            <button className="bg-white text-violet-600 px-4 py-2 m-2 rounded-lg hover:bg-gray-200 transition">
              Sign In
            </button>
            <button className="bg-white text-violet-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        </div>
      </>
    );
  }
  
export default Nav;
