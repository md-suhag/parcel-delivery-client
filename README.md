# Parcel Delivery system

## Introduction

This is a modern, scalable, and high-performance Parcel delivery platform designed to provide a seamless parcel delivery experience for sender, receiver etc .

---

## Project Description

A MERN stack web application for managing and tracking parcel deliveries. The system allows senders, receivers, and admins to interact seamlessly with features like:

- Send & Track Parcels – Create delivery requests and track parcels in real-time.

- Role-based Access – Separate dashboards for Sender, Receiver, and Admin.

- Parcel Status Updates – Live status logs from Requested → Delivered.

- Secure Authentication – JWT with HTTP-only cookies for safe login sessions.

- Admin Controls – Manage users, parcels, and monitor delivery performance.

### [Live Demo](https://parcel-delivery-client-five.vercel.app/)

```bash
https://parcel-delivery-client-five.vercel.app
```

---

## Technology Stack

### **Frontend**

- Typescript
- React.js
- Redux Toolkit
- Shadcn UI
- Tailwind CSS

### **Backend**

- Typescript
- Node.js & Express.js
- MongoDB & Mongoose
- JWT (Authentication & Authorization)

---

## Installation Guide

Follow these steps to set up locally.

### **Prerequisites**

- Node.js installed
- Code editor (e.g., VS Code)

---

### **Frontend Setup**

1. **Clone the repository**

   ```bash
   git clone https://github.com/md-suhag/parcel-delivery-client.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd parcel-delivery-client
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create environment variables**  
   Create a `.env` file in the frontend root directory and add:

   ```env
   VITE_BASE_URL=your_backend_base_url   # e.g., http://localhost:5000/api/v1
   ```

5. **Run the frontend**
   ```bash
   npm run dev
   ```

---

### **Backend Setup**

6. **Clone the backend repository**

   ```bash
   git clone https://github.com/md-suhag/parcel-delivery-server.git
   ```

7. **Navigate to the server directory**

   ```bash
   cd parcel-delivery-server
   ```

8. **Install dependencies**

   ```bash
   npm install
   ```

9. **Create environment variables**  
   Create a `.env` file in the server root directory and add:

```markdown
FRONTEND_URL= your fronted url
PORT=5000
DB_URL= your database url
NODE_ENV= your env mode

BCRYPT_SALT_ROUND= any salt round number like 10, 12, 8

JWT_ACCESS_SECRET= your access secret
JWT_ACCESS_EXPIRES= 1h
JWT_REFRESH_SECRET= your refresh secret
JWT_REFRESH_EXPIRES= 30d

ADMIN_PHONE= your admin phone
ADMIN_EMAIL= your admin email
ADMIN_PASSWORD= your admin password
ADMIN_ADDRESS= your admin address

EXPRESS_SESSION_SECRET= your session secret
```

10. **Run the backend**
    ```bash
    npm run dev
    ```

---

### **Access the Application**

Once both frontend and backend are running, open:

```text
http://localhost:5173
```

---

## Demo credentials

admin phone: 01711223344 <br>
admin password: 1234Super@

sender phone: 01701020304 <br>
sender password: Test123#

receiver phone: 01766758301 <br>
receiver password: 123456@A

---

## Thank You

Happy shopping & coding! 💻
