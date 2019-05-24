import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import {sendDataRequest} from "../actions/data"

const styles = {
  block: {
    minWidth: "50%",
    padding: "50px 50px",
    backgroundColor: "white",
    overflow: "scroll"
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxExampleSimple extends React.Component {

  sendPostRequest = () => {
    this.props.postSelectedItems(this.props.selectedItem);
  }

  render() {
    let checkFlag = ((this.props.selectedItem.length === 0) ? true : false);
    return (
      <div style={styles.block}>
         {this.props.selectedItem.map((element, i) => (
            <Checkbox
              label={element}
              key={i}
              checked={true}
          />))}
          <RaisedButton onClick={this.sendPostRequest.bind(this)} style={{marginTop:"20px"}} disabled={checkFlag} label="Send"/>
              
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    selectedItem: state.data.selectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postSelectedItems: (data) =>  dispatch(sendDataRequest(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxExampleSimple);