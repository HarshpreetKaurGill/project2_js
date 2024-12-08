# project2_js

## Car Inventory Management API

This project is a backend application for managing car inventory using the **MEN (MongoDB, Express, Node.js)** stack. It provides an API to create car entries with validation and stores them in a MongoDB Atlas database.
## Features

- **MongoDB Integration**: Connects to MongoDB Atlas to store car data.
- **Express Framework**: Provides an efficient API routing system.
- **Validation**: Ensures proper input data with rules for required fields and constraints.
## Technologies Used

- **Node.js**: Backend runtime.
- **Express**: Web framework for building APIs.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: For managing environment variables.
## API Endpoints

- **POST /api/Cars**: Create a new car in the inventory.
  - **Required Fields**: `name`, `price`, `description`, `category`, `stock`
 
### Install dependencies
- npm install

### Create a .env file in the root derectory 
- MONGO_URI=...mongodb-atlas-uri

### start the server
- npm start

### Test the API
- use Postman to send a POST request to:
- http://localhost:3000/api/Cars

### Example 
- Endpoint: POST/api/Cars
  
 {
  "name": "Bugatti Chiron",
  "price": 3000000,
  "description": "A hypercar with an 8.0L quad-turbocharged W16 engine and unmatched luxury.",
  "category": "sports car",
  "stock": 2
}
