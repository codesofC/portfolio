import { LuShoppingBag } from "react-icons/lu";
import { FaTaxi } from "react-icons/fa";
import { TbWorldStar } from "react-icons/tb";
import { SiStackshare } from "react-icons/si";


export const skills = [
    {
        name: "HTML",
        url: "/assets/html.png"
    },
    {
        name: 'Css',
        url: "/assets/css.png"
    },
    {
        name:"Javascript",
        url: "/assets/JavaScript-logo.png"
    },
    {
        name: "Java",
        url: "/assets/java-logo.png"
    },
    {
        name: "Sass",
        url: "/assets/sass.png"
    },
    {
        name: "React",
        url: "/assets/React-icon.png"
    },
    {
        name: "ViteJs",
        url: "/assets/vite-logo.png"
    },
    {
        name: "Bootstrap",
        url: "/assets/bootstrap-logo.png"
    },
    {
        name: "Git",
        url: "/assets/git.png"
    }
]

export const projects = [
    {
        id: 1,
        title: "Supermarket",
        demoUrl: "https://super-market-341q.vercel.app",
        repoUrl: "https://github.com/codesofC/superMarket",
        imgUrl: "/assets/project-1.png",
        stacks: [
            "React",
            "NextJs",
            "Firebase",
            "Redux",
            "Tailwind CSS"
        ],
        icon: <LuShoppingBag />,
        description: "Responsive supermarket e-commerce platform with authentication, API use and home delivery service."

    },
    {
        id: 2,
        title: "My Taxi",
        demoUrl: "https://meu-taxi.vercel.app/",
        repoUrl: "https://github.com/codesofC/meuTaxi",
        imgUrl: "/assets/project-0.png",
        stacks: [
            "TypeScript",
            "NextJs",
            "Tailwind CSS",
            "React",
            "MapBox API"
        ],
        icon: <FaTaxi />,
        description: "MyTaxi, a dynamic and user-friendly mobility platform, offers seamless taxi like Uber."
    },
    {
        id: 3,
        title: "Metaverse World",
        demoUrl: "https://metaverse-lime-nine.vercel.app",
        repoUrl: "https://github.com/codesofC/metaverse",
        imgUrl: "/assets/project-2.png",
        stacks: [
            "React",
            "NextJs",
            "Tailwind CSS",
            "Framer motion",
        ],
        icon: <TbWorldStar />,
        description: "Beautiful responsive and animate landing page maked with Next Js and Framer motion."
    },
    {
        id: 4,
        title: "ShareIt",
        demoUrl: "https://shareit-silk.vercel.app",
        repoUrl: "https://github.com/codesofC/shareit",
        imgUrl: "/assets/project-4.png",
        stacks: [
            "React",
            "NextJs",
            "NextAuth",
            "Typescript",
            "Tailwind CSS",
            "Firebase"
        ],
        icon: <SiStackshare />,
        description: "Visit to see more of my projects! It is a responsive platform for sharing projects and others."
    },
]

export const works = [
    {
        id: 1,
        name: "Upwork",
        role: "FrontEnd Developer",
        date: "2023 - Present",
        freelancing: true,
        image: "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg"
    },
    {
        id: 2,
        name: "GetNinjas",
        role: "FrontEnd Developer",
        date: "2023 - Present",
        freelancing: true,
        image: "https://media.licdn.com/dms/image/D4D0BAQEJiQYF_2zUSQ/company-logo_100_100/0/1688760329118/getninjas_logo?e=1721865600&v=beta&t=hUJuIuNuV2hay5v3RjJvQKs2Q0afWrkslaxXYWkzvUc"
    }
]

export const skillsMain = [
    {
      id: 1,
      logo: "/assets/nextjs-logo.png",
      title: "Next.js",
      description: 'I\'m a "fan" of this React Framework.'
    },
    {
      id: 2,
      logo: "/assets/React-icon.png",
      title: "React-Native",
      description: 'I\'m currently learning more of the mobile creation universe with this.'
    },
    {
      id: 3,
      logo: "/assets/tailwind-logo.png",
      title: "Tailwind CSS",
      description: 'I think than it\'s one of the best CSS Frameworks.'
    },
    {
      id: 4,
      logo: "/assets/ts-logo.png",
      title: "TypeScript",
      description: 'It\'s amazing how Typescript makes code readability easier.'
    },
    
  ]
  
export const contacts = [
    {
        imageProfile:"/assets/profil-1.png",
        title: "Say hello",
        link: "mailto:inelusjudelin01@gmail.com",
        subtitle: "inelusjudelin01@gmail.com",
        logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/gmail_logo_icon_147283.png" 
    },
    {
        imageProfile:"/assets/profil-1.png",
        title: "Judelin Inélus",
        link: "https://www.linkedin.com/in/judelininelus",
        subtitle: "/judelininelus",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" 
    },
    {
        imageProfile:"/assets/profil-1.png",
        title: "Get my Github profil",
        link: "https://github.com/codesofC",
        subtitle: "/codesofC",
        logo: "https://cdn2.iconfinder.com/data/icons/social-media-iconez/64/GitHub-512.png" 
    },
]