import React from 'react';

const NewProjectPage = () => {
    return (
    <div className=''>
        new projects
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


NewProjectPage.propTypes = {

};

NewProjectPage.defaultProps = {

};

export default NewProjectPage;
