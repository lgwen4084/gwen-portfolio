import React from 'react';
import Header from './header';
import Footer from './footer';
import './index.css';
const Projects = () => {
  return (
    <>
    <Header />


    <main>
    {/* About Hero */}
    <section class="hero-section about-hero">
      <div class="hero">
        <div class="hero-content">
          <h1>Welcome to Sunscript</h1>
          <h3><span class="highlight">More Than Just Code</span></h3>
          <p>
            I'm a creative technologist crafting smooth digital journeys.<br/>
            This is my story, my skills, and my mission.
          </p>
        </div>
        <div class="sun-shape">
          <div class="sun-core"></div>
        </div>
      </div>
    </section>

    {/* Deep About Section */}
    <section class="about-section deeper-about">
      <div class="about-inner">
        <div class="about-left">
          <img src="images/about-me.jpeg" alt="Sunscript" class="about-img" />
        </div>
        <div class="about-right">
        <h2>Who I Am</h2>
        <p> I’m Gwen, the developer behind Sunscript, with roots as a front-end engineer and two years of full-stack experience.
          I specialize in crafting responsive web interfaces and reliable back-end systems, blending intuitive design with solid architecture.
          Whether it’s a custom CMS, API-driven app, or data pipeline, I deliver clean code and seamless user experiences for small and medium-sized businesses. </p>









        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section class="mission-section">
      <h2>My Mission</h2>
      <p>
      My mission is to empower small and medium-sized businesses with dynamic web and app experiences—seamless transitions,
      intuitive design, and rock-solid performance; so they can engage users and drive real growth.
      </p>
      <div class="values-list">
    <div class="value-item">
      <h3>Scalability</h3>
      <p>Architecting front-end and back-end components that grow seamlessly under load.</p>
    </div>
    <div class="value-item">
      <h3>Security</h3>
      <p>Enforcing secure coding, encrypted data flows, and robust authentication methods.</p>
    </div>
    <div class="value-item">
      <h3>Automation</h3>
      <p>Streamlining builds, deployments, and testing with CI/CD pipelines and Infrastructure as Code.</p>
    </div>
  </div>
</section>

    {/* Technologies Section */}
    <section class="skills-section">
      <div class="skills-left">
        <h2>Technologies I Work With</h2>
        <div class="skills-icons">
        <div className="skills-row">
                <img src="/images/figma.svg" alt="Figma" />
                <img src="/images/ps.svg" alt="Photoshop" />
                <img src="/images/python.svg" alt="Python" />
                <img src="/images/html.svg" alt="HTML" />
                <img src="/images/c_plus.png" alt="C++" />
              </div>
              <div className="skills-row-2">
                <img src="/images/jsx.svg" alt="JSX" />
                <img src="/images/php.svg" alt="PHP" />
                <img src="/images/css.svg" alt="CSS" />
                <img src="/images/react.svg" alt="React" />
                <img src="/images/vue.svg" alt="Vue" />
              </div>
        </div>
      </div>
      <div class="skills-right">
        <h3>Engineering Meets Design</h3>
        <p>
          With a foundation in interface design and server logic, I strike the right balance between form, function, and efficiency.        </p>
      </div>
    </section>

    {/* Contact Section */}
    <section class="contact-section">
      <h2>Want to Work Together?</h2>
      <p class="contact-email">sunscript@gmail.com</p>
      <a href="contact.html" class="btn-secondary">Let's Talk</a>
    </section>
  </main>


    <Footer />
    </>
  );
};

export default Projects;
