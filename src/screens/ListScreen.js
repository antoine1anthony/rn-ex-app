import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '20' },
        { name: 'Friend #2', age: '55' },
        { name: 'Friend #3', age: '65' },
        { name: 'Friend #4', age: '29' },
        { name: 'Friend #5', age: '45' },
        { name: 'Friend #6', age: '62' },
        { name: 'Friend #7', age: '35' },
        { name: 'Friend #8', age: '42' },
        { name: 'Friend #9', age: '18' }
    ];

    const listItem = item => `${item.name} - Age: ${item.age}`;

    return(
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => alert(listItem(item))}>
                            <Text style={styles.textStyle}>
                                {listItem(item)}
                            </Text>
                        </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 50,
        fontSize: 30,
        flex: 1
    }
});

export default ListScreen;
