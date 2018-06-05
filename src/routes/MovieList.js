import React from 'react';
import {connect} from 'dva';
import MovieList from '../components/MovieList'

function IndexPage() {
  return (
    <MovieList></MovieList>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
