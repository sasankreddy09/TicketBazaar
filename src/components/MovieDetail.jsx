import { useLocation } from "react-router-dom";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

function MovieDetail() {
    const location = useLocation();
    const movie = location.state;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen p-10">
            <div className="ml-16 mt-8 flex items-start space-x-8 p-4 h-[90%]">
                <div className="w-[16%]">
                    {loading ? (
                        <div className="w-full h-80 bg-gray-300 animate-pulse rounded-lg"></div>
                    ) : (
                        <>
                            <img 
                                src={movie.imageUrl} 
                                alt={movie.title} 
                                className="w-full h-80 object-cover rounded-t-lg shadow-lg"
                            />
                            <div className="bg-black text-white rounded-b-lg p-2 h-8 text-center">
                                In Theaters
                            </div>
                        </>
                    )}
                </div>
                <div className="w-2/3 pt-10 pr-4">
                    {loading ? (
                        <>
                            <div className="h-10 w-3/4 bg-gray-300 animate-pulse rounded"></div>
                            <div className="mt-4 space-y-3">
                                <div className="h-6 w-2/3 bg-gray-300 animate-pulse rounded"></div>
                                <div className="h-6 w-1/2 bg-gray-300 animate-pulse rounded"></div>
                                <div className="h-6 w-1/3 bg-gray-300 animate-pulse rounded"></div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl font-bold text-gray-800">{movie.title}</h1>
                            <div className="mt-4 text-gray-500">
                                <p className="mb-4"><strong>Genre:</strong> {movie.genre}</p>
                                <p className="mb-4"><strong>Release Date:</strong> {movie.releaseDate}</p>
                                <div className="flex items-center space-x-2">
                                    <Clock size={16} className="text-violet-600" />
                                    <span className="text-gray-700 font-medium">{movie.duration}</span>
                                </div>
                            </div>

                            <button 
                                className="mt-6 px-6 py-2 bg-violet-600 text-white font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition"
                            >
                                Book Your Tickets
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="ml-20 m-4 mr-[20%] p-4 rounded-lg ">
                <span className="font-bold text-xl">About The Movie:</span>
                <div className="pt-4">
                    {loading ? (
                        <div className="h-20 w-full bg-gray-300 animate-pulse "></div>
                    ) : (
                        <p>{movie.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
