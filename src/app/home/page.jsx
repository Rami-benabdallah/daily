import React from 'react';

const HomePage = () => {
    return (
    <div className=''>
        Home
    </div>
  );
};

const modeToBgColor = {
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border border-dark',
};

const modeToIconFillColor = {
    dark: 'text-fill-light',
    light: 'text-fill-dark',
  };


HomePage.propTypes = {

};

HomePage.defaultProps = {

};

export default HomePage;
