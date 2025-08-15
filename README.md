🏋️‍♂️ Fitness App

A full-stack MERN fitness tracking application where users can set their fitness goals, track workouts, monitor daily cardio, and view progress statistics through interactive charts.

---

## 📊 Features

- **User Authentication**
  - Register and log in using secure authentication (cookies-based sessions).
  
- **Dashboard / Main Page**
  - View total workouts, steps taken, and calories burned.
  - Interactive graphs for visualizing progress using **Chart.js**.

- **User Parameters**
  - Set personal parameters such as:
    - Age
    - Gender
    - Goal (Lose, Gain, Maintain weight)
    - Height
    - Weight

- **Workout Creation**
  - Search for exercises via the [API Ninjas Exercise API](https://api-ninjas.com/api/exercises).
  - Create a personalized workout plan.
  - Save and track completed exercises.

- **Daily Cardio Tracking**
  - Log steps taken for the day.
  - Mark whether you completed your planned workout.
  - Log extra cardio sessions by selecting exercises from the API.
  - Automatic calorie burn calculation based on logged activities.

- **Profile Page**
  - View your saved workout plan.
  - Review your parameters and personal information.

---

## 🛠 Tech Stack

**Frontend**  
- React.js  
- Redux  
- Material UI (MUI)  
- Chart.js  

**Backend**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  

**Other**  
- API Ninjas Exercise API  
- Cookies-based authentication  
- Hosted on **Render**  

---

## 📂 Project Structure
fitness-app/
│
├── backend/ # Express server, MongoDB models, routes
│
└── frontend/ # React app with Redux Toolkit, MUI, Chart.js

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/fitness-app.git
cd fitness-app
### 2️⃣ Backend Setup
cd server
npm install
- Create a .env file in backend/ with:
MONGO_URI=your_mongodb_connection_string
PORT=5000
API_NINJAS_KEY=your_api_key
COOKIE_SECRET=your_cookie_secret
- Start the backend:
npm run dev
### 3️⃣ Frontend Setup
cd client
npm install
- Create a .env file in frontend/ with:
REACT_APP_API_BASE_URL=http://localhost:8000
- Start the frontend:
npm start
```
---

## 📸 Screenshots
![Register](client/screenshots/register.png)
![Login](client/screenshots/login.png)
![MainPage](client/screenshots/mainpage.png)
![CreateParameters](client/screenshots/createparameters.png)
![CreateWorkout](client/screenshots/createworkout.png)
![TrackCalories](client/screenshots/trackcalories.png)
![Profile](client/screenshots/profile.png)

---

## 🙌 Acknowledgments
- Thanks to [API NINJAS](https://www.api-ninjas.com/api/exercises) for providing exercise data.

---

 ## 👤 Author

**JakubJarosz**  
GitHub: [@JakubJarosz](https://github.com/JakubJarosz)  
Email: jakubtm165@gmail.com 
