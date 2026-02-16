function Footer() {

    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <div className="links">
                <span className="github"><a href="https://github.com/stevefoldi"><i className="fa-brands fa-github"></i></a></span>
                <span className="linkedin"><i className="fa-brands fa-linkedin"></i></span>
                <span className="email"><a href="mailto:stevefoldi@gmail.com"><i className="fa-solid fa-envelope"></i></a></span>
            </div>
            <div>&copy; {currentYear} Steve Foldi, All right reserved.</div>
        </footer>
    )
}

export default Footer