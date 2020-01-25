const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 80

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.post('/signup', db.signup)
app.get('/get_Password/:id/:pass', db.getPassword)
app.post('/insert_Order', db.insertOrder)
app.post('/insert_Product', db.insertProduct)
app.get('/get_OrderStatus/:id', db.getOrderStatus)
app.get('/get_CategoryList', db.getCategoryList)
app.get('/get_ProductList', db.getProductList)
app.get('/get_ProductDetails/:id', db.getProductDetails)
app.put('/update_Order/:id', db.updateOrder)
app.delete('/delete_Category/:id', db.deleteCategory)
app.delete('/delete_Product/:id', db.deleteProduct)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})