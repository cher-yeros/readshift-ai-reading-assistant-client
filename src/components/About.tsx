import React from "react";

export default function About() {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div>
          <span>Discover </span>
          <span className="description-title">Who We Are</span>
        </div>
      </div>

      <div className="container">
        <div className="row gx-5 align-items-center">
          {/* Left: Image */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="about-image position-relative">
              <img
                src="assets/img/about/about-portrait-1.webp"
                className="img-fluid rounded-4 shadow-sm"
                alt="Readshift Experience"
                loading="lazy"
              />
              <div className="experience-badge">
                <span className="years">AI</span>
                <span className="text">Tailored Reading</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="col-lg-6 mt-4 mt-lg-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="about-content">
              <h2>Transform the Way You Read</h2>
              <p className="lead">
                Readshift is an AI-powered reading experience that adapts any
                self-help book to fit your personal style, tone, and goals.
              </p>
              <p>
                Whether you're looking to stay motivated, absorb ideas
                conversationally, or shift your mindset — we personalize every
                chapter in real time based on how you think, feel, and learn
                best.
              </p>

              <div className="row g-4 mt-3">
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="feature-item">
                    <i className="bi bi-magic"></i>
                    <h5>Personalization Powered by AI</h5>
                    <p>
                      Adjust point of view, tone, and style instantly — making
                      content feel like it was written just for you.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                >
                  <div className="feature-item">
                    <i className="bi bi-chat-dots-fill"></i>
                    <h5>Conversational Assistance</h5>
                    <p>
                      Chat with our assistant to reshape content in your own
                      voice — friendly, academic, inspiring, or anything in
                      between.
                    </p>
                  </div>
                </div>
              </div>

              <a href="#services" className="btn btn-primary mt-4">
                Explore Our Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
