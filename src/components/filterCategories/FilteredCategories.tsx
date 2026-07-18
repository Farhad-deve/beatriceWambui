import { NavLink, useParams } from "react-router-dom";
import styles from "./filteredC.module.css";

// Images
import appDevelopment from "../../assets/images/app-development.png";
import blog from '../../assets/images/blog.png';
import design from '../../assets/images/ui-ux.png';
import mentorship from '../../assets/images/mentorship.png';
import webDevelopment from '../../assets/images/web-development.png';

const projects = [
  {
    id: 1,
    title: "Smart Bank App",
    category: "App Development",
    img: appDevelopment,
  },
  { id: 2, title: "NEXT.js", category: "Blog", img: blog },
  {
    id: 3,
    title: "Rental",
    category: "Design",
    img: design,
  },
  {
    id: 4,
    title: "Tech Mentor",
    category: "Mentorship",
    img: mentorship
  },
  {
    id: 5,
    title: "IdeaFlow",
    category: "Web Development",
    img: webDevelopment
  },
];

const filteredCategories = () => {
  const { category } = useParams();

  const filteredProjects = category
    ? projects.filter(
        (p) => p.category.toLowerCase().replace(/\s+/g, "-") === category,
      )
    : projects;

  return (
    <>
      <div className="font-f-Poppins flex flex-col gap-1-5r items-end">
        <nav className="">
          <ul className="font-500 flex flex-wrap gap-1r">
            <li>
              <NavLink
                to={"/portfolio"}
                end
                className={({ isActive }) => (isActive ? "text-red" : "text-gray-3")}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/portfolio/app-development"}
                className={({ isActive }) => (isActive ? "text-red" : "text-gray-3")}
              >
                App Development
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/portfolio/web-development"}
                className={({ isActive }) => (isActive ? "text-red" : "text-gray-3")}
              >
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/portfolio/design"}
                className={({ isActive }) => (isActive ? "text-red" : "text-gray-3")}
              >
                Design
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/portfolio/mentorship"}
                className={({ isActive }) => (isActive ? "text-red" : "text-gray-3")}
              >
                Mentorship
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={`grid lg-grid-cols-2 gap-1-5r w-full`}>
          {filteredProjects.map((project, index) => {
            const bgColor = index % 2 === 0 ? "#FFE3BF" : "#FFEED9";

            return (
              <div
                key={project.id}
                style={{ backgroundColor: bgColor }}
                className={`flex flex-col justify-between gap-0-5r p-0-5r lg-p-1r rounded-8px`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-8px"
                />
                <p className="text-dark-1">{project.category}</p>
                <h3 className="font-400">{project.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default filteredCategories;
