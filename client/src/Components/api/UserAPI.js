import {useState, useEffect} from 'react'
import axios from 'axios'
function CSUserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    const [isManager, setIsManager] = useState(false)
    const [isSupplier, setIsSupplier] = useState(false)
    const [IsProcumentStaff, setIsProcumentStaff] = useState(false)

    useEffect(()=>{
        if(token){
            const getUser = async ()=>{
                try{
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                       
                    })
                  
                    setIsLogged(true)
                    res.data.role === 1 ? setIsManager(true) : setIsManager(false)
                    res.data.role === 2 ? setIsProcumentStaff(true) : setIsProcumentStaff(false)
                    res.data.role === 3 ? setIsSupplier(true) : setIsSupplier(false)
                   
                    
                }catch(err){
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    }, [token])



    const addCart = async (product) =>{
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })
        }else{
            alert("This product has been added to cart.")
        }
    }

    return {
        isLogged : [isLogged, setIsLogged],
        isManager: [isManager, setIsManager],
        isSupplier: [isSupplier, setIsSupplier],
        isProcumentStaff: [IsProcumentStaff, setIsProcumentStaff],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

export default CSUserAPI
