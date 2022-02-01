import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WalletStackNavigator} from './MainNav';
import {HomeStackNavigator} from './MainNav';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {DrawerNav} from './Drawer';

const temp = () => <></>;
const Tab = createBottomTabNavigator();

export const TabNavigator = ({navigation, route}) => {
  let [TabBarHeight, setTabBarHeight] = React.useState(null);
  React.useEffect(() => {
    console.log(route.params.FirstTime);
    route.params.setFirstTime(false);
    // console.log(route.params);
    console.log(route.params);
    navigation.setParams({
      screenName:
        route.params.screenName == 'HomeScreen'
          ? 'TransferCoinScreen'
          : route.params.screenName,
    });
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#4F4F4F',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: TabBarHeight === null ? 50 : TabBarHeight,
        },
        navigationOptions: ({navigation}) => ({
          tabBarOnPress: (scene, jumpToIndex) => {
            console.log('onPress:' + scene.route);
            jumpToIndex(scene.index);
          },
        }),
      }}>
      <Tab.Screen
        name="Drawer"
        component={temp}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.dispatch(DrawerActions.toggleDrawer());
            e.preventDefault();
          },
        })}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bars" type="font-awesome" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" type="entypo" size={24} color={color} />
          ),
          headerShown: false,
        }}
        initialParams={{
          setTabBarHeight: setTabBarHeight,
          ScreenName: route.params.screenName,
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={WalletStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="wallet" type="entypo" size={24} color={color} />
          ),
          headerShown: false,
        }}
        initialParams={{
          setTabBarHeight: setTabBarHeight,
        }}
      />
    </Tab.Navigator>
  );
};
