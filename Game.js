// import React from 'react';
//import ReactDOM from 'react-dom';
//import './Game.css';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

//Variables
var Cards = [
    '2♥', '2♣', '2♠', '2♦',
    '3♥', '3♣', '3♠', '3♦',
    '4♥', '4♣', '4♠', '4♦',
    '5♥', '5♣', '5♠', '5♦',
    '6♥', '6♣', '6♠', '6♦',
    '7♥', '7♣', '7♠', '7♦',
    '8♥', '8♣', '8♠', '8♦',
    '9♥', '9♣', '9♠', '9♦',
    '10♥', '10♣', '10♠', '10♦',
    '11♥', '11♣', '11♠', '11♦',
    '12♥', '12♣', '12♠', '12♦',
    '13♥', '13♣', '13♠', '13♦',
    '14♥', '14♣', '14♠', '14♦'
  ];

//Functions
function shuffleCards(cardArray) {
    cardArray.slice();
    var currentIndex = cardArray.length;
    var tempValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        tempValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = tempValue;
    }
    return cardArray;
}

// function randNumGenerator() {
//     return Math.floor(Math.random() * 14) + 2;
// }


const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  settings: {

  },
  card: {
    borderWidth: 3,
        borderRadius: 3,
        borderColor: 'grey',
        width: 300,
        height: 220,
        padding: 10,
        margin: 10,
        alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});



//Game component
class FullGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PlayerOneDeck: [],
            PlayerTwoDeck: [],
            GameStatus: 0
        };
    }



    beginGame() {
        console.log("Let the games begin!");

        var deck = shuffleCards(Cards);

        this.setState({
            GameStatus: 1,
            PlayerOneDeck: deck.slice(0, 26),
            PlayerTwoDeck: deck.slice(26)
        });

    }
    continueGame() {

        var aDeck = this.state.PlayerOneDeck;
        var bDeck = this.state.PlayerTwoDeck;

        var aCard = aDeck.shift();
        var bCard = bDeck.shift();

        var cardsInBattle = [];
        cardsInBattle.push(aCard, bCard);
        var battleOver = false;

        while (!battleOver) {
            if (parseInt(aCard, 10) > parseInt(bCard, 10)) {
                aDeck.push.apply(aDeck, cardsInBattle);
                battleOver = true;
            } else if (parseInt(aCard, 10) < parseInt(bCard, 10)) {
                bDeck.push.apply(bDeck, cardsInBattle);
                battleOver = true;
            } else {
                cardsInBattle.push(aDeck.shift(), bDeck.shift());
                aCard = aDeck.shift();
                bCard = bDeck.shift();
                cardsInBattle.push(aCard, bCard);
                console.log(cardsInBattle);
            }

        }

        this.setState({PlayerOneDeck: aDeck, PlayerTwoDeck: bDeck});

    }
    handleClick() {
        if (this.state.GameStatus === 0) {
            this.beginGame();
        } else {
            this.continueGame();
        }
    }
    static navigationOptions = {
       title: 'Home',
     };
//     static navigationOptions = {
//   header: {
//     right: <Button onPress={() => navigate('All')}
//     title="Settings" />,
//   },
// };





    render() {
      const { navigate } = this.props.navigation;
        return <View style={styles.container}>

          <Button
          style={styles.settings}
          onPress={() => navigate('All')}
          title="Settings"
        />
            <View style={styles.card} className="card playing-card">
                <Text style={styles.text}>{this.state.PlayerOneDeck[0]}</Text>
                <View className="win-count">
                    <Text style={styles.text}>Cards remaining: {this.state.PlayerOneDeck.length}</Text>
                </View>
            </View>
            <View style={styles.card} className="card playing-card">
                <Text style={styles.text}>{this.state.PlayerTwoDeck[0]}</Text>
                <View className="win-count">
                    <Text style={styles.text}>Cards remaining: {this.state.PlayerTwoDeck.length}</Text>
                </View>
            </View>
            <Button title="GO TO WAR!" className="button" onPress={this.handleClick.bind(this)}/>
        </View>
    }
}

export default FullGame;
