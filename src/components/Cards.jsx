import Genre from "./Genre";
import Rating from "./Rating";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
function Cards({ cards }) {
    const navigate = useNavigate();
    return (
        <>            
        {cards.map((card, index) => (
                <div key={index} onClick={() => navigate(`/movie/${card.title}`, { state: card })} className="hover:cursor-pointer w-56 h-102 rounded-lg mb-5 relative">
                    <img className="h-[76%] w-full object-cover rounded-t-lg" src={card.imageUrl} alt={card.title} />
                    <Rating className="absolute top-2 right-2 p-2" rating={card.rating} />
                    <Text className="mt-8" title={card.title}></Text>
                    <Genre genre={card.genre}></Genre>
                </div>
            ))}
            </>
    );
}

export default Cards;
