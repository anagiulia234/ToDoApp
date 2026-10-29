import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas: {count}</Text>
      <View style={styles.linha}>
       <TextInput
        style={styles.caixa}
        placeholder="Digite a anotação..."
        />
      <TouchableOpacity style={styles.botao} onPress={()=> setCount(count + 1)}>
        <Text style={styles.mais}>+</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'space-between',
  paddingBottom: 40,
  },
 titulo: {
    fontSize: 28,
    fontWeight: 'bold',
   },
  linha: {
   flexDirection: 'row',
   alignItems: 'center',
  },
  caixa: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 12,
    marginRight: 10,
    borderRadius: 8,
  },
  botao: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mais: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
 
  