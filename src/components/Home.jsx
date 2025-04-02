import { useState, useEffect } from 'react';
import Cards from './Cards';
import '../Shimmer.css';
function Home() {
  const [load, setLoad] = useState(false);
  
  const movies = [
    {
        title: "Mad Square",
        rating: "7.8/10",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNjBkZmI5NWUtOGQxZS00MzgxLThkOGEtZmMwZDY0ZGM2OWUyXkEyXkFqcGc@._V1_.jpg",
        genre: "Comedy | Drama",
        description: "Mad Square is a lighthearted yet profound comedy-drama that follows a group of misfits living in a shared apartment. As they navigate the highs and lows of life, friendship, and love, they realize that sometimes, family is what you make it.",
        language: "English",
        duration: "2h 15m",
        releaseDate: "March 8, 2025"
    },
    {
        title: "RobinHood",
        rating: "8.2/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_blzEItHC6qnsejQZuxu5yVW38OIQ9U5Lw&s",
        genre: "Action | Adventure | Crime",
        description: "RobinHood is a modern-day retelling of the legendary outlaw who steals from the corrupt elite to help the oppressed. Featuring breathtaking action sequences and a thrilling plot, this film redefines the classic hero tale with a fresh twist.",
        language: "English",
        duration: "2h 10m",
        releaseDate: "January 15, 2025"
    },
    {
        title: "Court",
        rating: "7.5/10",
        imageUrl: "https://cdn.gulte.com/wp-content/uploads/2025/03/Court-Trailer.jpeg",
        genre: "Drama",
        description: "Court is a thought-provoking legal drama that delves into the flaws of the justice system. When a folk singer is accused of inciting rebellion, a young lawyer takes on the case, uncovering deeper political and societal issues along the way.",
        language: "Hindi",
        duration: "1h 55m",
        releaseDate: "April 12, 2025"
    },
    {
        title: "Love Your Father",
        rating: "6.9/10",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9AMRJQJK7G3T9tP7A4ClbW1Rp3_x82MbbQ&s",
        genre: "Comedy | Drama",
        description: "This heartwarming comedy-drama follows a father and daughter who have been estranged for years. When an unexpected event forces them to live together, they must confront their past mistakes, rediscover their bond, and learn to love unconditionally.",
        language: "Telugu",
        duration: "2h 5m",
        releaseDate: "February 20, 2025"
    },
    {
        title: "Empuraan",
        rating: "8.7/10",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/L2_-_Empuraan_poster.jpg/250px-L2_-_Empuraan_poster.jpg",
        genre: "Action | Crime | Thriller",
        description: "A gripping sequel to a crime saga, Empuraan follows the rise of a shadowy figure who navigates through the dark underbelly of crime and politics. With high-stakes action and mind-blowing twists, this thriller keeps you on the edge of your seat.",
        language: "Malayalam",
        duration: "2h 30m",
        releaseDate: "December 5, 2024"
    },
    {
        title: "Kalki",
        rating: "7.2/10",
        imageUrl: "https://static.toiimg.com/photo/111302049.cms?imgsize=170782",
        genre: "Crime | Thriller",
        description: "In a lawless town ruled by criminals, an enigmatic police officer named Kalki arrives to restore justice. With his unconventional methods and fearless attitude, he takes on the mafia, leading to an explosive showdown.",
        language: "Telugu",
        duration: "2h 20m",
        releaseDate: "October 18, 2024"
    },
    {
        title: "Sanam Teri Kasam",
        rating: "7.5/10",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYTJmYmI0YWQtYjI3MC00MWU4LWI2OTQtNDYyOGEyNThjZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        genre: "Drama | Romance",
        description: "A heartbreaking tale of love, Sanam Teri Kasam follows the journey of two individuals who find love in the most unexpected circumstances. With an emotional storyline and soul-stirring music, this movie is a must-watch for romance lovers.",
        language: "Hindi",
        duration: "2h 10m",
        releaseDate: "July 29, 2024"
    }
];
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000); 
  }, []);

  return (
    <>
      <div>
        <div className="m-16 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {load ? (
            <Cards cards={movies} />
          ) : (
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
    </>
  );
}

export default Home;
