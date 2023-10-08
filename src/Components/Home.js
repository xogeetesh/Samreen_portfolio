import React from "react";
import image from "../images/bgcoding.png";
import { FaInstagram, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
const Home = ({ navbar: Navbar }) => {
  return (
    <>
      <div>
        <img className="left-photo" src={image} alt="" />
      </div>
      <div className="right-div">
        <h1>Samreen Jahan</h1>
        <p>
          I'm a passionate&nbsp;
          <span className="highlight">front-end developer</span>
        </p>

        <Navbar />

        <div className="icons">
          <a href="https://leetcode.com/Samreenjahan/">
            <FaExternalLinkAlt
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/samreen-jahan-99697a213/">
            <FaLinkedin
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
          <a href="mailto:jahansamreen370@gmail.com">
            <AiOutlineMail
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
          <a href="https://github.com/jahansamreen">
            <AiFillGithub
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
        </div>
      </div>
      <footer style={{ paddingRight: "10px" }}>
        Designed by <span style={{ color: "#33cc33" }}>Samreen Jahan</span>
      </footer>
    </>
  );
};
export default Home;
