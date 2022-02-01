import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  BarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  containerLHS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Logo: {
    alignItems: 'center',
    marginRight: 10,
    width: 40,
  },
  AlertText: {color: 'white', fontSize: 20},
  Buttons: {
    borderRadius: 7,
    height: 40,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonsText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  AlertInputContainer: {width: 100, paddingHorizontal: 0, marginRight: 25},
  AlertInputTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  CurrentAlertsText: {
    fontSize: 24,
    color: 'white',
    marginHorizontal: 5,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ModalBody: {
    width: '97%',
    backgroundColor: '#222222',
    borderRadius: 20,
    height: 550,
  },
  TopContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  TopContainerText: {
    fontSize: 18,
    color: 'white',
  },
  AssetsSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 5,
    backgroundColor: '#222222',
  },
  AssetAddressContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#222222',
  },
  AssetAddressText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  AssetCopyText: {
    fontSize: 18,
    color: '#717171',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  AssetKey: {
    fontSize: 18,
    color: '#5a5a5a',
  },
  PayWithText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  DropDownPanel: {
    width: 130,
  },
  DropDownContainer: {
    borderRadius: 15,
    elevation: 5,
    paddingVertical: 10,
    backgroundColor: '#222222',
    marginVertical: 5,
    borderWidth: 2,
    borderColor: 'black',
    color: 'white',
  },
  DropDownPlaceholder: {
    fontSize: 18,
    color: '#5a5a5a',
    marginLeft: 5,
  },
  DropDownList: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginHorizontal: '5%',
    padding: 10,
  },

  CenterInputView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CenterInputContainer: {
    paddingTop: 20,
    width: 250,
    marginLeft: 70,
  },
  CenterInputTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  InputLeftIcon: {
    marginRight: 0,
    paddingTop: 15,
    height: 50,
  },
  CurrentBalLabel: {
    color: '#717171',
    textAlign: 'center',
    fontSize: 18,
  },
  CurrentBalDec: {
    color: 'white',
    marginRight: 5,
    textAlign: 'center',
    fontSize: 18,
    textAlignVertical: 'bottom',
  },
  BottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    marginTop: 20,
  },
  Back: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Continue: {
    backgroundColor: '#0076FF',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  ButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
