import React from 'react';
import { StyleSheet, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { TROUBLE_SHOOTING_SCREEN, ERROR_DIAGNOSIS_SCREEN, ERROR_SEARCH_SCREEN } from '../constants/screenNames';

export const ServiceRequestButton = (props) => {

    handleMail = () => {
        let item = props.props.item
        let screen = props.props.screen
        var message = ""
        console.log(props)
        switch(screen) {
            case TROUBLE_SHOOTING_SCREEN:
            message = `Sehr geehrte Damen und Herren,\n folgender Fehler wurde gefunden: \n  ${item.errorCode}\n\n Problem: ${item.item.errorCause}\n Behebung: ${item.item.troubleshooting}.`
                break;
            case ERROR_DIAGNOSIS_SCREEN:
            message = `Sehr geehrte Damen und Herren,\n es wurde ein Fehler gefunden am Gerätetyp DTX6.`
                break;
            case ERROR_SEARCH_SCREEN:
                message = `Sehr geehrte Damen und Herren,\n es wurde ein Fehler gefunden.`
                break;
            default:
                return
        }

        openMail(message)
    }

    openMail = (message) => {
        Linking.openURL(`mailto:Service@pfannenberg.com?subject=Service Request&body=${message}`)
    }

   return(
    <Button
    buttonStyle={styles.constraint}
    onPress={() => handleMail() }
    textStyle={styles.text}
    title='Service Request'
  />
   )
}

const styles = StyleSheet.create({
    constraint: {
        height: 50,
        width: 100,
        marginLeft: 20,
        borderRadius: 5,
        backgroundColor: "rgba(71, 153, 208, 1)"
    },
    text: {
        textAlign: 'center'
    }
})