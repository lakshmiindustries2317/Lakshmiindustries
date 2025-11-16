import Container from "../components/Container";
import bg from "../assets/images/landing.jpeg";
const Home = ()=>{
    const gotoquote = ()=>{
        document.location.href="#contact"
    }
    return (
        <Container class_name="justify-center items-center p-5" id="home">
            <div className="relative w-full lg:h-[100vh] h-[50vh]">
                <img className="h-full w-[95%] rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={bg} />
            </div>
        </Container>
    )
}

export default Home;