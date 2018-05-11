import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { RightHeaderButton } from '../Components/RightHeaderButton';
import { width } from '../constants/screenSize';

 class PossibleErrorsScreen extends React.Component {
    constructor(props) {
        super(props)
        state ={
            navigation: props.navigation,
            errorCode: props.navigation.state.params.errorCode
        }
    }

    static navigationOptions = ({navigation}) => {
        return{
        headerTitle: 'Mögliche Fehler',
        headerRight:(
                <RightHeaderButton {...navigation.state.params}/>
        )
    }
      };

      componentWillMount(){
          this.props.navigation.setParams({navigation: this.props.navigation})
      }

     renderItem ({item}) {
         return (
             <ListItem
                title={item.errorCause}
                onPress={() => this.state.navigation.navigate("Troubleshooting", {
                    item: item,
                    errorCode: this.state.errorCode
                })}
             />
         )
     }

     changeScreen = () =>  this.props.navigation.navigate("Troubleshooting")
     
    render() {
        const data = this.props.navigation.state.params.item.errorCauses
        const errorCode = this.props.navigation.state.params.errorCode
        const errorName = this.props.navigation.state.params.errorName
        return (

          <View>
              <View style={styles.header}>
                <Text style={styles.headerSeperator}>Fehlerbeschreibung {errorCode}</Text>
                <Text style={styles.errorName}> ErrorCode: {errorName}</Text>
                </View>
                <View style={styles.seperator}/>
              <Text style={styles.headerSeperator}>Potentielle Fehleruhrsachen</Text>
              
            <FlatList
            alwaysBounceVertical={true}
            data={data}
            renderItem={this.renderItem}
            keyExtractor={item => item.errorCause}
            />
          </View>
        );
      }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        height: 150,
    },
    seperator: {
        height: 1,
        backgroundColor: 'gray'
    },
    headerSeperator: {
        margin: 10,
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    errorName: {
        margin: 10
    }
})

export default PossibleErrorsScreen;