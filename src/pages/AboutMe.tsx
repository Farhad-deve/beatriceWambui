import TitlePage from "../components/TitlePage/TitlePage";

// Images
import codeIcon from '../assets/icons/code-icon.svg';
import appIcon from '../assets/icons/app-icon.svg';
import designIcon from '../assets/icons/ux-icon.svg';
import mentorIcon from '../assets/icons/mentor-icon.svg'

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col gap-1r">
        <TitlePage>ABOUT ME</TitlePage>

        <div className="flex flex-col gap-1r">
          <p className="font-f-Raleway font-500 leading-150p">
            Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
            full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
            My journey in the world of web development has been nothing short of exhilarating, and 
            I constantly strive to enhance my skills and embrace emerging trends in the industry.
          </p>

          <div className="flex flex-col gap-1-5r">
            <h1 className="font-f-Poppins font-500">What I do!</h1>

            <div className="grid lg-grid-cols-2 gap-1-5r">
              <div className="py-1r px-1r md-px-1-5r rounded-20px bg-light-orange-2 flex flex-col items-start gap-0-5r justify-center">
                <h3 className="font-600 font-f-Poppins flex items-center gap-0-5r">
                  <img src={codeIcon} alt="Web Development" />
                  Web Development
                </h3>

                <p className="font-f-Raleway leading-150p">
                  As a developer, I find myself most 
                  captivated by the power and flexibility of 
                  NEXT.js. I'm always eager to dive into new
                  projects that leverage NEXT.js and 
                  discover innovative ways to create fast, 
                  scalable, and user-friendly applications.
                </p>
              </div>

              <div className="py-1r px-1r md-px-1-5r rounded-20px bg-light-gray-2 flex flex-col items-start gap-0-5r justify-center">
                <h3 className="font-600 font-f-Poppins flex items-center gap-0-5r">
                  <img src={appIcon} alt="App Development" />
                  App Development
                </h3>

                <p className="font-f-Raleway leading-150p">
                  With a focus on user-centric design and
                  cutting-edge technologies, I thrive on 
                  building intuitive and efficient apps 
                  that make a positive impact on people's 
                  lives. Let's turn ideas into reality and 
                  shape the future together.
                </p>
              </div>

              <div className="py-1r px-1r md-px-1-5r rounded-20px bg-light-gray-2 flex flex-col items-start gap-0-5r justify-center">
                <h3 className="font-600 font-f-Poppins flex items-center gap-0-5r">
                  <img src={designIcon} alt="UI/UX Designing" />
                  UI/UX Designing
                </h3>

                <p className="font-f-Raleway leading-150p">
                  Crafting visually appealing and intuitive user
                  interfaces that offer a delightful user 
                  experience is something I'm truly fanatic 
                  about.
                </p>
              </div>

              <div className="py-1r px-1r md-px-1-5r rounded-20px bg-light-orange-2 flex flex-col items-start gap-0-5r justify-center">
                <h3 className="font-600 font-f-Poppins flex items-center gap-0-5r">
                  <img src={mentorIcon} alt="Mentorship" />
                  Mentorship
                </h3>

                <p className="font-f-Raleway leading-150p">
                  I have also found great joy in sharing my 
                  knowledge with others. Being a technical 
                  mentor allows me to give back to the 
                  community that has supported me 
                  throughout my career. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
