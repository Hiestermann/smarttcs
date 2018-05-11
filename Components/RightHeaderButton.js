import React from 'react'
import { Icon } from 'react-native-elements'

export const RightHeaderButton = (navigation) => {
    
    return(
        <Icon
            iconStyle={{margin: 5}}
            name='home'
            onPress={() => console.log(navigation.navigation.navigate('Start'))}/>
    )
}