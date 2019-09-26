import React, { Component } from "react";
import withAnalytics from "~/hocs/withAnalytics";
import { Title } from "../styles/style";
import Header from "../components/Header";
import DobraPrincipal from "../components/DobraPrincipal";

class Home extends Component {
  componentDidMount() {
    // window.onscroll = () => console.log("Oi");
  }

  render() {
    return (
      <>
        <Header onClick={this.props.onClick} />
        <DobraPrincipal />
      </>
    );
  }
}

export default withAnalytics()(Home);
