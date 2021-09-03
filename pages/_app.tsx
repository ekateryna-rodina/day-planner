import { ApolloClient, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useApollo } from "src/apollo";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const client: ApolloClient<any> = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
