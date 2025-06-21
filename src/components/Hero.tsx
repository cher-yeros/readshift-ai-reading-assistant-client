"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row">
          {/* Left: Textual Content */}
          <div className="col-lg-7 content-col" data-aos="fade-up">
            <div className="content">
              <div className="agency-name">
                <h5>WELCOME TO READSHIFT</h5>
              </div>

              <div className="main-heading">
                <h1>
                  PERSONALIZED <br />
                  READING. POWERED BY AI.
                </h1>
              </div>

              <div className="divider"></div>

              <div className="description">
                <p>
                  Readshift transforms any self-help book into a deeply personal
                  experience. Choose your preferred tone, point of view, and
                  style — and let our AI tailor every chapter to resonate with
                  *you*. Whether you're seeking growth, clarity, or motivation,
                  Readshift adapts the content to fit your mindset and goals.
                </p>
              </div>

              <div className="cta-button">
                <a href="#services" className="btn">
                  <span>START PERSONALIZING</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual / Stats */}
          <div className="col-lg-5" data-aos="zoom-out">
            <div className="visual-content">
              <div className="fluid-shape">
                <img
                  src="assets/img/abstract/abstract-1.webp"
                  alt="AI-Powered Reading"
                  className="fluid-img"
                />
              </div>

              <div className="stats-card">
                <div className="stats-number">
                  <h2>10K+</h2>
                </div>
                <div className="stats-label">
                  <p>Books Personalized</p>
                </div>
                <div className="stats-arrow">
                  <a href="#about">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
