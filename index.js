const express = require('express');
const app = express();
const {graphqlHTTP}=require('express-graphql')
const data = require('./data')
const schema = require('./schema')
app.listen(7000)


app.get('/', (req,res)=>{
    res.send(data)
})
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))