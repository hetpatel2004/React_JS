This frontend folder is updated by ChatGPT.

Changes made:
1. Added src/utils/auth.js
2. Added src/Pages/ProtectedRoute.jsx
3. Replaced src/Pages/Main_route.jsx
4. Replaced src/Pages/Nav_bar.jsx
5. Updated src/Pages/Login.jsx to save token + role
6. Updated src/Pages/Index_two.jsx so all main page buttons redirect to login before login and work after login
7. Updated src/Pages/About.jsx buttons to navigate correctly
8. Added lowercase src/Pages/redux/carsSlice.jsx copy to avoid import-case issue

Admin Login:
Email: het@gmail.com
Password: het@123

How to use:
1. Replace your old Frontend folder with this folder.
2. Open terminal inside Frontend.
3. Run: npm install
4. Run: npm run dev

Before login:
- Available Cars, About, Contact, Show Cars, Details, See All, Subscription, List Your Cars redirect to login.

After login:
- Buttons navigate normally.
