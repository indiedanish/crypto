import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {Icon} from 'react-native-elements';
import {Test} from '../Test';
import Nft from '../assets/NFT.svg';
import {DrawerStyles} from '../Styles/DrawerStyles';
import {TabNavigator} from './TabNav';
import {WalletStackNavigator} from './MainNav';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={DrawerStyles.Header}>
        <Text style={DrawerStyles.HeaderText}>WalletX</Text>
      </View>
      <DrawerItemList {...props} />

      <View style={DrawerStyles.ShareContainer}>
        <Text style={DrawerStyles.ShareText}>Share</Text>
        <View style={DrawerStyles.ShareRow}>
          <Icon name="facebook" type="material" size={34} color="#929292" />
          <Icon name="instagram" type="antdesign" size={34} color="#929292" />
        </View>

        <View style={DrawerStyles.ShareRow}>
          <Icon name="twitter" type="entypo" size={34} color="#929292" />
          <Icon
            name="linkedin-square"
            type="antdesign"
            size={34}
            color="#929292"
          />
        </View>

        <Icon
          name="telegram"
          type="material-community"
          size={34}
          color="#929292"
          style={{alignSelf: 'flex-start', marginLeft: 20}}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export const DrawerNav = props => {
  React.useEffect(() => {
    console.log('FirstTime =' + props.FirstTime);
    console.log(props.FirstTime ? 'HomeScreen' : 'TransferCoinScreen');
  }, []);
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        drawerLabelStyle: DrawerStyles.DrawerItemsText,
        drawerStyle: DrawerStyles.DrawerContainer,
        headerShown: false,
        drawerActiveBackgroundColor: 'black',
      }}
      initialRouteName="Transfer Coins">
      <Drawer.Screen
        name="Transfer Coins"
        options={{
          drawerIcon: () => (
            <Icon name="arrow-swap" type="fontisto" size={20} color="#929292" />
          ),
        }}
        initialParams={{
          appOpenned: true,
          screenName: 'HomeScreen',
          // screenName: 'TransferCoinScreen',
          setFirstTime: props.setFirstTime,
          FirstTime: props.FirstTime,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="CoinX Connect"
        options={{
          drawerIcon: () => (
            <Icon name="x-circle" type="foundation" size={20} color="#929292" />
          ),
        }}
        initialParams={{
          screenName: 'CoinXConnect',
          setFirstTime: props.setFirstTime,
          FirstTime: props.FirstTime,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="Alerts"
        options={{
          drawerIcon: () => (
            <Icon
              name="alert-triangle"
              type="feather"
              size={20}
              color="#929292"
            />
          ),
        }}
        initialParams={{
          screenName: 'AlertScreen',
          setFirstTime: props.setFirstTime,
          FirstTime: props.FirstTime,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="Import Coins"
        options={{
          drawerIcon: () => (
            <Icon
              name="file-import"
              type="font-awesome-5"
              size={20}
              color="#929292"
            />
          ),
        }}
        // For those Not Decided Yet
        initialParams={{
          screenName: 'HomeScreen',
          setFirstTime: props.setFirstTime,
          FirstTime: props.FirstTime,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="NFT"
        options={{
          drawerIcon: () => <Nft width={20} height={20} fill="#929292" />,
        }}
        initialParams={{
          screenName: 'HomeScreen',
          setFirstTime: props.setFirstTime,
          FirstTime: props.FirstTime,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="Account Settings"
        options={{
          drawerIcon: () => (
            <Icon
              name="person-circle-outline"
              type="ionicon"
              size={20}
              color="#929292"
            />
          ),
        }}
        initialParams={{
          screenName: 'AccountSettingScreen',
          setFirstTime: props.setFirstTime,
          FirstTime: props.FirstTime,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="Help & Support"
        options={{
          drawerIcon: () => (
            <Icon
              name="help-with-circle"
              type="entypo"
              size={20}
              color="#929292"
            />
          ),
        }}
        initialParams={{
          screenName: 'HomeScreen',
          setFirstTime: props.setFirstTime,
          FirstTime: props.FirstTime,
        }}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
};
