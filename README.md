��#   2 2 0 1 0 4 0 c s 
 # 2201040cs
# 📊 Average Calculator API  

This is a **REST API** that fetches numbers from a **test server**, maintains a **sliding window of the last 10 unique numbers**, and calculates their **moving average**.  

---

## 🚀 How It Works  

1️⃣ A request is made to fetch numbers from `http://localhost:9876/numbers/{type}`  
2️⃣ The server calls the **test server** to get numbers of the requested type.  
3️⃣ The latest **10 unique numbers** are stored in a **sliding window** (older numbers get removed).  
4️⃣ The **moving average** of the stored numbers is calculated.  
5️⃣ A JSON response is sent with:  
   - 📌 **Previous state** of stored numbers  
   - 📌 **New numbers fetched**  
   - 📌 **Updated state** after adding new numbers  
   - 📌 **Calculated average**  

---

## 📌 Supported Number Types  

| Type Code | Description |
|-----------|------------|
| `e`       | Even Numbers |
| `p`       | Prime Numbers |
| `f`       | Fibonacci Numbers |
| `r`       | Random Numbers |
| `x`       | Invalid Type (used for error handling) |

---

## 🎯 API Endpoints  

### 🛠 Request Format  
GET http://localhost:9876/numbers/{type}

- Replace `{type}` with `e`, `p`, `f`, `r`, or `x` (invalid request example).  

---

## 🔹 API Responses  

### ✅ **Even Numbers (`e`)**  
Request:  
```bash
GET http://localhost:9876/numbers/e
![Screenshot (85)](https://github.com/user-attachments/assets/7661c099-9233-45b9-aa9b-14a4a4aa9664)

GET http://localhost:9876/numbers/p
![Screenshot (88)](https://github.com/user-attachments/assets/381e6fad-ae5a-4986-885b-14a35095b414)

GET http://localhost:9876/numbers/f
![Screenshot (89)](https://github.com/user-attachments/assets/03e34414-678f-4a7a-bc06-f572c350c988)

GET http://localhost:9876/numbers/r
![Screenshot (90)](https://github.com/user-attachments/assets/3894d4bd-e818-4e77-b817-35fa94e3c575)

GET http://localhost:9876/numbers/x
![Screenshot (86)](https://github.com/user-attachments/assets/42f0b8e5-6ac9-43e4-ab42-5e72eb38f048)

Setup Instructions
1️⃣ Install Dependencies
Make sure you have Node.js installed. Then, run:



npm install
2️⃣ Set Up Environment Variables
Create a .env file in the root directory and add your access token:

MY_ACCESS_TOKEN=your_token_here

3️⃣ Start the Server
Run:
node server.js
or, if you want live reloading:

nodemon server.js
The server will start on http://localhost:9876


🛠 How It’s Built
Express.js - Handles API requests.
Axios - Fetches numbers from the test server.
Environment Variables (.env) - Stores the access token securely.
Sliding Window Mechanism - Keeps only the last 10 unique numbers.
Error Handling - Ensures smooth API responses even if the test server fails.
 
