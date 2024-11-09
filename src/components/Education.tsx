import "../style/Education.css"

function Education() {
  return (
    <main className="edu-main">
       <div className="edu-text">
        <h1 className="edu-h">Education</h1>
        <p className="edu-p">Trusted by Professionals for Exceptional Quality and Service Our clients form various industries turst us to deliver top-notch quality and results. 
            Here's what they have to say about our work..</p>
       </div>
       {/* box 1 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Al-Hamd School Karachi</h1>
        <span>Student</span>
        </div>
       <div className="computer">
        <h1>Matriculation in Computer Science</h1>
        <p> My School name is Al-Hamd School Karachi and My Matriculation with Computer Science is pending.</p>
       </div>
       </div>
       {/* box 2 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Governor IT Initiative</h1>
        <span>Student</span>
        </div>
       <div className="computer">
        <h1>Certified Web 3.O and metaverse</h1>
        <p>At the Governor IT Initiative, students explore AI, Metaverse, and Blockchain technologies in an accessible manner. This free program is an excellent opportunity for those interested in these innovative fields.</p>
       </div>
       </div>
       {/* box 3 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Web Development</h1>
        <span>Completed</span>
        </div>
       <div className="computer">
        <h1>Certificate of web training</h1>
        <p>At Smit, students gain knowledge in web development, digital marketing, and freelancing from exceptional teachers. They offer valueable mentorship, equipping students with practical skills essential for career success.</p>
       </div>
       </div>
    </main>
  )
}

export default Education