import React from "react";
import Cards from "./style/cards/cards";
import Header from "./style/header";
import Posts from "./style/posts/posts";
import "./style/cards/footer.css";

function App() {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "lightblue" }}>
        <Posts />
        <Cards />

        <footer>
          <div>
            <div className="last">
              <div className="foot">EDYODA</div><br></br>
              <div>1st Floor,<br></br>
                Gopalan Millennium Tower,<br></br>
                ITPL Main Rd, Brookefield,<br></br>
                Bengaluru, Karnataka-560037,<br></br>
                India</div>
            </div>
            <div className="last">
              <div className="foot">EDYODA</div><br></br>
              <div>About Us</div>
              <div>Careers</div>
              <div>Contact Us</div>
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
            </div>
            <div className="last">
              <div className="foot">RESOURCES</div><br></br>
              <div>Learning Paths</div>
              <div>Courses</div>
              <div>Learning Videos</div>
              <div>Educators</div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
