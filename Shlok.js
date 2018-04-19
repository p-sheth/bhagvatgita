import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardContent, Title, Text } from 'react-native-paper';

import Shlokline from './Shlokline';

export default Shlok = ({ shlok }) =>
    (
        <Card>            
            <CardContent style={{ justifyContent: 'center', alignItems: 'center' }}>          
                <Title>{shlok.shl_header}</Title>           
                <ShlokLine shline={shlok.shl_first_left + "   " + shlok.shl_first_right}></ShlokLine>
                <ShlokLine shline={shlok.shl_second_left + "   " + shlok.shl_second_right}></ShlokLine>
            </CardContent>
        </Card>

    );







