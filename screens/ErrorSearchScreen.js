import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native-elements'
import { width, height } from '../constants/screenSize';
import { FooderService } from '../Components/FooderService';
import { RightHeaderButton } from '../Components/RightHeaderButton';
import errorData from '../data/errorData';
import errorImage from '../data/errorImage';
import { ERROR_SEARCH_SCREEN } from '../constants/screenNames';

class ErrorSearchScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return{
        headerTitle: 'Fehlerdiagnose',
        headerRight:(
                <RightHeaderButton {...navigation.state.params}/>
        )
    }
      };

      componentWillMount(){
          this.props.navigation.setParams({navigation: this.props.navigation})
      }
    render() {
        return(
            <View style={styles.constraint}>
                <Button 
                buttonStyle={styles.errorSearchButton}
                onPress={() => this.props.navigation.navigate('Error', {data: errorData})}
                title="Fehlercode Suchen"/>
                <Text style={styles.seperator}
                >----------- ODER -----------</Text>
                <Button buttonStyle={styles.errorSearchButton}
                onPress={() => this.props.navigation.navigate('Error', {data: errorImage})}
                title="Fehlerbild Suchen"/>
                <FooderService screen={ERROR_SEARCH_SCREEN}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    constraint: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height
    },
    errorSearchButton:{
        margin: 20,
        height: 50,
        width: width * 0.7,
        borderRadius: 5,
        backgroundColor: "rgba(71, 153, 208, 1)"
    },
    seperator:{
        color: 'black',
        borderColor: 'black',
        fontSize: 20,
        margin: 40
    },
})

export default ErrorSearchScreen;