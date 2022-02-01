import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Icon, Input, SearchBar} from 'react-native-elements';
import {styles} from '../Styles/CoinTradeStyles';

export const BuyCoinScreen = ({navigation, route}) => {
  const [isSelected, setisSelected] = React.useState(null);
  const [ammount, setAmmount] = React.useState('');
  const [col, setCol] = useState('#0075FD');

  React.useEffect(() => {
    route.params.setTabBarHeight(0);
    navigation.setOptions(
      {
        headerStyle: {
          backgroundColor: '#222222',
        },
        title: 'Bitcoin',
        headerTitleAlign: 'center',
        headerShown: true,
        headerLeft: () => (
          <Icon
            name="chevron-left"
            type="feather"
            color={'white'}
            size={32}
            onPress={() => {
              route.params.setTabBarHeight(null), navigation.goBack();
            }}
          />
        ),
      },
      [],
    );
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.BalanceSheetContainer}>
        <View style={styles.TopBalanceContainer}>
          <Text style={styles.TopHeadCurrency}>Buy</Text>
          <View>
            <Text style={styles.TopHeadBalance}>€ 2.000,99</Text>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.TopHeadBalanceLabel}>Balance</Text>
            </View>
          </View>
        </View>
        <View style={styles.CenterInputView}>
          <Input
            placeholder="0.00"
            containerStyle={styles.CenterInputContainer}
            inputContainerStyle={styles.CenterInputTextContainer}
            keyboardType="numeric"
            inputStyle={{fontSize: 64, color: 'white'}}
            value={String(ammount)}
            onChangeText={text => setAmmount(text)}
            leftIcon={
              <Icon
                name="euro"
                type="font-awesome"
                size={32}
                style={styles.InputLeftIcon}
                color="white"
              />
            }
          />
        </View>
        <View>
          <Text style={styles.CurrentBalLabel}>Current Value</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={styles.CurrentBalDec}>0,00011</Text>
            <Text style={styles.CurrentBalPercentage}>+24%</Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.QuickEntryButtonContainer}>
            <TouchableOpacity
              onPress={() =>
                isSelected == 100
                  ? (setisSelected(null), setAmmount(''))
                  : (setisSelected(100), setAmmount(100))
              }
              style={[
                styles.QuickEntryButton,
                {backgroundColor: isSelected == 100 ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={styles.QuickEntryText}>€ 100</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                isSelected == 500
                  ? (setisSelected(null), setAmmount(''))
                  : (setisSelected(500), setAmmount(500))
              }
              style={[
                styles.QuickEntryButton,
                {backgroundColor: isSelected == 500 ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={styles.QuickEntryText}>€ 500</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                isSelected == 1000
                  ? (setisSelected(null), setAmmount(''))
                  : (setisSelected(1000), setAmmount(1000))
              }
              style={[
                styles.QuickEntryButton,
                {backgroundColor: isSelected == 1000 ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={styles.QuickEntryText}>€ 1000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                isSelected == 2000
                  ? (setisSelected(null), setAmmount(''))
                  : (setisSelected(2000), setAmmount(2000))
              }
              style={[
                styles.QuickEntryButton,
                {backgroundColor: isSelected == 2000 ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={styles.QuickEntryText}>€ 2000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setCol('red');
        }}
        style={[styles.Trade_Button, {backgroundColor: col}]}>
        <Text style={styles.Trade_Button_Text}>Buy</Text>
      </TouchableOpacity>
      <Text style={[styles.error, {height: col == 'red' ? null : 0}]}>
        Currently Not Possible
      </Text>
    </ScrollView>
  );
};
