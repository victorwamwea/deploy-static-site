import { TbWorld } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import image from '../assets/images/john.jpg'
function Header() {
  return (
    <div className="max-w-4xl mx-auto bg-blue-500 ">
        <div className="grid grid-cols-2 px-10 py-6 place-items-center">
            <div className="">
                <img src={image} alt="" className="rounded-full w-[150px] h-[150px] object-cover object-center" />
            </div>
            <div className="">
                <div className="">
                    <h2 className="mb-4 text-4xl font-bold text-white capitalize">
                        john doe
                    </h2>
                    <p className="flex items-center gap-2 text-white ">
                       <span className="">
                       <FaLocationDot  className="text-xl"/>
                       </span>
                       <span className="text-lg">
                       mary hill 11, new york
                       </span>
                    </p>
                   
                    <p className="flex items-center text-white ">
                        <span className="">
                        <TbWorld className="text-xl"/>
                        </span>
                        <span className="text-lg">
                        www.johndoe.com
                        </span>
                    </p>
                    
                    <p className="flex items-center gap-2 text-lg text-white ">
                        <span className="">
                        <TfiEmail className="text-md"/>
                        </span>
                        hello@johndoe.com
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header