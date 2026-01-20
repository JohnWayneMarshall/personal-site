import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>John Marshall</h2>
        <p>
          <a href="mailto:johnwayne100301@gmail.com">
            johnwayne100301@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m John Marshall, a University of Kentucky graduate with dual
        B.S. degrees in Computer Science and Computer Engineering. I&apos;m
        currently a Junior Developer (Full-Stack / AI) at IYKYKnow AI, where I
        build lesson-aware, context-gated chatbots and LMS-integrated AI
        features using TypeScript/JavaScript, Python, React/Next.js, and
        FastAPI.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">&copy; JM <Link to="/">temp.com</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
