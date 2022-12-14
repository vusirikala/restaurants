import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsShowScreen from '../screens/ResultsShowScreen';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';


function ResultsList({title, results, navigation}) {
    if (!results.length) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={ ({item}) =>  
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultsDetail result={item}></ResultsDetail>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultsList);
