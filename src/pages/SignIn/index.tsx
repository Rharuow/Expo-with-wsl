import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { signIn } from '../../services/auth'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
})

const SignIn: React.FC = props => {
  async function handlerSignIn() {
    const response = await signIn()

    console.log(response)

    //OR

    //signIn().then((response) => {
    //console.log(response)
    //})

  }
  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={() => handlerSignIn()}></Button>
    </View>
  )
}

export default SignIn
