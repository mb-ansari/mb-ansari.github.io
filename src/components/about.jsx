export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image">
                  <img
                    src="/assets/images/person/About.jpg"
                    alt="Profile Image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="profile-content">
                <h3>Mahtab Ansari</h3>
                <p className="profession">Frontend Web Developer</p>
                <div className="contact-links">
                  <a
                    href="mailto:mahtabanssari@gmail.com"
                    className="contact-item"
                  >
                    <i className="bi bi-envelope"></i> mahtabanssari@gmail.com
                  </a>
                  <a href="tel:+989306354775" className="contact-item">
                    <i className="bi bi-telephone"></i> +98 930 635 4775
                  </a>
                  <a
                    href="https://www.google.com/maps?q=Iran,+Tehran"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-geo-alt"></i>
                    Iran, Tehran
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahtabansari"
                    target="_blank"
                    className="contact-item"
                  >
                    <i className="bi bi-linkedin"></i>
                    linkedin.com/in/mahtabansari
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <div className="section-header">
                <span className="badge-text">Get to Know Me</span>
                <h2>From Complex Ideas to Seamless Experiences</h2>
              </div>
              <div className="description">
                <p>
                  I’ve worked on large-scale platforms in the banking sector,
                  where performance, security, and usability really matter. I
                  enjoy working with tools like React.js and Next.js. I care a
                  lot about the details—whether it’s perfecting a UI component
                  or making sure the experience feels right on every device.
                </p>
              </div>
              <div className="details-grid">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Specialization</span>
                    <span className="detail-value">Web Development</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Experience Level</span>
                    <span className="detail-value">
                      Experienced UI Developer (Mid-Level)
                    </span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Education</span>
                    <span className="detail-value">
                      Computer Software Engineering, UAST
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Languages</span>
                    <span className="detail-value">English, Persian</span>
                  </div>
                </div>
              </div>
              <div className="cta-section">
                <a href="/resume.pdf" target="_blank" className="btn btn-primary">
                  <i className="bi bi-download"></i> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
