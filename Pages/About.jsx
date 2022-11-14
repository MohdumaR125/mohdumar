import Styles from "../Components/Styles.module.css"
import code from "../download/code.gif"


const About = ()=>{

    
    return(
         <div id="about" className={Styles.aboutparent}>
               <h1>About Me</h1>
        <div  className={Styles.about}>
            <div><img src={code} alt="" /></div>
            <div>
                <ul>Hello, My name is Mohd Umar and I enjoy creating thing through my code.</ul>
                <ul><b>Full Stack Developer</b> with hands on experience in building React Apps. Works efficiently both in frontend as well as backend with good problem solving skills.</ul>
                <ul>Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology.</ul>
                <ul>I build three major projects. Learned alot about Team work, Time Management and collaboration.</ul>
            </div>
        </div>
         </div>
    )
}
export default About