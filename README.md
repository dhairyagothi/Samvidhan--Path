
<div align="center"> <img src="https://github.com/user-attachments/assets/e130f30c-6c54-4673-bbc6-65cc90a05e6b" width="200" height="200" > </div>

# **Samvidhan Path**

Samvidhan Path is an interactive platform designed to educate and engage users about the Indian Constitution. This application provides resources, tools, and features to help individuals explore the foundational principles, rights, and responsibilities outlined in the Indian Constitution.

---

## **Table of Contents**
- [About the Project](#about-the-project)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

---

## **About the Project**
The goal of **Samvidhan Path** is to provide a modern, interactive experience for users to learn about the Constitution of India. From case studies and e-books to podcasts and games, this platform makes constitutional education accessible and engaging.

### **Core Objectives**
1. Empower citizens with knowledge of their constitutional rights and responsibilities.
2. Provide engaging tools like games, videos, and blogs for better understanding.
3. Encourage participation in discussions on constitutional matters.

---

## **Features**
- **Interactive Learning**: Explore fundamental rights, preamble, and key sections of the Constitution.
- **Engagement Tools**: Access blogs, podcasts, videos, and discussion forums.
- **Resource Hub**: E-books, case studies, and in-depth documentation.
- **Gamified Learning**: Enjoy games and quizzes related to constitutional knowledge.
- **Responsive Design**: Accessible on all devices.
- **Secure Login**: Includes password animations, eye visibility toggle, and social logins.

---

## **Project Structure**
This project follows a structured organization to maintain scalability and clarity.

### **Backend**
The backend files (if implemented) are stored here, which may include server-side logic, database connections, and API configurations.

### **Frontend**
```
Frontend/
├── node_modules/          # Dependencies installed by npm
├── public/                # Public assets accessible by the browser
│   ├── SEC/               # Public security-related files or components
│   └── assets/            # Static files (images, fonts, etc.)
├── src/                   # Source files for the application
│   ├── assets/            # Images, icons, and media files
│   ├── components/        # Reusable UI components
│   │   ├── Banner/        # Hero or Banner section components
│   │   ├── Footer/        # Footer UI components
│   │   ├── Hero/          # Main Hero section components
│   │   ├── Navbar/        # Navigation bar components
│   │   └── Layout.js      # Global layout structure
│   ├── pages/             # Individual pages or routes
│   │   ├── Citizens/      # Pages related to citizen information
│   │   ├── constitution/  # Constitution-related pages
│   │   ├── Explore/       # Pages to explore content
│   │   ├── contact.jsx    # Contact page
│   │   ├── ebooks.jsx     # E-books page
│   │   ├── engage.jsx     # Engagement page
│   │   ├── games.jsx      # Games page
│   │   ├── signin.jsx     # Sign-in page
│   ├── Services/          # Service or API integration components
│   ├── Subscribe/         # Subscription-related components
│   ├── App.jsx            # Main React App component
│   └── index.js           # React entry point
├── index.css              # Global CSS styles
```

---

## **Technologies Used**
- **Frontend**: React.js
- **Styling**: Tailwind CSS for a responsive and modern UI.
- **Animations**: Framer Motion for smooth transitions and interactivity.
- **Icons**: React Icons for visual enhancements.
- **Deployment**: Hosted on Vercel for fast and reliable performance.

---

## **Installation**

Follow these steps to run the project locally:

### **Prerequisites**
- Node.js (v16+)
- npm or yarn package manager

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/samvidhan-path.git
   cd samvidhan-path
   ```

2. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Contributing**
Contributions are welcome! If you'd like to make improvements or report bugs, please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

Feel free to suggest changes or ask questions. Let’s make **Samvidhan Path** better together! 🚀
