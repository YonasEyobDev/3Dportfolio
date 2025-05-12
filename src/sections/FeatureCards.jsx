import {abilities} from "../constants/index.js";
import TitleHeader from "../components/TitleHeader.jsx";

const FeatureCards = () => {
    return (
        <section className="w-full padding-x-lg ">
            <div className="w-full h-full md:px-20 px-5 py-8">
                <TitleHeader
                    title="Approaches"
                    sub="💼 My Project Approaches"
                />
            </div>
                <div className="mx-auto grid-3-cols">
                    {abilities.map(({ imgPath, title, desc }) => (
                    <div key={title} className="card-border rounde-xl p-8 flex flex-col gap-4">
                        <div className="size-14 justify-center flex items-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-lg text-ehite-50">{desc}</p>
                    </div>
                    ))}
                </div>

        </section>
    )
}

export default FeatureCards;