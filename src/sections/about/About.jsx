import skeleton from "./../../assets/skeletonButterfly.png";
import TextBox from "./../../common/textBox/TextBox";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="left-wrapper">
        <div className="portrait"></div>

        <TextBox
          title="About Me"
          text="Hello! I'm Jakob, a passionate Developer based in Switzerland. I specialize in Frontend Web Development. With a focus on creativity and detail, I transform ideas into captivating designs."
        />
        <TextBox
          title="Characteristics"
          text="Living amidst the Swiss Alps, I'm a 19-year-old with a diverse range of interests. From design, art, and creative pursuits to web development and neurology, my curiosity knows no bounds. I find joy in programming, fencing, skiing, and exploring the great outdoors with friends. Music, especially playing the Hammered Dulcimer, and nurturing plants are my cherished pastimes. Passion drives my every endeavor."
        />
      </div>
      <div className="right-wrapper">
        <div className="title">
          <div className="box">
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper">Hello, I’m</div>
                <div className="div">and I’m a</div>
                <div className="text-wrapper-2">Jakob Löhrer</div>
                <div className="text-wrapper-3">Frontend Developer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="whatDrivesMe-wrapper">
          <div className="dieText">"I'm going to die one day"</div>
          <TextBox text="This simple truth fuels my passion. Aware of life's brevity, I'm driven to experience, create, and innovate. Every moment matters, and I'm committed to making the most of my time by embracing challenges and exploring endless possibilities." />
        </div>
        <div className="image-wrapper">
          <img src={skeleton} alt="Skeleton" />
        </div>
      </div>
    </div>
  );
};

export default About;
