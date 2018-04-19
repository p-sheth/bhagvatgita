import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Gita from './gita.json';


export default BottomPanel = ({ chNo, shlNo, onPrevPress, onNextPress, onChapterChanged, onVerseChanged }) => {
    let chapterList = [... new Set(Gita.map((shlok) => { return shlok.ch_no; }))];
    let shlokList = Gita.filter((shlok) => { return shlok.ch_no === chNo });
    return (
        <View style={styles.container}>
            <Button primary onPress={onPrevPress}>Prev</Button>
            <Button primary onPress={onNextPress}>Next</Button>

            <View>
                <Text style={{ color: '#3498db' }}>Chapter</Text>
                <Picker
                    selectedValue={chNo}
                    style={{ height: 50, width: 80 }}
                    onValueChange={itemValue => onChapterChanged(itemValue)}>
                    {chapterList.map((chNo) => (
                        <Picker.Item key={chNo} label={chNo.toString()} value={chNo} />
                    ))}
                </Picker>
            </View>
            <View>
                <Text style={{ color: '#3498db' }}>Verse</Text>
                <Picker
                    selectedValue={shlNo}
                    style={{ height: 50, width: 80 }}
                    onValueChange={itemValue => onVerseChanged(itemValue)}>
                    {shlokList.map((shlok) => (
                        <Picker.Item key={shlok.shl_no} label={shlok.shl_no.toString()} value={shlok.shl_no} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});