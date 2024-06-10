import { VscBriefcase } from "react-icons/vsc";
function Content() {
  return (
    <>
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center text-2xl font-bold text-gray-900 uppercase">
            <VscBriefcase  size={28}/>
            Profile
        </h2>
        <hr className="bg-violet-800 h-1.5 mt-1 w-[38px]"/>
        
        <div className="">
            <p className="text-lg font-light leading-8 text-gray-900">
                Experienced product manager with a proven track record in the development and management of products throughout their lifecycle. Passionate, creative, and result-oriented. 
                Skilled in team leadership and collaboration with cross-functional teams. Enthusiastic about designing innovative solutions that enhance customer satisfaction.
            </p>
        </div>
    </section>
    </>
  )
}

export default Content