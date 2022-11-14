import Styles from "./Styles.module.css";
import { Link } from "react-scroll";
import MOHD_UMAR_Resume from "../download/MOHD_UMAR_Resume.pdf"

const Navbar = () => {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain;charset=utf-8}",
    });
    element.href = "../download/MOHD_UMAR_Resume.pdf";
    element.download = "MOHD_UMAR_Resume.pdf";
    element.click();
  };
  const scroll = (event) => {
    const name = event.target.name;
    const anchor = document.querySelector(name);
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={Styles.navbar}>
      <div>MOHD UMAR</div>
      <div>
        <div className={Styles.buttonParent}>
          <Link className={Styles.links} name="#home" onClick={scroll}>
            HOME
          </Link>
          <Link className={Styles.links} name="#about" onClick={scroll}>
            ABOUT
          </Link>
          <Link className={Styles.links} name="#skills" onClick={scroll}>
            SKILLS
          </Link>
          <Link className={Styles.links} name="#project" onClick={scroll}>
            PROJECTS
          </Link>
          <Link className={Styles.links} name="#contact" onClick={scroll}>
            CONTACT
          </Link>
          <div className={Styles.button}>
            
              <a href={MOHD_UMAR_Resume} download="resume_umar">Resume</a>
              
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
