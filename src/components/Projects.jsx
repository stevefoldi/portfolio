import { useState, useEffect } from "react";
import projectsRecent from "./projects-recent-data"
import projectsPast from "./projects-past-data"
import './projects.css'

function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Close on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        if (selectedImage) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    return (
        <section className="projects-section">
            <h2>Recent Projects</h2>
            <section className="cards">
                {projectsRecent.map(project => (
                    <div className="card" key={project.id}>
                        <div
                            className="card-image-wrapper"
                            onClick={() => setSelectedImage(project.img.src)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;

                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                        >
                            <img src={project.img.src} alt={project.img.alt} className="card-image" />
                            <div className="image-overlay"><span>View Screenshot</span></div>
                            <div className="image-light" />
                        </div>
                        <h4 className="card-title">{project.title}</h4>
                        <div className="card-content">
                            <p>{project.services}</p>
                            <p className="skills-tags">{project.skills}</p>
                        </div>
                        <a href={project.url} className="card-button" target="_blank">View Project</a>
                    </div>
                ))}
            </section>
            <h2>Past Projects</h2>
            <section className="cards">
                {projectsPast.map(project => (
                    <div className="card" key={project.id}>
                        <div
                            className="card-image-wrapper"
                            onClick={() => setSelectedImage(project.img.src)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;

                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                        >
                            <img src={project.img.src} alt={project.img.alt} className="card-image" />
                            <div className="image-overlay"><span>View Project</span></div>
                            <div className="image-light" />
                        </div>
                        <h4 className="card-title">{project.title}</h4>
                        <div className="card-content">
                            <p>{project.services}</p>
                            <p className="skills-tags">{project.skills}</p>
                        </div>
                        <a href={project.url} className="card-button">View Project</a>
                    </div>
                ))}
            </section>
            {/* Modal */}
            {selectedImage && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedImage(null)}
                        >
                            x
                        </button>

                        <img src={selectedImage} alt="" />
                    </div>
                </div>
            )}
            <div className="narrow-row">
                <h3>Other Projects I've been on</h3>
                <p>Coke Points, Kraft Points Dell Financial Services Auctions, Dell Financial Services Store, Delta Airlines Auctions, United Airlines, Starwood, Fight Network, ECHL,Kraft Points, Sirius US/Canada, Chase Bank, Amex, Disney Auctions, L'TUR, the MeiGray Group, AHL, MLB, NBA, NFL, NHL, PGA Golf, UFC, US Open, PBA, Bell, Bidz.com, American Airlines, Orcheln Farm n Home, Steiner Sports, Rogers Magazine, shopNBC auctions, Comet, Continental, Loblaws reverse auctions, NorthWest Airlines, Portero, Toronto Star, Mississauga News, Metro News, Metroland, The Spec, Washington Post, Ottawa Citizen, Toshiba, compUSA, Tys Toybox, Konami, Nambe, Sony style, Sears, Quixtar - Amway</p>
            </div>
        </section>
    )
}

export default Projects