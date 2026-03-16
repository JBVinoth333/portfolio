const skillList = [
    {
        name: 'HTML & CSS',
        logos: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        ],
    },
    {
        name: 'JavaScript',
        logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
    },
    {
        name: 'Node.js',
        logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
    },
    {
        name: 'React',
        logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
    },
    {
        name: 'Java',
        logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'],
    },
    {
        name: 'MySQL',
        logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
    },
    {
        name: 'Scratch',
        logos: ['https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scratch.svg'],
    },
]

export default function Skills() {
    return (
        <section id="skills">
            <div className="skills-container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skillList.map((skill) => (
                        <article key={skill.name} className="skill-card">
                            <div className="skill-item">
                                <div className="skill-logo-group" aria-hidden="true">
                                    {skill.logos.map((logo) => (
                                        <img key={logo} src={logo} alt="" className="skill-logo" loading="lazy" />
                                    ))}
                                </div>
                                <h3>{skill.name}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
