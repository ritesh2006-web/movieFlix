
# MovieFlix 🎬

A modern, Netflix-inspired React app to search for movies using the OMDb API.

## Features
- Search for movies by title
- Responsive, Netflix-like UI
- Displays movie posters, titles, and release years
- Powered by the OMDb API

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/ritesh2006-web/movieFlix.git
   cd movieFlix
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up your OMDb API key:**
   - Create a `.env` file in the project root:
     ```env
     VITE_OMDB_API_KEY=your_omdb_api_key_here
     ```
   - You can get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure
```
movieFlix/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── Movies.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── index.css
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used
- React
- Vite
- OMDb API
- CSS (custom, Netflix-inspired)

## License
This project is licensed under the MIT License.

---

> **Note:** Do not share your `.env` file or API key publicly.
