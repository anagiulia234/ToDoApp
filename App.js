import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView  } from "react-native";

export default function App() {
    const [tarefaAtual, setTarefaAtual] = useState('');
    const [listaTarefas, setListaTarefas] = useState([]);

    const adicionarTarefa = () => {
      setListaTarefas([...listaTarefas, tarefaAtual]);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas:</Text>
      <View style={styles.linha}>
       <TextInput
       value={tarefaAtual}
        onChangeText={setTarefaAtual}
        style={styles.caixa}
        placeholder="Digite a anotação..."
        />
      <TouchableOpacity style={styles.botao} onPress={()=>  {setListaTarefas([...listaTarefas, tarefaAtual]);setTarefaAtual('');}}>
        <Text style={styles.mais}>+</Text>
      </TouchableOpacity>
    </View>

    <ScrollView>
      {listaTarefas.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTrop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
   },
  linha: {
   flexDirection: 'row',
   alignItems: 'center',
   marginBottom: 20,
  },
  caixa: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  botao: {
    backgroundColor: 'blue',
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mais: {
    color: 'white',
    fontSize: 24,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },  
  
});
 
