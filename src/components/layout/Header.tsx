"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a
          href="#hero"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/* Uncomment to use an image logo */}
          {/* <img src="assets/img/logo.webp" alt="Readshift Logo" /> */}
          <h1 className="sitename">Readshift</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link className="btn-getstarted" href="reading-assistat">
          Get Started
        </Link>
      </div>
    </header>
  );
}
