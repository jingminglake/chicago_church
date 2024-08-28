import React, {useEffect} from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="about-frame"> 
      <div
        style={{ backgroundImage: `url(${"/assets/home/top.webp"})` }}
        opacity={0.5}
        className='home-top'
      >

      <div>Test</div>

      </div>
    </div>

  );
};

export default About