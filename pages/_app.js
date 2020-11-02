import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Button } from "theme-ui";

const mdComponents = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
  button: (props) => <Button {...props}>{props.children}</Button>,
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
);
