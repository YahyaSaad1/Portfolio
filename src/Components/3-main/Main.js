import { useState } from "react";
import "./Main.css";
import { AnimatePresence, motion } from "framer-motion";

function Main() {
    const [currentFilter, setCurrentFilter] = useState("all");

    const myProjects = [
        { title: "Agazaty",       subTitle: "Agazaty is an electronic system for managing, submitting, and tracking employee leaves in companies and universities.", link:'https://agazaty.vercel.app/', github:'https://github.com/YahyaSaad1/Agazaty', more:'', category: "react",      imagepath: "1" },
        { title: "Restaurant",       subTitle: "An interactive restaurant landing page built with React. Features responsive design, animations, food sections, customer reviews, and contact info.", link:'https://restaurant-sable-eta.vercel.app/', github:'https://github.com/YahyaSaad1/Restaurant', more:'', category: "react",      imagepath: "2" },
        { title: "Landing HTML",       subTitle: "...", link:'', github:'', more:'', category: "html",       imagepath: "2" },
        { title: "Portfolio CSS",      subTitle: "...", link:'', github:'', more:'', category: "css",        imagepath: "3" },
        { title: "JS Game",            subTitle: "...", link:'', github:'', more:'', category: "js",         imagepath: "4" },
        { title: "Bootstrap Dashboard",subTitle: "...", link:'', github:'', more:'', category: "bootStrap",  imagepath: "5" },
        { title: "Tailwind Template",  subTitle: "...", link:'', github:'', more:'', category: "Tailwind",   imagepath: "6" },
    ];

    const handleFilter = (categories) => setCurrentFilter(categories);

    const isActive = (categories) =>
        currentFilter === "all"
        ? categories === "all"
        : Array.isArray(currentFilter) && Array.isArray(categories)
            ? categories.every((cat) => currentFilter.includes(cat))
            : currentFilter === categories;

    const projectsToShow = myProjects.filter((project) =>
        currentFilter === "all"
        ? true
        : Array.isArray(currentFilter)
            ? currentFilter.includes(project.category)
            : project.category === currentFilter
    );

    return (
        <main className="d-flex">
            <section className="d-flex left-section">
                <button onClick={() => handleFilter("all")} className={isActive("all") ? "active" : null}>All Projects</button>
                <button onClick={() => handleFilter(["html", "css"])} className={isActive(["html", "css"]) ? "active" : null}>HTML & CSS</button>
                <button onClick={() => handleFilter("js")} className={isActive("js") ? "active" : null}>JavaScript</button>
                <button onClick={() => handleFilter(["bootStrap", "Tailwind"])} className={isActive(["bootStrap", "Tailwind"]) ? "active" : null}>BootStrap & Tailwind</button>
                <button onClick={() => handleFilter("react")} className={isActive("react") ? "active" : null}>React</button>
            </section>

            <section className="d-flex right-section">
                <AnimatePresence>
                    {projectsToShow.map((project, index) => (
                    <motion.article
                    layout
                    initial={{transform: 'scale(0)'}}
                    animate={{transform: 'scale(1)'}}
                    transition={{type: 'spring', damping: 8, stiffness: 50}}
                    key={index} className="card">
                        <img src={`/images/${project.imagepath}.jpg`} alt="project" />
                        <div className="box">
                        <div>
                            <h1 className="title">{project.title}</h1>
                            <p className="sub-title">{project.subTitle}</p>
                        </div>

                        <div className="d-flex icons">
                            <div style={{gap: "11px"}} className="d-flex">
                            <a className="icon" href="https://agazaty.vercel.app" target="_blank" rel="noopener noreferrer">
                                <div className="icon icon-link"></div>
                            </a>

                            <a className="icon" href="https://github.com/YahyaSaad1/Agazaty" target="_blank" rel="noopener noreferrer">
                                <div className="icon icon-github"></div>
                            </a>
                            </div>
                            <a className="d-flex link" href="/#">
                                more <span className="icon-arrow-right" />
                            </a>
                        </div>
                        </div>
                    </motion.article>
                    ))}
                </AnimatePresence>
            </section>
        </main>
    );
}

export default Main;
