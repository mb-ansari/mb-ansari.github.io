import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

const ProjectDetails = ({
  title,
  breadcrumbs,
  projectInfo,
  images,
  features,
}) => {
  const infoRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState("auto");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Set slider height equal to project info height
    const updateHeight = () => {
      if (infoRef.current) {
        setSliderHeight(`${infoRef.current.offsetHeight}px`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Init GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
      loop: true,
    });

    return () => {
      window.removeEventListener("resize", updateHeight);
      lightbox.destroy();
    };
  }, []);

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{title}</h1>
          <nav className="breadcrumbs">
            <ol>
              {breadcrumbs.map((item, i) => (
                <li key={i} className={item.current ? "current" : ""}>
                  {item.link ? (
                    <a href={item.link}>{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Portfolio Details */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Image Slider */}
            <div className="col-lg-6">
              <div
                className="portfolio-details-slider"
                style={{ height: sliderHeight }}
              >
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true }}
                  slidesPerView={1}
                  spaceBetween={20}
                  style={{ height: "100%" }}
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="image-container position-relative">
                        <img
                          src={img}
                          alt={`Portfolio Image ${i}`}
                          className="img-fluid portfolio-image"
                          loading="lazy"
                        />
                        <div className="overlay d-flex justify-content-center align-items-center">
                          <a
                            href={img}
                            className="glightbox"
                            data-gallery="portfolio-gallery"
                            data-type="image"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="portfolio-info h-100"
                ref={infoRef}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h3>Project Information</h3>
                <ul>
                  <li>
                    <strong>Category :</strong> {projectInfo.category}
                  </li>
                  <li>
                    <strong>Client :</strong> {projectInfo.client}
                  </li>
                  <li>
                    <strong>Project Date :</strong> {projectInfo.date}
                  </li>
                  <li>
                    <strong>Project URL :</strong>{" "}
                    {projectInfo.publicUrl ? (
                      <a
                        href={projectInfo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectInfo.url}
                      </a>
                    ) : (
                      <span>{projectInfo.url}</span>
                    )}
                  </li>
                  <li>
                    <strong>Project Overview :</strong>
                    <p className="projectOverView">{projectInfo.overview}</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="col-lg-12">
              <div
                className="portfolio-description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="features mt-4">
                  <h3>Key Features</h3>
                  <div className="row gy-3">
                    {features.map((feature, i) => (
                      <div className="col-md-6" key={i}>
                        <div
                          className="feature-item"
                          data-aos="fade-up"
                          data-aos-delay={400 + i * 100}
                        >
                          <i className={feature.icon}></i>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
