import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
function Header() {
  return (
    <>
    <section className="flex flex-col justify-center gap-6 px-10 py-6 bg-white rounded-t-sm md:mt-1 md:py-2">
        <div className="">
            <h2 className="text-3xl font-bold text-center md:text-5xl text-violet-800">
                Andrew Doe
            </h2>
        </div>
        <div className="flex flex-col justify-center w-full gap-4 mx-10 md:mx-0 md:items-center md:flex-row">
            <span className="flex items-center gap-2 text-lg font-light ">
                <IoLocationSharp className="text-xl text-violet-800"/>
                4 Noel, London, England
            </span>
            <span className="flex items-center gap-2 text-lg font-light">
                <IoIosMail className="text-xl text-violet-800 "/>
                andrew@sulli.com
            </span>
            <span className="flex items-center gap-2 font-light text-md">
                <MdCall className="text-xl text-violet-800"/>
                +01 123 456 789
            </span>
        </div>
    </section>
    </>
  )
}

export default Header