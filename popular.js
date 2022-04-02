import React, { Component } from 'react'
import{ View, Text, Flatlist,StyleSheet } from "react-native"
import {Card} from "react-native-elements"
import axios from "axios"
import {RFValue} from "react-native-responsive-fontsize"
export default class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],

        }
    }
    componentDidMount(){
        this.getData()
    }
    getData=()=>{
        const url= "http://localhost:5000/popular-articles"
        axios.get(url).then(response=>{
            this.setState({data: response.data.data})
        }).catch(err=>{
            console.log(err.message)
        })
    }
    keyExtracter=(item,index)=>{index.toString()}
    renderItem=({item,index})=>{
        return(
            <Card
                key={`Card-${index}`}
                imageProps={{resizeMode: 'cover'}}
                featuredTitle={item.title}
                containerStyle={styles.cardContainer}
                featuredTitleStyle={styles.title}
                
            ></Card>
        )
    }
    render() {
        const {data}= this.state
      return (
        <View style={styles.container}>
            <Flatlist
              data={data}
              keyExtracter={this.keyExtracter}
              renderItem={this.renderItem}
            />
        </View>
      )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    title: {
      color: "#fff",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(25),
      marginTop: RFValue(65)
    },
    subtitle: {
      fontWeight: "bold",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(15)
    },
    cardContainer: {
      flex: 1,
      borderRadius: RFValue(10),
      justifyContent: "center",
      height: RFValue(110),
      marginBottom: RFValue(20)
    }
  });