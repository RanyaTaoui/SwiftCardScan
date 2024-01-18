import React, { useState } from 'react';
import { View, Text, ScrollView, Button, Alert, StyleSheet ,TouchableOpacity} from 'react-native';
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
    navigation.navigate('');
  };

  const navi = () => {
    setModalVisible(false);
    navigation.navigate('Conditions');
    
  }
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
  title={
    <>
      <Text>
        Dans le cadre de la conception de notre application, nous avons pris des
        mesures proactives pour atténuer les risques juridiques liés à la gestion
        des données personnelles de nos utilisateurs. Notre initiative comprend
        la mise en œuvre d'une clause de consentement et d'un contrat
        d'utilisation détaillé, intégrés au processus d'inscription et
        d'utilisation de l'application. Ces mesures ont été élaborées en étroite
        collaboration avec notre équipe juridique afin de garantir une
        conformité rigoureuse aux réglementations sur la protection des données.
       
          <TouchableOpacity onPress={navi}>
         <Text  style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
          Mesures pour les risques jur  idiques
        </Text>
      </TouchableOpacity>
      </Text>
    </>
  }
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
    padding: 0,
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
