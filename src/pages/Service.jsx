import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../components/Container";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Service = ()=>{
    return (
        <Container class_name="flex flex-col jsutify-center items-center gap-5">
            <h1 className="text-3xl">What We Do</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-14">
                <div className="border border-gray-100 rounded-lg shadow flex flex-col justify-center items-center w-80 p-5 gap-3">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>Infeed graind</h1>
                    <p className="text-center">
                        ideal for complex shapes and components with multiple component.
                    </p>
                </div>
                <div className="border border-gray-100 rounded-lg shadow flex flex-col justify-center items-center w-80 p-5 gap-3">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>Infeed graind</h1>
                    <p className="text-center">
                        ideal for complex shapes and components with multiple component.
                    </p>
                </div>
                <div className="border border-gray-100 rounded-lg shadow flex flex-col justify-center items-center w-80 p-5 gap-3">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>Infeed graind</h1>
                    <p className="text-center">
                        ideal for complex shapes and components with multiple component.
                    </p>
                </div>
                
            </div>

            <div className="flex w-full gap-5 mt-5" id="home">
                <div className="w-1/2">
                    <h1 className="text-3xl mb-3">Decades of Grainding experts</h1>
                    <p>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by a
                    </p>
                    <div className="rounded-lg border shadow mt-2 p-1 bg-white p-2">
                        <h1>Our mission</h1>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    </div>
                    <div className="rounded-lg border shadow mt-2 p-1 bg-white p-1">
                        <h1>Our Technology</h1>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="w-[95%] h-full rounded-lg" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" />
                </div>
            </div>
            
        </Container>
    )
}

export default Service;