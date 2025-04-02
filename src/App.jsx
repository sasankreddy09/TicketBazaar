import { useState, useEffect } from 'react';
import Nav from './components/Navbar/Nav';
import Cards from './components/Cards';
import Footer from "./components/Footer/Footer"
import './Shimmer.css';
function App() {
  const [load, setLoad] = useState(false);
  
  const movies = [
    {
      title: "Mad Square",
      rating: "7.8/10",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNjBkZmI5NWUtOGQxZS00MzgxLThkOGEtZmMwZDY0ZGM2OWUyXkEyXkFqcGc@._V1_.jpg",
      genre: "Comedy | Drama",
    },
    {
      title: "RobinHood",
      rating: "8.2/10",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_blzEItHC6qnsejQZuxu5yVW38OIQ9U5Lw&s",
      genre: "Action | Adventure | Crime",
    },
    {
      title: "Court",
      rating: "7.5/10",
      imageUrl: "https://cdn.gulte.com/wp-content/uploads/2025/03/Court-Trailer.jpeg",
      genre: "Drama",
    },
    {
      title: "Love Your Father",
      rating: "6.9/10",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9AMRJQJK7G3T9tP7A4ClbW1Rp3_x82MbbQ&s",
      genre: "Comedy | Drama",
    },
    {
      title: "Empuraan",
      rating: "8.7/10",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/L2_-_Empuraan_poster.jpg/250px-L2_-_Empuraan_poster.jpg",
      genre: "Action | Crime | Thriller",
    },
    {
      title: "Kalki",
      rating: "7.2/10",
      imageUrl: "https://static.toiimg.com/photo/111302049.cms?imgsize=170782",
      genre: "Crime | Thriller",
    },
    {
      title: "Sanam Teri Kasam",
      rating: "7.5/10",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYTJmYmI0YWQtYjI3MC00MWU4LWI2OTQtNDYyOGEyNThjZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: "Drama | Romance",
    },
  ];

  // Simulate loading data (change load state after 3 seconds)
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000); // Simulate loading for 3 seconds
  }, []);

  return (
    <>
      <div>
        <Nav />
        <div className="m-16 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {load ? (
            <Cards cards={movies} />
          ) : (
            // Shimmer Effect (Placeholders)
            <>
              <div className=" rounded-lg mb-5 relative shimmer-card">
              <div className="shimmer w-full h-[76%] bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-4 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-2 bg-gray-300 rounded-md"></div> 
            </div>
            <div className="card-container shimmer-card">
              <div className="shimmer w-full h-72 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-4 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-2 bg-gray-300 rounded-md"></div> 
            </div>
            <div className="card-container shimmer-card">
              <div className="shimmer w-full h-72 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-4 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-2 bg-gray-300 rounded-md"></div> 
            </div>
            <div className="card-container shimmer-card">
              <div className="shimmer w-full h-72 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-4 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-2 bg-gray-300 rounded-md"></div> 
            </div>
            <div className="card-container shimmer-card">
              <div className="shimmer w-full h-72 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-4 bg-gray-300 rounded-md"></div> 
              <div className="shimmer-text w-full h-6 mt-2 bg-gray-300 rounded-md"></div> 
            </div>
            </>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
