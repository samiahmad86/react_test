import React, { Component } from "react";

import { Link } from "react-router";
import { connect } from "react-redux";
import styles from "./Carousel.css";
import { fetchHelloRequest, getAllItemsRequest } from "../actions/data";
import MyCard from "./MyCard";
import CheckboxExampleSimple from "./CheckboxExampleSimple";


class Carousel extends Component {
  state = {
    currentItemId: 0,
    reachedWardrobe: false,
    selectedItem : []
  }

  componentDidMount() {
    this.props.getAllItems();
  }

  getPreviousItem = () => {
      if (this.state.currentItemId - 1 >= 0) {
        this.setState( { reachedWardrobe: false, currentItemId: this.state.currentItemId - 1 } );
      }
  
  }

  setCheckedItems = (newItem) => {
    const newObj = this.state.selectedItem;
    newObj.push(newItem)
    this.setState({
      selected: [...this.state.selectedItem, newObj]
    })
  }

  getNextItem = () => {
    if (this.state.currentItemId + 1 < this.props.totalItem) {
      this.setState( { currentItemId: this.state.currentItemId + 1 } );
    }
    else {
      this.setState({reachedWardrobe: true})
    }
  }


  render() { 
    const allContent = this.props.contentData;
    let content;
    if (allContent.length === 0) {
      content = {
        title: "Default Value",
        category: "Default Category",
        options: [
          { index: 0, text: "Hi" },
          { index: 1, text: "my" },
          { index: 2, text: "name" },
          { index: 3, text: "is" },
          { index: 4, text: "Developer" }
        ]
      }
    } else {
      content = allContent[this.state.currentItemId];
    }
    return (
      <div>
        <div className={styles.container}>
          <h2 >Carousel</h2>
          <a className={styles.logo} />
          <div className={styles.carousel}>

            <MyCard content={content} 
                    previousItem = {this.getPreviousItem}
                    nextItem = {this.getNextItem}
            />
            <CheckboxExampleSimple items={this.props.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contentData: state.data.data,
    totalItem: state.data.data.length,
    selectedItem: state.data.selectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllItems: () =>  dispatch(getAllItemsRequest())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
