import { useState } from 'react'
import bankingImage from '../assets/banking-application.jpg'
import handCricketImage from '../assets/hand-cricket-game.png'
import simonSaysImage from '../assets/simon-says.png'
import planetsImage from '../assets/planets.jpg'
import bmwImage from '../assets/bmw.png'
import trafficEscapeImage from '../assets/traffic-escape.jpg'
import spiroGraphImage from '../assets/spiro-graph.png'
import linkedListImage from '../assets/Linked-List.png'
import jsBankImage from '../assets/bankImage.jpg'
import bmiImage from '../assets/bmi-calculator.jpg'
import ramNathKovindImage from '../assets/ramnathWebsite.png'

const projects = [
    {
        title: 'Banking Application',
        description: 'A banking application built using Java and MySQL.',
        source: 'https://github.com/JBVinoth333/BankingApp_v2',
        tags: ['Java', 'MySQL'],
        category: ['Java'],
        image: bankingImage,
    },
    {
        title: 'LinkedList Implementation',
        description: 'A Java implementation of a linked list data structure.',
        source: 'https://github.com/JBVinoth333/DataStructure_LinkedList',
        tags: ['Java'],
        category: ['Java'],
        image: linkedListImage,
    },
    {
        title: 'Hand Cricket Game',
        description: 'A hand cricket game developed in Java, featuring a simple command-line interface for an engaging gaming experience.',
        source: 'https://github.com/JBVinoth333/Hand_Cricket_Game',
        tags: ['Java'],
        category: ['Java'],
        image: handCricketImage,
    },
    {
        title: 'Simon Says Game',
        description: 'A Simon Says game developed using JavaScript, HTML, and CSS, providing an interactive and fun experience.',
        source: 'https://github.com/JBVinoth333/Simon-Says',
        tags: ['JavaScript', 'HTML', 'CSS'],
        preview: 'https://vinothbaskar-026oc5s4-8443.zcodecorp.in/HTML%20PROJECTS/java%20script/Mini%20project/simon.html',
        category: ['JavaScript', 'HTML & CSS'],
        image: simonSaysImage,
    },
    {
        title: 'Ram Nath Kovind Website',
        description: 'A website dedicated to the former President of India, Ram Nath Kovind, built using HTML,CSS and JavaScript.',
        source: 'https://github.com/Cherry6628/RamNathKovindWebsite',
        tags: ['HTML', 'CSS', 'JavaScript'],
        preview: 'https://cherry6628.github.io/RamNathKovindWebsite/index.html',
        category: ['HTML & CSS', 'JavaScript', 'Group Project'],
        image: ramNathKovindImage
    },
    {
        title: 'BMI Calculator',
        description: 'A BMI calculator web application built using Node.js, Express, and EJS for dynamic content rendering.',
        source: 'https://github.com/JBVinoth333/BMI_CALCULATOR_NODEJS',
        tags: ['Node.js', 'Express', 'EJS', 'CSS'],
        category: ['JavaScript', 'HTML & CSS'],
        image: bmiImage,
    },
    {
        title: 'Planets Facts',
        description: 'A web application that provides interesting facts about planets, built using Node.js, Express, and EJS for dynamic content rendering.',
        source: 'https://github.com/JBVinoth333/PlanetJS',
        tags: ['Node.js', 'EJS', 'Express', 'CSS'],
        category: ['JavaScript', 'HTML & CSS'],
        image: planetsImage,
    },
    {
        title: 'Simple Banking System',
        description: 'A simple banking system implemented in JavaScript, HTML, and CSS, allowing users to manage their accounts and transactions.',
        source: 'https://github.com/JBVinoth333/Advanced_JS_Assignments/tree/master/assign004',
        preview: 'https://vinothbaskar-026oc5s4-8443.zcodecorp.in/HTML%20PROJECTS/AdvancedJS/Assignments/assign004/bank.html',
        tags: ['JavaScript', 'HTML', 'CSS'],
        category: ['JavaScript', 'HTML & CSS'],
        image: jsBankImage,
    },
    {
        title: 'BMW Website',
        description: 'A International BMW website, showcasing their models and features, built using HTML and CSS.',
        source: 'https://github.com/JBVinoth333/BMW',
        tags: ['HTML', 'CSS'],
        preview: "https://jbvinoth333.github.io/BMW/BMW_PROJECT/home_page_001/BMW.html",
        category: ['HTML & CSS'],
        image: bmwImage,
    },

    {
        title: 'Traffic Escape Game',
        description: 'A traffic escape game developed using Scratch, where players navigate through traffic to reach their destination.',
        preview: 'https://scratch.mit.edu/projects/1192518931',
        tags: ['Scratch'],
        category: ['Scratch'],
        image: trafficEscapeImage,
    },
    {
        title: 'Spirograph Drawing',
        preview: 'https://scratch.mit.edu/projects/1189191759',
        tags: ['Scratch', 'Drawing'],
        category: ['Scratch'],
        image: spiroGraphImage,
    }
]

const categories = ['All', 'Java', 'JavaScript', 'HTML & CSS', 'Scratch', 'Group Project']

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((project) => project.category.includes(selectedCategory))

    return (
        <section id="projects">
            <div className="projects-container">
                <h2 className="section-title">My Projects</h2>

                <div className="project-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            aria-pressed={selectedCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="project-list">
                    {filteredProjects.map((project) => (
                        <article key={project.title} className="project-card">
                            <img src={project.image} alt={`${project.title} preview`} className="project-thumb" loading="lazy" />
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <p className="project-description">
                                {project.description || 'A practical project focused on clean implementation and learning outcomes.'}
                            </p>
                            <div className="project-links">
                                {project.source && (
                                    <a className="project-link-btn" href={project.source} target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                )}
                                {project.preview && (
                                    <a className="project-link-btn project-link-demo" href={project.preview} target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}

                    {filteredProjects.length === 0 && (
                        <article className="project-card">
                            <h3 className="project-title">No projects found</h3>
                            <p className="project-description">
                                There are no projects available in the selected category yet.
                            </p>
                        </article>
                    )}
                </div>
            </div>
        </section>
    )
}
