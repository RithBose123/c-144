import React, { Component } from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity} from "react-native"
import { AirbnbRating, Header, Icon} from 'react-native-elements'
import axios from "axios"
import { RFValue } from 'react-native-responsive-fontsize'
export class Home extends Component {
    constructor(){
        super()
        this.state={
            articleDetails:{}
        }
    }
    getArticle=()=>{
      const url="http://localhost:5000"
      axios.get(url).then(response=>{
        let details=response.data.data
        this.setState({
          articleDetails:details
        })
      }).catch(err=>{
        console.log(err.message)
    })
    }
    componentDidMount(){
      this.getArticle()
    }
    likedArticle=()=>{
      const url= "http://localhost:5000/liked-articles"
      axios.post(url).then(response=>{
          this.getArticle()
      }).catch(err=>{
          console.log(err.message)
      })
    }    
    NotlikedArticle=()=>{
      const url= "http://localhost:5000/not-liked-articles"
      axios.post(url).then(response=>{
          this.getArticle()
      }).catch(err=>{
          console.log(err.message)
      })
  }
  render() {
    const {articleDetails}=this.state
    if(articleDetails.title){
      const{
        title,
        text,
        total_events,
        lang
      }= articleDetails
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            centerComponent={{
                text:"articles Recommended",
                style:styles.headerTitle
            }}
            rightComponent={{
                icon:"search",
                color:"white", 
            }} 
            backgroundColor={"d500f9"}  
            containerStyle={{flex:1}}
          />
        </View>
        <View style={styles.subBottomContainer}>
          <View style={styles.upperBottomContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.lowerBottomContainer}>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity onPress={this.likedMovie}>
                    <Icon
                      reverse
                      name={"check"}
                      type={"entypo"}
                      size={RFValue(30)}
                      color={"#76ff03"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.unlikedMovie}>
                    <Icon
                      reverse
                      name={"cross"}
                      type={"entypo"}
                      size={RFValue(30)}
                      color={"#ff1744"}
                    />
                  </TouchableOpacity>
                </View>
                </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 0.1
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(18)
  },
  subContainer: {
    flex: 0.9
  },
  subTopContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  posterImage: {
    width: "60%",
    height: "90%",
    resizeMode: "stretch",
    borderRadius: RFValue(30),
    marginHorizontal: RFValue(10)
  },
  subBottomContainer: {
    flex: 0.6
  },
  upperBottomContainer: {
    flex: 0.2,
    alignItems: "center"
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    fontSize: RFValue(14),
    fontWeight: "300"
  },
  middleBottomContainer: {
    flex: 0.35
  },
  overview: {
    fontSize: RFValue(13),
    textAlign: "center",
    fontWeight: "300",
    color: "gray"
  },
  lowerBottomContainer: {
    flex: 0.45
  },
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonCotainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: RFValue(160),
    height: RFValue(50),
    borderRadius: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginTop: RFValue(15)
  },
  buttonText: {
    fontSize: RFValue(15),
    fontWeight: "bold"
  }
});
export default Home