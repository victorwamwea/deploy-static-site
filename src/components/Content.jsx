import { VscBriefcase } from "react-icons/vsc";
import { HiOutlineIdentification } from "react-icons/hi2";
function Content() {
  return (
    <>
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center text-2xl font-bold text-gray-900 uppercase">
            <HiOutlineIdentification size={24}/>
            Profile
        </h2>
        <hr className="bg-violet-800 h-1.5  w-[32px]"/>
        
        <div className="mt-2">
            <p className="text-lg font-light leading-snug text-gray-900 md:leading-8">
                Experienced product manager with a proven track record in the development and management of products throughout their lifecycle. Passionate, creative, and result-oriented. 
                Skilled in team leadership and collaboration with cross-functional teams. Enthusiastic about designing innovative solutions that enhance customer satisfaction.
            </p>
        </div>
    </section>
    </>
  )
}

export default Content