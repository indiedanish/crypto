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
import {CurrencyBar} from '../Components/CurrencyBar';
import {styles} from '../Styles/Home';

export const HomeScreen = ({navigation, route}) => {
  const image = {
    uri: 'https://cdn2.vectorstock.com/i/1000x1000/37/36/abstract-blue-waves-on-black-background-vector-15103736.jpg',
  };

  const [search, setSearch] = useState('');
  const [LineChartData, setLineChartData] = useState([
    81, 91, 111, 191, 92, 81, 100, 181, 0.51, 80, 109, 100, 121, 101, 171, 92,
    81, 10, 120, 175, 170, 150, 200, 81, 91, 111, 191, 92, 81, 100,
  ]);
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

  const [isSelected, setisSelected] = React.useState('H');
  const [headStyle, setHeadStyle] = React.useState(styles.HeadStyle);
  return (
    <ImageBackground
      source={image}
      imageStyle={{opacity: 0.4}}
      style={{height: '100%'}}>
      <ScrollView
        stickyHeaderIndices={[1]}
        onScroll={event => {
          const y = event.nativeEvent.contentOffset.y;
          if (y >= 80) {
            setHeadStyle({
              backgroundColor: 'black',
              margin: '3%',
              marginBottom: 0,
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingTop: '5%',
              paddingBottm: 0,
            });
          } else {
            setHeadStyle(styles.HeadStyle);
          }
        }}
        style={styles.container}>
        <View style={styles.AppName}>
          <Text style={styles.AppNameText}>WalletX</Text>
        </View>
        <View style={headStyle}>
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
        </View>
        <View style={styles.BalanceSheetContainer}>
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
            height={200}
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
        <View>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={text => setSearch(text)}
            value={search}
            containerStyle={styles.SearchBarContainer}
            inputContainerStyle={{borderRadius: 20}}
          />
        </View>
        <View>
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
            PercentageValue="+21%"
            decimalValue={0.411}
          />

          {CoinsData.map((x, index) => (
            <CurrencyBar
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
      </ScrollView>
    </ImageBackground>
  );
};
