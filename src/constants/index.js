const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Approach",
        link: "#approach",
    },
    {/*
        name: "Testimonials",
        link: "#testimonials",
    */},
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 65, suffix: "+", label: "Years of Experience" },
    { value: 54, suffix: "+", label: "Satisfied Clients" },
    { value: 50, suffix: "+", label: "Completed projects" },
    { value: 98, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const approaches = [
    {
        imgPath: "/images/seo.png",
        title: "Planning & Strategy",
        desc: "We'll collaborate to map out your website's goals, target audience, \n" +
            "          and key functionalities. We'll discuss things like site structure, \n" +
            "          navigation, and content requirements.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Development & Progress Update",
        desc: "Once we agree on the plan, I cue my lofi playlist and dive into\n" +
            "          coding. From initial sketches to polished code, I keep you updated\n" +
            "          every step of the way.",
    },
    {
        imgPath: "/images/time.png",
        title: "Development & Launch",
        desc: "This is where the magic happens! Based on the approved design, \n" +
            "          I'll translate everything into functional code, building your website\n" +
            "          from the ground up.",
    },
];

const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/images/project1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "/ui.earth.com",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/images/project2.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "/ui.yoom.com",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/images/project3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/images/project2.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "/ui.apple.com",
    },
    {
        id: 5,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/images/project3.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "/ui.apple.com",
    },
    {
        id: 6,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/images/project1.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "/ui.apple.com",
    },
    ];

const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/images/expp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/images/expp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/images/expp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/images/expp4.svg",
    },
];

const expCards = [
    {
        review: "Ninja brought creativity and technical expertise to the team, playing a crucial role in significantly improving our frontend performance. His contributions were invaluable in delivering faster, more efficient user experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for the Hostinger website, ensuring an intuitive and engaging interface",
            "Collaborated with UI/UX designers to create seamless and user-friendly experiences across the platform.",
            "Optimized web applications for improved speed, scalability, and overall performance",
        ],
    },
    {
        review: "Ninja contributions to Docker's web applications have been exceptional. He approaches challenges with a problem-solving mindset and consistently delivers high-quality results.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "Led the development of Docker's web applications, with a strong focus on scalability and performance",
            "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
            "Contributed to open-source projects that were used with the Docker ecosystem.",
        ],
    },
    {
        review: "Ninja work on Appwrite’s mobile app brought exceptional quality and efficiency. He delivered solutions that significantly enhanced our mobile experience and helped us meet our product goals.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "React Native Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
            "Improved app performance and user experience through code optimization and testing.",
            "Coordinated with the product team to implement features based on feedback.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/yonas_web_dev/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.instagram.com/yonas_web_dev/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.instagram.com/yonas_web_dev/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.instagram.com/yonas_web_dev/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    projects,
    approaches,
    logoIconsList,
    counterItems,
    workExperience,
    expCards,
    expLogos,
    socialImgs,
    navLinks,
};
