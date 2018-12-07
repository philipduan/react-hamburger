import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

const logo = props => {
  return (
    <div className={classes.Logo} style={{ style: props.height }}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
