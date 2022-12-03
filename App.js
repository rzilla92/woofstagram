import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

function App() {
  const [email, setEmail] = useState('')
  const [pword, setPword] = useState('')
  const [confirmPword, setConfirmPword] = useState('')
  const [petName, setPetName] = useState('')
  const [petDob, setPetDob] = useState('')
  const [petBreed, setPetBreed] = useState('')
  const [favToy, setFavToy] = useState('')

  function pwCheck(props) {
    const {nativeEvent: {text}} = props
    if(text !== pword) {
      alert("passwords do not match, please try again")
    }
  }

return (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
    <ScrollView>
      <InputWithLabel
      label="Email"
      placeholder="Enter Email Here"
      value={email}
      onChangeText={setEmail}
      />
      <InputWithLabel
      label="Password"
      placeholder="Enter Password Here"
      value={pword}
      onChangeText={setPword}
      secureTextEntry
      />
      <InputWithLabel
      label="Confirm Password"
      placeholder="Confirm Password Here"
      value={confirmPword}
      onChangeText={setConfirmPword}
      secureTextEntry
      onSubmitEditing={pwCheck}
      />
      <InputWithLabel
      label="What is you pet's name?"
      placeholder="Enter Pet's Name Here"
      value={petName}
      onChangeText={setPetName}
      />
      <InputWithLabel
      label="When is your pet's Date of Birth?"
      placeholder="Enter Date of Birth Here"
      value={petDob}
      onChangeText={setPetDob}
      />
      <InputWithLabel
      label="What is your pet's breed?"
      placeholder="Enter your Pet's Breed Here"
      value={petBreed}
      onChangeText={setPetBreed}
      />
      <InputWithLabel
      label="What's your pet's favorite toy?"
      placeholder="Enter favorite toy here"
      value={favToy}
      onChangeText={setFavToy}
      />
    </ScrollView>
  </View>
)
};

const InputWithLabel = (props) => {
  const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing } = props

  return (
  <View style={{padding:16 }}>
    <Text style={{padding: 8, fontSize: 18, fontWeight:'bold'}}>{label}</Text>
    <TextInput 
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    style={{border:"1px solid black"}}
    secureTextEntry={secureTextEntry}
    onSubmitEditing={onSubmitEditing}
    />
  </View>
  )
}

export default App;
