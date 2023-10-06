import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const App2 = () => {
    return (
        <>
            <Text>Hello World!</Text>
            <Text>Hello World!</Text>
            <View style={style.container}>
                <Text>Hello World!</Text>
            </View>
        </>
    );
}

export default App2;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'

    },
});