import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { width, height } from '../constants/screenSize';
import { Button, Icon } from 'react-native-elements'
import { RightHeaderButton } from '../Components/RightHeaderButton';
import { FooderService } from '../Components/FooderService';
import { ERROR_DIAGNOSIS_SCREEN } from '../constants/screenNames';



class ErrorDiagnosisScreen extends React.Component {
    constructor(props) {
        super(props)
    }
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
    render(){
        let testProp = "Test"
        return(
            
            <ScrollView>
                <View style={styles.container}>
                    <Button
                    buttonStyle={styles.searchButton}
                    onPress={() => this.props.navigation.navigate('TypeList')}
                    title="Gerätetyp auswählen"
                    />
                 </View>
                <FooderService id={testProp} screen={ERROR_DIAGNOSIS_SCREEN}/>
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyboardAlive : {
        
    },
    choseType: {
        marginTop: 10,
        color: 'black',
        borderColor: 'black',
        borderBottomWidth: 1,
        width: width * 0.7
    },
    seperator:{
        color: 'black',
        borderColor: 'black',
        fontSize: 20,
        margin: 40
    },
    searchButton: {
        width: width * 0.7,
        height: 50,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "rgba(71, 153, 208, 1)"
    }

})

export default ErrorDiagnosisScreen;