import React from 'react';

const entries = [
  { year: '2022', label: 'B.TECH / COMPUTER SCIENCE AND ENGINEERING', institution: 'Malla Reddy University, Hyderabad', result: 'CGPA 9.09' },
  { year: '2020', label: 'INTERMEDIATE / MPC', institution: 'Narayana Junior College, Kukatpally', result: '98%' },
  { year: '2007', label: 'SECONDARY SCHOOL', institution: 'Vignan Global Gen School, Madinaguda', result: '92.4%' }
];

const Education = () => (
  <section id="education" className="section education-section">
    <div className="container">
      <div className="section-heading"><p className="mono eyebrow">05 / EDUCATION</p><h2 className="section-title">The long<br /><em>build.</em></h2></div>
      <div className="education-timeline">
        {entries.map((entry, index) => <article className="education-row" key={entry.year}><span className="education-year mono">{entry.year}</span><span className="education-node" aria-hidden="true">{index === 0 ? '●' : '○'}</span><div><p className="mono education-label">{entry.label}</p><h3>{entry.institution}</h3></div><strong className="mono education-result">{entry.result}</strong></article>)}
      </div>
    </div>
  </section>
);

export default Education;
