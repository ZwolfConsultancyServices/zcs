import React, { useState } from 'react';
import '../componentsCss/Techwww.css'

const Techwww = ({ setCurrentCategory }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <nav className='mt-4'>
      <h1 className='text-center '><strong>Technologies We Work With </strong></h1>
      <ul className='tech-list'>
        <li>
          <button
            className={` tech-button ${hoveredCategory === 'frontend' ? 'hovered' : ''}`}
            onClick={() => handleCategoryClick('frontend')}
            onMouseEnter={() => handleMouseEnter('frontend')}
            onMouseLeave={handleMouseLeave}
          >
            Front End
          </button>
        </li>
        <li>
          <button
            className={`tech-button ${hoveredCategory === 'backend' ? 'hovered' : ''}`}
            onClick={() => handleCategoryClick('backend')}
            onMouseEnter={() => handleMouseEnter('backend')}
            onMouseLeave={handleMouseLeave}
          >
            Back End
          </button>
        </li>
        <li>
          <button
            className={`tech-button ${hoveredCategory === 'mobile' ? 'hovered' : ''}`}
            onClick={() => handleCategoryClick('mobile')}
            onMouseEnter={() => handleMouseEnter('mobile')}
            onMouseLeave={handleMouseLeave}
          >
            Mobile
          </button>
        </li>
        <li>
          <button
            className={`tech-button ${hoveredCategory === 'cms' ? 'hovered' : ''}`}
            onClick={() => handleCategoryClick('cms')}
            onMouseEnter={() => handleMouseEnter('cms')}
            onMouseLeave={handleMouseLeave}
          >
            CMS
          </button>
        </li>
        <li>
          <button
            className={`tech-button ${hoveredCategory === 'database' ? 'hovered' : ''}`}
            onClick={() => handleCategoryClick('database')}
            onMouseEnter={() => handleMouseEnter('database')}
            onMouseLeave={handleMouseLeave}
          >
            Database
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Techwww;
