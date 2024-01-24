import React from "react";
import {Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItems from "./RepositoryItems";

const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item : repo}) => (
                <RepositoryItems {...repo}/>
            )}
        />
        
    )
}
export default RepositoryList;