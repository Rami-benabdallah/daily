import React from 'react';

const SettingsPage = () => {
    return (
    <div className=''>
        sETTINGS
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


SettingsPage.propTypes = {

};

SettingsPage.defaultProps = {

};

export default SettingsPage;
