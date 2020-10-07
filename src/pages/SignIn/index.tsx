import React, { useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AuthContex from '../../contexts/auth'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
})

const SignIn: React.FC = props => {
  const { signed, signIn } = useContext(AuthContex)

  function handlerSignIn() {
    signIn()
  }
  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={() => handlerSignIn()}></Button>
    </View>
  )
}

export default SignIn
