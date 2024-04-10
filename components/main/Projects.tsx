import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Digital MarketPlace "
                    description="A Digital platform where you can buy and sell UI Kit and Icons."
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Learning Management Project"
                    description="Platform where you can enhance your skills  by learning new programming languages, frameworks and libraries."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Space Themed Website"
                    description="Space Theme Website which portrays my skills in Scripting Languages."
                />
            </div>
        </div>
    );
};

export default Projects;