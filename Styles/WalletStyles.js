import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  AppName: {
    marginTop: '7.5%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  AppNameText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  StickeyHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  StickeyHeadTextDecimal: {
    color: 'white',
    textAlignVertical: 'bottom',
    fontSize: 38,
  },
  StickeyHeadTextPoint: {color: '#5a5a5a', fontSize: 22},

  CoinsList: {marginVertical: '7%'},
  BarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 15,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  BottomContainerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  Buttons: {
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonsText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
