"use client";

import {projects} from "../constants/index.js";
import {PinContainer} from "@/components/ui/Pin.js";
import TitleHeader from "@/components/TitleHeader.jsx";


const Card = () => {
    return (
        <section className="py-20" id="work">
            <div className="absolute top-0 left-0 z-10 ">
                <img src="/images/bg.png" alt="background" />
            </div>
            <div className="w-full h-full md:px-20 px-5 pt-5">
                <TitleHeader
                    title="Projects"
                    sub="💼 My Recent Project"
                />
            </div>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title="Aceternity"
                            href="https://twitter.com/mannupaaji"
                        >
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            {/*<img src={icon} alt="icon5" className="p-2"/>*/}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Card;
