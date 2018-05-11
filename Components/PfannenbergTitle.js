import React from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import { width, height } from '../constants/screenSize';

export const PfannenbergTitle = () => (
    <View>
        <Image
        style={styles.titleImage}
        source={require('../Assets/pfannenberg.png')}
        />
        <Image
        style={styles.titleImage}
        source={require('../Assets/pfannenbergBackground.jpg')}
        />
    </View>
)

const styles = StyleSheet.create({
    titleImage:{
        width: width * 0.9,
        height: 50,
        margin: 10
    }
})