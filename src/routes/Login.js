import React from 'react';
import { connect } from 'dva';

function Login() {
  return (
    <div>
      登录<input type="text"/>
      密码<input type="text"/>
    </div>
  );
}

Login.propTypes = {
};

export default connect()(Login);
