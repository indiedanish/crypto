import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {styles} from '../Styles/AlertScreenStyles';
import {Dropdown} from 'react-native-element-dropdown';

const Bar = props => {
  return (
    <View style={styles.BarContainer}>
      <View style={styles.containerLHS}>
        <View style={styles.Logo}>
          <Icon
            type={props.IconType}
            name={props.IconName}
            size={38}
            color={props.IconColor == undefined ? 'white' : props.IconColor}
          />
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 22}}>{props.name}</Text>
          <Text style={{color: '#5a5a5a', fontSize: 14}}>
            Alert has been set
          </Text>
        </View>
      </View>
      <Text style={{color: 'white', fontSize: 18, marginBottom: 25}}>
        € {props.Balance}
      </Text>
    </View>
  );
};

export const Alerts = ({navigation, route}) => {
  const [ammount, setAmmount] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  React.useEffect(() => {
    navigation.setOptions(
      {
        headerStyle: {
          backgroundColor: '#222222',
        },
        title: 'Alerts',
        headerTitleStyle: {fontSize: 24},
        headerTitleAlign: 'center',
        headerShown: true,
        // headerLeft: () => (
        //   <Icon
        //     name="chevron-left"
        //     type="feather"
        //     color={'white'}
        //     size={32}
        //     onPress={() => {
        //       navigation.replace('HomeScreen');
        //     }}
        //   />
        // ),
      },
      [],
    );
  });
  const [CoinsData, setCoinsData] = useState([
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      Balance: 1100,
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      Balance: 600,
      currency: '€',
    },
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      Balance: 1100,
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      Balance: 600,
      currency: '€',
    },
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      Balance: 1100,
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      Balance: 600,
      currency: '€',
    },
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      Balance: 1100,
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      Balance: 600,
      currency: '€',
    },
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      Balance: 1100,
      currency: '€',
    },
    {
      name: 'Lite Coin',
      IconName: 'litecoin',
      IconType: 'material-community',
      IconColor: 'yellow',
      Balance: 600,
      currency: '€',
    },
  ]);
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
    <ScrollView style={styles.container}>
      <View style={{height: modalVisible ? 0 : null}}>
        <View
          style={[
            styles.BarContainer,
            {marginHorizontal: 5, marginTop: 20, marginBottom: 50},
          ]}>
          <Text style={styles.AlertText}>Alert(s)</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Input
              placeholder="0.0000"
              containerStyle={styles.AlertInputContainer}
              inputContainerStyle={styles.AlertInputTextContainer}
              keyboardType="numeric"
              inputStyle={{fontSize: 32, color: 'white', padding: 0}}
              value={String(ammount)}
              errorStyle={{margin: 0, padding: 0, width: 0, height: 0}}
              onChangeText={text => setAmmount(text)}
            />

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={[styles.Buttons, {backgroundColor: '#6e6e6e'}]}>
              <Text style={styles.ButtonsText}>Set Alert</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.CurrentAlertsText}>Current Alerts</Text>
          {CoinsData.map((x, index) => (
            <Bar
              action={() => navigation.navigate('CoinScreen')}
              key={index}
              name={x.name}
              IconColor={x.IconColor}
              IconName={x.IconName}
              IconType={x.IconType}
              currency={x.currency}
              Balance={x.Balance}
            />
          ))}
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalBody}>
              <View style={styles.TopContainer}>
                <Text style={styles.TopContainerText}>Set Alerts</Text>
              </View>
              <View style={styles.AssetsSelection}>
                <Text style={styles.PayWithText}>Assets</Text>
                <Dropdown
                  data={data}
                  placeholder="USDT"
                  placeholderStyle={styles.DropDownPlaceholder}
                  labelField="label"
                  maxHeight={300}
                  valueField="value"
                  onChange={item => {
                    console.log('selected', item);
                  }}
                  selectedTextStyle={{color: 'white'}}
                  style={styles.DropDownPanel}
                  containerStyle={styles.DropDownContainer}
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
                      <View style={styles.DropDownList}>
                        <Text style={{color: 'white'}}>{options.item}</Text>
                      </View>
                    );
                  }}
                />
              </View>

              <View style={styles.TopContainer}>
                <Text style={styles.TopContainerText}>Value for Alert</Text>
                <View style={styles.CenterInputView}>
                  <Input
                    placeholder="0.00"
                    placeholderTextColor="#717171"
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
                  <Text style={styles.CurrentBalDec}>0,00011</Text>
                  <Text style={styles.CurrentBalLabel}>Current Value</Text>
                </View>
              </View>
              <View style={styles.BottomContainer}>
                <TouchableOpacity
                  style={styles.Back}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text style={styles.ButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Continue}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text style={styles.ButtonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
