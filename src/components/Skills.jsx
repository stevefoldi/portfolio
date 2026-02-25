import './skills.css'

const skillGroups = [
    {
        title: "Frontend Architecture",
        description: "Building responsive, accessible interfaces with modern component-driven design.",
        items: [
            { name: "React", type: "core" },
            { name: "Next.js", type: "core" },
            { name: "TypeScript", type: "core" },
            { name: "JavaScript" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Responsive Design" }
        ]
    },
    {
        title: "CMS & Template Development",
        description: "Developing custom themes, templates, and content systems for WordPress and other platforms.",
        items: [
            { name: "WordPress", type: "wordpress" },
            { name: "Tina.io" },
            { name: "Liquid" },
            { name: "Velocity" },
            { name: "ACF" },
            { name: "WooCommerce" }
        ]
    },
    {
        title: "API & Data Integration",
        description: "Connecting applications with REST APIs and structured data systems.",
        items: [
            { name: "REST APIs" },
            { name: "JSON" },
            { name: "Node.js" },
            { name: "MySQL" }
        ]
    },
    {
        title: "Performance & Optimization",
        description: "Improving load times, accessibility scores, and overall user experience.",
        items: [
            { name: "Lighthouse Optimization" },
            { name: "Lazy Loading" },
            { name: "SEO Best Practices" }
        ]
    },
    {
        title: "Workflow & Tooling",
        description: "Version control, local development environments, and deployment workflows.",
        items: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "Vite" },
            { name: "Docker" },
            { name: "VS Code" },
            { name: "Terminal" }

        ]
    },
    {
        title: "Adaptability & Additional Skills",
        description: "Able to quickly learn new platforms, languages, or frameworks as required by project needs.",
        items: [
            { name: "Jenkins" },
            { name: "Shopify" },
            { name: "Headless CMS" },
            { name: "New Frameworks / Languages" }
        ]
    }
];

function Skills() {
    return (
        <section className="skills skills-section">
            <div className="skills-container">
                <div className="skills-header">
                    <h2>How I Build & Adapt</h2>
                    <p>I design and develop scalable web experiences while quickly adapting to new tools and platforms.</p>
                </div>

                <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div className="skill-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <p className="skill-description">{group.description}</p>

                    <div className="skill-tags">
                        {group.items.map((item) => (
                        <span
                        key={item.name}
                        className={`skill-tag ${item.type ? item.type : ""}`}
                        >
                            {item.name}
                        </span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Skills