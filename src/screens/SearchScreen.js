import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import api from '../../api/api';

const SearchScreen = () => {
  const [term, SetTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await api.get('/', {
        params: {
            id: term
        }
    });
    setResults(response.data);
  }

  return (
    <View>
    {console.log(results)}
      <SearchBar
        term={term}
        onTermChange={(newTerm) => SetTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;
