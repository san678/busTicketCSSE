import React, {useEffect, useState} from 'react';

import {View, Button, Text, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import SelectList from 'react-native-dropdown-select-list';

const App = () => {
  const [qrCode, setQrCode] = useState('1');
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Kaduwela-Kothalawala'},
    {key: '2', value: 'Kothalawala-Pittugala'},
    {key: '3', value: 'Pittugala-CINEC Junction'},
    {key: '4', value: 'CINEC Junction-Malabe'},
  ];

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Button
        title="Qr Code Generate" onPress={() => {
          RNQRGenerator.generate({
            value: "Yasin Dalkilic",
            height: 400,
            width: 400,
            base64: true,
          //  backgroundColor: "red",
           // color: "#fff",
          }).then(response => {
            console.log('response', response);
            setQrCode(response.uri);
          });
        }}
      /> */}

      <SelectList
        setSelected={setSelected}
        data={data}
        dropdownStyles={{backgroundColor: 'gray'}}
        dropdownItemStyles={{marginHorizontal: 10}}
        dropdownTextStyles={{color: 'white'}}
        
      />

      <QRCode value={qrCode} />
      <Button
        
        title="Get my QR Code"
        onPress={() => {
          setQrCode(selected);
        }}
      />

      {qrCode !== null && (
        <Image
          source={{uri: qrCode}}
          style={{marginTop: 50, width: 300, height: 100}}
        />
      )}
    </View>
  );
};
export default App;
