# IoT Water Level Monitoring System

Welcome to the IoT Water Level Monitoring System project! This system allows you to monitor the water levels using IoT technology. It is built using EJS for templating, Node.js for the backend, and MongoDB for data storage.

## 🌟 Features

- 💧 Monitor water levels in real-time.
- 📊 Visualize historical water level data.
- 📱 Responsive web interface for easy access from any device.
- 🔒 Secure data storage using MongoDB.

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### 📋 Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running locally or accessible via a URL.

### 🔧 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/pitabasdev/water-level.git
   ```

2. Change to the project directory:
   ```sh
   cd water-level
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your-mongodb-uri
     ```

### 🚀 Running the Application

1. Start the server:
   ```sh
   npm start
   ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

### 📁 Project Structure

```
water-level/
├── app.js
├── controllers/
│   └── (controller files)
├── models/
│   └── (model files)
├── routes/
│   └── (route files)
├── views/
│   └── (EJS template files)
├── public/
│   ├── css/
│   ├── js/
│   └── img/
├── .env
└── README.md
```

## 🛠️ Built With

- EJS - Embedded JavaScript templating
- Node.js - JavaScript runtime
- MongoDB - NoSQL database
- (Any other libraries or tools used)
