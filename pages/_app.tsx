import { ApolloClient, ApolloProvider } from "@apollo/client";
import "@atlaskit/css-reset/dist/bundle.css";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { useApollo } from "src/apollo";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/globals.scss";
const GlobalStyle = createGlobalStyle<{ fontSize: string }>`
html{
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}

body{
  background-color:#fff;
  min-height:100vh;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  font-size: ${(props) => props.fontSize}
}

`;

const theme = {
  secondary: "#178efc",
  primaryText: "#21130d",
  secondaryText: "rgba(0, 0, 0, 0.4)",
  gray: "rgba(0, 0, 0, 0.6)",
  dark: "#1d2c61",
  light: "#e0e4f6",
  primary: "#fd2e60",

  blue: "rgba(23, 141, 251, 255)",
  turquoise: "rgba(26, 194, 237, 255)",
  purple: "rgba(100, 46, 254, 255)",
  pink: "rgba(201, 46, 255, 255)",
};
export const Context = createContext({});
function MyApp({ Component, pageProps }: AppProps) {
  const client: ApolloClient<any> = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Context.Provider value={{}}>
        <GlobalStyle fontSize={"100%"} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Context.Provider>
    </ApolloProvider>
  );
}
export default MyApp;
