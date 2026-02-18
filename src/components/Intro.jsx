import heroLaptop from '../assets/hero-laptop.svg'

function Intro() {
    return (
        <section className="intro-section">
            <h1>I love what I do</h1>
            <div className="hero-section fader-stage">
                <img src={heroLaptop} alt="Hero laptop image" />
                <span className="fader-slide fader-slide--1"><i className="fa-brands fa-css3-alt"></i></span>
                <span className="fader-slide fader-slide--2"><i className="fa-brands fa-html5"></i></span>
                <span className="fader-slide fader-slide--3"><i className="fa-brands fa-square-js"></i></span>
                <span className="fader-slide fader-slide--4"><i className="fa-brands fa-react"></i></span>
                <span className="fader-slide fader-slide--5"><i className="fa-brands fa-node-js"></i></span>
            </div>
            <div className="narrow-row">
                <p>I produce websites like a beast; I attack every project with an appetite for a new challenge, and as a result, I've amassed a list of over 60 clients and 3 WebAwards. I hope to continue growing in the field I love as your front end web developer.</p>
                <p>I initially worked for a company over many years. I enjoyed growing with the team, fine-tuning our codebase and processes over the years, adapting to new codebases and teaching new developers. When I emerged from the office and became a freelance web developer, I was able to see my uniqueness - I am a quick learner because I want to advance my knowledge, improve my skills and improve my code. I thrive on challenges and being self-taught has been a great asset. It keeps me flexible and capable of quickly implementing or even inventing a solution.</p>
                <p>My work has given me the reputation of being the reliable guy who builds the designs. I bring enthusiasm, curiosity, some hockey conversation and exceptional professionalism to every project.</p>
                <p>I feel lucky to have seen and participated in the evolution of the web, from html and JavaScript to frameworks and compilers. I am inspired by great design and innovative web functionality and I am excited to see the evolution continue. Change is a constant and I love it.</p>
            </div>
        </section>
    )
}

export default Intro