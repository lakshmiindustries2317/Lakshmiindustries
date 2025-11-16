import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../components/Container";
import { faCircle, faCog, faHardHat, faWrench } from "@fortawesome/free-solid-svg-icons";
import emp from "../assets/images/employee.png"

const About = ()=>{
    return (
        <Container class_name="flex flex-col jsutify-center items-center gap-5 overflow-y-scroll" id="about">
            <h1 className="text-3xl">What We Do</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-14">
                <div className="border border-gray-100 rounded-lg shadow flex flex-col justify-center items-center w-80 p-5 gap-3">
                    <FontAwesomeIcon icon={faCog} size="2x" />
                    <h1>Through-feed grinding</h1>
                    <p className="text-center">
                        In this method, the workpiece is fed continuously between the grinding wheel and the regulating wheel.
                    </p>
                </div>
                <div className="border border-gray-100 rounded-lg shadow flex flex-col justify-center items-center w-80 p-5 gap-3">
                    <FontAwesomeIcon icon={faWrench} size="2x" />
                    <h1>Plunge (Infeed grinding)</h1>
                    <p className="text-center">
                        In this method, the workpiece is held stationary and the grinding wheel is fed radially into it.
                    </p>
                </div>
                
            </div>
             <div className="">
                <div className="text-black">
                    At our centreless grinding facility, we specialize in precision grinding solutions for components ranging from 4 mm to 18 mm diameter. With advanced grinding machinery, strict process control, and decades of hands-on expertise, we deliver parts that meet the most demanding industrial standards.We work extensively with premium stainless-steel materials such as SS 301, SS 401, and SS 410, ensuring exceptional strength, corrosion resistance, and dimensional accuracy across every batch. Whether it’s high-volume production or custom requirements, our team maintains tight tolerances, consistent surface quality, and repeatable accuracy throughout the grinding process.Our grinding operations are engineered to achieve close tolerances, supporting industries where precision is non-negotiable. Every component passes through strict quality checks to ensure the dimensions are stable, straightness is maintained, and surface parameters match customer specifications. We also deliver superior finishing with low RA surface values, meeting the aesthetic and functional requirements of applications in automotive, medical, defence, and general engineering industries.With a commitment to reliability, on-time delivery, and technical excellence, we focus on offering tailored grinding solutions that add value to your manufacturing processes. Our goal is to support your product performance through accuracy, durability, and superior surface finish.
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-5 mt-5">
                <div className="w-full lg:w-3/4">
                    <h1 className="text-3xl mb-3">Decades of Grinding experts</h1>
                    <p>
                        With decades of grinding expertise, we are dedicated to delivering precision, performance, and innovation in every machine we create. Our commitment to quality and reliability drives us to set new benchmarks in centreless grinding technology, ensuring excellence that empowers industries and builds lasting trust with our customers.
                    </p>
                    <div className="rounded-lg border shadow mt-2 p-1 bg-white p-2">
                        <h1>Our mission</h1>
                        To deliver high-precision centreless grinding solutions that empower manufacturers with superior quality, reliability, and performance — through continuous innovation, advanced engineering, and customer-focused service.
                    </div>
                    <div className="rounded-lg border shadow mt-2 p-1 bg-white p-1">
                        <h1>Our Vision</h1>
                        To be the global leader in centreless grinding technology, setting new standards for precision, performance, and reliability in every product we deliver. 
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <img className="w-[95%] h-3/4 h-full rounded-lg" src={emp} />
                </div>
            </div>
            
        </Container>
    )
}

export default About;