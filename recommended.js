import React, { Component } from 'react'
import {View, StyleSheet, FlatList} from "react-native"
import axios from "axios"
import { RFValue } from 'react-native-responsive-fontsize'
import { Card } from 'react-native-elements'
export default class Recommended extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }
    getData=()=>{
        const url= "http://localhost:5000/recommended-movies"
        axios.get(url).then(response=>{
            this.setState({
                data:response.data.data
            })
        }).catch(err=>{
            console.log(err.message)
        })
    }
    componentDidMount(){
        this.getData()
    }
    renderItem=({item,index})=>{
        return(
            <Card
             key={`Card- ${index}`}

             imageProps={{resizeMode:"cover"}}
             featuredTitle={item.title}
             containerStyle={styles.cardContainer}
            featuredTitleStyle={styles.title}
            ></Card>
        )
    }
    render() {
        return (
          <View style={styles.container}>
              <FlatList
                data={this.state.data}
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