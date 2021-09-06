//Packages
import React from 'react';

//components
import {Header, Screen} from '../components';


export default function PersonajesScreen({navigation}: any) {

  return (
    <Screen>
      <Header
        title="Personajes"
        actionLeft={() => navigation.openDrawer()}
        navigation={navigation}
      />
    </Screen>
  );
}


/**
 * 
 * 
 * //graphql
import {gql, useQuery} from '@apollo/client';

 * const GET_PERSONAJES = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        type
        species
        gender
        image
      }
    }
  }
`;

const {loading, error, data} = useQuery(GET_PERSONAJES);

  if (loading) {
    return <ActivityIndicator color="blue" />;
  }

  if (error) {
    return <Text>Error loading data</Text>;
  }

 */