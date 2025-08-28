import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Web Developer",
        "React Developer",
        "UI/UX Enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="hero-text">
                <h1>
                  Hi <span className="accent-text">There</span>
                </h1>
                <p className="lead">
                  I'm a <span className="typed" ref={typedRef}></span>
                </p>
                <p className="description">
                  I’m passionate about transforming complex ideas into simple,
                  clean, and responsive web experiences. I pay close attention
                  to the details—whether it’s refining a UI component or
                  ensuring the interface feels intuitive across all devices.
                  Constantly learning, continuously improving, and always ready
                  for the next challenge.
                </p>
                <div className="hero-actions">
                  <a href="#portfolio" className="btn btn-primary">
                    View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="hero-visual">
                <div className="profile-container">
                  <div className="profile-background"></div>
                  <img
                    src="/assets/images/person/profile-pic.jpg"
                    alt="Mahtab Ansari"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
