# HealthStream

**HealthStream** is a web application designed to streamline healthcare processes by enhancing doctor-patient interactions. The platform simplifies appointment scheduling, real-time updates, and administrative management, improving user experience for both healthcare providers and patients.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

---

### Features
- **Admin**:
  - Can add or remove doctors.
- **Patients**:
  - Can book appointments based on doctor specialties.
- **Doctors**:
  - Can accept or reject appointments.
- **Real-Time Dashboard**:
  - Provides real-time updates and insights.

---

### Tech Stack
- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

### Installation

1. **Clone the repository**:  
```bash
   git clone https://github.com/Jeanish/HealthStream.git
```
2. **Install backend dependencies**:
```bash
    cd backend
    npm install
```

3. **Install frontend dependencies**:
```bash
cd ../frontend
npm install
```

4. **Configure environment variables**:
Set up your MongoDB connection and other necessary environment variables.

5. **Start the backend**:

```bash
npm run start-backend
Start the frontend:

npm run start-frontend
```

### Usage
Once both frontend and backend servers are running, navigate to the application in your browser. You will have access to:
**Admin Dashboard for managing doctors**.
**Patient Portal for booking appointments**.
**Doctor Dashboard for managing appointments**.

### License