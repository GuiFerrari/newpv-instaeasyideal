import React, { Component } from "react";
import withAnalytics from "~/hocs/withAnalytics";
import { Title } from "../styles/style";

class Home extends Component {
  componentDidMount() {
    // window.onscroll = () => console.log("Oi");
  }

  render() {
    return <Title>Hello World</Title>;
  }
}

export default withAnalytics()(Home);
