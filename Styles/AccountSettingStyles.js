import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  Header: {
    marginTop: '7.5%',
    padding: 2,
    alignItems: 'center',
    marginBottom: 30,
  },
  HeaderText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },
  Bars: {
    flexDirection: 'row',
    backgroundColor: '#222222',
    padding: 10,
    borderRadius: 15,
    marginHorizontal: '3%',
    marginBottom: 10,
  },
  BarRHSText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    marginHorizontal: 10,
  },
});
