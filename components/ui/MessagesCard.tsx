import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const MessagesCard = () => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.profileImg}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        />

        <Text style={{flex:1, flexWrap:"wrap", marginLeft:20, marginRight:10}}>
            <Text style={{fontWeight:"700"}}>jasdeep kaur</Text> commented on <Text style={{fontWeight:"700"}}>'Move pot plants to new house'</Text>
        </Text>
        <Text style={{alignSelf:"flex-end",color:"grey"}}> 
        10 mins 
        </Text>
    </View>
  )
}

export default MessagesCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent:"center",
        alignItems:"center",
        // alignContent:'flex-start'
        // flexWrap:"wrap"
    },
    profileImg:{
        width:50,
        height:50,
        borderRadius:50/2,
    },

})