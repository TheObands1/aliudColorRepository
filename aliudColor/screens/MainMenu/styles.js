import { StyleSheet } from "react-native";

export default StyleSheet.create({
 generalStyle: {
   flex: 1,
   backgroundColor: "#0a0a0a",
   justifyContent: "center",
   alignItems: "center",
 },
 playButtonArea: {
    flexDirection: 'row', 
    alignItems: 'center' ,
    marginTop: 80
 },
 playIcon: {
    height: 60,
    width: 60,
    marginRight: 15
  },
 playText: {
    textTransform: 'uppercase',
    fontSize: 45,
    color: "#ecf0f1",
    fontFamily: "dogbyte",
    marginTop: 5
  },
  highScoreArea:{
    flexDirection: 'row', 
    alignItems: 'center' ,
    marginTop: 20
  },
  highScoreText:{
    textTransform: 'capitalize',
    fontSize: 28.5,
    fontFamily: "dogbyte",
    color: "#ecf0f1",
    marginTop: 5
  },
  highScoreIcon:{
    height: 45,
    width: 45,
    marginRight: 12.5
},
leaderboardArea:{
    flexDirection: 'row', 
    alignItems: 'center' ,
    marginTop: 80
  },
  leaderboardText:{
    textTransform: 'capitalize',
    fontSize: 32,
    fontFamily: "dogbyte",
    color: "#ecf0f1",
    marginTop: 5
  },
  leaderboardIcon:{
    height: 52,
    width: 52,
    marginRight: 10
}
});