import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      skin: "clean",
      loop: true,
      closeOnOutsideClick: true,
      openEffect: "fade",
      closeEffect: "fade",
    });

    return () => lightbox.destroy();
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Designed and developed two enterprise-level banking platforms: a
          responsive Internet Banking system and a modern PWA for mobile
          banking. Click on each project to explore features, technologies, and
          UI highlights.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row">
            <div className="col-lg-12">
              <div
                className="row gy-4 portfolio-container isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-photography">
                  <div className="portfolio-wrap">
                    <img
                      src="/assets/images/portfolio/IB-login.png"
                      className="img-fluid"
                      alt="Internet Bank"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <h4>Internet Bank</h4>
                        <div className="portfolio-links">
                          <a
                            href="/assets/images/portfolio/IB-login.png"
                            className="glightbox"
                            data-gallery="portfolio-gallery"
                            data-type="image"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <Link to="/ibProject" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-wrap">
                    <img
                      src="/assets/images/portfolio/pwamob.png"
                      className="img-fluid"
                      alt="Mobile Bank PWA"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <h4>Mobile Bank (PWA)</h4>
                        <div className="portfolio-links">
                          <a
                            href="/assets/images/portfolio/pwamob.png"
                            className="glightbox"
                            data-gallery="portfolio-gallery"
                            data-type="image"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <Link to="/pwaProject" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-wrap">
                    <img
                      src="/assets/images/portfolio/scm-home.png"
                      className="img-fluid"
                      alt="Mobile Bank PWA"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <h4>Smart Channel Management</h4>
                        <div className="portfolio-links">
                          <a
                            href="/assets/images/portfolio/scm-home.png"
                            className="glightbox"
                            data-gallery="portfolio-gallery"
                            data-type="image"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <Link to="/scmProject" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
