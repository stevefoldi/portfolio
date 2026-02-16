import logoLaptop from '../assets/icon-laptop.svg'

function Header() {
    return (
        <header>
            <div className="logo-heading">Steve</div>
            <div><img src={logoLaptop} className='logo-main' alt="Steve Foldi logo" /></div>
            <div className="logo-heading">Foldi</div>
        </header>
    )
}

export default Header