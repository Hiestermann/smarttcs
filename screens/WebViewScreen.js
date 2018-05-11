import React, { Component } from 'react';
import { WebView } from 'react-native';
import { RightHeaderButton } from '../Components/RightHeaderButton';

class WebViewScreen extends Component {
  static navigationOptions = ({navigation}) => {
    let title = navigation.state.params.title
    return{
    headerTitle: title,
    headerRight:(
            <RightHeaderButton {...navigation.state.params}/>
    )
}
  };
  render() {
    let link = this.props.navigation.state.params.link
    return (
      <WebView
        source={{uri: link}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default WebViewScreen;