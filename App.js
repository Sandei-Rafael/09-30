import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import dados from './service/dados.js';
import CardCidade from './components/card_cidade'; // Corrigir o nome da importação

const  exibirNaTela = ({cities,uf,index})=>{
  <CardCidade
    cities={cities}
    uf={uf}
    key={index}
  />
}

export default function App() {
  console.log(dados.state, dados.cities);
  return (
    <View style={styles.container}>
        <FlashList
        data={dados.cities }
        renderItem={(d) => {exibirNaTela(d.item,dados.state,d.index)}}
        estimatedItemSize={200}
      />
      {/* <CardCidade nome="Tiete" uf="SP" key={111}/> Corrigir o nome do componente */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});