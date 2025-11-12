import Container from "../components/Container";
import bg from "../assets/images/landing.jpeg";
const Home = ()=>{
    const gotoquote = ()=>{
        document.location.href="#contact"
    }
    return (
        <Container class_name="justify-center items-center p-5" id="home">
            <div className="relative w-full h-full">
                <img className="h-full w-[95%] rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={bg} />
                <div className="flex flex-col gap-3 h-full w-[95%] rounded-lg absolute justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800 bg-gray-500/50">
                    {/* <p className="text-xl max-w-[90%] text-center text-black">At Lakshmi Industries, we specialize in Centreless Grinding Services that deliver accuracy, consistency, and surface perfection. With decades of hands-on experience, we provide end-to-end grinding solutions for industries demanding tight tolerances and flawless finishes.</p> */}
                    {/* <button className="h-10 bg-yellow-500 rounded-lg text-gray-700 p-2" onClick={gotoquote}>Get Your Quote</button> */}
                    
                </div>
            </div>
        </Container>
    )
}

export default Home;