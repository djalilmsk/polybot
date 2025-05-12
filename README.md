# Eurobot 2025 - Official Team Website

Welcome to the GitHub repository for the official website of our Eurobot 2025 team. This README is designed to guide collaborators and contributors—especially those unfamiliar with React—through understanding, running, and contributing to the project.

---

## ✨ Project Overview

This website introduces and showcases our robotics team competing in Eurobot 2025. It includes:

- A responsive **NavBar** with logo and links to different sections
- Informative sections: `Accueil`, `Eurobot`, `Equipe`, `Partenaire`, `Sponsoring`, `Contact`
- A call for support to partners and sponsors
- Details on the competition, team members, and our mission

---

## 🌐 Website Structure

### NavBar (Top Menu)

- **Logo**: aligned left
- **Sections**:

  - Accueil - Eurobot - Equipe - Partenaire - Sponsoring - Contact

### Accueil (Home)

- Welcome message introducing the team
- Description of our university background (ENP & USTHB)
- Brief of last year’s results and new ambitions

### Eurobot

- Introduction to the Eurobot competition
- Purpose and scope of the event
- The 2025 theme: _"The show must go on!"_
- Key dates:

  - National Phase: 8 April 2025 (El Harrach, Algeria)
  - International Phase: 28 May 2025 (France)

### Equipe (Team)

- Description of team composition:

  - 4 electronic engineers
  - 3 automation engineers
  - 1 mechanical engineer

- Member list with responsibilities (e.g., team leader, communication, mechanics, vision, etc.)

### Sponsoring

- Reasons to support us
- Benefits for partners (visibility, branding, educational impact, etc.)
- How companies can get involved

### Partenaire (Partners)

- Visibility and reach through ENP club collaborations (VIC, CAP, IEEE, etc.)
- Social media statistics:

  - 44.9k followers
  - 40k average views/post
  - 1550k cumulative likes

- Dedicated section on the IEEE ENP Student Branch website

### Contact

- Footer section with:

  - Instagram
  - Facebook
  - Email

---

## ⚙️ Tech Stack

- **React.js** (for front-end)
- **Tailwind CSS** (for styling)
- **Vite**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/eurobot-website.git
cd eurobot-website
```

```bash
code .  # optional if you want to continue on your IDE
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev   # for Vite
# or
npm start     # for CRA
```

The website will be available at`http://localhost:5173`.
To change it go to vite.config.js:

```jsx
export default defineConfig({
  // ...
  // Add the following code
  server: {
    port: 5173, // Change this to your desired port
  },
});
```

---

## ✍️ How to Edit

If you're not familiar with React:

- Each section is a component under `/src/components`
- Text content is in JSX files (like HTML)
- To change a section’s text, open the corresponding component and edit the text inside `return()`
- Use simple HTML tags like `<h1>`, `<p>`, and `<div>`

---

## ✨ Team Members

Team led by: **KOUZOU Zakaria**
Tech lead: **MESKALI Mohamed Ali**
Communications: **AGUENAROUS Mohamed Rayan**
Electronics: **BOUKHARI Abdenour**, **BERBAH Rania**
Automation: **DOUALA Mohamed Zakaria**, **HAMMOUCHE Mohamed Amine**
Mechanics: **OULADDA Daoud**

Visit the [Eurobot official site](https://www.eurobot.org/) for more on the competition.

---

## 📢 Contact

Follow us and reach out:

- Instagram: [@your_team](https://instagram.com/your_team)
- Facebook: [fb.com/your_team](https://facebook.com/your_team)
- Email: [eurobot.team2025@gmail.com](mailto:eurobot.team2025@gmail.com)
