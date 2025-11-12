import logo from "../assets/images/logo.png";

const NavBar = ()=>{
    const gotoquote = ()=>{
        document.location.href="#contact"
    }
    return (
        <nav className="h-20 border-b border-gray-300 shadow  w-full z-20 bg-white">
            <div className="flex justify-between items-center h-full lg:mx-20 sm:mx-5">
                <div className="flex justify-center items-center">
                    <img className="h-24 w-24 rounded-full mx-3" src={logo} />
                    <a className="hidden lg:block text-4xl" href="#home">Lakshmi Industries</a>
                </div>
                <div className="flex items-center gap-4 h-full">
                    <div>
                        <a href="#home">Service</a>
                    </div>
                    <div>
                        <a href="#about">About</a>
                    </div>
                    <div>
                        <a href="#gallery">Gallery</a>
                    </div>
                    <div>
                        <a href="#contact">Contact</a>
                    </div>
                    <button className="h-10 bg-yellow-500 rounded-lg text-gray-700 p-2 hidden lg:block md:block sm:block" onClick={gotoquote}>Request a Quote</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;