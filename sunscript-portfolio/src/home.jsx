import React from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import './index.css';
const Home = () => {
  return (
    <>
    <Header />
    <main>
          <div className="hero">
            <div className="hero-content">
              <h1>Hello!</h1>
              <h3>
                I'm <span className="highlight">Sunscript</span>
              </h3>
              <p>
                I’m a software engineer with a passion for turning creative ideas into smart,<br />
                user-friendly digital experiences. I blend technical skill with an eye for design,<br />
                building websites and apps and systems that don’t just function—they delight.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="resume.pdf" className="btn-secondary" download>Download Resume</a>
              </div>
              <div className="social-icons">
                <a href="https://instagram.com" aria-label="Instagram">
                  <img src="/images/instagram.png" alt="Instagram" />
                </a>
                <a href="https://facebook.com" aria-label="Facebook">
                  <img src="/images/facebook.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <img src="/images/twitter.png" alt="Twitter" />
                </a>
                <a href="https://pinterest.com" aria-label="Pinterest">
                  <img src="/images/pinterest.png" alt="Pinterest" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <img src="/images/linkedin.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <motion.div className="sun-shape" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
              <div className="sun-core"></div>
            </motion.div>
          </div>

    {/* Skills Section */}

    <section id="skills" class="skills-section">
      <div class="skills-left">
        <h2>Check My Skills And<br />Using Source</h2>
        <div class="skills-icons">
          <div class="skills-row">
            <img src="images/figma.svg" alt="Figma" />
            <img src="images/ps.svg" alt="Photoshop" />
            <img src="images/python.svg" alt="Python" />
            <img src="images/html.svg" alt="HTML" />
            <img src="images/c_plus.png" alt="C++" />
          </div>
          <div class="skills-row-2">
            <img src="images/jsx.svg" alt="JSX" />
            <img src="images/php.svg" alt="PHP" />
            <img src="images/css.svg" alt="CSS" />
            <img src="images/react.svg" alt="React" />
            <img src="images/vue.svg" alt="Vue" />
          </div>
        </div>
      </div>
      <div class="skills-right">
        <h3>We Believe That<br />Good Design Changes<br />The World</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.</p>
        <a href="services.html" class="read-more-btn">Read More</a>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" class="projects-section">
      <h2>Take A Look At My Recent Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <div class="project-image" role="img" aria-label="Become Solid Project Preview">
            <img src="./images/example.png" alt="example" />
          </div>
          <h3>Become Solid</h3>
        </div>
        <div class="project-card">
          <div class="project-image" role="img" aria-label="Solare Skateball Project Preview">
            <img src="./images/example2.png" alt="" />
          </div>
          <h3>Solare Skateball</h3>
        </div>
        <div class="project-card">
          <div class="project-image" role="img" aria-label="Devos Outdoors Project Preview">
            <img src="./images/example3.png" alt=""/>
          </div>
          <h3>Devos Outdoors</h3>
        </div>

        <div class="project-card">
          <div class="project-image" role="img" aria-label="Odr Shis Project Preview">
            <img src="./images/example4.png" alt=""/>
          </div>
          <h3>Odr Shis</h3>
        </div>
        <div class="project-card">
          <div class="project-image" role="img" aria-label="Tide Ocean Project Preview">
            <img src="./images/example5.webp" alt="" />
          </div>
          <h3>Tide Ocean</h3>
        </div>
        <div class="project-card">
          <div class="project-image" role="img" aria-label="Barbell Apparel Project Preview">
            <img src="./images/example6.png" alt="" />
          </div>
          <h3>Barbell Apparel</h3>
        </div>
      </div>
      <a href="#projects" class="btn-primary">View All Works</a>
    </section>

    {/* Services Section */}
    <section id="services" class="services-section">
      <h2>Services I Offer</h2>
      <div class="services-layout">
        <div class="services-list">
          <div class="service-item"><span class="category">DEVELOPMENT</span><br /><span class="title">WEBSITES</span></div>
          <div class="service-item"><span class="category">DEVELOPMENT</span><br /><span class="title">DATA ANALYTICS</span></div>
          <div class="service-item"><span class="category-green">ARTWORK</span><br /><span class="title-green">BRANDINGS</span></div>
          <div class="service-item"><span class="category">DEVELOPMENT</span><br /><span class="title">UX/UI DESIGN</span></div>
          <div class="service-item"><span class="category">DEVELOPMENT</span><br /><span class="title">APP DEVELOPMENT</span></div>
        </div>
        <div class="services-visual">
          <div class="tile large">
            <img src="images/gallery-1.jpg" alt="Gallery"/> </div>
          <div class="tile small top">
            <img src="images/gallery-2.jpg" alt="Gallery"/> </div>
          <div class="tile small bottom">
            <img src="images/gallery-3.jpg" alt="Gallery"/> </div>
          <div class="tile medium">
            <img src="images/gallery-4.jpg" alt="Gallery"/> </div>
      </div>
      </div>
    </section>

        {/* About Section */}
    <section id="about" class="about-section">
        <div class="about-inner">
          <div class="about-left">
            <h2>About Me</h2>
            <img src="images/sun-shape-2.png" alt="Sun Graphic" class="about-img" />
          </div>
          <div class="about-right">

            <p>
              Software Engineer with 2 years of experience in full-stack web development and embedded software.
              Graduated in Acoustical Engineering, with a solid foundation in logic and problem-solving. In addition to professional courses, I am currently pursuing a degree in Computer Science.
              I love learning new things and am passionate about technology and creative solutions to solve real-world problems.
            </p>
          </div>
        </div>
      </section>
      <section id="expertise" class="expertise-section">
        <div class="container">
          <div class="expertise-wrapper">
            <div class="expertise-left">
              <h2><span>What</span> I Do Best?</h2>
            </div>
            <div class="expertise-right">
              <div class="expertise-featured">
                <img src="images/icon-branding.png" alt="Icon" />
                <div class="expertise-text">
                  <h3>Branding And Identity Development</h3>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters.
                  </p>
                </div>
              </div>
              <div class="expertise-item">
                <img src="images/icon-app.png" alt="App Design Icon" />
                <h4>App Design & Development</h4>
              </div>
              <div class="expertise-item">
                <img src="images/icon-web.png" alt="Web Icon" />
                <h4>Web And Digital Experience Design</h4>
              </div>
              <div class="expertise-item">
                <img src="images/icon-styleguide.png" alt="Style Guide Icon" />
                <h4>Visual Style Guide</h4>
              </div>
              <div class="expertise-item">
                <img src="images/icon-social.png" alt="Social Media Icon" />
                <h4>Social Media Management</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    {/* Contact Section */}
    <section id="contact" class="contact-section">

      <h2>Let's Work Together</h2>
      <p class="contact-email">sunscript@mail.com</p>
      <a href="contact.html" class="btn-secondary">Get Started</a>
    </section>

    {/* Get In Touch */}
    <section class="get-in-touch get-in-touch-hero">
      <div class="hero-overlay">
        <div class="content">
          <h2>Get In Touch With Me</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <form class="newsletter-form">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Mail id here" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    </main>
    <Footer />
    </>
  );
};

export default Home;
