import { NavLink, useParams } from 'react-router-dom'
import styles from './filteredC.module.css';

const projects = [
    { id: 1, title: 'Smart Bank App', category: 'App Development', img: 'assets/images/app-development.png' },
    { id: 2, title: 'NEXT.js', category: 'Blog', img: 'assets/images/blog.png' },
    { id: 3, title: 'Rental', category: 'Design', img: 'assets/images/ui-ux.png' },
    { id: 4, title: 'Tech Mentor', category: 'Mentorship', img: 'assets/images/mentorship.png' },
    { id: 5, title: 'IdeaFlow', category: 'Web Development', img: 'assets/images/web-development.png' },
]

const filteredCategories = () => {
    const { category } = useParams();

    const filteredProjects = category
        ? projects.filter(p => p.category === category)
        : projects;

  return (
    <>
        <div className='font-f-Poppins flex flex-col gap-1-5r'>
            <nav className=''>
                <ul className='font-500 flex flex-wrap gap-1r'>
                    <li>
                        <NavLink to={'/portfolio'} className={!category ? 'text-red' : ''}>All</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio/app-development'} className={category === 'App Development' ? 'text-red' : ''}>App Development</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio/web-development'} className={category === 'Web Development' ? 'text-red': ''}>Web Development</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio/design'} className={category === 'Design' ? 'text-red' : ''}>Design</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio/mentorship'} className={category === 'Mentorship' ? 'text-red' : ''}>Mentorship</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='grid gap-1-5r lg-grid-cols-2'>
                {filteredProjects.map((project, index) => {
                    const bgColor = index % 2 === 0 ? 'bg-light-orange-5' : 'bg-light-orange-2';

                    return (
                        <div key={project.id} className={`flex flex-col gap-0-5r p-0-5r lg-p-1r rounded-8px ${bgColor}`}>
                            <img src={project.img} alt={project.title} className='rounded-8px' />
                            <p className='text-dark-1'>{project.category}</p>
                            <h3 className='font-400'>{project.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default filteredCategories