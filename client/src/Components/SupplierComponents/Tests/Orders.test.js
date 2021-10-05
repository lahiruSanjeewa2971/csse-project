// users.test.js
import axios from 'axios';
import Orders from '../Tests/Orders';

jest.mock('axios');

test('should fetch orders', () => {
  const orders = [{
    "status": "success",
    "result": 10,
    "orders": [
        {
            "_id": "615af31d125103436f1a6ce8",
            "orderID": "order18",
            "date": "2020.11.05",
            "createrName": "Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [
                {
                    "name": "basket, cement",
                    "amount": 2,
                    "sold": "2300"
                },
                {
                    "name": "cement",
                    "amount": 3,
                    "sold": "3400"
                },
                {
                    "name": "basket",
                    "amount": 4,
                    "sold": "450"
                }
            ],
            "__v": 0
        },
        {
            "_id": "615af342125103436f1a6cea",
            "orderID": "order19",
            "date": "2020.11.05",
            "createrName": "Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [
                {
                    "name": "sand",
                    "amount": 2,
                    "sold": "3000"
                },
                {
                    "name": "cement",
                    "amount": 3,
                    "sold": "1500"
                },
                {
                    "name": "basket",
                    "amount": 4,
                    "sold": "4000"
                }
            ],
            "__v": 0
        },
        {
            "_id": "615af0a1006c005d1e3d10ca",
            "orderID": "order15",
            "date": "2020.11.05",
            "createrName": "Mr.Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [],
            "__v": 0
        },
        {
            "itemList": [],
            "_id": "615af2e0ba7d114fb9156745",
            "orderID": "order17",
            "date": "2020.11.05",
            "createrName": "Mr.Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "__v": 0
        },
        {
            "_id": "615af142006c005d1e3d10cc",
            "orderID": "order15",
            "date": "2020.11.05",
            "createrName": "Mr.Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [
                {
                    "name": "basket",
                    "amount": 2,
                    "sold": "500"
                }
            ],
            "__v": 0,
            "companyName": "Brandix"
        },
        {
            "_id": "615af076006c005d1e3d10c8",
            "orderID": "order14",
            "date": "2020.11.05",
            "createrName": "Mr.Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [],
            "__v": 0,
            "companyName": "Brandix"
        },
        {
            "_id": "615aebd76b8bab5361919283",
            "orderID": "Order12",
            "date": "2020.04.12",
            "createrName": "Mr. Kasun",
            "quantity": 4,
            "description": "Wasana Traders",
            "deliveryAddress": "Wasana Traders",
            "status": "",
            "itemList": [
                "Cement, Sand"
            ],
            "__v": 0,
            "companyName": "Commercial Finance"
        },
        {
            "_id": "615aea486b8bab5361919281",
            "orderID": "order10",
            "date": "2020.11.04",
            "createrName": "Mr.Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [
                "basket"
            ],
            "__v": 0,
            "companyName": "Samson"
        },
        {
            "_id": "615aecc565d340ab26ae6a4e",
            "orderID": "order14",
            "date": "2020.11.05",
            "createrName": "Mr.Wanirathne",
            "quantity": 2,
            "description": "New Items",
            "items": "sand, cement, concrete",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [
                "basket"
            ],
            "__v": 0,
            "companyName": "Nippon"
        },
        {
            "_id": "615af22a006c005d1e3d10ce",
            "orderID": "order16",
            "date": "2020.11.05",
            "createrName": "Nanirathne",
            "quantity": 2,
            "description": "New Items",
            "deliveryAddress": "New Items",
            "status": "",
            "itemList": [
                {
                    "name": "basket, cement",
                    "amount": 2,
                    "sold": "5000"
                },
                {
                    "name": "cement",
                    "amount": 3,
                    "sold": "7000"
                }
            ],
            "__v": 0
        }
    ]
}];
  const resp = {data: orders};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Orders.all().then(data => expect(data).toEqual(orders));
});