import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon, Input, LinearProgress, SearchBar} from 'react-native-elements';
import {styles} from '../Styles/CoinXConnectStyles';

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
            {props.description}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: 'white', fontSize: 18}}>€ {props.Balance}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#929292', marginRight: 5}}>
            {props.currency} {props.decimalValue}
          </Text>
          <Text style={{color: '#3A9F06'}}>{props.PercentageValue}</Text>
        </View>
      </View>
    </View>
  );
};

export const CoinXConnect = ({navigation, route}) => {
  const [number, onChangeNumber] = React.useState('');
  const [authView, setauthView] = React.useState(false);
  const [SMSView, setSMSView] = React.useState(false);
  const [ContinueView, setContinueView] = React.useState(false);
  const [LastScreen, setLastScreen] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [CoinsData, setCoinsData] = useState([
    {
      name: 'Bit Coin',
      IconName: 'bitcoin',
      IconType: 'material-community',
      IconColor: '#F7931A',
      Balance: 2100,
      PercentageValue: '+91%',
      decimalValue: 1.411,
      description: 'Stacking: 6 months (12%)',
      currency: '€',
    },
    {
      name: 'Via Coin',
      IconName: 'viacoin',
      IconType: 'font-awesome',
      IconColor: 'blue',
      description: 'Stacking: 6 months (12%)',
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
      description: 'Stacking: 6 months (12%)',
      Balance: 600,
      PercentageValue: '+11%',
      decimalValue: 0.4,
      currency: '€',
    },
  ]);
  React.useEffect(() => {
    let subs = true;
    console.log(progress);
    if (progress > 1) {
      setLastScreen(true);
      return;
    }
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1);
        }
      }, 100);
    }
    return () => {
      subs = false;
    };
  }, [progress]);

  if (LastScreen)
    return (
      <ScrollView style={styles.LastScreenContainer}>
        <View style={styles.AppName}>
          <Text style={styles.AppNameText}>CoinX Connect</Text>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.CurrentAlertsText}>Staked Coins</Text>
          {CoinsData.map((x, index) => (
            <Bar
              action={() => navigation.navigate('CoinScreen')}
              key={index}
              name={x.name}
              IconColor={x.IconColor}
              IconName={x.IconName}
              IconType={x.IconType}
              currency={x.currency}
              description={x.description}
              Balance={x.Balance}
              PercentageValue={x.PercentageValue}
              decimalValue={x.decimalValue}
            />
          ))}
        </View>
        <Icon
          name="pluscircle"
          type="antdesign"
          color="#222222"
          size={48}
          style={{
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'white',
          }}
        />
      </ScrollView>
    );
  return (
    <View style={styles.container}>
      <View style={styles.AppName}>
        <Text style={styles.AppNameText}>CoinX Connect</Text>
      </View>

      <View style={styles.XContainer}>
        <Icon
          name="circle-with-cross"
          type="entypo"
          size={128}
          color="#E58E31"
        />
        {!authView && !SMSView && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.FillinText}>Fill in your CNX-ID</Text>
            <Input
              placeholder="Example: 0218371922"
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.input}
              keyboardType="numeric"
              errorStyle={{padding: 0, height: 0}}
              inputStyle={styles.inputText}
              value={String(number)}
              onChangeText={text => onChangeNumber(text)}
            />
            <TouchableOpacity
              style={styles.Continue}
              onPress={() => {
                setauthView(true);
                // alert(false);
              }}>
              <Text style={styles.ButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
        {authView && !SMSView && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.FillinText}>Authentication Code</Text>
            <Input
              placeholder="000-000"
              containerStyle={[styles.inputContainer, {width: 200}]}
              inputContainerStyle={styles.input}
              keyboardType="numeric"
              errorStyle={{padding: 0, height: 0}}
              inputStyle={[styles.inputText, {fontSize: 28}]}
              value={String(number)}
              onChangeText={text => onChangeNumber(text)}
            />
            <TouchableOpacity
              style={styles.Continue}
              onPress={() => {
                setSMSView(true);
                // alert(false);
              }}>
              <Text style={styles.ButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
        {SMSView && !ContinueView && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.FillinText}>SMS Code</Text>
            <Input
              placeholder="000-000"
              containerStyle={[styles.inputContainer, {width: 180}]}
              inputContainerStyle={styles.input}
              keyboardType="numeric"
              errorStyle={{padding: 0, height: 0}}
              inputStyle={[styles.inputText, {fontSize: 28}]}
              value={String(number)}
              onChangeText={text => onChangeNumber(text)}
            />
            <TouchableOpacity
              style={styles.Continue}
              onPress={() => {
                setContinueView(true);
                setProgress(0.00001);
              }}>
              <Text style={styles.ButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
        {ContinueView && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.FillinText}>Connecting</Text>
            <LinearProgress
              style={{
                marginVertical: 10,
                width: 200,
                backgroundColor: 'black',
              }}
              value={progress}
              variant="determinate"
            />
          </View>
        )}
      </View>
    </View>
  );
};
