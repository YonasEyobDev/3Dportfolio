
import {TextGenerateEffect} from "@/components/ui/TextGenerate.js";
import MagicButton from "@/components/ui/MagicButton.js";
import {FaLocationArrow} from "react-icons/fa";



const Hero = () => {
  return (
    <div className="git pt-36">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-white-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-[6px] md:text-lg lg:text-2xl sm:text-[15px]">
            I’m an aspiring developer with a strong interest in
            technology, design, and continuous learning.
            I’m focused on building thoughtful,
            result-driven projects and aiming to grow through
            opportunities like internships and collaborative work.
          </p>

          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
