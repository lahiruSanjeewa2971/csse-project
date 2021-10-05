import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal,Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper'

const CreateOrder = () => {
    const[orderID, SetOrderID] = useState("")
    const[date, SetDate] = useState("")
    const[createrName, SetcreatorName] = useState("")
    const[companyName, SetCompanyname] = useState("")
    // const[items, SetItems] = useState("")
    const[quantity, SetQuantity] = useState("")
    const[description, SetDescription] = useState("")
    const[itemList, SetItemList] = useState("")
    const[deliveryAddress, SetDelivery] = useState("")
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
                    quantity,
                    description,
                    itemList,
                    deliveryAddress
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
                label='Company Name'
                value={companyName}
                mode="outlined"
                onChangeText={text => SetCompanyname(text)}
                />

            <TextInput
                label='Item List'
                value={itemList}
                mode="outlined"
                onChangeText={text => SetItemList(text)}
                />
            
            <TextInput
                label='Quantity'
                value={quantity}
                mode="outlined"
                onChangeText={text => SetQuantity(text)}
                />

            <TextInput
                label='Description'
                value={description}
                mode="outlined"
                onChangeText={text => SetDescription(text)}
                />

            
            <TextInput
                label='Delivery Address'
                value={deliveryAddress}
                mode="outlined"
                onChangeText={text => SetDelivery(text)}
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
        flex:1,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        borderRadius:25
    
        
    },
    inputStyle:{
        margin:5,
        shadowColor: '#000',
        shadowOffset:{
            width:5,
            height:4,
        },
        shadowOpacity:30,
        borderRadius:25
    
    }
})

export default CreateOrder

