import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Icon, Input, SearchBar} from 'react-native-elements';
import {styles} from '../Styles/CoinStyles';

export const CoinScreen = ({navigation, route}) => {
  const [Not_Possible, setNot_Possible] = useState(false);
  const [ammount, setAmmount] = React.useState('');
  const [isSelected, setisSelected] = React.useState('H');
  const [LineChartData, setLineChartData] = useState([
    81, 91, 111, 191, 92, 81, 100, 181, 0.51, 80, 109, 100, 121, 101, 171, 92,
    81, 10, 120, 175, 170, 150, 200, 81, 91, 191, 9, 100, 101, 120,
  ]);

  React.useEffect(() => {
    navigation.setOptions(
      {
        headerStyle: {
          backgroundColor: '#222222',
        },
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
        <View>
          <Text style={styles.CurrentBalText}>Current Balance</Text>
          <Text style={styles.CurrentBalPercentage}>+ 24%</Text>
        </View>
        <LineChart
          data={{
            datasets: [
              {
                data: LineChartData,
              },
            ],
          }}
          width={Dimensions.get('window').width - 10} // from react-native
          height={280}
          chartConfig={{
            backgroundGradientToOpacity: 0,
            backgroundGradientFromOpacity: 0,
            color: (opacity = 1) => `#0470f1`,
            strokeWidth: 1.5,
            propsForDots: {
              r: '0',
            },
          }}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          withShadow={false}
          style={styles.Chart}
        />
        <View style={{alignItems: 'center'}}>
          <View style={styles.TimeStepContainer}>
            <TouchableOpacity
              onPress={() => setisSelected('H')}
              style={[
                styles.ButtonTimeStep,
                {backgroundColor: isSelected == 'H' ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={{color: 'white', fontSize: 18}}>H</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setisSelected('D')}
              style={[
                styles.ButtonTimeStep,
                {backgroundColor: isSelected == 'D' ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={{color: 'white', fontSize: 18}}>D</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setisSelected('W')}
              style={[
                styles.ButtonTimeStep,
                {backgroundColor: isSelected == 'W' ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={{color: 'white', fontSize: 18}}>W</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setisSelected('M')}
              style={[
                styles.ButtonTimeStep,
                {backgroundColor: isSelected == 'M' ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={{color: 'white', fontSize: 18}}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setisSelected('Y')}
              style={[
                styles.ButtonTimeStep,
                {backgroundColor: isSelected == 'Y' ? '#0076FF' : '#6e6e6e'},
              ]}>
              <Text style={{color: 'white', fontSize: 18}}>Y</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setisSelected('infinity')}
              style={[
                styles.ButtonTimeStep,
                {
                  backgroundColor:
                    isSelected == 'infinity' ? '#0076FF' : '#6e6e6e',
                },
              ]}>
              <Icon name="infinity" type="entypo" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.BarContainer}>
        <View style={styles.containerLHS}>
          <View style={styles.Logo}>
            <Icon
              type="material-community"
              name="bitcoin"
              size={42}
              color="#F7931A"
            />
          </View>
          <View>
            <Text style={styles.BottomContainerText}>Buy/Sell</Text>
            <Text style={styles.CoinName}>BTC</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Sell Coin', {
              setTabBarHeight: route.params.setTabBarHeight,
            })
          }
          style={[styles.Buttons, {backgroundColor: '#41BC00'}]}>
          <Text style={styles.ButtonsText}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Buy Coin', {
              setTabBarHeight: route.params.setTabBarHeight,
            })
          }
          style={[styles.Buttons, {backgroundColor: '#0075FD'}]}>
          <Text style={styles.ButtonsText}> Buy</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.BarContainer,
          {borderWidth: 1, borderColor: Not_Possible ? 'red' : null},
        ]}>
        <Text style={styles.BottomContainerText}>Alert(s)</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Input
            placeholder="0.0000"
            containerStyle={styles.CenterInputContainer}
            inputContainerStyle={styles.CenterInputTextContainer}
            keyboardType="numeric"
            inputStyle={{fontSize: 32, color: 'white', padding: 0}}
            value={String(ammount)}
            errorStyle={{margin: 0, padding: 0, width: 0, height: 0}}
            onChangeText={text => setAmmount(text)}
          />

          <TouchableOpacity
            onPress={() => setNot_Possible(true)}
            style={[styles.Buttons, {backgroundColor: '#6e6e6e'}]}>
            <Text style={styles.ButtonsText}>Set Alert</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.error, {height: Not_Possible ? null : 0}]}>
        Currently Not Possible
      </Text>
    </ScrollView>
  );
};
