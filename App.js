import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import * as StoreReview from 'expo-store-review';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (await StoreReview.hasAction()) {
      StoreReview.requestReview()
    }
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>ExpoStoreReview App</Text>
      </SafeAreaView>
    );
  }
}

export default App;
