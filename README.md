# Fern Staff Management System

This project is a CRUD (Create, Read, Update, Delete) application built using the FERN stack (Firebase, Express.js, React.js, Node.js). It allows the owner to manage staff details including their salaries.

## Features

- User authentication using Firebase Authentication
- CRUD operations for managing staff details
- Secure data storage using Firebase Firestore
- Responsive UI for easy access on multiple devices

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm
- You have created a Firebase project and set up Firestore and Authentication
- You have created a `.env` file in the server directory with the following variables:
  ```
  FIREBASE_API_KEY=your_api_key
  FIREBASE_AUTH_DOMAIN=your_auth_domain
  FIREBASE_DATABASE_URL=your_database_url
  FIREBASE_PROJECT_ID=your_project_id
  FIREBASE_STORAGE_BUCKET=your_storage_bucket
  FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  FIREBASE_APP_ID=your_app_id
  ```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/fern-staff-management.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fern-staff-management
   ```

3. Install dependencies for both client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Start the client:

   ```bash
   cd ../client
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deploying to Firebase

To deploy the application to Firebase, follow these steps:

1. Build the React app:

   ```bash
   cd client
   npm run build
   ```

2. Deploy to Firebase:

   ```bash
   firebase deploy
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
