export const traductionsData = {
    EN: {
        home: {
            title: "Home",
            title2: "Hi, I'm",
            subtitle: "I'm a Web FrontEnd Developer",
            description: "I'm passionate about creating modern, high-quality interfaces that guarantee excellent user experiences."
        },
        skills: {
            title: "Skills"
        },
        aboutMe: {
            title: "About me",
            description: [
                "I am a web developer with a passion for creative and interactive applications focused on responsiveness, performance, animations and SEO. I mainly dominate React JS, NextJs and Typescript. I am a team player because I love learning and I am always looking to expand my knowledge by learning from others.",
                "I based in Brazil where I study System Analysis and Development at URI."
            ],
            experience: {
                title1: "Get in Touch",
                title2: "Education",
                p1: "Looking for my first official experience.",
                p2: "Maybe in your company!"
            }
        },
        myProjects: {
            title: "Projects",
            projects: [
                {
                    description: "Responsive supermarket e-commerce platform with authentication, API use and home delivery service."
                },
                {
                    description: "Car search system according to brand, model, year etc... Using the Ninja-Api Cars API and that of cdn.imagin.studio to generate car images."
                },
                {
                    description: "Beautiful responsive and animate landing page maked with Next Js and Framer motion."
                },
                {
                    description: "Visit to see more of my projects! It is a responsive platform for sharing projects and others using NextAuth authentication and storage with Firebase."
                },
                
            ] 
        },
        contacts: {
            title: "Contacts",
            description: "Contact Me"
        },
        footer: {
            design: "Desing & build by ",
            rights: "All rights reserved"
        }
    },
    PT: {
        home: {
            title: "Início",
            title2: "Olá, Eu sou",
            subtitle: "Sou Desenvolvedor FrontEnd Web",
            description: "Sou apaixonado pela criação de interfaces modernas e de alta qualidade que garantam excelentes experiências ao usuário."
        },
        skills: {
            title: "Habilidades"
        },
        aboutMe: {
            title: "Sobre mim",
            description: [
                "Sou um desenvolvedor web apaixonado por aplicações criativas e interativas focadas em responsividade, performance, animações e SEO. Domino principalmente React JS, NextJs e Typescript. Gosto trabalhar em equipe porque adoro aprender e estou sempre em busca de ampliar meus conhecimentos aprendendo com os outros.",
                "Moro no Brasil onde estudo Análise e Desenvolvimento de Sistemas na URI."
            ],
            experience: {
                title1: "Fala comigo",
                title2: "Educação",
                p1: "Procurando minha primeira experiência oficial.",
                p2: "Talvez na sua empresa!"
            }
        },
        myProjects: {
            title: "Projetos",
            projects: [
                {
                    description: "Plataforma responsiva de e-commerce de supermercado com autenticação, uso de API e serviço de entrega em domicílio."
                },
                {
                    description: "Sistema de busca de carros por marca, modelo, ano etc... Utilizando a API Ninja-Api Cars e a do cdn.imagin.studio para gerar imagens de carros."
                },
                {
                    description: "Linda landing page responsiva e animada feita com Next Js e Framer motion."
                },
                {
                    description: "Visite para ver mais dos meus projetos! É uma plataforma responsiva para compartilhar projetos e outros usando autenticação e armazenamento NextAuth com Firebase."
                },
            ] 
        },
        contacts: {
            title: "Contato",
            description: "Entre em contato comigo!"
        },
        footer: {
            design: "Construido por ",
            rights: "Todos direitos reservados"
        }
    }
    
}

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
        name: "Sass",
        url: "/assets/sass.png"
    },
    {
        name: "React",
        url: "/assets/React-icon.png"
    },
    {
        name: "Next Js",
        url: "/assets/nextjs-logo.png"
    },
    {
        name: "Typescript",
        url: "/assets/ts-logo.png"
    },
    {
        name: "Tailwind Css",
        url: "/assets/tailwind-logo.png"
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

export const education = [
    'Universidade Regional Integrada do Alto Uruguai e das Missões - URI',
    'Udemy',
    'OpenClassroom',
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
        ]
    },
    {
        id: 2,
        title: "Cars Search",
        demoUrl: "https://show-car-woad.vercel.app",
        repoUrl: "https://github.com/codesofC/showCar",
        imgUrl: "/assets/project-0.png",
        stacks: [
            "TypeScript",
            "NextJs",
            "Tailwind CSS",
            "React",
        ]
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
        ]
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
        ]
    },
]

export const flags = [
    {
        id: 0,
        lang: "EN",
        url: "/assets/en.avif"
    },
    {
        id: 1,
        lang: "PT",
        url: "/assets/pt-br.png"
    }
]