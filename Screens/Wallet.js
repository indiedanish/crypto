import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {CurrencyBar} from '../Components/CurrencyBar';
import {styles} from '../Styles/WalletStyles';
import {ModalPopUp} from '../Screens/Modal';

export const WalletScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [CoinsData, setCoinsData] = useState([
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      PercentageValue: '+91%',
      decimalValue: 1.411,
      description: 'BTC',
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      description: 'VC',
      Balance: 1100,
      PercentageValue: '+51%',
      decimalValue: 0.9,
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      description: 'LTC',
      Balance: 600,
      PercentageValue: '+11%',
      decimalValue: 0.4,
      currency: '€',
    },
  ]);
  const [TransactionHistory, setTransactionHistory] = useState([
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      decimalValue: 1.411,
      TransactionDetails: 'Send Transaction (11-10-2021)',
      currency: '€',
    },
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 10000,
      decimalValue: 1.411,
      TransactionDetails: 'Recieved Transaction (11-11-2021)',
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      description: 'VC',
      Balance: 100,
      decimalValue: 1.411,
      TransactionDetails: 'Recieved Transaction (11-11-2021)',
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      description: 'LTC',
      Balance: 982,
      decimalValue: 1.411,
      TransactionDetails: 'Sent Transaction (11-11-2021)',
      currency: '€',
    },
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      decimalValue: 1.411,
      TransactionDetails: 'Send Transaction (11-10-2021)',
      currency: '€',
    },
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 10000,
      decimalValue: 1.411,
      TransactionDetails: 'Recieved Transaction (11-11-2021)',
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      description: 'VC',
      Balance: 100,
      decimalValue: 1.411,
      TransactionDetails: 'Recieved Transaction (11-11-2021)',
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      description: 'LTC',
      Balance: 982,
      decimalValue: 1.411,
      TransactionDetails: 'Sent Transaction (11-11-2021)',
      currency: '€',
    },
  ]);
  const [showHistory, setshowHistory] = React.useState(false);
  const [headVisible, setheadVisible] = React.useState(false);
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      onScroll={event => {
        const y = event.nativeEvent.contentOffset.y;
        if (y >= 50) {
          setheadVisible(true);
        } else {
          setheadVisible(false);
        }
      }}
      style={styles.container}>
      <View style={styles.AppName}>
        {headVisible ? (
          <View style={styles.StickeyHeadContainer}>
            <Icon
              name="euro"
              type="font-awesome"
              size={22}
              style={{marginBottom: 7.5, marginRight: 2}}
              color="white"
            />
            <Text style={styles.StickeyHeadTextDecimal}>
              6788
              <Text style={styles.StickeyHeadTextPoint}>.36</Text>
            </Text>
          </View>
        ) : (
          <Text style={styles.AppNameText}>Wallet</Text>
        )}
      </View>

      <View style={styles.CoinsList}>
        <CurrencyBar
          action={() =>
            navigation.navigate('Euro', {
              setTabBarHeight: route.params.setTabBarHeight,
            })
          }
          name="Euro"
          IconName="euro"
          IconType="font-awesome"
          description="Deposit money to your Balance"
          Balance={100000}
        />

        {CoinsData.map((x, index) => (
          <CurrencyBar
            action={() => navigation.navigate('CoinScreen')}
            key={index}
            name={x.name}
            IconColor={x.IconColor}
            IconName={x.IconName}
            IconType={x.IconType}
            description={x.description}
            currency={x.currency}
            Balance={x.Balance}
            PercentageValue={x.PercentageValue}
            decimalValue={x.decimalValue}
          />
        ))}
      </View>
      <View
        style={[
          styles.BarContainer,
          {width: modalVisible ? '80%' : '100%', alignSelf: 'center'},
        ]}>
        <Text style={styles.BottomContainerText}>Financial</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.Buttons, {backgroundColor: '#0075FD'}]}>
          <Text style={styles.ButtonsText}> Create Wallet</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="history"
            type="material-community"
            color="white"
            size={24}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: 'white',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            Transaction history
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginHorizontal: 5,
              color: 'white',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {showHistory ? 'Hide' : 'Show history'}
          </Text>
          <Icon
            name={showHistory ? 'eye' : 'eye-off'}
            type="ionicon"
            color="white"
            size={24}
            onPress={() => setshowHistory(!showHistory)}
          />
        </View>
      </View>
      <View style={{height: showHistory ? null : 0}}>
        {TransactionHistory.map((x, index) => (
          <CurrencyBar
            action={() => navigation.navigate('CoinScreen')}
            key={index}
            name={x.name}
            IconColor={x.IconColor}
            IconName={x.IconName}
            IconType={x.IconType}
            description={x.description}
            currency={x.currency}
            Balance={x.Balance}
            PercentageValue={x.PercentageValue}
            decimalValue={x.decimalValue}
          />
        ))}
      </View>
      <ModalPopUp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </ScrollView>
  );
};
