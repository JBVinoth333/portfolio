const tools = [
    {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
        name: 'IntelliJ',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
    },
    {
        name: 'Eclipse',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
    },
    {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
        name: 'Postman',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    },
    {
        name: 'Apache JMeter',
        icon: 'https://jmeter.apache.org/images/jmeter_square.svg',
    },
    {
        name: 'Selenium',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
    },
    {
        name: 'ChatGPT',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg',
    },
    {
        name: 'Gemini',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg',
    },
    {
        name: 'Linux Terminal',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    },
]

export default function Tools() {
    return (
        <section id="tools">
            <div className="tools-container">
                <h2 className="section-title">Tools I Use</h2>
                <div className="tools-grid">
                    {tools.map((tool) => (
                        <article key={tool.name} className="tool-card">
                            <div className="tool-head">
                                <span className="tool-icon-wrap" aria-hidden="true">
                                    <img src={tool.icon} alt="" className="tool-icon" loading="lazy" />
                                </span>
                                <h3>{tool.name}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
