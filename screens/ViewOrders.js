import React,{useEffect,useState} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-paper';


const ViewOrders = () =>{
    
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/getOrders")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
        })
    },[])

    //create a loop to display all orders
    const renderList = ((item) =>{
        return(      
        <Card style={styles.myCardOrder} >
            <Text>
              Date: {item.date} 
            </Text>
            <Text>
             Supplier Name:  {item.createrName}
            </Text>
            <Text>
              Company Name: {item.companyName}
            </Text>
            <Text>
              Quantity: {item.quantity}
            </Text>
            <Text>
              Delivery Address: {item.deliveryAddress}
            </Text>
        </Card>)
  
    })
    return(
        <View>
            <FlatList 
                data = {data}
                renderItem={({item}) =>{
                   return renderList(item)
                }}
                keyExtractor={item =>`${item._id}`}

            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    myCardOrder:{
        margin:5,
        padding:5
    }
})

export default ViewOrders