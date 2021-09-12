import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';

const image = { uri: "https://cdnb.artstation.com/p/assets/images/images/033/986/151/large/thomas-scholes-025.jpg?1611090459" };

const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,history,link}) => {

    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={history}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
                {
            "id": 7,
            "first_name": "Poppy",
            "region": "Demacia",
            "history": "https://www.leagueoflegends.com/pt-br/champions/poppy/",
            "avatar": "https://cdna.artstation.com/p/assets/images/images/040/789/680/large/dao-trong-le-a.jpg?1629887362"
        },
        {
            "id": 8,
            "first_name": "Tristana",
            "region": "Yordle",
            "history": "https://www.leagueoflegends.com/pt-br/champions/poppy/",
            "avatar": "https://cdnb.artstation.com/p/assets/images/images/040/913/591/large/dao-trong-le-tristanalv1-d.jpg?1630247190"
        },
        {
            "id": 9,
            "first_name": "Poro",
            "region": "Freljord",
            "history": "No momento, não temos informações sobre este campeão",
            "avatar": "https://cdnb.artstation.com/p/assets/images/images/041/158/541/large/dao-trong-le-poro-sled.jpg?1630936138"
        },
        {
            "id": 10,
            "first_name": "Gato",
            "region": "Shurima",
            "history": "No momento, não temos informações sobre este campeão",
            "avatar": "https://cdnb.artstation.com/p/assets/images/images/039/331/791/large/dao-trong-le-c.jpg?1625594289"
        },
    ];

export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name + " de " + item.region
    
    return(
      <Pessoa nome={nomeCompleto} 
              link={item.avatar}
              history={item.history}
      />
    )
  }

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black'
  },
  tinyLogo: {
    margin: 12,
    padding: 12,
    width: 75,
    height: 75,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});