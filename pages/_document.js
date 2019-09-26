import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from "../src/styles/global";
import Header from "../components/Header";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{this.props.styleTags}</style>
        </Head>
        <body>
          <GlobalStyle />
          <Header />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
