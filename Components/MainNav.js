import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import About from '../About';
import Contact from '../Contact';
import {HomeScreen} from '../Screens/Home';
import {CurrencyScreen} from '../Screens/CurrencyScreen';
import {Withdraw} from '../Screens/Withdraw';
import {CoinScreen} from '../Screens/Coin';
import {SellCoinScreen} from '../Screens/SellCoin';
import {BuyCoinScreen} from '../Screens/BuyCoin';
import {DepositScreen} from '../Screens/Deposit';
import {WalletScreen} from '../Screens/Wallet';
import {AccountSettingScreen} from '../Screens/AccountSetting';
import {Alerts} from '../Screens/Alerts';
import {TransferCoinScreen} from '../Screens/TransferCoinScreen';
import {CoinXConnect} from '../Screens/CoinXConnect';
import {View} from 'react-native';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTitleStyle: {
    fontSize: 32,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

const temp = ({navigation, route}) => {
  React.useEffect(() => {
    navigation.navigate(route.params.ScreenName);
  }, []);
  return <View></View>;
};
export const HomeStackNavigator = ({navigation, route}) => {
  let [HomeTap, setHomeTap] = React.useState(0);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log(HomeTap);
      setHomeTap(++HomeTap);
    });

    return unsubscribe;
  }, []);
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={route.params.ScreenName}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
      <Stack.Screen
        name="temp"
        component={temp}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
          ScreenName: route.params.ScreenName,
        }}
      />
      <Stack.Screen
        name="Euro"
        component={CurrencyScreen}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
      <Stack.Screen
        name="Deposit"
        component={DepositScreen}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
      <Stack.Screen
        name="CoinScreen"
        component={CoinScreen}
        options={{
          title: 'Bitcoin',
        }}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
      <Stack.Screen
        name="Sell Coin"
        component={SellCoinScreen}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
      <Stack.Screen
        name="Buy Coin"
        component={BuyCoinScreen}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
      <Stack.Screen
        name="AccountSettingScreen"
        component={AccountSettingScreen}
      />
      <Stack.Screen name="AlertScreen" component={Alerts} />
      <Stack.Screen name="TransferCoinScreen" component={TransferCoinScreen} />
      <Stack.Screen name="CoinXConnect" component={CoinXConnect} />
    </Stack.Navigator>
  );
};
export const WalletStackNavigator = ({route}) => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="Wallet Screen">
      <Stack.Screen
        name="Wallet Screen"
        component={WalletScreen}
        initialParams={{
          setTabBarHeight: route.params.setTabBarHeight,
        }}
      />
    </Stack.Navigator>
  );
};
