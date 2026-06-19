import { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import { projects } from "../data/projectsData";
import "./projects.css";
// import { recentProjects } from "../data/projects-recent-data";
// import { pastProjects } from "../data/projects-past-data";

export default function Projects() {
	const [activeTab, setActiveTab] = useState("all");
	const [modalImage, setModalImage] = useState(null);
	// const [selectedImage, setSelectedImage] = useState(null);

	const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.type === activeTab);

	const handleMouseMove = (e) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();

		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	};

	useEffect(() => {
		if (modalImage) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [modalImage]);

	return (
		<section className="projects-section">
			<h2>Projects</h2>

			<div className="project-tabs">
				<button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>
					All
				</button>
				<button className={activeTab === "recent" ? "active" : ""} onClick={() => setActiveTab("recent")}>
					Recent
				</button>
				<button className={activeTab === "past" ? "active" : ""} onClick={() => setActiveTab("past")}>
					Past
				</button>
			</div>

			<div className="projects-grid">
				{filteredProjects.map((project) => (
					<div key={project.id} className="project-card">
						<div className="card-image-wrapper" onMouseMove={handleMouseMove} onClick={() => setModalImage(project.img.srcLarge)}>
							<img src={project.img.srcThumb} alt={project.img.alt} loading="lazy" />
							<div className="image-overlay">
								<span>View Screenshot</span>
							</div>
						</div>

						<h4 className="card-title">{project.title}</h4>
						<div className="card-content">
							<p>{project.services}</p>
							<p className="skills-tags">{project.skills}</p>
						</div>
						{project.url && (
							<a href={project.url} className="card-button" target="_blank">
								<i className="fa-solid fa-circle-chevron-left"></i> View Site
							</a>
						)}
					</div>
				))}
			</div>

			<ImageModal image={modalImage} onClose={() => setModalImage(null)} />

			<div className="narrow-row">
				<h3>Other Projects I've been on</h3>
				<p>Coke Points, Kraft Points Dell Financial Services Auctions, Dell Financial Services Store, Delta Airlines Auctions, United Airlines, Starwood, Fight Network, ECHL,Kraft Points, Sirius US/Canada, Chase Bank, Amex, Disney Auctions, L'TUR, the MeiGray Group, AHL, MLB, NBA, NFL, NHL, PGA Golf, UFC, US Open, PBA, Bell, Bidz.com, American Airlines, Orcheln Farm n Home, Steiner Sports, Rogers Magazine, shopNBC auctions, Comet, Continental, Loblaws reverse auctions, NorthWest Airlines, Portero, Toronto Star, Mississauga News, Metro News, Metroland, The Spec, Washington Post, Ottawa Citizen, Toshiba, compUSA, Tys Toybox, Konami, Nambe, Sony style, Sears, Quixtar - Amway</p>
			</div>
		</section>
	);
}
