import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "./src/Global";

export default function App() {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState("");

  async function ConsultarCep() {
    console.log("O usuário digitou o CEP: ", cep);
    //Chamada para a API de consulta de CEP
    const req = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const res = await req.json();
    console.log("Resultado da busca: ", res.localidade, + " " + res.uf);

    setResultado("\n" + "Cidade: " + res.localidade + "\n" + "Estado: " + res.uf); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultar CEP</Text>
      <TextInput style={styles.input}
        placeholder="Digite o CEP da cidade"
        keyboardType="numeric"
        value={cep}
        onChangeText={(text) => setCep(text)}
      />
      <Button title="Consultar" onPress={ConsultarCep} />
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            marginBottom: 20,
            marginTop: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Resultado da busca: {resultado}
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
