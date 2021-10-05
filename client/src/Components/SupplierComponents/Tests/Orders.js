// users.js
import axios from 'axios';

class Orders {
  static all() {
    return axios.get('http://localhost:5000/supplier/order').then(resp => resp.data);
  }
}

export default Orders;