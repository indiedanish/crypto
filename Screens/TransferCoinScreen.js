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
import {ModalPopUp} from '../Screens/Modal';

export const TransferCoinScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.AppName}>
        <Text style={styles.AppNameText}>Transfer Coins</Text>
      </View>

      <ModalPopUp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </View>
  );
};
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  AppName: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  AppNameText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
