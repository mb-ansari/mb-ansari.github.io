const experiences = [
  {
    title: "Front-end Developer",
    period: "Mar 2022 - Present",
    company: "Danesh Refah Pardis. (DRP CO) - Full-time",
    description: `Contributed as a Front-end Developer in refactoring and modernizing Refah Bank’s Internet Banking system, enhancing performance, security, and user experience. Collaborated in designing and implementing responsive, scalable interfaces and reusable components to deliver a seamless digital banking experience for both individual and corporate users.`,
    achievements: [
      'Refactored a legacy internet banking system using Next.js and Material-UI, significantly enhancing user experience (UX) and customer satisfaction.',
      'Developed scalable, data-driven forms with complex validations using reusable components, minimizing code duplication.',
      'Implemented JWT-based client-side authentication, including session timeout, strengthening security and protecting sensitive routes.',
      'Optimized front-end performance for heavy reports by implementing pagination and lazy loading, enabling smooth rendering of large datasets.',
      'Delivered tailored banking services for retail and corporate clients with secure role-based access, including payments, transfers, and reporting.',
      'Implemented customizable homepage services, enhancing user engagement while demonstrating scalable component design and modular architecture.',
      'Refactored state management with custom hooks, reducing unnecessary re-renders and improving maintainability.',
      'Applied targeted performance optimization techniques, delivering smoother interactions and faster load times.',
      'Strengthened application stability and improved user navigation through scalable state handling.'
    ],
  },
  {
    title: "Front-end Developer",
    period: "Jun 2021 - Jun 2022",
    company: "DPI Co. (Former IBM Representative) - Full-time",
    description: `Contributed as a Front-end Developer in designing and developing Refah Bank’s Progressive Web App (PWA) mobile banking platform, supporting a wide range of banking operations. Focused on creating a secure, responsive, and user-friendly experience through modern web technologies and best UI/UX practices. Collaborated with cross-functional teams to deliver high-quality features and improve accessibility, performance, and overall user engagement.`,
    achievements: [
      'Developed a Progressive Web App (PWA) mobile banking platform supporting 150+ banking operations.',
      'Built secure and responsive user interfaces with React.js and Bootstrap, focusing on Responsive Web Design.',
      'Collaborated closely with UI/UX designers and backend teams in an Agile Scrum environment to deliver high-quality features.',
      'Increased user adoption of accessibility features by 30% through implementing speech-to-text search and dark mode.',
      'Maintained optimal code style and a consistent project structure, achieving approximately 80% adherence to coding standards using customized ESLint, Prettier, and Code Reviews.',
      'Developed dynamic, data-driven forms with complex validations, adaptable to multiple data models, reducing user transaction errors by approximately 20%.',
      'Implemented client-side security using OTP and JWT authentication, enhancing fraud prevention and user account protection.'
    ],
  },
];

const education = [
  {
    degree:
      "Bachelor’s in Computer Software Engineering – Web Programming",
    period: "2020 - 2022",
    institution: "University of Applied Sciences"
  },
  {
    degree:
      "Associate’s in Computer Software Engineering – Programming",
    period: "2018 - 2020",
    institution: "University of Applied Sciences"
  },
];

const certifications = [{ name: "React.js - SEMATEC", year: "2020" }];

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="col-lg-8 ps-4 ps-lg-5">
          {/* Professional Experience */}
          <div className="resume-section" data-aos="fade-up">
            <h3>
              <i className="bi bi-briefcase me-2"></i>
              Professional Experience
            </h3>

            {experiences.map((exp, idx) => (
              <div className="resume-item" key={idx}>
                <h4>{exp.title}</h4>
                <h5>{exp.period}</h5>
                <p className="company">
                  <i className="bi bi-building"></i> {exp.company}
                </p>
                <p>{exp.description}</p>
                <p>{exp.responsibilities}</p>
                <h6 className="experience">Achievements:</h6>
                <ul>
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div
            className="resume-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>
              <i className="bi bi-mortarboard me-2"></i>
              Education
            </h3>
            {education.map((edu, idx) => (
              <div className="resume-item" key={idx}>
                <h4>{edu.degree}</h4>
                <h5>{edu.period}</h5>
                <p className="company">
                  <i className="bi bi-building"></i> {edu.institution}
                </p>
                <p>{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
