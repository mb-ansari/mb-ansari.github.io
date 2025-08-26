const experiences = [
  {
    title: "Frontend Web Developer",
    period: "Mar 2022 - Present",
    company: "Danesh Refah Pardis. Full-time",
    description: `Contributed as a key frontend team member in developing the internet banking platform for Refah Bank,
    recognized as Iran’s first social bank. The platform includes both individual and corporate banking
    portals and provides a wide range of electronic services.`,
    responsibilities: `Developed responsive, scalable interfaces using React.js, Next.js, and Material-UI with a strong focus
    on Responsive Web Design. Built and optimized components for features such as fund transfers, card services, identified deposits,
    bill/insurance payments, check management, account opening, and more.`,
    achievements: [
      "Helped launch a modern, user-centric internet banking platform supporting both personal and corporate users.",
      "Delivered secure, accessible, and intuitive user experiences across devices.",
      "Contributed to one of the most comprehensive digital banking platforms in Iran’s financial sector.",
    ],
  },
  {
    title: "Frontend Web Developer",
    period: "Jul 2021 - Mar 2022",
    company: "Dadeh Pardazi Iran",
    description: `Contributed to developing a mission-critical Progressive Web App (PWA) for Iran’s banking sector.`,
    responsibilities: `Built secure, responsive interfaces using React.js and Bootstrap with a focus on Responsive Web Design.
    Collaborated with UI/UX and backend teams within an Agile Scrum framework to deliver high-quality features.
    Supported a mobile banking PWA handling 150+ financial operations, including fund transfers and account management.`,
    achievements: [
      "Designed and implemented a scalable, secure online banking UI offering diverse services such as fund transfers, check management, and special payment orders.",
      "Delivered smooth, accessible user experiences aligned with modern usability and security standards.",
    ],
  },
];

const education = [
  {
    degree:
      "Bachelor's degree, Computer Software Engineering - Web Programming",
    period: "2018 - 2022",
    institution: "University of Applied Science and Technology",
    grade: "Grade: 19.18 / 20 (approx. 3.9 / 4 GPA)",
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
                <h6 className="experience">Key Responsibilities & Projects:</h6>
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

          {/* Certifications */}
          <div
            className="resume-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>
              <i className="bi bi-award me-2"></i>
              Certifications
            </h3>
            {certifications.map((cert, idx) => (
              <div className="resume-item" key={idx}>
                <h4>{cert.name}</h4>
                <h5>{cert.year}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
