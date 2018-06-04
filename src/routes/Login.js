import React from 'react';
import {connect} from 'dva';
import LoginForm from '../components/LoginForm';
import styles from './Login.css'

import homebackground from '../assets/yay.jpg';
const backImage = {
  backgroundSize: '100% 100%', //记得这里100%
  background: `url(${ homebackground })`,
  // backgroundImage: 'url(' + homebackground + ')'
}

function IndexPage() {
  return (
    <div className={styles["back-img"]} style={backImage}>
      <LoginForm></LoginForm>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
