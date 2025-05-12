
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const Section = props => {

    const sectionRef = useRef(null);

    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() =>  {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: "card",
                        start: 'top bottom-=100'
                    }
                })
        })

        gsap.fromTo(sectionRef.current, { opacity: 0 }, {opacity: 1, duration: 1.5 });
    }, [])

    return (
        <section ref={sectionRef} className="app-showcase" id="work">
            <div className="w-full">
                <div className="w-full h-full md:px-20 px-5 py-8">
                    <TitleHeader
                        title="Projects"
                        sub="💼 My Recent Project"
                    />
                </div>
                <div className="showcaselayout">
                    <div className="lg:columns-3 md:columns-2 columns-1 p-10">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb] rounded-2xl">
                                <img src="/images/project2.png" alt="" />
                            </div>
                            <h2 >The Library Management Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb] rounded-2xl">
                                <img src="/images/project3.png" alt="" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>

                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb] rounded-2xl">
                                <img src="/images/project2.png" alt="" />
                            </div>
                            <h2>The Library Management Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb] rounded-2xl">
                                <img src="/images/project3.png" alt="" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb] rounded-2xl">
                                <img src="/images/project3.png" alt="" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb] rounded-2xl">
                                <img src="/images/project3.png" alt="" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section