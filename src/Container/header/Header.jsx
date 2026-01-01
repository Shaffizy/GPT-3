import React, { useState, useEffect, useRef } from 'react'
import './header.css'  
import people from '../../assets/people.png' 
import ai from '../../assets/ai.png'

const Header = () => {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);
  const [maskStyle, setMaskStyle] = useState({});
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMouse({ x, y });
  };

  useEffect(() => {
    if (hovering) {
      setMaskStyle({
        WebkitMaskImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)`,
        maskImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)`,
      });
    } else {
      setMaskStyle({
        WebkitMaskImage:
          "radial-gradient(circle, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 90%)",
        maskImage:
          "radial-gradient(circle, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 90%)",
      });
    }
  }, [mouse, hovering]);

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div 
        className="gpt3__header-image"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <img 
          ref={imgRef}
          src={ai} 
          alt="ai"
          className="glow-img"
          style={maskStyle}
        />
      </div>
    </div>
  )
}

export default Header
