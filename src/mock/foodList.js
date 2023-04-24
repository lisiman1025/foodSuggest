const Mock = require("mockjs");
let data = Mock.mock({
    "data|1000":[
        {
            "foodId|+1":1,
            "foodName":"@name",
            "foodImage":"@image('100x100','red','#fff','food')",
            "foodStar|1-5":1,
            "foodPrice|1-1000":1,
            "foodType|1-8":1,
            "address":"@county",
            "ditance|0-3000":1,
            "openTime|0-24":1,
            "closeTime|0-24":1,
            "sever|-2--1":-1,
            "tel|100000-999999": 100001
               }
    ]
})
Mock.mock('/Suggust','get',()=>{
    return data
})
Mock.mock('/details','get',()=>{
    return data
})
Mock.mock('./imageG','get',()=>{
    return data
})