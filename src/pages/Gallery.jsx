import Container from "../components/Container";
import gallery1 from "../assets/images/gallery1.jpeg";
import gallery2 from "../assets/images/gallery2.jpeg";
import gallery3 from "../assets/images/gallery3.jpeg";
import gallery4 from "../assets/images/gallery4.jpeg";

const Gallery = ()=>{
    return (
        <Container id="gallery"  class_name="overflow-y-scroll">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 my-5">
                <div className="rounded-lg h-full w-full overflow-hidden">
                    <img className="rounded-lg h-full w-full" src={gallery1} />
                </div>
                <div className="rounded-lg h-full w-full overflow-hidden">
                    <img className="rounded-lg h-full w-full" src={gallery2} />
                </div>
                <div className="rounded-lg h-full w-full overflow-hidden col-span-2">
                    <img className="rounded-lg h-full w-full" src={gallery3}/>
                </div>
                <div className="rounded-lg h-full w-full overflow-hidden">
                    <img className="rounded-lg h-full w-full" src={gallery4} />
                </div>
                
            </div>
        </Container>
    )
}

export default Gallery;