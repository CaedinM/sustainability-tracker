# Sustainability Tracker - Backend

This is the backend API for the Sustainability Tracker project.  
The backend is built using Node.js, and Express.js. It provides RESTful API endpoints to add and track sustainability actions.

---

## **How to Use**
### **Prerequisites**
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

### **Installation**
Clone this repository and install dependencies:
```sh
git clone https://github.com/CaedinM/sustainability-tracker.git
cd sustainability-tracker/backend`
npm install
```


### **Running the Backend**
Start the server using `node server.js`  
The backend will run at localhost:5001

## **API Endpoints**
### **Fetch Sustainability Actions**
- Method: GET
- Endpoint: /api/actions
- Description: Returns a list of all the sustainability actions stored in data.json.

### **Add New Sustainability Actions**
- Method: POST
- Endpoint: /api/actions
- Description: Adds a new sustainability action to data.json


## **Testing**
You can test the backend API using Postman or through the frontend UI.  

### **Testing with Postman**
1. Open [Postman](https://www.postman.com/).
2. Create a new **GET request**: 
- **URL:** `http://localhost:5001/api/actions`
- Click **Send** and check the response.
3. Create a new **POST request**: 
- **URL:** `http://localhost:5001/api/actions`
- Navigate to the **Body** tab and enter sustainability action details in JSON format shown below:   
     ```json
     {
       "action": "Recycling",
       "date": "2025-02-01",
       "points": 30
     }
     ```
- Click **Send** and check if the sustainability action was added to data.json.

### **Testing with Frontend UI**
1. Run the backend server with `node server.js`
2. Run the frontend server:
    - `cd frontend` 
    - `ng serve --open`
3. Use the form in the UI to add a new action.
4. Reload the page and check the list to see if the new action appears.

### **Troubleshooting**
- If node server.js fails, make sure port 5001 is free.
- If API requests fail, check the Network tab in Developer Tools (F12).

## **Author** 
**Caedin Manners**   
UC Berkeley, Data Science B.A. c/o 2025  
caedinmanners@berkeley.edu  
Github: @CaedinM