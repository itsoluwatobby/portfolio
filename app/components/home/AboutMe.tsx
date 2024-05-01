import { watchWords } from "@/utils/navContent";
import { Summary } from "./Summary"


type AboutMeProps = {
  theme: Theme
}
export const AboutMe = ({ theme }: AboutMeProps) => {

  const About = {
    about1: " Hello World!, I'm Oluwatobi Akinola Samuel, a software engineer who oves turning complex problems into elegant solutions. I have gained extensive knowledge and skills in various programming languages and frameworks, including Javascript, Typescript, Node.js, React.js, bash scripting, Nest.js, Python, Next.js and C",
    about2: "I'm here to to make good softwares and also improve on myself while at that. If you need a developer with a good work ethic, I would be an excellent candidate for your team. Thank you for been here and I look forward to hearing from you."
  }

  const bodyContent = About.about1.split(/[\s,]+/).map((word, index) => {
    const specificWords = watchWords.includes(word.toLowerCase()) ? word + ',' : null;
    const otherWords = watchWords.includes(word.toLowerCase()) ? word + ',' : word;
    return (
      <span key={index} className={`${specificWords ? 'bg-gray-600 bg-opacity-50 rounded-sm text-yellow-500 px-1' : ''} w-fit`}>{otherWords}</span>
    )
  })


  return (
    <div id='about' className={`${theme === 'light' ? 'text-black' : 'text-[#ababab]'} transition-colors`}>
      <div className="p-2.5">
        <div className="flex flex-col gap-y-6">
          <div className="about_me flex-none w-[60%] midscreen:flex-auto flex flex-col gap-3 midscreen:w-full midscreen:text-sm">
            <h1 className="text-6xl font-[600]"><span>About Me</span></h1>
            <p className="flex flex-wrap w-full gap-x-1.5">
              {/* {bodyContent} */}
              <span>{About.about1}</span>
            </p>
            <p className="break-words break-keep flex flex-col text-justify">
              <span>{About.about2}</span>
            </p>
          </div>
          
          <Summary />
        
        </div>
      </div>
    </div>
  )
}