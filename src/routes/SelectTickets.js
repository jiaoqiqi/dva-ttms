import React from 'react';
import {connect} from 'dva';
import SelectTickets from "../components/SelectTickets"

function IndexPage() {
  return (
    <SelectTickets></SelectTickets>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
