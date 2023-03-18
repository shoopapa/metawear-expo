import { Button, StyleSheet, Text, View } from 'react-native';

import { hello, connnect } from 'metawear-expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{hello()}</Text>
      <Button
        title='connect'
        onPress={async () => {
          const x = await connnect()
          console.log(x)
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
