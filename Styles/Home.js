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
  HeadStyle: {
    margin: '3%',
    marginBottom: 0,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
    paddingBottm: 0,
    backgroundColor: '#222222',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
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
    paddingBottom: '5%',
    paddingTop: 0,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderRadius: 15,
    margin: '3%',
    marginTop: 0,
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
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1%',
    borderRadius: 10,
  },
  SearchBarContainer: {
    padding: 0,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
