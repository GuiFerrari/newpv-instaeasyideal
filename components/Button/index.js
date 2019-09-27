import React, { Component } from "react";
import Link from "next/link";
import { ButtonCTA } from "./styles";

export default class Button extends Component {
  render() {
    return (
      <Link href="#">
        <ButtonCTA>{this.props.text}</ButtonCTA>
      </Link>
    );
  }
}
