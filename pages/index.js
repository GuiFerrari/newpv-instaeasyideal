import React, { Component } from "react";
import withAnalytics from "~/hocs/withAnalytics";
import Head from "next/head";
import Header from "../components/Header";
import DobraPrincipal from "../components/DobraPrincipal";

class Home extends Component {
  componentDidMount() {
    // window.onscroll = () => console.log("Oi");
  }

  render() {
    return (
      <>
        <Head>
          <title>
            Instaeasy - App para ganhar seguidores no Instagram automaticamente
          </title>
        </Head>
        <Header onClick={this.props.onClick} />
        <DobraPrincipal />
      </>
    );
  }
}

export default withAnalytics()(Home);
