import Image from "next/image"
import "../style/Hero.css"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import "../style/About.css"
import Link from "next/link"

const About = () => {
  return (
    <div className="hero-container">
        <div className="hero-boxes-con">
            {/* left side */}
            <div>
                <Image className="hero-image" src={"/images/banner_bg.jpg"} width={200} height={200} alt="Profile" />
               
                <div className="social-icon">
                <Link href={""}><FaYoutube className="s-icon1" /></Link>
                <Link href={""}><FaFacebook className="s-icon2" /></Link>
                <Link href={""}><FaInstagram className="s-icon3" /></Link>
                </div>
                
            </div>
            {/* right side */}
            <div className="hero-right-div">
                <h1 className="title-hero">About Us</h1>
                <p className="des-hero">I am a student of GIAIC, pursing a course in Artificial Intelligence, Web 3.O, & Metaverse.
                     Passionate about technology and constantly learning new skills to stay up to date with the latest innovations.</p>
            </div>
        </div>
    </div>
  )
}

export default About