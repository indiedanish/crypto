import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  AppName: {
    marginTop: 10,
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
  XContainer: {
    width: '97%',
    backgroundColor: '#222222',
    borderRadius: 20,
    height: 550,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FillinText: {
    fontSize: 28,
    color: 'white',
  },
  inputContainer: {width: 250, marginTop: 20, marginBottom: 5},
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    minHeight: 0,
  },
  inputText: {
    fontSize: 18,
    color: '#717171',
    textAlign: 'center',
  },
  Continue: {
    backgroundColor: 'black',
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
  TopContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  TopContainerText: {
    fontSize: 18,
    color: 'white',
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
  LastScreenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  CurrentAlertsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 5,
  },
});
