import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const DailyProgressBar = ({ initialPercentage, onChange }) => {
  const [percentage, setPercentage] = useState(initialPercentage);
  const progressBarRef = useRef(null);

  const handleDrag = (e) => {
    if (!progressBarRef.current) {
      console.error('ProgressBar reference not found');
      return;
    }

    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newPercentage = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);

    setPercentage(newPercentage);
    if (onChange) onChange(Math.round(newPercentage));

    onChange(newPercentage);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (e) => {
    handleDrag(e);
  };

  useEffect(() => {
    setPercentage(initialPercentage);
  }, [initialPercentage]);

  return (
    <div className="flex items-center space-x-4 w-full">
      <div
        ref={progressBarRef}
        className="relative w-full h-2 bg-gray-300 rounded cursor-pointer"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <div
        className="absolute top-0 left-0 h-2 bg-primary rounded transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium">{Math.round(percentage)}%</span>
    </div>
  );
};

DailyProgressBar.propTypes = {
  initialPercentage: PropTypes.number,
  onChange: PropTypes.func,
};

DailyProgressBar.defaultProps = {
  initialPercentage: 0,
  onChange: null,
};
