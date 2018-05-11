import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import { PfannenbergTitle } from '../Components/PfannenbergTitle';
import { width } from '../constants/screenSize';

class StartScreen extends React.Component {
    static navigationOptions = {
        header: null
      }
      //Linking.openURL('https://www.pfannenberg.com/de/service-support/betriebsanleitungen/'
    render(){
        return(
            <View style={styles.container}>
                <PfannenbergTitle/>
                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ErrorDiagnosis')}>
                            <Image
                                style= {styles.icon} 
                                source={require('../Assets/errorDiagnose.png')}
                            />
                            <Text>Fehlerdiagnose</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => alert('Service derzeit nicht verfügbar')}>
                            <Image
                                style= {styles.icon} 
                                source={require('../Assets/u27.png')}
                            />
                            <Text>Ersatzteile</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('WebView', {link: 'https://www.pfannenberg.com/de/service-support/betriebsanleitungen/', title:'Betriebsanleitungen'})}>
                            <Image
                                style= {styles.icon} 
                                source={require('../Assets/u21.png')}
                            />
                            <Text>Betriebsanleitungen</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('WebView', {link: 'https://www.pfannenberg.com/de/news-presse/news-presseinformationen/dateFilter/2018/', title:'News'})}>
                            <Image
                                style= {styles.icon} 
                                source={require('../Assets/u11.png')}
                            />
                            <Text>News</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('WebView', {link: 'https://www.pfannenberg.com/de/know-how/klimatisierung/', title:'Know-How'})}>
                            <Image
                                style= {styles.icon} 
                                source={require('../Assets/u23.png')}
                            />
                            <Text>Know-How</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tile}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('WebView', {link: 'https://www.pfannenberg.com/de/kontakt/kontaktieren-sie-uns/', title:'Kontakt'})}>
                            <Image
                                style= {styles.icon} 
                                source={require('../Assets/u26.png')}
                            />
                            <Text>Kontakt</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        alignItems: 'center',
    }, 
    icon: {
        width: 55,
        height: 55,
        resizeMode: 'contain'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.7,
        margin: 20,
    },
    tile: {
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default StartScreen;