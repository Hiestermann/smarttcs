import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { RightHeaderButton } from '../Components/RightHeaderButton';


class TypeListScreen extends React.Component {
    
      state = {
          types: ["DTX 6"]
      }

      static navigationOptions = ({navigation}) => {
        return{
        headerTitle: ('Gerätetypen'),
        headerRight:(
                <RightHeaderButton {...navigation.state.params}/>
        )
    }
      };

      componentWillMount(){
          this.props.navigation.setParams({navigation: this.props.navigation})
      }
      renderItem = (item) => {
          return(
              <ListItem 
              title={item.item}
              onPress={() => this.props.navigation.navigate('ErrorSearch')}
              />
          )
      }
    render(){
        return(
            <View style={styles.container}>
            <FlatList
            data={this.state.types}
            renderItem={this.renderItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    choseType: {
        color: 'black',
        borderColor: 'black',
        borderBottomWidth: 1
    }
})

export default TypeListScreen;
