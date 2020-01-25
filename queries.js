const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testonlyfornodejs',
  password: 'Shivasports@123',
  port: 5432,
})
const signup = (request, response) => {
	
	pool.query('SELECT * FROM "public"."Users" WHERE "mobile_number" like $1', [request.body.mobile], function(err, row) {

    if(err) {
        console.log(err);
        return;
    } else {
        if (row.rows && row.rows.length ) {
            console.log('Case row was found!');
            // do something with your row variable
			response.send("User data exists already");
        } else {
            console.log('No case row was found :( !');
						
			  pool.query('INSERT INTO "public"."Users" (User_Name, Email_Id, Mobile_number, Gst_Pin, Card_Number, Address, Credits_Earned, user_password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [request.body.name, request.body.email, request.body.mobile, request.body.gstpin, request.body.cardnumber, request.body.address, request.body.credits, request.body.password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(request.body.mobile)
	console.log(request.body.mobile)
	console.log(row.Result.rows);
  })
        }
    }
});
	

}

const getPassword = (request, response) => {
  const id = request.params.id;
  const pass = request.params.pass;
  debugger;

  pool.query('SELECT "user_password" FROM "public"."Users" WHERE mobile_number = $1', [id], (error, results) => {
    if (error) {
      response.send("invalidcreds");
	  console.log(error);
	  next(error);
    }
	else {
        if (results.rows && results.rows.length ) {
            console.log('User Exists');
            // do something with your row variable
			response.send("Valid User");
        } else {
            console.log('Invalid username');
			response.send("Invalid username");
        }
    }
  })
}

const insertOrder = (request, response) => {

  pool.query('INSERT INTO "public"."Orders" (Product_Name, Product_Id, Number_Of_Items, Order_Id, Date_Time, Status, Total_Amount, Mobile_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [request.body.product_name, request.body.product_id, request.body.number_of_items, request.body.order_id, request.body.datetime, request.body.status, request.body.amount, request.body.mobile], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Ordered with order id ${request.body.order_id} has been stored in database `)
  })
}

const insertProduct = (request, response) => {

  pool.query('INSERT INTO "public"."Products" (Product_Name, Product_Id, Stock_Status, Est_Delivery, Piece, Description, Return_Accepted, Price, Discount, Image_Folder, Category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [request.body.product_name, request.body.product_id, request.body.stock_status, request.body.est_delivery, request.body.piece, request.body.description, request.body.returnaccepted, request.body.price, request.body.discount, request.body.image_folder, request.body.category],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product with ID: ${request.body.product_id} has been added to database successfully`)
    }
  )
}

const getOrderStatus = (request, response) => {
  const id = request.params.id

  pool.query('Select Status from "public"."Orders" where Order_Id=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Status of the order with id ${id} is ${results.rows[1].status}`)
	console.log(results.rows);
  })
}

const getCategoryList = (request, response) => {

  pool.query('Select DISTINCT Category from "public"."Products"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Categories list is ${results.rows[0].category}`);
	console.log(results.rows);
  })
}
const getProductList = (request, response) => {

  pool.query('Select DISTINCT Product_Name from "public"."Products"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Products list is ${results.rows[0].product_name}`)
	console.log(results.rows);
  })
}
const getProductDetails = (request, response) => {
  const id = request.params.id;

  pool.query('Select * from "public"."Products" where Product_Name = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Product details of the requested product : ${id} is ${results.rows}`);
	console.log(results.rows);
  })
}
const updateOrder = (request, response) => {
  const id = request.params.id;

  pool.query('Update "public"."Orders" set Status = $1 where Order_Id = $2', ['Cancel', id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Order  with ID: ${id} cancelled`)
  })
}
const deleteCategory = (request, response) => {
  const id = request.params.id;

  pool.query('Delete from "public"."Products" where Category=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Category ${id} and its products are deleted`)
  })
}

const deleteProduct = (request, response) => {
  const id = request.params.id

  pool.query('Delete from "public"."Products" where Product_Name=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Product with name ${id} has been deleted from the database`);
  })
}

module.exports = {
  signup,
  getPassword,
  insertOrder,
  insertProduct,
  getOrderStatus,
  getCategoryList,
  getProductList,
  getProductDetails,
  updateOrder,
  deleteCategory,
  deleteProduct,
}