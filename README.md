# Full-Stack Chat System

### Overview
This is a simple full-stack chat system built using microservices architecture. The system allows users to register, log in, and exchange messages in real-time.

### Technologies Used

#### Backend:
- **Java**
- **Spring Boot**
- **Microservices Architecture**
- **PostgreSQL**

#### Frontend:
- **React**
- **Vite**
- **TypeScript**
- **JavaScript**

### Features
- **User Registration**: Users can register and create accounts.
- **User Login**: Users can log in securely to access the chat system.
- **Send Messages**: Real-time messaging between users.
- **User Listing**: Ability to view registered users in the system.

### API Endpoints

#### Chat Endpoints
- **POST** `/chat/sendMessage`  
  Send a message to another user via this endpoint.

- **POST** `/chat/addUser`  
  Register a new user to participate in the chat.

#### User Management Endpoints
- **POST** `/api/user/create`  
  Create a new user account in the database.

- **POST** `/api/user/login`  
  Log in an existing user to the chat system.

- **GET** `/api/user/getUsers`  
  Retrieve a list of all registered users.

### How to Run

1. **Backend**: Clone the repository and navigate to the backend folder. Make sure you have Java and PostgreSQL set up. Use Maven or Gradle to build and run the Spring Boot microservices.

2. **Frontend**: Clone the frontend repository, navigate to the folder, and run the following commands:
   ```bash
   npm install
   npm run dev
   ```

### Contributions
Feel free to fork the project, submit issues, or contribute to improving it.

---
