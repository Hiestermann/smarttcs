import React from 'react';
import { View, StyleSheet } from 'react-native';
import { width } from '../constants/screenSize';
import { ServiceRequestButton } from './ServiceRequestButton';
import { SparePartButton } from './SparePartButton';
import { SPAREPART_BUTTON, SERVICE_REQUEST_BUTTON } from '../constants/screenNames';

export const FooderService = (props) => {
    return (
        <View style={styles.constraint}>
            <ServiceRequestButton props={props}/>
            <SparePartButton props={props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    constraint: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        height: 100,
    }
})