import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import { RightHeaderButton } from '../Components/RightHeaderButton';

export default class ErrorCodeScreen extends Component {

    constructor(props){
        super(props)
        
      }

      state = {
        data: this.props.navigation.state.params.data,
        filterData: this.props.navigation.state.params.data
      }

      static navigationOptions = ({navigation}) => {
        const params = navigation.state.params
        return{
          headerTitle: <SearchBar
                          onChangeText={(text) => params.filterData(text)}
                          placeholder='Suchen ...'
                          containerStyle={styles.searchBar}
                          inputStyle={styles.searchBar}/>
        ,
        headerRight:(
                <RightHeaderButton {...params}/>
        )
    }
      };

      componentWillMount(){
          this.props.navigation.setParams({
            navigation: this.props.navigation,
            filterData: this._filterData
          })
      }

      filterItems = (query) => {
        return fruits.filter(function(el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      }

      _filterData = (searchItem) => {
        let data = this.state.data
        let lowerSearchItem = searchItem.toLowerCase()
        let filteredData = data.filter((item) => {
          let key = Object.keys(item)[0]
          let lowerCaseItem = key.toLowerCase()
          let errorName = item[key].errorName
          let errorCauses = item[key].errorCauses
          let lowerCaseErrorName = errorName.toLowerCase()
          return lowerCaseItem.indexOf(lowerSearchItem) > -1 || lowerCaseErrorName.indexOf(lowerSearchItem) > -1;
          
        } )
        this.setState({filterData : filteredData})
      }
    
      renderItem = ({item}) => {
        var key= Object.keys(item)[0]
        var errorText = item[key].errorName
        return (
          <ListItem
          title={key}
          subtitle={errorText}
          onPress={() => {
            this.props.navigation.navigate('PossibleErrors', {
                item: item[key],
                errorCode: key,
                errorName: item[key].errorName
            });
          }}
          />
        )
      }

    render(){
        return(
            <FlatList
            alwaysBounceVertical
            data={this.state.filterData}
            renderItem={this.renderItem}
            keyExtractor={item => Object.keys(item)[0]}
            />
        )
    }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    width: 230
  }
})