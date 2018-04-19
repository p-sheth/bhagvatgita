import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Shlok from './Shlok';

export default ShlokPage = ({ shlokList, onNextPress, onPrevPress }) => {
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    let shloks = [];
    shlokList.forEach((shl) => {
        shloks.push(<Shlok shlok={shl} key={shl.shl_no}></Shlok>)
    });

    return (
        <GestureRecognizer
            onSwipeLeft={onNextPress}
            onSwipeRight={onPrevPress}
            config={config}
            style={{
                flex: 0.8,
                marginTop: 2
            }}>
            <ScrollView >
                {shloks}
            </ScrollView>
        </GestureRecognizer>
    );
}

