import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <div>
          <span>Check Our</span>
          <span className="description-title">Pricing</span>
        </div>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* <!-- Basic Plan --> */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="pricing-card">
              <div className="plan-header">
                <div className="plan-icon">
                  <i className="bi bi-box"></i>
                </div>
                <h3>Starter</h3>
                <p>For individuals just getting started</p>
              </div>
              <div className="plan-pricing">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">12</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Nullam accumsan
                    lorem
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Vestibulum
                    auctor dapibus
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Nulla consequat
                    massa
                  </li>
                  <li className="disabled">
                    <i className="bi bi-x-circle-fill"></i> In enim justo
                    rhoncus ut
                  </li>
                  <li className="disabled">
                    <i className="bi bi-x-circle-fill"></i> Curabitur
                    ullamcorper ultricies
                  </li>
                </ul>
              </div>
              <div className="plan-cta">
                <a href="#" className="btn-plan">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Basic Plan --> */}

          {/* <!-- Professional Plan --> */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="pricing-card popular">
              <div className="popular-tag">Most Popular</div>
              <div className="plan-header">
                <div className="plan-icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h3>Professional</h3>
                <p>For small teams and growing businesses</p>
              </div>
              <div className="plan-pricing">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">39</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Donec quam felis
                    ultricies
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Nam eget dui
                    etiam rhoncus
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Maecenas tempus
                    tellus
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Donec pede justo
                    fringilla
                  </li>
                  <li className="disabled">
                    <i className="bi bi-x-circle-fill"></i> Cras dapibus vivamus
                  </li>
                </ul>
              </div>
              <div className="plan-cta">
                <a href="#" className="btn-plan">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Professional Plan --> */}

          {/* <!-- Enterprise Plan --> */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="pricing-card">
              <div className="plan-header">
                <div className="plan-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h3>Enterprise</h3>
                <p>For large organizations and corporations</p>
              </div>
              <div className="plan-pricing">
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">79</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <div className="plan-features">
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Etiam sit amet
                    orci eget
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Pellentesque
                    posuere vulputate
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Quisque rutrum
                    aenean
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Fusce vulputate
                    eleifend
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Phasellus
                    viverra nulla
                  </li>
                </ul>
              </div>
              <div className="plan-cta">
                <a href="#" className="btn-plan">
                  Choose Plan
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Enterprise Plan --> */}
        </div>
      </div>
    </section>
  );
}
