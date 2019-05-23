import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import styles from "./Carousel.css";
import { fetchHelloRequest } from "../actions/data";
import MyCard from "./MyCard";




class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHello();
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2 >Carousel</h2>
          <a className={styles.logo} />
          <div className={styles.carousel}>
            <MyCard />
          </div>
        </div>
      </div>
    );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
