import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from "react-native";

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

    {listaTarefas.map((item, index) => (
      <View key={index} style={styles.card}>
        <Text>{item}</Text>
      </View>
    ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  titulo: {
    fontSize: 28,
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
  },
  card: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  }
});
 
