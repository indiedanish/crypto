import React, {useState} from 'react';
import {
  TouchableOpacity,
  ToastAndroid,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import {modalStyles} from '../Styles/ModalStyles';
import {styles} from '../Styles/WalletStyles';

export const SendCoin = props => {
  const [ammount, setAmmount] = React.useState('');
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  return (
    <View>
      {/* 2nd Container for Input and Stuff */}
      <View style={modalStyles.AmmountEntryContainer}>
        <View style={modalStyles.CurrencySwapContainer}>
          <Icon
            onPress={() => alert('Swap')}
            name="swap-vertical"
            type="material-community"
            size={32}
            color="white"
          />
          <Text style={modalStyles.CurrencyName}>EUR</Text>
        </View>

        <Input
          placeholder="0.00"
          containerStyle={modalStyles.CurrencyInputContainer}
          inputContainerStyle={modalStyles.CurrencyInputTextContainer}
          keyboardType="numeric"
          inputStyle={modalStyles.CurrencyInput}
          placeholderTextColor="#5a5a5a"
          value={String(ammount)}
          errorStyle={{margin: 0, height: 0}}
          onChangeText={text => setAmmount(text)}
          leftIcon={
            <Icon
              name="euro"
              type="font-awesome"
              size={30}
              style={modalStyles.InputLeftIcon}
              color="white"
            />
          }
        />
        <View style={modalStyles.CurrencySwapContainer}>
          <Icon
            onPress={() => alert('Swap')}
            name="swap-vertical"
            type="material-community"
            size={32}
            color="white"
          />
          <Text style={modalStyles.CurrencyName}>BTC</Text>
        </View>
      </View>
      {/* 3rd Container for Input  */}
      <View style={modalStyles.InputContainer}>
        <View style={modalStyles.ContainerStyle}>
          <Text style={[modalStyles.InputLHSText, {marginRight: 28}]}>
            Reciever*
          </Text>
          <View style={modalStyles.ContainerStyle}>
            <Icon name="mail" type="feather" size={24} color="#5a5a5a" />
            <Input
              placeholder="Recievers Wallet Address"
              placeholderTextColor="#5a5a5a"
              containerStyle={{width: '76%'}}
              errorStyle={{margin: 0, height: 0}}
              inputStyle={modalStyles.Input}
            />
          </View>
        </View>
        {/* Message Inputs */}
        <View style={modalStyles.ContainerStyle}>
          <Text style={modalStyles.InputLHSText}>Message</Text>
          <View style={modalStyles.ContainerStyle}>
            <Icon name="chat" type="material" size={24} color="#5a5a5a" />
            <Input
              placeholder="Max 30 words"
              placeholderTextColor="#5a5a5a"
              containerStyle={{width: '76%'}}
              errorStyle={{margin: 0, height: 0}}
              inputStyle={modalStyles.Input}
            />
          </View>
        </View>
        <Input
          errorStyle={{height: 0, margin: 0}}
          placeholderTextColor="#5a5a5a"
          containerStyle={{paddingHorizontal: 0}}
          inputStyle={modalStyles.Input}
        />
        <Input
          errorStyle={{height: 0, margin: 0}}
          placeholderTextColor="#5a5a5a"
          containerStyle={{paddingHorizontal: 0}}
          inputStyle={modalStyles.Input}
        />
        <Input
          errorStyle={{height: 0, margin: 0}}
          placeholderTextColor="#5a5a5a"
          containerStyle={{paddingHorizontal: 0}}
          inputStyle={modalStyles.Input}
          // value={}
        />
        <Text style={modalStyles.WordsLeftText}>0/30</Text>
      </View>
      <View style={{elevation: 5, zIndex: 99, backgroundColor: '#222222'}}>
        {/* Payment Container */}
        <View style={modalStyles.PaymentMethodContainer}>
          <Text style={modalStyles.PayWithText}>Pay With</Text>
          <Dropdown
            data={data}
            placeholder="USDT"
            placeholderStyle={modalStyles.DropDownPlaceholder}
            labelField="label"
            maxHeight={300}
            valueField="value"
            onChange={item => {
              console.log('selected', item);
            }}
            selectedTextStyle={{color: 'white'}}
            style={modalStyles.DropDownPanel}
            containerStyle={modalStyles.DropDownContainer}
            dropdownPosition="bottom"
            renderLeftIcon={() => (
              <Icon
                style={{marginHorizontal: 5}}
                color="#5a5a5a"
                name="credit-card"
                type="simple-line-icon"
                size={24}
              />
            )}
            renderRightIcon={() => (
              <Icon
                style={{marginRight: 10}}
                color="white"
                name="chevron-small-down"
                type="entypo"
                size={32}
              />
            )}
            renderItem={options => {
              return (
                <View style={modalStyles.DropDownList}>
                  <Text style={{color: 'white'}}>{options.item}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      {/* Bottom Buttons Container */}
      <View style={modalStyles.BottomContainer}>
        <TouchableOpacity
          style={modalStyles.Back}
          onPress={() => {
            props.setModalVisible(false);
          }}>
          <Text style={modalStyles.ButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={modalStyles.Continue}
          onPress={() => {
            props.setModalVisible(false);
          }}>
          <Text style={modalStyles.ButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const RecieveCoin = props => {
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  return (
    <View style={{ flex: 1,justifyContent:'space-between'}}>
      <View>
        <View style={modalStyles.AssetsSelection}>
          <Text style={modalStyles.PayWithText}>Assets</Text>
          <Dropdown
            data={data}
            placeholder="USDT"
            placeholderStyle={modalStyles.DropDownPlaceholder}
            labelField="label"
            maxHeight={300}
            valueField="value"
            onChange={item => {
              console.log('selected', item);
            }}
            selectedTextStyle={{color: 'white'}}
            style={modalStyles.DropDownPanel}
            containerStyle={modalStyles.DropDownContainer}
            dropdownPosition="bottom"
            renderLeftIcon={() => (
              <Icon
                style={{marginHorizontal: 5}}
                color="#5a5a5a"
                name="credit-card"
                type="simple-line-icon"
                size={24}
              />
            )}
            renderRightIcon={() => (
              <Icon
                style={{marginRight: 10}}
                color="white"
                name="chevron-small-down"
                type="entypo"
                size={32}
              />
            )}
            renderItem={options => {
              return (
                <View style={modalStyles.DropDownList}>
                  <Text style={{color: 'white'}}>{options.item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={modalStyles.AssetAddressContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 10,
            }}>
            <Text style={modalStyles.AssetAddressText}>Asset Address</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={modalStyles.AssetCopyText}>Copy</Text>
              <Icon name="copy" type="feather" size={24} color="#717171" />
            </View>
          </View>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={modalStyles.AssetKey}>
              psu434mdolo3rsitcon1secte2ur2dipiin1gelitMa112212ximemolli
            </Text>
          </View>
        </View>
      </View>
      <View style={modalStyles.BottomContainer}>
        <TouchableOpacity
          style={modalStyles.Back}
          onPress={() => {
            props.setModalVisible(false);
          }}>
          <Text style={modalStyles.ButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={modalStyles.Continue}
          onPress={() => {
            props.setModalVisible(false);
          }}>
          <Text style={modalStyles.ButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
