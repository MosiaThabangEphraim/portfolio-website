# Thabang Mosia - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and academic achievements as a BSc Information Technology student at North-West University.

## 🚀 Live Demo

[View Portfolio](https://mosiathabangephraim.github.io/portfolio-website)

## 📋 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth routing between different sections
- **Contact Form**: Integrated EmailJS for direct communication
- **Downloadable Resume**: PDF resume available for download
- **Interactive Game**: Click speed challenge for user engagement
- **Academic Showcase**: Detailed course information and achievements
- **Project Portfolio**: Showcase of development projects
- **Skills Display**: Technical skills and programming languages
- **Awards & Certificates**: Academic achievements and certifications
- **Analytics Integration**: Google Analytics for website traffic insights

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with animations and responsive design
- **Routing**: React Router for single-page application navigation
- **Email Service**: EmailJS for contact form functionality
- **Analytics**: Google Analytics (gtag.js) for website insights
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
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Education.js
│   │   ├── Courses.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Awards.js
│   │   ├── Projects.js
│   │   ├── Certificates.js
│   │   ├── Links.js
│   │   └── Contact.js
│   ├── assets/
│   │   ├── profile.jpg
│   │   ├── RESUME.pdf
│   │   └── certificates/
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

4. **Set up Google Analytics (Optional)**
   
   For website analytics:
   
   a. Create a Google Analytics account at [Google Analytics](https://analytics.google.com/)
   
   b. Create a new property and get your tracking ID (format: G-XXXXXXXXXX)
   
   c. Update the tracking ID in `public/index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_TRACKING_ID');
   </script>
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   
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
- Update `src/assets/RESUME.pdf` with your resume

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

## 🔒 Privacy & Analytics

This website uses Google Analytics to understand visitor behavior and improve user experience. Google Analytics collects anonymous data about:
- Page views and navigation patterns
- Device and browser information
- Geographic location (country/city level)
- Referral sources

No personal information is collected. You can opt out of Google Analytics tracking by installing browser extensions or adjusting your browser settings.

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons and styling inspired by modern web design principles
- Special thanks to the React community for excellent documentation

---

**Thabang Mosia** - BSc Information Technology Student | Software Developer | Future Tech Innovator