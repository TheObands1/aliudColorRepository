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
    marginTop: 30
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
instructionsArea:{
    flexDirection: 'row', 
    alignItems: 'center' ,
    marginTop: 20
  },
instructionsText:{
    textTransform: 'capitalize',
    fontSize: 32,
    fontFamily: "dogbyte",
    color: "#ecf0f1",
    marginTop: 5
  },
instructionsIcon:{
    fontSize: 60,
    fontFamily: "dogbyte",
    color:"#68CC73",
    marginRight: 10
},
accessibilityArea:{
  flexDirection: 'row', 
  alignItems: 'center' ,
  marginTop: 20
},
accessibilityText:{
  textTransform: 'capitalize',
  fontSize: 30,
  fontFamily: "dogbyte",
  color: "#ecf0f1",
  marginTop: 5,
},
accessibilityIcon:{
  height: 52,
  width: 52,
  marginLeft: 10
},
bottomArea:{
  flexDirection: 'row', 
  justifyContent: "space-between",
  position: "absolute",
  left: 15,
  right: 15,
  bottom: 20 
},
copyrightArea:{
  flexDirection: 'column', 
  justifyContent: "space-between",
},

copyrightText:{
  textTransform: 'capitalize',
  fontSize: 13,
  color: "#ecf0f1",
  fontFamily: "dogbyte",
},
soundIcon:{
  height: 52,
  width: 52,
  marginRight: 10
}


});