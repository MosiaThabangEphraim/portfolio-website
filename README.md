# Thabang Mosia: Portfolio

A modern, responsive portfolio website showcasing my skills, projects, experience and academic achievements as a final-year BSc Information Technology student at North-West University and incoming Software Engineer at Investec.

## 🚀 Live Demo

# [View Portfolio](https://mosiathabangephraim.github.io/portfolio-website/)

## 📋 Features

### Content

- **Experience Timeline**: Roles shown on a timeline with **Current** and **Upcoming** status badges
- **Coursework Dashboard**: Degree and yearly averages at a glance, with modules grouped per year and colour-coded results (Distinction, Pass, In progress)
- **Grouped Skills**: Skills organised into areas (Programming Languages, Frameworks & Backend, Databases, Tools, Soft skills and more), with proficiency levels for languages
- **Project Portfolio**: Project cards with GitHub and live-demo links
- **Awards & Certificates**: Academic achievements with viewable certificates
- **Downloadable CV**: PDF CV available from the Home page
- **Contact Form**: Integrated EmailJS form, with document requests and validation

### Interface

- **Modern Dashboard UI**: Borderless cards, soft shadows and a consistent page layout (header, filter bar, cards) across every page
- **Light & Dark Mode**: Floating toggle in the bottom-right corner. Follows the device setting by default and remembers the visitor's choice
- **Search, Filter & Sort**: Every list page has search, pill-style filters and sorting, plus result counts and empty states
- **Site-wide Search**: Search across pages, courses, awards, experience, projects, skills and links from the Home page
- **Responsive Design**: Optimised for desktop, tablet and mobile

### Accessibility & Voice

- **Text-to-Speech ("Listen")**: Listen buttons on longer text (About Me, focus areas, education, experience, projects and awards) read content aloud with pause, resume and stop. Prefers natural-sounding female voices (e.g. Microsoft Natural voices in Edge, Premium/Enhanced voices on Apple devices, Google UK English Female in Chrome)
- **Speech-to-Text (Voice Input)**: Microphone buttons in every search box filter results as you speak, and the contact form's message box supports continuous dictation
- **Keyboard & Screen Reader Friendly**: Labelled controls, visible focus states and live result announcements
- **Reduced Motion**: Animations are disabled for visitors who prefer reduced motion

> Voice input uses the browser's Web Speech API and is available in Chrome, Edge and Safari. In browsers without support (e.g. Firefox), the microphone buttons are hidden. Text-to-speech works in all modern browsers; available voices depend on the visitor's browser and operating system.

### AI Chatbot

- **Chatbase AI Assistant**: AI chatbot integrated using Chatbase to provide real-time responses, enhance user interaction, and deliver intelligent, automated support based on trained data.

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with theme variables (light/dark) and a shared design kit
- **Routing**: React Router for single-page application navigation
- **Voice**: Web Speech API (`speechSynthesis` and `SpeechRecognition`)
- **Email Service**: EmailJS for contact form functionality
- **Chatbot**: Chatbase AI widget
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages (`gh-pages`)
- **Version Control**: Git & GitHub

## The portfolio consists of the following sections:

- **Home**
- **Education**
- **Coursework**
- **Experience**
- **Skills**
- **Awards**
- **Projects**
- **Links**
- **Contact**

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html            # Theme is applied here before first paint
│   ├── manifest.json
│   ├── favicon.ico           # Generated from the profile photo
│   ├── logo192.png / logo512.png
│   └── resume.pdf            # Downloadable CV
├── src/
│   ├── components/
│   │   ├── ui.js             # Shared building blocks (PageHeader, SearchField, Segmented, …)
│   │   ├── Icon.js           # Inline SVG icon set
│   │   ├── ListenButton.js   # Text-to-speech button
│   │   ├── VoiceInputButton.js # Speech-to-text microphone button
│   │   ├── ThemeToggle.js    # Floating light/dark toggle
│   │   └── Speech.css
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useSpeechSynthesis.js
│   │   └── useSpeechRecognition.js
│   ├── styles/
│   │   └── ui.css            # Shared design kit (cards, toolbar, badges, buttons)
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
│   │   ├── GradStar Top 100.jpeg
│   │   ├── fnas-deans-award.jpg
│   │   ├── golden-key-certificate.pdf
│   │   └── profile.jpeg
│   ├── index.css             # Theme colour variables (light & dark)
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
   git clone https://github.com/MosiaThabangEphraim/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**

   For the contact form to work:

   a. Create an account at [EmailJS](https://www.emailjs.com/)

   b. Create a service and a template using these variables: `name`, `email`, `contactNumber`, `company`, `subject`, `documentRequests`, `documentOtherSpecify`, `otherSpecify`, `message`, `to_email`

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

   > Voice input needs microphone permission and only works on `localhost` or HTTPS.

## 📜 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run deploy`: Builds and publishes the site to GitHub Pages
- `npm run eject`: Ejects from Create React App (one-way operation)

## 🎨 Customization

### Personal Information

- Update personal details in `src/pages/Home.js`
- Replace `src/assets/profile.jpeg` with your photo (and regenerate `public/favicon.ico`, `logo192.png` and `logo512.png`)
- Replace `public/resume.pdf` with your CV

### Content

- **Experience**: `src/data/experienceData.js`. Roles with a future start date are automatically shown as **Upcoming**
- **Skills**: `src/data/skillsData.js`. Add groups or skills; `level` (e.g. `'Proficient'`) is optional
- **Projects**: `src/data/projectsData.js` (`repo` and `link` are optional)
- **Awards**: `src/data/awardsData.js`
- **Coursework**: module lists and averages in `src/pages/Courses.js`

### Styling

- **Theme colours**: edit the CSS variables in `src/index.css` (`:root` for light mode, `[data-theme='dark']` for dark mode)
- **Shared components** (cards, toolbar, badges, buttons): `src/styles/ui.css`
- **Page-specific layout**: each page's own CSS file in `src/pages/`

### Voice

- **Preferred voices** for text-to-speech: the `FEMALE_VOICES` list in `src/hooks/useSpeechSynthesis.js` (first match wins)
- **Speaking rate and pitch**: set in the `speak` function in the same file

### Floating Buttons

- The theme toggle sits to the left of the Chatbase chat bubble. If the chat bubble's position or size is changed in the Chatbase dashboard, update the offsets on `.theme-toggle` in `src/components/Speech.css`.

## 📱 Responsive Design

The portfolio is fully responsive and optimised for:

- **Desktop**: Sidebar navigation with multi-column card grids
- **Tablet**: Horizontal navigation and adapted spacing
- **Mobile**: Single-column cards, stacked tables and touch-friendly controls

## 🚀 Deployment

### GitHub Pages

```bash
npm run deploy
```

This builds the project and publishes the `build` folder to the `gh-pages` branch. The site URL is set by `homepage` in `package.json`.

### Netlify/Vercel

1. Connect your GitHub repository
2. Deploy automatically on every push
3. Custom domain support available

## 📧 Contact

- **Email**: mosiathabangephraim2@gmail.com
- **LinkedIn**: [Thabang Mosia](https://www.linkedin.com/in/thabang-mosia-7340742ab)
- **GitHub**: [MosiaThabangEphraim](https://github.com/MosiaThabangEphraim)

## Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons and styling inspired by modern web design principles
- Special thanks to the React community for excellent documentation

---
