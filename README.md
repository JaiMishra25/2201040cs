# 📊 Average Calculator API

This is a **REST API** that fetches numbers from a **test server**, maintains a **sliding window of the last 10 unique numbers**, and calculates their **moving average**.

---

## 🚀 How It Works

1️⃣ A request is made to fetch numbers from:
   ```
   GET http://localhost:9876/numbers/{type}
   ```
2️⃣ The server retrieves numbers from the **test server** based on the requested type.  
3️⃣ The latest **10 unique numbers** are stored in a **sliding window** (older numbers get removed).  
4️⃣ The **moving average** of the stored numbers is calculated.  
5️⃣ The API returns a **JSON response** containing:
   - 📌 **Previous window state**  
   - 📌 **Newly fetched numbers**  
   - 📌 **Updated window state**  
   - 📌 **Computed moving average**  

---

## 📌 Supported Number Types

| Type Code | Description |
|-----------|------------|
| `e`       | Even Numbers |
| `p`       | Prime Numbers |
| `f`       | Fibonacci Numbers |
| `r`       | Random Numbers |
| `x`       | Invalid Type (for error handling) |

---

## 🎯 API Endpoints

### 🛠️ Request Format

```sh
GET http://localhost:9876/numbers/{type}
```
- Replace `{type}` with `e`, `p`, `f`, `r`, or `x` (to test error handling).

---

## 🔹 API Responses

### ✅ **Even Numbers (`e`)**
**Request:**  
```sh
GET http://localhost:9876/numbers/e
```
**Response Example:**
```json
{
  "windowPrevState": [],
  "windowCurrState": [2, 4, 6, 8],
  "numbers": [2, 4, 6, 8],
  "avg": 5.00
}
```
![Even Numbers]

![Screenshot (85)](https://github.com/user-attachments/assets/bee6e254-2425-4a6a-a408-7f1ffc318749)

---

### ✅ **Prime Numbers (`p`)**
**Request:**  
```sh
GET http://localhost:9876/numbers/p
```
**Response Example:**
```json
{
  "windowPrevState": [2, 4, 6, 8],
  "windowCurrState": [2, 3, 5, 7, 11],
  "numbers": [3, 5, 7, 11],
  "avg": 5.60
}
```
![Prime Numbers]
![Screenshot (88)](https://github.com/user-attachments/assets/92cbf26e-9f6c-477e-8447-9f2e9fbd5796)

---

### ✅ **Fibonacci Numbers (`f`)**
**Request:**  
```sh
GET http://localhost:9876/numbers/f
```
**Response Example:**
```json
{
  "windowPrevState": [2, 3, 5, 7, 11],
  "windowCurrState": [2, 3, 5, 7, 11, 13, 21, 34],
  "numbers": [13, 21, 34],
  "avg": 12.00
}
```
![Fibonacci Numbers]

![Screenshot (89)](https://github.com/user-attachments/assets/c6edbebd-17d6-4a59-a18a-a02f05ed8738)

---

### ✅ **Random Numbers (`r`)**
**Request:**  
```sh
GET http://localhost:9876/numbers/r
```
**Response Example:**
```json
{
  "windowPrevState": [2, 3, 5, 7, 11, 13, 21, 34],
  "windowCurrState": [2, 3, 5, 7, 11, 13, 21, 34, 42, 50],
  "numbers": [42, 50],
  "avg": 18.80
}
```
![Random Numbers]
![Screenshot (90)](https://github.com/user-attachments/assets/f1cde497-ac6e-4c4f-a50c-bda2db91699b)


---

### ❌ **Invalid Request (`x`)**
**Request:**  


```sh
GET http://localhost:9876/numbers/x
```
**Response Example:**
```json
{
  "error": "Invalid number type. Use 'p', 'f', 'e', or 'r'."
}
```
![Invalid Request]
![Screenshot (86)](https://github.com/user-attachments/assets/0097ada1-e114-4932-9ece-8b4cd6959fa5)

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
Ensure **Node.js** is installed, then run:
```sh
npm install
```

### 2️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```
MY_ACCESS_TOKEN=your_token_here
```

### 3️⃣ Start the Server
```sh
node server.js
```
or, for **live reloading**:
```sh
nodemon server.js
```

The server will start at:
```
http://localhost:9876
```

---

## 🛠️ How It’s Built

- **Express.js** - Handles API requests.
- **Axios** - Fetches numbers from the test server.
- **Environment Variables (.env)** - Stores the access token securely.
- **Sliding Window Mechanism** - Maintains the last 10 unique numbers.
- **Error Handling** - Ensures smooth API operation, even if the test server fails.

---

## 🐝 License
This project is open-source. Feel free to modify and use it.

---

### ✨ Contributors
- **Your Name** (Replace with your GitHub profile or name)

