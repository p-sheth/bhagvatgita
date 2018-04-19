import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DefaultTheme, Provider as PaperProvider, Toolbar, ToolbarContent, Divider } from 'react-native-paper';

import ShlokPage from './ShlokPage';
import BottomPanel from './BottomPanel';
import Gita from './gita.json';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};

const shlokListLength = 3;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chno: 1,
      verseno: 1,
      currentShlok: 0
    }
  }

  onPrev(prevState) {
    if (prevState.currentShlok !== 0) {
      let newSholkIndex = prevState.currentShlok - shlokListLength;
      this.updateState(newSholkIndex);
    }
  }

  onNext(prevState) {
    let newSholkIndex = prevState.currentShlok + shlokListLength;
    if (newSholkIndex <= (Gita.length - 1)) {     
      this.updateState(newSholkIndex);
    }
  }

  onChapterChanged(newChapter) {
    this.setState({
      chno: newChapter
    });
  }

  onVerseChanged(newVerse) {
    let newShlokIndex = Gita.findIndex((shlok) => { return (shlok.ch_no === this.state.chno && shlok.shl_no === newVerse) });
    this.updateState(newShlokIndex);
  }

  updateState(newSholkIndex) {
    this.setState({
      chno: Gita[newSholkIndex].ch_no,
      verseno: Gita[newSholkIndex].shl_no,
      currentShlok: newSholkIndex
    });
  }


  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Toolbar>
            <ToolbarContent title="Bhagvat Gita Chanting"/>
          </Toolbar>
          <ShlokPage shlokList={Gita.slice(this.state.currentShlok, this.state.currentShlok + shlokListLength)}
            onPrevPress={() => this.onPrev(this.state)}
            onNextPress={() => this.onNext(this.state)}>
          </ShlokPage>
          <Divider></Divider>
          <BottomPanel chNo={this.state.chno} shlNo={this.state.verseno} onPrevPress={() => this.onPrev(this.state)}
            onNextPress={() => this.onNext(this.state)}
            onChapterChanged={(newChapter) => this.onChapterChanged(newChapter)}
            onVerseChanged={(newVerse) => this.onVerseChanged(newVerse)}>
          </BottomPanel>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
