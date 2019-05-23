import React from "react";
import { Card, CardActions, CardHeader, CardMedia,  CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import fetchHelloRequest from '../actions/data'
import logo from '../assets/img2.jpg';

const data = [
  { index: 0, text: "Hi" },
  { index: 1, text: "my" },
  { index: 2, text: "name" },
  { index: 3, text: "is" },
  { index: 4, text: "Developer" }
];

const handleClick = () => {
    // fetchHelloRequest();
};



function mapStateToProps(state) {
  return {
    message: state.data.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHello: () => dispatch(fetchHelloRequest())
  };
}

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title="Some Title"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}

    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src={logo} alt="" />
    </CardMedia>
    <CardActions>
      <FlatButton label="Previous" onClick={() => handleClick()} />
      <FlatButton label="Next" onClick={() => handleClick()} />
    </CardActions>
    <CardText expandable={true}>
      <ul>
        {data.map((ele, i) => (
          <li key={i}>{ele.text}</li>
        ))}
      </ul>
    </CardText>
  </Card>
);

export default CardExampleExpandable;
