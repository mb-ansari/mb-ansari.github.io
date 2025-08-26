import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [toast, setToast] = useState({ message: "", type: "", visible: false });
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const showToast = (message, type = "success") => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast({ message: "", type: "", visible: false }), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nl5vx2o", // Service ID
        "template_84zyj19", // Template ID
        formData,
        "EQlDYTRUpW-umI6wk" // Public Key / User ID
      )
      .then(() => {
        showToast("Message sent successfully!", "success");
        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        showToast("Failed to send the message.", "error");
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div>

      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box">
              <h3>Contact Info</h3>
              <p>
                Feel free to reach out for collaboration, opportunities, or any
                questions regarding my work.
              </p>
              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content">
                  <h4>My Location</h4>
                  <p>Iran, Tehran</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+98 930 635 4775</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>mahtabanssari@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <p>
                Have a project in mind or just want to say hello? Fill out the
                form below — I’d love to hear from you!
              </p>
              {toast.visible && (
                <div
                  className={`toast show`}
                  style={{
                    border: `2px solid ${toast.type === "success"
                      ? "#4CAF50"
                      : toast.type === "error"
                        ? "#f44336"
                        : "#2196F3"
                      }`,
                  }}
                >
                  <i
                    className={`bi ${toast.type === "success"
                      ? "bi-check-circle"
                      : toast.type === "error"
                        ? "bi-x-circle"
                        : "bi-info-circle"
                      }`}
                    style={{
                      marginRight: "8px",
                      color:
                        toast.type === "success"
                          ? "#4CAF50"
                          : toast.type === "error"
                            ? "#f44336"
                            : "#2196F3",
                    }}
                  ></i>
                  {toast.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
