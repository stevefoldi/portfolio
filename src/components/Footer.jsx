function Footer() {

    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <div className="links">
                <span className="github"><a href="https://github.com/stevefoldi" target="_blank"><i className="fa-brands fa-github"></i></a></span>
                <span className="linkedin"><a href="https://www.linkedin.com/in/steve-foldi/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></span>
                <span className="email"><a href="mailto:stevefoldi@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></span>
            </div>
            <div>&copy; {currentYear} Steve Foldi, All rights reserved.</div>
        </footer>
    )
}

export default Footer