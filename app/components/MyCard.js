import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardMedia,  CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import logo from '../assets/img2.jpg';
import { connect } from "react-redux";
import Checkbox from 'material-ui/Checkbox';
import { ITEM_SELECTED} from '../actions/data';


class CardExampleExpandable extends Component {
  
  toggleCheck = (event, isInputChecked) => {

    this.props.onItemSelected(event.target.nextElementSibling.children[1].textContent,
      this.props.content.category)
  }
  
  
  render() {
    
  return(
    <Card>
      <CardHeader
        title= "Click to Expand"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardMedia
        overlay={<CardTitle title={this.props.content.title} subtitle={this.props.content.category} />}
      >
        <img src={logo} alt="" />
      </CardMedia>
      <CardActions>
        <FlatButton id="previous" disabled={this.props.content.id === 0} label="Previous" onClick={this.props.previousItem} />
        <FlatButton id="next" label="Next" onClick={this.props.nextItem} />
      </CardActions>
      <CardText expandable={true}>
         {<div>
           {this.props.content.options.map((element, i) => (
            <Checkbox
              label={element}
              key={i}
              checked={
                this.props.selectedItem.length === 0 ? false: 
                this.props.selectedItem.includes(element)}
              onCheck={this.toggleCheck}
          />))}
          </div>
          }
      </CardText>
    </Card>
  );
  }
};


function mapStateToProps(state) {
  return {
    selectedItem: state.data.selectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onItemSelected: (itemName, category) => dispatch({type: ITEM_SELECTED, itemName: itemName, 
    category: category}),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardExampleExpandable);


