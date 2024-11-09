import { FaCameraRetro, FaLaptopCode, FaMicrophoneAlt, FaPhoneAlt, } from "react-icons/fa"
import "../style/Services.css"
import { IoGameController } from "react-icons/io5"
import { GiLaptop } from "react-icons/gi"
import { MdEmail } from "react-icons/md"

function Services() {
  return (
    <main className="main">
        <div className="ser-container">
            {/* top div */}
            <div>
                <h1 className="title-ser">My Services</h1>

                <p className="des-ser">I can make any front-end website with responsiveness. You can contact me to get more details: </p>
              <div>
              <a href="mailto:azaansultanabdullah@gmail.com">   <MdEmail className="ser-email" />   </a>
              <a href="tel:+923082951200">   <FaPhoneAlt className="ser-telephone" />   </a>
              </div>
            </div>
            {/* bottom div */}
            <div className="boxes-con">
              <div className="box">
                <FaLaptopCode className="ser-icon" />
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span>
              </div>
              <div className="box">
                <GiLaptop className="ser-icon" />
                <h3>UI/UX Design</h3>
                <span>Mobile App, Website Design</span>
              </div>
              <div className="box">
                <FaMicrophoneAlt className="ser-icon" />
                <h3>Sound Design</h3>
                <span>Voice Over, Beat Making</span>
              </div>
              <div className="box">
                <IoGameController className="ser-icon" />
                <h3>Game Design</h3>
                <span>Character Design, Props & Objects</span>
              </div>
              <div className="box">
                <FaCameraRetro className="ser-icon" />
                <h3>PhotoGraphy</h3>
                <span>Portrait, Product Photo</span>
              </div>
              <div className="box">
                <h3 className="box-h">Advertising</h3>
                <p className="box-p">Looking to boost your business’s visibility and engage your target audience effectively?
                   I offer custom advertising strategies designed to elevate your brand’s impact.
                   Let’s work together to make your brand stand out!</p>
              </div>
            </div>
        </div>
    </main>
  )
}

export default Services