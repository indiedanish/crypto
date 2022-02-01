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
import {Icon, SearchBar} from 'react-native-elements';
import {styles} from '../Styles/CurrencyScreenStyles';

export const CurrencyScreen = ({navigation, route}) => {
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
            <Icon type="font-awesome" name="euro" size={38} color="white" />
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 20}}>Buy/Sell</Text>
            <Text style={{color: '#5a5a5a', fontSize: 12}}>EUR</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Withdraw', {
              setTabBarHeight: route.params.setTabBarHeight,
            })
          }
          style={{
            backgroundColor: '#41BC00',
            borderRadius: 7,
            height: 40,
            width: 90,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Withdraw
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Deposit', {
              setTabBarHeight: route.params.setTabBarHeight,
            })
          }
          style={{
            backgroundColor: '#0075FD',
            borderRadius: 7,
            height: 40,
            width: 90,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Deposit
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.BarContainer}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 14}}>
            {'Bank account name: '}
            <Text style={{color: '#6e6e6e', fontSize: 12}}>D. Letsch</Text>
          </Text>
          <Text style={{color: 'white', fontSize: 14}}>
            {'Bankaccount: '}
            <Text style={{color: '#6e6e6e', fontSize: 12}}>
              NL79 INGB **** **** *484
            </Text>
          </Text>
          <Text style={{color: 'white', fontSize: 14}}>
            {'Bank: '}
            <Text style={{color: '#6e6e6e', fontSize: 12}}>ING NederLand</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => alert('pressed')}
          style={{
            backgroundColor: '#6e6e6e',
            borderRadius: 7,
            height: 40,
            width: 90,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
