import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <div className="tech-marquee" role="img" aria-label="Java, Python, React, Node, MongoDB, AI and machine learning, blockchain"><div className="marquee-track" aria-hidden="true"><span>JAVA</span><i>✳</i><span>PYTHON</span><i>✳</i><span>REACT</span><i>✳</i><span>NODE</span><i>✳</i><span>MONGODB</span><i>✳</i><span>AI / ML</span><i>✳</i><span>BLOCKCHAIN</span><i>✳</i><span>JAVA</span><i>✳</i><span>PYTHON</span><i>✳</i><span>REACT</span><i>✳</i><span>NODE</span><i>✳</i><span>MONGODB</span><i>✳</i><span>AI / ML</span><i>✳</i><span>BLOCKCHAIN</span><i>✳</i></div></div>
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
        <section className="resume-cta" aria-label="Resume">
          <div className="container resume-inner"><p className="mono eyebrow">WANT THE FULL VERSION?</p><h2>More detail.<br /><em>One page.</em></h2><a href="https://www.canva.com/design/DAGVZJWvK1o/ebli4POOsND0NrXcUEmF8A/edit?utm_content=DAGVZJWvK1o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">VIEW RESUME <span aria-hidden="true">&rarr;</span></a></div>
        </section>
        <Contact />
      </main>
      <footer className="site-footer">
        <span className="footer-name">SATHVIK DANDU <small className="mono">CSE STUDENT · DEVELOPER · HYDERABAD, INDIA</small></span>
        <span>&copy; {new Date().getFullYear()}</span>
        <div><a href="https://github.com/Sathvik-Dandu" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sathvik-dandu/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="mailto:dsathvik204@gmail.com">Email</a></div>
      </footer>
    </div>
  );
}

export default App;
