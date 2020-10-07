import React, { useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AuthContex from '../../contexts/auth'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
})

const Dashboard: React.FC = props => {
  const { signOut } = useContext(AuthContex)

  function handlerSignOut() {
    signOut()
  }
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={() => handlerSignOut()}></Button>
    </View>
  )
}

export default Dashboard
