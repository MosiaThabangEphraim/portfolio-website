# Thabang Mosia - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and academic achievements as a BSc Information Technology student at North-West University.

## 🚀 Live Demo

[View Portfolio](https://mosiathabangephraim.github.io/portfolio-website/)

## 📋 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth routing between different sections
- **Contact Form**: Integrated EmailJS for direct communication
- **Downloadable CV**: PDF CV available for download
- **Academic Record Download**: Academic record PDF available for download from Coursework
- **Site-wide Search**: Search across pages, courses, awards, experience, projects, skills, and links
- **Academic Showcase**: Detailed coursework information and achievements
- **Project Portfolio**: Showcase of development projects
- **Skills Display**: Soft skills and technical skills
- **Awards & Certificates**: Academic achievements and certifications
- **AI Chatbot powered by Chatbase**: AI chatbot integrated using Chatbase to provide real-time responses, enhance user interaction, and deliver intelligent, automated support based on trained data.

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with animations and responsive design
- **Routing**: React Router for single-page application navigation
- **Email Service**: EmailJS for contact form functionality
- **Chatbot**: Chatbase AI widget
- **Build Tool**: Create React App
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── ClickSpeedGame.js
│   ├── data/
│   │   ├── awardsData.js
│   │   ├── coursesData.js
│   │   ├── experienceData.js
│   │   ├── linksData.js
│   │   ├── projectsData.js
│   │   └── skillsData.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Education.js
│   │   ├── Courses.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Awards.js
│   │   ├── Projects.js
│   │   ├── Links.js
│   │   └── Contact.js
│   ├── assets/
│   │   ├── profile.jpg
│   │   ├── MOSIA THABANG.pdf
│   │   └── AcademicRecord_54607949.pdf
│   └── App.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   
   For the contact form to work:
   
   a. Create an account at [EmailJS](https://www.emailjs.com/)
   
   b. Create a service and template with variables: `from_name`, `reply_to`, `subject`, `message`, `to_email`
   
   c. Create a `.env` file in the project root:
   ```env
   REACT_APP_EMAILJS_SERVICE=your_service_id
   REACT_APP_EMAILJS_TEMPLATE=your_template_id
   REACT_APP_EMAILJS_PUBLIC=your_public_key
   ```
   
   d. Restart the development server after creating `.env`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Personal Information
- Update personal details in `src/pages/Home.js`
- Replace `src/assets/profile.jpg` with your photo
- Update `src/assets/MOSIA THABANG.pdf` with your CV

### Styling
- Modify `src/App.css` for global styles
- Update individual page CSS files for specific styling
- Color scheme can be changed by updating CSS variables

### Content
- Add/remove pages in `src/pages/`
- Update course information in `src/pages/Courses.js`
- Modify project showcase in `src/pages/Projects.js`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full navigation and layout
- **Tablet**: Adapted navigation and spacing
- **Mobile**: Stacked layout with touch-friendly navigation

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub repository
3. Enable GitHub Pages in repository settings
4. Select source branch (usually `main`)

### Netlify/Vercel
1. Connect your GitHub repository
2. Deploy automatically on every push
3. Custom domain support available

## 📧 Contact

- **Email**: mosiathabangephraim2@gmail.com
- **LinkedIn**: [Thabang Mosia](https://www.linkedin.com/in/thabang-mosia-7340742ab)
- **GitHub**: [MosiaThabangEphraim](https://github.com/MosiaThabangEphraim)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons and styling inspired by modern web design principles
- Special thanks to the React community for excellent documentation
- AI assisted tool: Claude were used occasionally during development for code review, debugging guidance, and productivity improvements. All architecture, implementation decisions, and final code integration were completed by the author.

---
