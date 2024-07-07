import snipePng from '@/public/home.png'
import blogPng from '@/public/guineblog.png'
import launchPng from '@/public/launch.png'
import weatherPng from '@/public/weatherjungle.png'

export const navMenus = [{
    id: 0,
    icon: "👨‍💻",
    name: 'About',
    path: "/about"
}, {
    id: 1,
    icon: "💻",
    name: 'Projects',
    path: "/projects"
}, {
    id: 2,
    icon: "📝",
    name: 'Blog',
    path: "/blog"
}]

export const progLogos = [{
    id: 0,
    name: 'TypeScript',
    link: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000'
}, {
    id: 1,
    name: 'Next.js',
    link: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
}, {
    id: 2,
    name: 'Express',
    link: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
}, {
    id: 3,
    name: "MongoDB",
    link: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
}, {
    id: 4,
    name: "Tailwind",
    link: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000'
}, {
    id: 5,
    name: "Java",
    link: "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000"
}, {
    id: 6,
    name: "Node.js",
    link: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
}, {
    id: 7,
    name: 'React',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
}, {
    id: 8,
    name: "MySQL",
    link: "https://www.svgrepo.com/show/354099/mysql.svg"
}, {
    id: 9,
    name: "ShadCN",
    link: "https://seeklogo.com/images/S/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png?v=638421451470000000"
}]


export const projectsData = [{
    id: 0,
    projectName: "Course Sniper",
    description: "Course Sniper is a full-stack project that enhances local college class registration system with a feature-rich platform offering course search, tracking, and secure authentication, streamlining the process and improving the student experience. (Collaborated with other backend developers, assigned to implementing front-end and user authentication functionalities",
    imageLink: snipePng,
    githubLink: "https://github.com/charlesacosta163/unofficial-course-sniper",
    technologies: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000","https://cdn.glitch.me/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png", "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' ],
    demoLink: ""
}, {
    id: 1,
    projectName: "Guineblog",
    description: "Guineblog is a small full-stack blogging app that enables you to write blogs and post them into the database, as well as post comments to each blog and filter categories.",
    imageLink: blogPng,
    githubLink: "https://github.com/charlesacosta163/guineblog",
    technologies: ['https://cdn.worldvectorlogo.com/logos/next-js.svg', 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000', 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGyGJjtCLUjLuqETtVNOEezMt6HGKMwkB1A&s','https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000', 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'],
    demoLink: ""
}, {
    id: 2,
    projectName: "Launch Landing Page",
    description: "Launch is a sleek and modern website builder tailored for SaaS platforms, technology startups, and similar ventures. Developed as a frontend project during a hackathon, Launch aims to simplify the process of creating visually appealing and highly functional websites.",
    imageLink: launchPng,
    githubLink: "",
    technologies: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000'],
    demoLink: 'https://helpful-paletas-73c052.netlify.app/'
}, {
    id: 3,
    projectName: "WeatherJungle",
    description: "WeatherJungle is a weather app that utilizes the OpenWeather API, search for different cities and towns and display their weather status.",
    imageLink: weatherPng,
    githubLink: "",
    technologies: ['https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000', 'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000', 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000'],
    demoLink: 'https://icodethis.com/modes/design-to-code/318/submissions/257918'
}]