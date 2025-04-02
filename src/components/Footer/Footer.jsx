import Social from "./Social";
function Footer(){
    return (
        <>
            <div className=" w-full bg-purple-300 m-0 p-0 ">
                <Social></Social>
                <div className="inset-x-0 bottom-0 text-center m-2">
                   <span className="font-bold">Email:</span> ticketbazaar.info@gmail.com
                </div>
                <div className="inset-x-0 bottom-0 text-center">
                    © 2025 All rights reserved.
                </div>
            </div>
        </>
    )
}
export default Footer;