# <p align='center'>📝 Quiz App</p>

An interactive multiple-choice quiz built with React and Vite. The app guides learners through a curated set of questions, shows their progress in real time, and ends with a clear summary of results that highlights their strengths and knowledge gaps.

<br/>

## ✨ Features

- Smooth single-page experience with zero reloads thanks to Vite and React
- Dynamic progress indicator that updates as the user advances
- Immediate feedback on answers with detailed summary statistics
- Responsive layout designed to work well on mobile, tablet, and desktop
- Easy to extend by editing the question bank stored in `src/data/questions.js`

<br/>

## 🔗 Live Preview

- **https://hamza-quiz.netlify.app/**
<div align="center"><img width="869" height="619" alt="quiz" src="https://github.com/user-attachments/assets/06ea36c1-bfe1-4ba8-a4ae-a5211ca1a1f9" /></div>	


<br/>

## 🗂️ Project Structure

```
src/
	App.jsx           # Main application shell and routing logic
	components/       # Reusable UI elements (Quiz flow, header, progress, etc.)
	data/questions.js # Question bank with answers and scoring flags
	index.css         # Global styles
	main.jsx          # React entry point that mounts the app
```

<br/>

## 🧰 Tech Stack

- React 18
- Vite 4
- Modern CSS

<br/>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed locally

### Installation

```powershell
git clone https://github.com/Mahmoud-Hamza-Git/Quiz-App.git
cd Quiz-App
npm install
```

### Development server

```powershell
npm run dev
```

Open the printed local URL in your browser to explore the app with hot reloading.

### Production build

```powershell
npm run build
npm run preview
```

The `preview` command serves the optimized build locally so you can verify everything before deploying.
<br/>

## 🛠️ Customising Questions

Update `src/data/questions.js` to add, remove, or edit quiz questions. Each question object includes the prompt, possible answers, and flags for the correct choice, making it simple to tailor the quiz to new topics.

<br/>

<br/>
