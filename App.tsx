import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigations/Stack';
import {AuthProvider} from './src/provider';


export default function App() {
  return (
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
  );
}

/**
 * 
 * import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com',
  cache: new InMemoryCache(),
});

<ApolloProvider client={client}>
 */