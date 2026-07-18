import Tag from "../components/tag/Tag";
import TitlePage from "../components/TitlePage/TitlePage";

// Images
import educationIcon from '../assets/icons/education-icon.svg';
import experienceIcon from '../assets/icons/experience-icon.svg';

const Resume = () => {
  return (
    <>
      <div className="flex flex-col gap-1-5r">
        <TitlePage>Resume</TitlePage>

        <div className="flex flex-col justify-between lg-flex-row gap-1-5r">
          <div className="flex flex-col gap-1r flex-1">
            <h1 className="flex items-center gap-0-5r font-f-Poppins font-500 tracking-2px">
              <img src={educationIcon} alt="Education" />
              Education
            </h1>

            <div className="flex flex-col gap-0-5r p-1r rounded-20px bg-light-orange-5 font-f-Raleway">
              <p className="text-dark-1">2020-2021</p>
              <h3 className="font-600">Software Development </h3>
              <p className="font-500">Moringa School</p>
            </div>

            <div className="flex flex-col gap-0-5r p-1r rounded-20px bg-light-orange-2 font-f-Raleway">
              <p className="text-dark-1">2012-2016</p>
              <h3 className="font-600">Disaster Management</h3>
              <p className="font-500">Masinde Muliro Universiity </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-1r flex-1">
            <h1 className="flex items-center gap-0-5r font-f-Poppins font-500 tracking-2px">
              <img src={experienceIcon} alt="Experience" />
              Experience
            </h1>

            <div className="flex flex-col gap-0-5r p-1r rounded-20px bg-light-orange-5 font-f-Raleway">
              <p className="text-dark-1">2022 - Present</p>
              <h3 className="font-600">Technical Mentor</h3>
              <p className="font-500">Moringa School</p>
            </div>

            <div className="flex flex-col gap-0-5r p-1r rounded-20px bg-light-orange-5 font-f-Raleway">
              <p className="text-dark-1">2021-2022</p>
              <h3 className="font-600">Website Development</h3>
              <p className="font-500">Village 2 Nation</p>
            </div>
          </div>
        </div>

        <div className="bg-light-gray-1 py-1r px-1r flex flex-col justify-between lg-flex-row gap-2r">
            <div className="flex flex-col gap-1-5r">
              <h1 className="font-f-Poppins tracking-2px font-500">Work Skills</h1>
              <div className="flex flex-wrap gap-1-5r">
                <Tag>NEXT.js</Tag>
                <Tag>React.js</Tag>
                <Tag>HTML 5</Tag>
                <Tag>CSS 3</Tag>
                <Tag>Tailwind CSS</Tag>
                <Tag>Figma</Tag>
                <Tag>JavaScript</Tag>
                <Tag>Mongo DB</Tag>
                <Tag>SQL</Tag>
                <Tag>Angular</Tag>
                <Tag>Android</Tag>
                <Tag>Git</Tag>
              </div>
            </div>

            <div className="flex flex-col gap-1-5r">
              <h1 className="font-f-Poppins tracking-2px font-500">Soft Skills</h1>
              <div className="flex flex-wrap gap-1-5r">
                <Tag>Time Management</Tag>
                <Tag>Mentorship</Tag>
                <Tag>Impeccable Communication</Tag>
                <Tag>Flexibility</Tag>
                <Tag>Research</Tag>
                <Tag>Writing</Tag>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
