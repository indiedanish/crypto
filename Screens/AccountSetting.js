import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from '../Styles/AccountSettingStyles';

const Bar = props => {
  return (
    <TouchableOpacity onPress={() => props.action()} style={styles.Bars}>
      {props.Icon}
      <Text style={styles.BarRHSText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export const AccountSettingScreen = ({navigation, route}) => {
  const [data, setdata] = useState([
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'Profile',
    },
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'Transaction history',
    },
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'CNX-Connect',
    },
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'unknown',
    },
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'unknown',
    },
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'unknown',
    },
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'unknown',
    },
    {
      action: () => alert('pressed this'),
      Icon: (
        <Icon
          name="person-circle-outline"
          type="ionicon"
          size={34}
          color="grey"
        />
      ),
      text: 'unknown',
    },
  ]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Account Settings</Text>
      </View>
      {data.map((x, index) => {
        return (
          <Bar action={x.action} Icon={x.Icon} text={x.text} key={index} />
        );
      })}
    </ScrollView>
  );
};
