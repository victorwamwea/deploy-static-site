import { GiGraduateCap } from "react-icons/gi";
function Content() {
  return (
    <div className='max-w-4xl px-10 py-6 mx-auto bg-white'>
        <div className="mb-6">
            <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
                profile
            </h2>
            <div className="">
            <p className="text-lg font-light leading-8 text-gray-700">
            Driven and enthusiastic Web Developer with a strong  passion for creating exceptional web experiences. Experienced in manual testing, test automation, tracking, tools, and A/B testing.
            Quick leaners, team player, and effective communicator. Proficient in Continous Delivery toools. Familiar with Python and Django.
        </p>
            </div>
        </div>
        <div className="">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
        professional experience
    </h2>
    <div className="grid grid-cols-2 gap-6 mb-6 place-items-center">
        <div className="">
            <p className="">
                March 2019 - Present <br />
                Mountain View, California
            </p>
        </div>
        <div className="">
            <p className="text-lg font-light leading-snug text-gray-700">
                Accomplished Web Developer with a passion for crafting high-quality web applications. Demonstrated expertise in manual and automated testing, tracking and analytics tools, and A/B testing methodologies. Recognized for quick learning, effective teamwork, and clear communication. Highly proficient in Continuous Delivery tools and experienced with Python and Django.
            </p>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-6 place-items-center">
        <div className="">
            <p className="">
                May 2018 - Feb 2019 <br />
                Mary Hill, New York
            </p>
        </div>
        <div className="">
            <p className="text-lg font-light leading-snug text-gray-700">
                Spearheaded the development of a high-traffic web application that boosted user engagement by 25%. Led a team of developers in implementing innovative A/B testing strategies, resulting in a 20% increase in conversion rates. Streamlined the deployment process by integrating Continuous Delivery tools, significantly reducing deployment time. Adept in using Python and Django to develop robust back-end solutions.
            </p>
        </div>
    </div>
        </div>
        <div className="">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
    <GiGraduateCap /> education
    </h2>
    <div className="grid grid-cols-2 gap-6 mb-6 place-items-center">
        <div className="">
                <p className="text-xl font-light font-gray-700">
                    2014 September -
                2018 June
                </p> 
            </div>
            <div className="">
                <p className="text-lg font-medium text-gray-700">
                    Bachelor of Science in Computer Science,
                    San Francisco Bay University
                </p>
            </div>
    </div>
    <div className="">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
        skills
    </h2>
    </div>
    <div className="">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
        certificate block
    </h2>
    <div className="grid grid-cols-3 gap-4">
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
    </div>
    </div>
        </div>

    </div>
  )
}

export default Content