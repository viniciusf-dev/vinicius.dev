import Intro from "./components/intro.mdx"

const siteData: any = {
    author: "Vinicius Gurski Ferraz",
    title: "Vinicius.Dev",
    description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css to publish my articles and projects",
    theme: "dark",
    language: "en",
    githubRepo: "https://github.com/viniciusf-dev",

    header: {
        logo: "/logo.png",
        title: "Vinicius.Dev",

        routes: [
            {
                name: 'Blog',
                value: '/blog'
            },
            {
                name: 'Projects',
                value: '/project'
            }
        ]
    },

    home: {
        title: "Welcome to Vinicius.Dev",

        // introduction or about me
        intro: Intro, // file path of the introduction
        socials: {
            email: "vinigurskiferraz@gmail.com",
            github: "https://github.com/viniciusf-dev",
            twitter: "",
            linkedin: "https://www.linkedin.com/in/viniciusgferraz/",
            facebook: "",
            instagram: "",
            youtube: "",
        },
    },

    blog: {
        title: 'My Blog',
        description: 'Some texts about stuff that I like',
    },

    project: {
        title: "Look what I've done",
        description: "Some small tools made by myself",

        getStatus: (status: string) => {
            if (!status) return {}

            switch (status) {
                case "active":
                    return {
                        variant: "default",
                        text: "ACTIVE",
                    }
                case "dev":
                    return {
                        variant: "secondary",
                        text: "DEV",
                    }
                case "filed":
                    return {
                        variant: "outline",
                        text: "FILED",
                    }
                case "offline":
                    return {
                        variant: "destructive",
                        text: "OFFLINE",
                    }
            }
        },
        projects: [
            {
                name: "Nebulla",
                description: "A lightweight, high-performance text embedding model implemented in Rust.",
                href: "https://github.com/viniciusf-dev/nebulla",
                github: "https://github.com/viniciusf-dev/nebulla",
                status: "active",
            },
            {
                name: "Why It Sucks",
                description: "Discover why some games are so bad with the power of Generative AI.",
                href: "https://why-it-sucks.vercel.app/",
                github: "https://github.com/viniciusf-dev/WhyItSucks",
                status: "active",
            },
            {
                name: "Poetries By Markov",
                description: "A sophisticated non-LLM-based poetry generator that uses Markov chains to create original poems.",
                href: "https://github.com/viniciusf-dev/poetries-by-markov",
                github: "https://github.com/viniciusf-dev/poetries-by-markov",
                status: "active",
            },
            {
                name: "Smart.Notes",
                description: "A fullstack AI application that receives videoclasses in audio format and convert them into smart summaries and questions to improve study.",
                href: "https://smart-notes-phi.vercel.app/",
                github: "https://github.com/ViniciusTheCoder/smart.notes",
                status: "dev",
            },
            {
                name: "LangchainGPT",
                description: "An chatbot interface integrated to OpenAI API to build your own base-knowledgment AI, made with React, Next, Node, Typescript & Tailwind.",
                href: "https://github.com/ViniciusTheCoder/LangChainGPT",
                github: "https://github.com/ViniciusTheCoder/LangChainGPT",
                status: "filed",
            },
            {
                name: "MelodyMover",
                description: "An web interface to convert music playlists between different music apps.",
                href: "https://github.com/ViniciusTheCoder/melody-mover",
                github: "https://github.com/ViniciusTheCoder/melody-mover",
                status: "dev",
            },
            {
                name: "AppKawa",
                description: "An mobile app to track customer returnals and organizate events.",
                href: "https://github.com/ViniciusTheCoder/AppKawa",
                github: "https://github.com/ViniciusTheCoder/AppKawa",
                status: "filed",
            },
            {
                name: "Decoding Gamer Emotions",
                description: "Sentiment Analysis of Game Reviews with Large Language Models.",
                href: "https://github.com/ViniciusTheCoder",
                github: "",
                status: "dev",
            },
            {
                name: "VegMaromba",
                description: "Website to check vegan supplements",
                href: "https://github.com/ViniciusTheCoder/VegMaromba",
                github: "https://github.com/ViniciusTheCoder/VegMaromba",
                status: "filed",
            },
            {
                name: "RentX",
                description: "Mobile app developed in React Native (available for iOS and Android) to rent cars",
                href: "https://github.com/ViniciusTheCoder/RentX",
                github: "https://github.com/ViniciusTheCoder/RentX",
                status: "filed",
            },
            {
                name: "RentX API",
                description: "API that runs as a backend in the RentX app, this API list all the cars available in the catalog",
                href: "https://github.com/ViniciusTheCoder/RentX-api",
                github: "https://github.com/ViniciusTheCoder/RentX-api",
                status: "filed",
            },
            {

                name: "GoFinance",
                description: "Mobile app developed in React Native (available for iOS and Android) to control your bank accounts and transactions",
                href: "https://github.com/ViniciusTheCoder/finances_mobile.app",
                github: "https://github.com/ViniciusTheCoder/finances_mobile.app",
                status: "filed",

            }
        ],
    },

    comment: {
        enabled: false,
        engine: "giscus",
        giscus: {
            repo: "imyuanli/next-blog",
            repoId: "R_kgDOKTZ_kQ",
            category: "Announcements",
            categoryId: "DIC_kwDOKTZ_kc4CfMXK",
            mapping: "pathname",
            reactionsEnabled: "1",
            emitMetadata: "0",
            inputPosition: "top",
            theme: "light",
            lang: "en",
            loading: "lazy",
        },


        utterances: {
            src: "https://utteranc.es/client.js",
            repo: "imyuanli/next-blog",
            "issue-term": "pathname",
            theme: "github-light",
            crossorigin: "anonymous",
            label: "",
            async: true
        }
    },

    search: {
        enabled: true,
        engine: "cmdk",
    },

    footer: {
        isShow: true,

        isShowPoweredBy: true,
    },
}

export default siteData