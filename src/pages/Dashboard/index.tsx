import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { useAuth } from '../../contexts/auth'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' }
})

const Dashboard: React.FC = props => {
  const { user, signOut } = useAuth()

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
