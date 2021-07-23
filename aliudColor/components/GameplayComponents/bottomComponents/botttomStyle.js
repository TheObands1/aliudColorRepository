import { StyleSheet } from "react-native";

export default StyleSheet.create({
    counterCount: {
        fontFamily: 'dogbyte',
        textAlign: 'center',
        color: "#ecf0f1",
        fontSize: 50
      },
      counterLabel: {
        fontFamily: 'dogbyte',
        textAlign: 'center',
        color: '#bbb',
        fontSize: 20,
        textTransform: "uppercase"
      },
      bestScoreContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      bestScoreIcon: {
        width: 25,
        height: 25,
        marginRight: 5
      },
      bestScoreLabel: {
        fontFamily: 'dogbyte',
        color: '#bbb',
        fontSize: 25,
        marginTop: 2.5,
      },
      gameStateIcon: {
        width: 50, 
        height: 50
      }
});
