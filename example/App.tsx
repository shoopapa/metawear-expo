import { Button, StyleSheet, View } from 'react-native';

import { connnect, battery, mac, blink } from 'metawear-expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title='connect'
        onPress={async () => {
          const x = await connnect()
          console.log(x)
        }}
      ></Button>
      <Button
        title='battery'
        onPress={async () => {
          const x = await battery()
          console.log(x)
        }}
      ></Button>
      <Button
        title='mac'
        onPress={async () => {
          const x = await mac()
          console.log(x)
        }}
      ></Button>
      <Button
        title='blink'
        onPress={async () => {
          const x = await blink()
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
