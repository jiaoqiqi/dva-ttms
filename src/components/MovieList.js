import React from 'react';
import {connect} from 'dva';
import {Card, Col, Row,} from 'antd';

const {Meta} = Card;

class MovieList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.dispatch = props.dispatch;
  }

  render() {
    const props = this.props;
    const movieList = props.list.map((item, id) => {
      return <div key={id}>
        <Col span={6}>
          <Card
            hoverable
            style={{width: 240}}
            cover={<img alt="example"
                        src={item.imgPath}/>}
          >
            <Meta
              title={item.movieName}
              // description={item.movieName}
            />
          </Card>
        </Col>
      </div>

    })

    return <div style={{background: '#ECECEC', padding: '30px'}}>
      <Row gutter={16}>
        {movieList}
      </Row>
    </div>
  }
}


function mapStateToProps(state) {
  return {
    list: state.movieList.list,
    // example： example.js 的 namespace
  };
}



export default connect(mapStateToProps)(MovieList);

