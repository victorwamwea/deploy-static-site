import { VscBriefcase } from "react-icons/vsc";
import { HiOutlineIdentification } from "react-icons/hi2";
function Content() {
  return (
    <>
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
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 text-2xl font-bold text-gray-900 uppercase">
            <VscBriefcase size={24}/>
            Professional Experience
        </h2>
        <hr className="bg-violet-800 h-1.5 w-[36px]"/>
        <div className="">
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
    </>
  )
}

export default Content