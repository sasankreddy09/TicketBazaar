import { FaStar } from 'react-icons/fa';
function Rating({rating}){
    return (
        <>
            <div className="right-0 w-full text-lg pl-2 flex rounded-bl-lg rounded-br-lg bg-violet-600 text-white items-center">
            <span><FaStar color="#FFD700"/></span><span className="ml-2 text-l">{rating}</span>
            </div>
        </>
    )
}
export default Rating;