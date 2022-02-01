import React, {useState} from 'react';
import {
  TouchableOpacity,
  ToastAndroid,
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import {modalStyles} from '../Styles/ModalStyles';
import {SendCoin, RecieveCoin} from '../Components/TransferCoin';

export const ModalPopUp = props => {
  const [Send, setSend] = useState(true);
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
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      <View style={modalStyles.container}>
        <View style={modalStyles.ModalBody}>
          {/* Top Send And Recieve Button Container */}
          <View style={modalStyles.Send_Recieve_SwitchContainer}>
            <TouchableOpacity
              style={modalStyles.Send_Recieve_SwitchButton}
              onPress={() => setSend(true)}>
              <Text
                style={[
                  modalStyles.Send_Recieve_SwitchText,
                  {color: Send ? '#3672F2' : 'white'},
                ]}>
                Send
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyles.Send_Recieve_SwitchButton}
              onPress={() => {
                setSend(false);
              }}>
              <Text
                style={[
                  modalStyles.Send_Recieve_SwitchText,
                  {color: !Send ? '#3672F2' : 'white'},
                ]}>
                Recieve
              </Text>
            </TouchableOpacity>
          </View>
          {Send && <SendCoin setModalVisible={props.setModalVisible} />}
          {!Send && <RecieveCoin setModalVisible={props.setModalVisible} />}
        </View>
      </View>
    </Modal>
  );
};
