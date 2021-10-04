import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal,Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper'

const CreateOrder = () => {
    const[orderID, SetOrderID] = useState("")
    const[date, SetDate] = useState("")
    const[createrName, SetcreatorName] = useState("")
    const[items, SetItems] = useState("")
    const[modal, setModal] = useState(false)

    //navigation removed
    const submitData = () =>{
       
            fetch("http://localhost:5000/send-data",{
                method:"post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    orderID,
                    date,
                    createrName,
                    items
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
                label='Date'
                value={date}
                mode="outlined"
                onChangeText={text => SetDate(text)}
                />

            <TextInput
                label='Name'
                value={createrName}
                mode="outlined"
                onChangeText={text => SetcreatorName(text)}
                />

            <TextInput
                label='Items'
                value={items}
                mode="outlined"
                onChangeText={text => SetItems(text)}
                />


                <Button mode="contained" onPress={() => submitData()}>
                    Save
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

