import * as React from 'react'
import { View, Text, Button, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>메인화면</Text>
      <Button
        title="세부 화면으로 이동"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="글쓰기 화면으로 이동"
        onPress={() => navigation.navigate('TodoWriterScreen')}
      />
    </View>
  )
}

const DetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>세부화면</Text>
      <Button
        title="홈 화면으로 이동"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const TodoWriterScreen = ({ navigation }) => {
  const [todos, setTodos] = useState('')
  return (
    <>
      <TextInput
        multiline
        onChangeText={setTodos}
        value={todos}
        placeholder="할 일을 작성해주세요"
        style={{
          flex: 0.3,
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 10,
          borderWidth: 1,
          margin: 10,
        }}
      />
    </>
  )
}

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoWriterScreen" component={TodoWriterScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
