import SkillBar from "./skillBar";

const frontEndSkills = [
  {
    skill: "HTML/CSS",
    percent: "90%",
    tooltip:
      "Expert level knowledge of semantic HTML5 and modern CSS3 techniques",
  },
  {
    skill: "JavaScript",
    percent: "80%",
    tooltip:
      "Strong proficiency in ES6+, DOM manipulation, and modern frameworks",
  },
  {
    skill: "React",
    percent: "85%",
    tooltip:
      "Experience with React hooks, state management, and component architecture",
  },
  {
    skill: "Next.Js",
    percent: "60%",
    tooltip:
      "Experience with routing, data fetching (SSR/SSG), and scalable component architecture",
  },
];

const uiSkills = [
  {
    skill: "MaterialUI",
    percent: "75%",
    tooltip:
      "Skilled in Material UI component-based design, theming, and layout systems",
  },
  {
    skill: "Bootstrap",
    percent: "65%",
    tooltip: "Skilled in building responsive layouts",
  },
  {
    skill: "Tailwind",
    percent: "65%",
    tooltip: "Skilled in utility-first CSS framework",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="skills-category"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Front-end Development</h3>
              <div className="skills-animation">
                {frontEndSkills.map((s) => (
                  <SkillBar key={s.skill} {...s} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="skills-category"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>UI Frameworks & CSS Libraries</h3>
              <div className="skills-animation">
                {uiSkills.map((s) => (
                  <SkillBar key={s.skill} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
