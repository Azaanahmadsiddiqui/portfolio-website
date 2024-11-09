import Image from "next/image"
import "../style/Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-boxes-con">
            {/* left side */}
            <div>
                <Image className="hero-image" src={"/images/banner_bg.jpg"} width={200} height={200} alt="Profile"></Image>
            </div>
            {/* right side */}
            <div className="hero-right-div">
                <h1 className="title-hero">I am Azaan Ahmad Front-end Developer</h1>
                <p className="des-hero">My name is Azaan Ahmad. I am a boy. I am 15 years old. I am in matriculation. I am studying in computer-science.</p>
                 <button className="hero-btn">HIRE ME</button>
            </div>
        </div>
    </div>
  )
}

export default Hero