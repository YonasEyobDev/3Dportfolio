"use client";

import TitleHeader from "../components/TitleHeader.jsx";
import {approaches} from "@/constants/index.js";

const Approach = () => {
    return (
        <section className="w-full padding-x-lg " id="Approach">
            <div className="w-full h-full md:px-20 px-5 py-8">
                <TitleHeader
                    title="Approaches"
                    sub="💼 My Project Approaches"
                />
            </div>
            <div className="mx-auto grid-3-cols">
                {approaches.map(({ imgPath, title, desc }) => (
                    <div key={title} className="card-border rounde-xl p-8 flex flex-col gap-4">
                        <div className="size-14 justify-center flex items-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-lg text-white-50">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Approach;