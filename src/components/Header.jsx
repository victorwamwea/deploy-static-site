import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
function Header() {
  return (
    <>
    <section className="flex flex-col justify-center gap-6 p-10 mt-1 bg-white rounded-t-sm">
        <div className="">
            <h2 className="text-3xl font-bold text-center md:text-5xl text-violet-800">
                Andrew Sullivan
            </h2>
        </div>
        <div className="flex flex-col gap-4 md:items-center md:justify-center md:flex-row">
            <span className="flex items-center gap-2 text-lg font-light">
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