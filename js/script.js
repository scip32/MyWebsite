:root {
  --primary: #64ffda;
  --bg-dark: #1e1e1e;
  --bg-light: #ffffff;
  --text-light: #f0f0f0;
  --text-dark: #222;
  --card-bg-dark: #2b2b2b;
  --card-bg-light: #f4f4f4;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: var(--bg-dark);
  color: var(--text-light);
  font-size: 17px;
  transition: background 0.3s ease, color 0.3s ease;
}

body.light-mode {
  background: var(--bg-light);
  color: var(--text-dark);
}

/* Print styles */
@media print {
  body {
    background: white !important;
    color: black !important;
  }
  nav, .toggle-btn, footer, .btn {
    display: none !important;
  }
  .card {
    background: white !important;
    box-shadow: none !important;
    border: 1px solid #ccc;
  }
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 2rem 1rem;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 4rem;
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(80%);
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 2.6rem;
  margin: 0.5rem 0;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 1rem;
}

.highlight { color: var(--primary); font-weight: bold; }

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #121212;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav h3 { margin: 0; font-size: 1.2rem; }

nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 0; padding: 0;
}

nav a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
}

nav a:hover { color: var(--primary); }

.toggle-btn {
  background: var(--primary);
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

section {
  padding: 3rem 0;
  border-bottom: 1px solid #333;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-left: 5px solid var(--primary);
  padding-left: 1rem;
}

.skills-grid,
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
}

.card {
  background: var(--card-bg-dark);
  padding: 1.2rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  transition: transform 0.3s ease,
              box-shadow 0.3s ease,
              background 0.3s ease;
}

body.light-mode .card {
  background: var(--card-bg-light);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.btn {
  background: var(--primary);
  color: #000;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  margin-top: 1.5rem;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn:hover { background: #52e0c4; }

form input,
form textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 4px;
  background: #2d2d2d;
  color: #fff;
  font-size: 1rem;
}

footer {
  text-align: center;
  padding: 2rem;
  background: #121212;
  color: #999;
  font-size: 0.9rem;
}
