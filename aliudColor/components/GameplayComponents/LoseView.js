import React, {useState, useEffect } from "react";
import { Text, View, Image,  StyleSheet } from "react-native";

const LoseView = () => {

    const [currentJoke, setCurrentJoke] = useState("");
    
    const fetchJokeApi = async () => {
        // Fetching data from the API
            await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
            .then((response) => response.json())
            .then((data) => 
                setCurrentJoke(data.joke),
                );
      };
    
    useEffect(() => {
        fetchJokeApi();
     }, [])

    return(
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={LoseStyle.LoseText}>you lost!, have a lame consolation joke</Text>
            <Text style={LoseStyle.Joke}>{currentJoke}</Text>
       </View>
    );
}

const LoseStyle = StyleSheet.create({
    LoseText: {
        fontFamily: 'dogbyte',
        textAlign: 'center',
        color: '#eee',
        marginTop: 20,
        fontSize: 25,
        textTransform: "capitalize"
      },
    Joke: {
        fontFamily: 'dogbyte',
        textAlign: 'center',
        color: '#eee',
        marginTop: 20,
        fontSize: 35,

    },
    JokeDelivery: {
        fontFamily: 'dogbyte',
        textAlign: 'center',
        color: '#eee',
        fontSize: 50,
        textTransform: "capitalize"
    }
   });

export {LoseView};
