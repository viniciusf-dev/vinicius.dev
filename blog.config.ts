// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.
import Intro from "./components/intro.mdx"

const siteData: any = {
    author: "Vinicius Gurski Ferraz",  // author name
    title: "Vinicius.Dev", // website title
    description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css to publish my articles and projects", // website description
    theme: "light", // light | dark
    language: "en", // zh-CN | en
    githubRepo: "https://github.com/ViniciusTheCoder", // your blog's github repo

    // how to change the favicon of the website?
    // change the app/favicon.ico file directly，or refer to the document below
    // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

    //header config
    header: {
        logo: "/logo.png",  //  /public/logo.png
        title: "Vinicius.Dev", // header title

        // navigation bar
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
            github: "https://github.com/ViniciusTheCoder",
            twitter: "",
            linkedin: "https://www.linkedin.com/in/viniciusgferraz/",
            facebook: "",
            instagram: "",
            youtube: "",
        },
    },

    blog: {
        title: 'My Blog',
        description: 'All of my long-fesign, and more, collected in chronological order.',
    },

    project: {
        title: "Look what I've done",
        description: "Some small tools made by myself",

        // status color and text
        getStatus: (status: string) => {
            // you can customize the status color and text！

            // dev: Under development or planning.
            // active: Currently focused on this project.
            // filed: Not upgrading will only fix bugs.
            // offline: Going offline soon.
            // none: Keep running.
            if(!status) return {}

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

        // name, description, href are required
        // github: username/repo
        // status: getStatus return value
        // and so on
        // you can add more fields according to your needs ,but you need to modify the code in the project/page.tsx file
        projects: [
            {
                name: "LangchainGPT",
                description: "An chatbot interface integrated to OpenAI API to build your own base-knowledgment AI, made with React, Next, Node, Typescript & Tailwind",
                href: "https://github.com/ViniciusTheCoder/LangChainGPT",
                github: "ViniciusTheCoder/LangChainGPT",
                status: "dev",
            },
            {
                name: "AppKawa",
                description: "An mobile app to track customer returnals and organizate events",
                href: "https://github.com/ViniciusTheCoder/AppKawa",
                github: "ViniciusTheCoder/AppKawa",
                status: "dev",
            }
        ],
    },

    comment: {
        enabled: false,
        engine: "giscus", // giscus | utterances
        // giscus doc: https://giscus.app
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

        // utterances doc: https://utteranc.es
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
        engine: "cmdk", //  cmdk | algolia
        // todo algolia search
        // algolia: {
        //     appId: "",
        //     apiKey: "",
        // }
    }
}

export default siteData