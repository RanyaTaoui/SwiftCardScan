import React, { useState } from 'react';
import { View, Text, ScrollView, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements'; // Import CheckBox from react-native-elements

const Conditions = () => {
  const [conditions, setConditions] = useState(false);
  const [isModalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  const acceptConditions = () => {
    setConditions(true);
    setModalVisible(false);
    navigation.navigate('Acceuil');
  };

  const rejectConditions = () => {
    setConditions(false);
    setModalVisible(false);
    // navigation.navigate('Acceuil')
  };

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <ScrollView>
            <CheckBox
            title="J'accepte que mes informations soient utilisées."
            checked={conditions}
            onPress={() => setConditions(!conditions)}
          />

          <Button title="Accepter" onPress={acceptConditions} />
          {/* <Button title="Refuser" onPress={rejectConditions} /> */}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  conditionsText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Conditions;
