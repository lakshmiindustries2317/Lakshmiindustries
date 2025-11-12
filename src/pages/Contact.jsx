import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../components/Container";
import { faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setSending(true);

    emailjs
      .sendForm(
        "service_wyk7fak",   // replace with your Service ID
        "template_bdum6t2",  // replace with your Template ID
        form.current,
        "xBH7IRfmUVLgXjALe"    // replace with your Public Key
      )
      .then(
        (result) => {
          setSuccess("Email sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
          setSending(false);
        },
        (error) => {
          setSuccess("Failed to send email.");
          setSending(false);
        }
      );
  };

  return (
    <Container id="contact">
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
        {/* Form Section */}
        <div className="h-full p-5 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl my-3 text-gray-600">
            Ready to start your next project? Fill out the form or contact us directly. Our team is ready to provide you with a complete quote and expert advice.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-5 my-4">
              <div className="col-span-2">
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="h-10 p-2 rounded-md border border-gray-800 w-full"
                />
                {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}
              </div>
              <div className="col-span-2">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="h-10 p-2 rounded-md border border-gray-800 w-full"
                />
                {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}
              </div>
              <div className="col-span-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="h-32 p-2 rounded-md border border-gray-800 w-full"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
            </div>
            <button
              type="submit"
              className={`bg-yellow-500 p-3 rounded-lg w-full hover:bg-yellow-600 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={sending}
            >
              {sending ? "Sending..." : "Submit Request"}
            </button>
            {success && <p className="text-green-500 mt-2">{success}</p>}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="h-full flex flex-col justify-center items-center p-5">
          <div className="w-[80%] h-[400px] rounded-lg overflow-hidden">
            {/* <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019374603294!2d-122.41941508468123!3d37.77492977975867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5c8b6d0f%3A0x64f2b39d68a4b36b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1673821334234!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-gray-300 shadow"
            ></iframe> */}

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7303935180216!2d76.9925565758364!3d11.058828789107615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8598f696468a9%3A0x7f39fdc11cd9ca89!2sLakshmi%20Industries!5e0!3m2!1sen!2sin!4v1762878952198!5m2!1sen!2sin"
             width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-gray-300 shadow"
            //  referrerpolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

          {/* Contact Details */}
          <div className="w-[80%] mt-4 flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} color="blue" size="2x" />
            <div>
              <p className="font-semibold">Address</p>
              <p>3/56E2, sivanandhapuram, saravanampatti(PO), Coimbatore-641035</p>
            </div>
          </div>
          <div className="w-[80%] mt-4 flex items-center gap-3">
            <FontAwesomeIcon icon={faMobileScreen} color="black" size="2x" />
            <div>
              <p className="font-semibold">Phone</p>
              <a href="tel:+91 9894220900">+91 9894220900</a>
            </div>
          </div>
          <div className="w-[80%] mt-4 flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} color="red" size="2x" />
            <div>
              <p className="font-semibold">Email</p>
              <a href="mailto:lakshmiindustries2317@gmail.com">lakshmiindustries2317@gmail.com</a>
            </div>
            
          </div>
          <div className="w-[80%] mt-4 flex items-center gap-3">
            <FontAwesomeIcon icon={faWhatsapp} color="green" size="2x" />
            <div>
                <p>whatsapp</p>
                <a
                    href="https://wa.me/9894220900"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Chat on WhatsApp
                </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
