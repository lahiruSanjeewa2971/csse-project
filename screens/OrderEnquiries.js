import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal,Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper'

const CreateOrder = () => {
    const[orderID, SetOrderID] = useState("")
    const[siteManager, SetSiteManager] = useState("")
    const[siteAddress, SetSiteAdrs] = useState("")
    const[enquiri, SetEnquiri] = useState("")
   
    const[modal, setModal] = useState(false)

    //navigation removed
    const submitData = () =>{
       
            fetch("http://localhost:5000/send-enquiri",{
                method:"post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    orderID,
                    siteManager,
                    enquiri,
                    siteAddress
                   
                })
            })
            .then(res=>res.json())
            .then(data =>{
                Alert.alert(`${data.orderID} is saved`)
                // navigation.navigate("Home")
            })
        }
    
    return(
        <View style={styles.root}>

            <TextInput
                label='Order ID'
                value={orderID}
                mode="outlined"
                onChangeText={text => SetOrderID(text)}
                />

            <TextInput
                label='Site Manager'
                value={siteManager}
                mode="outlined"
                onChangeText={text => SetSiteManager(text)}
                />

            <TextInput
                label='Your Enquiri'
                value={enquiri}
                mode="outlined"
                onChangeText={text => SetEnquiri(text)}
                />

            <TextInput
                label='Site Address'
                value={siteAddress}
                mode="outlined"
                onChangeText={text => SetSiteAdrs(text)}
                />
        


                <Button mode="contained" onPress={() => submitData()}>
                    Send
                </Button>

                {/* <Modal
                animationType="slide"
                transparent={false}
                visible={modal} >
                   <View>
                   <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                    Cancel
                   </Button>

                   </View>
                </Modal> */}
                
        </View>
                




    )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    }
})

export default CreateOrder

