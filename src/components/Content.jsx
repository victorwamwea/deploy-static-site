import { VscBriefcase } from "react-icons/vsc";
import { HiOutlineIdentification } from "react-icons/hi2";
import { GiGraduateCap } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
function Content() {
  return (
    <>
    {/* Profile Section */}
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 text-2xl font-bold text-gray-900 uppercase">
            <HiOutlineIdentification size={24}/>
            Profile
        </h2>
        <hr className="bg-violet-800 h-1.5  w-[36px]"/>
        
        <div className="mt-2">
            <p className="text-lg font-light leading-snug text-gray-900 md:leading-8">
                Experienced product manager with a proven track record in the development and management of products throughout their lifecycle. Passionate, creative, and result-oriented. 
                Skilled in team leadership and collaboration with cross-functional teams. Enthusiastic about designing innovative solutions that enhance customer satisfaction.
            </p>
        </div>
    </section>
    {/* Professional Experience section */}
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 text-2xl font-bold text-gray-900 uppercase">
            <VscBriefcase size={24}/>
            Professional Experience
        </h2>
        <hr className="bg-violet-800 h-1.5 w-[36px]"/>
        <div className="mt-2">
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h2 className="mb-1 text-2xl font-medium text-gray-800">Solutions Inc</h2>
                        <p className="mb-2 text-xl italic font-light text-gray-900">
                            Product Specialist
                        </p>
                    </div>
                    <div className="my-3">
                        <p className="italic font-light text-gray-800 text-md">
                            <span className="text-violet-800">
                                08/2018 - 07/2023
                            </span> <br/>
                            Munich, Germany
                        </p>
                    </div>
                </div>
                <ul className="ml-4 list-disc marker:text-violet-500">
                    <li className="text-lg font-light text-gray-900">Developed and implemented a product strategy for the European market, resulting in a 25% revenue growth</li>
                    <li className="mb-2 text-lg font-light text-gray-900">Conducted training sessions and presentations for customers and sales teams to enhance product knowledge</li>
                </ul>
            </div>
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h2 className="mb-1 text-2xl font-medium text-gray-800">Technite Solutions</h2>
                        <p className="mb-2 text-xl italic font-light text-gray-900">
                            Product Manager
                        </p>
                    </div>
                    <div className="my-3">
                        <p className="italic font-light text-gray-800 text-md">
                            <span className="text-violet-800">
                                04/2015 - 07/2018
                            </span> <br/>
                            Berlin, Germany
                        </p>
                    </div>
                </div>
                <ul className="ml-4 list-disc marker:text-violet-500">
                    <li className="text-lg font-light text-gray-900">Led a cross-functional team of 10 people in the development of a new product line, resulting in a 20% increase in revenue</li>
                    <li className="text-lg font-light text-gray-900">Conducted market analysis and competitive studies to identify new product opportunities and expand the product portfolio</li>
                </ul>
            </div>
        </div>
    </section>
    {/* Education Section  */}
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 text-2xl font-bold text-gray-900 uppercase">
            <GiGraduateCap size={26}/>
            Education
        </h2>
        <hr className="bg-violet-800 h-1.5 w-[36px]"/>
        <div className="mt-2">
            <div className="flex flex-col-reverse mb-4 md:justify-between">
                <div className="">
                    <h2 className="mb-1 font-medium text-gray-800 md:text-lg text-md">
                        Master of Business Administration (MBA)<br/>
                    </h2>
                    <p className="italic font-light text-gray-900 ">
                        Munich University
                    </p>
                </div>
                <p className="italic font-light text-gray-800 text-md">
                    <span className="text-violet-800">
                        08/2013 - 07/2015 <br/>
                    </span>
                    Munich, Germany
                </p>
            </div>
            <div className="flex justify-between">
                <div className="">
                    <h2 className="mb-1 text-lg font-medium text-gray-800">
                        Bachelor of Engineering in Information Technology<br/>
                    </h2>
                    <p className="italic font-light text-gray-900 text-md">
                        Technical University
                    </p>
                </div>
                <p className="italic font-light text-gray-800 text-md">
                    <span className="text-violet-800">
                        08/2009 - 07/2013<br/>
                    </span>
                    Vienna, Austria
                </p>
            </div>
        </div>
    </section>
    {/* Skills Section  */}
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 font-bold text-gray-900 uppercase text-md lg:text-2xl ">
            <FaGears className="text-md md:text-2xl" />
            Skills
        </h2>
        <hr className="bg-violet-800 h-1.5 mt-1 w-[30px] md:w-[36px]"/>
        <ul className="grid gap-2 list-disc list-inside lg:grid-cols-2 marker:text-violet-500">
            <li className="p-2 text-xs font-light border-2 rounded-lg md:text-md border-violet-50 text-slate-900">
                Product development and strategy
            </li>
            <li className="p-2 text-xs font-light border-2 rounded-lg md:text-md border-violet-50 text-slate-900">
                Project management and team leadership
            </li>
            <li className="p-2 text-xs font-light border-2 rounded-lg md:text-md border-violet-50 text-slate-900">
                Customer needs analysis and market research
            </li>
            <li className="p-2 text-xs font-light border-2 rounded-lg md:text-md border-violet-50 text-slate-900">
                Data analysis
            </li>
            <li className="p-2 text-xs font-light border-2 rounded-lg md:text-md border-violet-50 text-slate-900">
                Financial modeling and budgeting
            </li>
            <li className="p-2 text-xs font-light border-2 rounded-lg md:text-md border-violet-50 text-slate-900">
                Stakeholder management
            </li>
        </ul>            
    </section>
    </>
  )
}

export default Content