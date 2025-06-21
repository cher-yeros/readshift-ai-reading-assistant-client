export default function Services() {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <div>
          <span>Explore</span>
          <span className="description-title">What Readshift Offers</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="service-header">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="service-intro">
                <h2 className="service-heading">
                  <div>AI-Powered</div>
                  <div>
                    <span>Personalized Reading Experience</span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-summary">
                <p>
                  From real-time tone and style personalization to
                  conversational summaries and chapter-level transformation,
                  Readshift adapts every self-help book to you — not the other
                  way around.
                </p>
                <a href="#hero" className="service-btn">
                  Try Readshift Now
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Service: Reactive Personalization */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-card position-relative z-1">
              <div className="service-icon">
                <i className="bi bi-magic"></i>
              </div>
              <h3>Real-Time Personalization</h3>
              <p>
                Instantly change the tone, point of view, or writing style of
                any chapter to match your preferences. Personalized content is
                generated on demand using cutting-edge LLMs.
              </p>
            </div>
          </div>

          {/* Service: Chapter Streaming */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-card position-relative z-1">
              <div className="service-icon">
                <i className="bi bi-book-half"></i>
              </div>
              <h3>Streaming Personalization</h3>
              <p>
                Enjoy seamless reading with chapter-level personalization
                delivered as you scroll — powered by FastAPI and WebSockets for
                smooth, real-time updates.
              </p>
            </div>
          </div>

          {/* Service: Conversational Assistant */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-card position-relative z-1">
              <div className="service-icon">
                <i className="bi bi-chat-dots"></i>
              </div>
              <h3>Personalization Assistant</h3>
              <p>
                Use natural language to ask for style changes. “Make it feel
                like a friend is coaching me,” or “Give it a motivational
                voice.” Our assistant will transform the text live.
              </p>
            </div>
          </div>

          {/* Service: Contextual AI Summaries */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-card position-relative z-1">
              <div className="service-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h3>Contextual Summaries</h3>
              <p>
                Each personalized chapter includes a summary tailored to your
                reading goals and mindset — helping you retain and reflect more
                effectively.
              </p>
            </div>
          </div>

          {/* Service: Book Metadata & Goal Tracking */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-card position-relative z-1">
              <div className="service-icon">
                <i className="bi bi-journal-check"></i>
              </div>
              <h3>Book Metadata & Goal Sync</h3>
              <p>
                Every book you read is stored with your style, tone, and reading
                goals. Our system learns your preferences and helps you stay
                aligned with your personal development journey.
              </p>
            </div>
          </div>

          {/* Service: Feedback-Adaptive Personalization */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-card position-relative z-1">
              <div className="service-icon">
                <i className="bi bi-emoji-smile"></i>
              </div>
              <h3>Feedback-Driven Learning</h3>
              <p>
                Share your reactions, highlights, or confusion — and Readshift
                will adapt future personalizations to better suit your evolving
                mindset and learning style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
