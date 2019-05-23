import React from "react";
import { Card, CardActions, CardHeader, CardMedia,  CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import logo from '../assets/img2.jpg';

const data = [
  { index: 0, text: "Hi" },
  { index: 1, text: "my" },
  { index: 2, text: "name" },
  { index: 3, text: "is" },
  { index: 4, text: "Developer" }
];


const CardExampleExpandable = (props) => (
  <Card>
    <CardHeader
      title= "Click to Expand"
      // subtitle=""
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardMedia
      overlay={<CardTitle title={props.content.title} subtitle={props.content.category} />}
    >
      <img src={logo} alt="" />
    </CardMedia>
    <CardActions>
      <FlatButton id="previous" disabled={props.content.id === 0} label="Previous" onClick={props.previousItem} />
      <FlatButton id="next" label="Next" onClick={props.nextItem} />
    </CardActions>
    <CardText expandable={true}>
      <ul>
        {props.content.options.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
    </CardText>
  </Card>
);


export default CardExampleExpandable;
