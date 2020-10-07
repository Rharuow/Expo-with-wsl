import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { useAuth } from '../../contexts/auth'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
})

const SignIn: React.FC = props => {
  const { signed, user, signIn } = useAuth()

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
