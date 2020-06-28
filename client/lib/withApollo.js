import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const dev = process.env.NODE_ENV !== "production";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: dev
        ? "http://localhost:1337/graphql"
        : "http://api.parafia.adrian-domanski.pl/graphql",
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
