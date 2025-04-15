<<<<<<< HEAD
# react-styling-demo
=======
# React Styling Methods Demo

This project demonstrates different styling approaches in React, showcasing four main methods of styling components:
- External CSS
- Styled Components
- CSS Modules
- Inline CSS

## 🚀 Features

- Interactive navigation between different styling methods
- Responsive design that works on all screen sizes
- Detailed examples of each styling approach
- Modern UI with gradients, shadows, and animations
- Educational content explaining each method

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdifitahmohamuud/react-styling-demo
```

2. Navigate to the project directory:
```bash
cd react-styling-demo
```

3. Install dependencies:
```bash
npm install
```

This will install all necessary dependencies including:
- React
- Vite
- Styled Components
- Other required packages

## 🏃‍♂️ Running the Project

To start the development server:

```bash
npm run dev
```

The application will start running at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/    # Styled Components example
├── external/      # External CSS example
├── internal/      # Inline CSS example
├── module/        # CSS Modules example
├── App.jsx        # Main application component
├── App.css        # Global styles
└── main.jsx      # Entry point
```

## 🎨 Styling Methods Explained

### 1. External CSS
- Traditional CSS approach
- Styles defined in separate .css files
- Global scope
- Located in `src/external/`

### 2. Styled Components
- CSS-in-JS solution
- Component-scoped styles
- Dynamic styling with props
- Located in `src/component/`

### 3. CSS Modules
- Locally scoped CSS
- Prevents style conflicts
- Modular and reusable
- Located in `src/module/`

### 4. Inline CSS
- Styles defined directly in JSX
- JavaScript objects for styles
- Dynamic and conditional styling
- Located in `src/internal/`

## 🔧 Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds the project for production
- `npm run preview` - Preview production build locally

## 📱 Responsive Design

The project is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

All components automatically adjust their layout and styling based on screen size.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- Make sure to run `npm install` after cloning to install all dependencies
- The project uses Vite for faster development and building
- Each styling method has its own dedicated section with examples and explanations

## 🐛 Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed:
```bash
npm install
```

2. Clear npm cache:
```bash
npm cache clean --force
```

3. Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details
>>>>>>> 50a8259 (Initial commit with all project files)
