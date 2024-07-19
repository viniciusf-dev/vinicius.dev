import { Linkedin, Mail } from "lucide-react";
import siteData from "@/blog.config";
import Link from "next/link";
import Title from "@/components/title";
import Intro from "@/components/intro.mdx";

const icons: any = {
    email: <Mail/>,
    linkedin: <Linkedin/>
}

const Home = () => {
    const {home: {title, description, socials}} = siteData;

    return (
        <>
            <Title title={title} description={description}/>
            <Intro/>
            <div className={'mt-8 flex items-center space-x-4'}>
                {Object.keys(socials).map((item) => {
                    if (socials[item]) {
                        return (
                            <div></div>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Home