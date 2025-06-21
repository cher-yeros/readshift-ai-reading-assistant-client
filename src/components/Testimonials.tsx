"use client";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Larson",
      role: "Entrepreneur",
      image: "/assets/images/testimonials/client-5.jpg",
      review:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: "/assets/images/testimonials/client-1.jpg",
      review:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      image: "/assets/images/testimonials/client-2.jpg",
      review:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      image: "/assets/images/testimonials/client-3.jpg",
      review:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      image: "/assets/images/testimonials/client-4.jpg",
      review:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <div>
          <span>Check Our</span>
          <span className="description-title">Testimonials</span>
        </div>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonials-slider swiper init-swiper">
          <script type="application/json" className="swiper-config"></script>

          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-8">
                    <h2>Sed ut perspiciatis unde omnis</h2>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </p>
                    <p>
                      Beatae magnam dolore quia ipsum. Voluptatem totam et qui
                      dolore dignissimos. Amet quia sapiente laudantium nihil
                      illo et assumenda sit cupiditate. Nam perspiciatis
                      perferendis minus consequatur. Enim ut eos quo.
                    </p>
                    <div className="profile d-flex align-items-center">
                      <img
                        src="assets/img/person/person-m-7.webp"
                        className="profile-img"
                        alt=""
                      />
                      <div className="profile-info">
                        <h3>Saul Goodman</h3>
                        <span>Client</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="featured-img-wrapper">
                      <img
                        src="assets/img/person/person-m-7.webp"
                        className="featured-img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Testimonial Item --> */}
          </div>

          <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
