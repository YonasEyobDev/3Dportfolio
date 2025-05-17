{/*import Hero from "./sections/Hero.jsx"*/}
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
{/*import ExperienceSection from "./sections/ExperienceSection.jsx";*/}
{/*import Testimonials from "./sections/Testimonials.jsx";*/}
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Card from "./sections/Card.jsx";
import Approaches from "@/sections/Approaches.jsx";
import Experience from "@/sections/Experience.jsx";
import Home from "@/sections/Home.jsx";





const App = () => {
    return (
        <>
            <NavBar />
            <Home />
            {/*<Hero />*/}
            <Card />
            <LogoSection />
            <Approaches />
            <Experience />
            {/*<ExperienceSection />*/}
            {/*<Testimonials />*/}
            <Contact />
            <Footer />
        </>
    )
}

export default App