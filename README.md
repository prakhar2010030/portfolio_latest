# 💼 Personal Portfolio Website

A sleek, responsive portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion** to showcase my skills, experience, and projects as a Full Stack Developer. Includes  smooth scroll animations, and a downloadable resume.

---

## 🚀 Features

- ⚡ Fully responsive design
- 🧭 Smooth scroll navigation
- 🎞️ Scroll-based animations (Framer Motion)
- 📄 Resume download (PDF)
- 🧠 Skills, experience, projects, and contact sections
- 🌐 Deployed on  Netlify

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **Framer Motion**
- **Vite** (or Create React App)
- **EmailJS** (for contact form - optional)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your environment variables (if using EmailJS)
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## 📝 Usage

### Development

The development server will start at `http://localhost:5173`. The app will automatically reload if you change any of the source files.

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with your compiled assets ready for deployment.

### Deployment

The portfolio is configured for easy deployment on Netlify. Simply connect your GitHub repository to Netlify and it will automatically deploy when you push to the main branch.

Build command: `npm run build` or `yarn build`
Publish directory: `dist`

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── assets/        # Images, fonts, etc.
│   ├── sections/      # Main page sections
│   ├── styles/        # Global styles
│   └── App.jsx        # Root component
├── public/            # Static files
└── index.html         # Entry point
```

---

## ✨ Customization

1. Update your personal information in `src/data/` directory
2. Replace images in `src/assets/`
3. Modify color scheme in `tailwind.config.js`
4. Update content in respective components

---


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

## 👤 Author

prakhar
- Website: [prakhar_portfolio.com](https://portfolio-shunnya.netlify.app/)
- GitHub: [@prakhar2010030](https://github.com/prakhar2010030)

---

## 🌟 Show your support

Give a ⭐️ if you like this project!



