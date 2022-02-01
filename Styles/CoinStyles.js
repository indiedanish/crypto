import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },

  AppName: {marginTop: '7.5%', padding: 2, alignItems: 'center'},
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
  BalanceSheetContainer: {
    backgroundColor: '#222222',
    paddingVertical: '5%',
    borderRadius: 15,
    margin: '3%',
    marginVertical: '5%',
  },
  CurrentBalText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },

  CurrentBalPercentage: {color: 'green', textAlign: 'center', fontSize: 18},
  Chart: {
    paddingRight: 0,
    margin: 0,
    paddingBottom: -25,
    paddingTop: 0,
  },
  TimeStepContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTimeStep: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1%',
    borderRadius: 10,
  },
  BarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
    // borderColor: 'red',
    borderWidth: 1,
  },
  containerLHS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  Logo: {
    alignItems: 'center',
    marginRight: 10,
    width: 40,
  },
  BottomContainerText: {color: 'white', fontSize: 20},
  Buttons: {
    borderRadius: 7,
    height: 40,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonsText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  CoinName: {color: '#5a5a5a', fontSize: 12},
  CenterInputContainer: {width: 100, paddingHorizontal: 0, marginRight: 25},
  CenterInputTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  error: {color: 'red', alignSelf: 'center', fontSize: 17},
});
