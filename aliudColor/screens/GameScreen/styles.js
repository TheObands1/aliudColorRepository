import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
 backgroundStyle: {
   flex: 1,
   backgroundColor: "#0a0a0a",
   justifyContent: "center",
   alignItems: "center"
 },
 upperContainer: {
  height: Dimensions.get("window").height * 0.15,
},
 gridContainer: {
  flex: 5, 
  width:  Dimensions.get('window').width * 0.875, 
  flexDirection: 'row'
 },
 gridColumn:{
  flex: 1, 
  flexDirection: 'column' 
 },
 gridRow: {
  flex: 1
 },
 bottomContainer: {
  flex: 1,
  //marginTop: 90,
  //marginBottom: 40,
  flexDirection: 'row',
  justifyContent: "space-evenly",
  alignItems: "center"
},
bottomSection: {
  flex: 1,
},
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
});