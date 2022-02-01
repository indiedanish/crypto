import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Image,
  Text,
  Button,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

export const CurrencyBar = props => {
  return (
    <TouchableOpacity onPress={() => props.action()} style={styles.container}>
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
          <Text style={{color: 'white', fontSize: 24}}>{props.name}</Text>
          <Text style={{color: '#5a5a5a', fontSize: 12}}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  containerLHS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Logo: {
    alignItems: 'center',
    marginRight: 20,
    width: 40,
  },
});
