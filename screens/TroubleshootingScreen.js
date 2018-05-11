import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card } from 'react-native-elements'
import { RightHeaderButton } from '../Components/RightHeaderButton';
import { FooderService } from '../Components/FooderService';
import { TROUBLE_SHOOTING_SCREEN } from '../constants/screenNames';
 
export default class TroubleshootingScreen extends Component {

    constructor(props) {
        super(props)
    }

    
    static navigationOptions = ({navigation}) => {
        return{
        headerTitle: 'Fehlerbehebung',
        headerRight:(
                <RightHeaderButton {...navigation.state.params}/>
        )
    }
      };

      checkValidPerson = (item) => {
        return item.item.qualifiedPerson ? "Qualifizierte Person erforderlich" : "Qualifizierte Person nicht erforderlich";
      }

      componentWillMount(){
          this.props.navigation.setParams({navigation: this.props.navigation})
      }

    render(){
        const item = this.props.navigation.state.params
        return(
            <View>
                <Card title={`Error Code: ${item.errorCode}`} style={{alignItems: 'center'}}>
                    <Text>{`Problem: ${item.item.errorCause}`}</Text>
                    <Text>{`Behebung: ${item.item.troubleshooting} `}</Text>
                    <Text>{``}</Text>
                    <Text>{``}</Text>
                    <View style={[styles.qualifiedPersonBox, {backgroundColor: item.item.qualifiedPerson ? 'red': 'green'}]}>
                        <Text style={styles.qualifiedPersonText}>{this.checkValidPerson(item)}</Text>
                    </View>
                </Card>
                <FooderService item={item} screen={TROUBLE_SHOOTING_SCREEN}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    qualifiedPersonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300, 
        height: 50, 
        
    },
    qualifiedPersonText: {
        color: 'white',
        fontSize: 15,
    },
})