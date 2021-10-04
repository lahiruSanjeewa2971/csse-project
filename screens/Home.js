import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button, Card} from 'react-native-paper'

const Home = () =>{

    const [data,setData] = useState([])
    useEffect(() =>{
        fetch("http://localhost:4000/")
        .then(res=>res.json()) 
        .then(results=>{
           setData(results)
           console.log(results)
        })
    },[])
    
    

    
    return(
        <View>
        <li
            data={data}
            renderItem={({item}) =>{
                return renderList(item)
            }}
            keyExtractor={item=>item._id}

        />
        <Card style={styles.myCard}>
            
            <Image
                style={{width:50, height:50, borderRadius:25}}
                source={{uri:'https://images.unsplash.com/photo-1605106702734-205df224ecce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'}}
            />
            <Text style={{alignItems: 'center'}}>
                Place Order
            </Text>
        </Card>

        <Card style={styles.myCard}>
            <Image
                style={{width:50, height:50, borderRadius:25, alignItems: 'center'}}
                source={{uri:'https://images.unsplash.com/photo-1605106702734-205df224ecce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'}}
            />
            <Text>
                My Order
            </Text>
        </Card>

        <Card style={styles.myCard}>
            <Image
                style={{width:50, height:50, borderRadius:25, alignItems: 'center'}}
                source={{uri:'https://images.unsplash.com/photo-1605106702734-205df224ecce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'}}
            />
            <Text>
                Pending Orders
            </Text>
        </Card>

        <Card style={styles.myCard}>
            <Image
                style={{width:50, height:50, borderRadius:25, alignItems: 'center'}}
                source={{uri:'https://images.unsplash.com/photo-1605106702734-205df224ecce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'}}
            />
            <Text>
                View Bills
            </Text>
        </Card>
        
        </View>
        
      
       
    )
}


const styles = StyleSheet.create(
    {
        myCard: {
            marginTop:11,
            margin:15,
            padding:15,
        
           
        }
    }
)


export default Home