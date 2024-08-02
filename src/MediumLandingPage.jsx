import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import medium from "./assets/medium.png";

function MediumLandingPage() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo" className="logo" />

        <nav>
          <a href="#">Our story</a>
          <a href="#">Membership</a>
          <a href="#">Write</a>
          <a href="##">Sign in</a>

          <button>Get Started</button>
        </nav>
      </header>

      <div className="small-box">
        <p>Be part of a better internet. <a href="#"> Get 20% off membership for a limited time</a>
</p>
      </div>

      <main>
        <div>
          <h1>
            Human <br />
            stories & ideas
          </h1>

          <p>A place to read, write and deepen your understanding</p>

          <button>Start reading</button>
        </div>

        <img src={medium} alt="" />
      </main>

      <hr />

      <footer>
        <a href="">Help</a><a href="">Status</a><a href="">About</a><a href="">Careers</a><a href="">Press</a><a href="">Blog</a><a href="">Privacy</a><a href="">Terms</a><a href="">Text to speech</a><a href="">Teams</a>
      </footer>
    </div>
  );
}

export default MediumLandingPage;
