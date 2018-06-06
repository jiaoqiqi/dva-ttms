import React from 'react';
import {connect} from 'dva';
import {Table,Progress,Button} from 'antd'

const columns = [{
  title: '放映时间',
  dataIndex: 'loadingTime',
  key: 'loadingTime',
  // render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '放映厅',
  dataIndex: 'movieHall',
  key: 'movieHall',
},{
  title: '座位情况',
  dataIndex: 'seatInfo',
  key: 'seatInfo',
  render : text =>  <Progress percent={text} size="small" />
}, {
  title: '现价',
  dataIndex: 'ticketPrice',
  key: 'ticketPrice',
}, {
  render: (text, record) => (
    <span>
      {/*<a href="javascript:;">Action 一 {record.name}</a>*/}
      {/*<Divider type="vertical"/>*/}
      {/*<a href="javascript:;">Delete</a>*/}
      {/*<Divider type="vertical"/>*/}
      {/*<a href="javascript:;" className="ant-dropdown-link">*/}
      {/*More actions <Icon type="down"/>*/}
      {/*</a>*/}
      {/*<button style={{width:100,height:50,backgroundColor:"red"}}>选座购票</button>*/}
      <Button type="danger" ghost>选座购票</Button>
    </span>
  ),
  title: 'Action',
  key: 'action',
}];

const data = [{
  key: '1',
  loadingTime:"10:35",
  movieHall : "8号厅",
  seatInfo : 40,
  ticketPrice : "29.00",
}, {
  key: '2',
  loadingTime:"11:35",
  movieHall : "7号厅",
  seatInfo : 30,
  ticketPrice : "29.89",
}, {
  key: '3',
  loadingTime:"12:35",
  movieHall : "4号厅",
  seatInfo : 80,
  ticketPrice : "29.00",
}];

class SelectTickets extends React.Component {

  render() {
    return <Table columns={columns} dataSource={data} />
  }
}


export default connect()(SelectTickets);
