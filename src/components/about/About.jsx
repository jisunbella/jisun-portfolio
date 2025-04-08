import { useState } from 'react';

import Skill from './Skill';
import Education from './Education';
import Etc from './Etc';

import SkillImg from '../../assets/skill.png';
import EducationImg from '../../assets/education.png';
import EtcImg from '../../assets/more.png';

const About = () => {
  const [selectedItem, setSelectedItem] = useState('skill');

  return (
    <section
      id="about"
      className="w-full h-screen mt-20 flex items-center justify-center"
    >
      <div className="container mx-auto px-48 py-4">
        <h3 className="text-center">ABOUT ME</h3>
        <div className="flex justify-between px-64 py-8">
          <button
            onClick={() => setSelectedItem('skill')}
            className={`${
              selectedItem === 'skill' ? 'bg-blue-100 bg-opacity-50' : ''
            } p-3 rounded-full`}
          >
            <img src={SkillImg} alt="skill" className="w-10 h-10" />
          </button>
          <button
            onClick={() => setSelectedItem('education')}
            className={`${
              selectedItem === 'education' ? 'bg-green-100 bg-opacity-50' : ''
            } p-3 rounded-full`}
          >
            <img src={EducationImg} alt="education" className="w-10 h-10" />
          </button>
          <button
            onClick={() => setSelectedItem('etc')}
            className={`${
              selectedItem === 'etc' ? 'bg-purple-100 bg-opacity-50' : ''
            } p-3 rounded-full`}
          >
            <img src={EtcImg} alt="etc" className="w-10 h-10" />
          </button>
        </div>
        <div>
          {selectedItem === 'skill' && <Skill />}
          {selectedItem === 'education' && <Education />}
          {selectedItem === 'etc' && <Etc />}
        </div>
      </div>
    </section>
  );
};

export default About;
