# Node.js Counter

A lightweight, high-performance Counter application built exclusively with **Node.js built-in modules** (`http`, `fs/promises`, `path`).

- ⚡ **Zero External Dependencies**: Built 100% on native Node.js and Vanilla JS.
- 🎨 **Distinct Vibrant Themes**: High-contrast, easily distinguishable themes (Cyber Indigo, Cyber Emerald, Sunset Ember, Frost Luxury).
- ✨ **Clean Smooth Animations**: Directional number slide, scale bounces, and interactive canvas sparks.
- 🚀 **Ultra-Responsive UX**: Mobile-first design, press-and-hold rapid auto-firing, step multipliers (±1, ±5, ±10, ±50, ±100), and direct value editor.
- 🔊 **Native Synthesized Audio**: Built-in Web Audio API sound effects with haptic vibration support.
- 💾 **Reliable File Persistence**: Persists counter state in `data.json` with async queue protection.
- ⌨️ **Comprehensive Hotkeys**: Instant keyboard navigation with interactive visual key feedback.

---

## 📁 Project Structure

```
counter-app-1/
├── data.json           # File storage for persisting counter value (Node.js mode)
├── package.json        # Project metadata, start, build, and gh-pages deploy scripts
├── public/
│   └── index.html      # Responsive 3D UI with themes, audio, animations & localStorage fallback
├── scripts/
│   └── build.js        # Packages static dist/index.html for GitHub Pages
├── README.md           # Documentation and curl API examples
├── render.yaml         # Render deployment blueprint
└── server.js           # Built-in Node.js HTTP server & REST routing
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or newer recommended)

### Running the Server

Start the server using npm:

```bash
npm start
```

Or run `server.js` directly:

```bash
node server.js
```

The server will start listening at:
👉 **`http://localhost:3000`**

Open `http://localhost:3000` in your web browser.

---

## 📡 API Endpoints & `curl` Examples

All API responses are formatted as JSON.

### 1. Serve HTML Frontend
- **Endpoint**: `GET /`
- **Example**:
  ```bash
  curl -i http://localhost:3000/
  ```

---

### 2. Get Current Count
- **Endpoint**: `GET /count`
- **Example**:
  ```bash
  curl -i http://localhost:3000/count
  ```
- **Response**:
  ```json
  { "count": 0 }
  ```

---

### 3. Increment Count (with optional step amount)
- **Endpoint**: `POST /increment`
- **Query Parameter / Body**: `?amount=5` or `{ "amount": 5 }` (defaults to 1)
- **Examples**:
  ```bash
  # Increment by 1
  curl -i -X POST http://localhost:3000/increment

  # Increment by 5
  curl -i -X POST http://localhost:3000/increment?amount=5
  ```
- **Response**:
  ```json
  { "count": 5, "step": 5 }
  ```

---

### 4. Decrement Count (with optional step amount)
- **Endpoint**: `POST /decrement`
- **Query Parameter / Body**: `?amount=5` or `{ "amount": 5 }` (defaults to 1)
- **Examples**:
  ```bash
  # Decrement by 1
  curl -i -X POST http://localhost:3000/decrement

  # Decrement by 10
  curl -i -X POST http://localhost:3000/decrement?amount=10
  ```
- **Response**:
  ```json
  { "count": -5, "step": 10 }
  ```

---

### 5. Set Specific Value
- **Endpoint**: `POST /set`
- **Query Parameter / Body**: `?value=100` or `{ "value": 100 }`
- **Example**:
  ```bash
  curl -i -X POST http://localhost:3000/set?value=100
  ```
- **Response**:
  ```json
  { "count": 100 }
  ```

---

### 6. Reset Count
- **Endpoint**: `POST /reset`
- **Example**:
  ```bash
  curl -i -X POST http://localhost:3000/reset
  ```
- **Response**:
  ```json
  { "count": 0 }
  ```

---

## ⌨️ Keyboard Shortcuts (Web UI)

| Key | Action |
| --- | --- |
| `+` / `↑` / `Space` | **Increment** by current step |
| `−` / `↓` | **Decrement** by current step |
| `R` | **Reset** counter to 0 |
| `1`, `2`, `3`, `4`, `5` | Switch step multiplier (`±1`, `±5`, `±10`, `±50`, `±100`) |
| `M` | Toggle synthesized **Sound FX** ON / OFF |
| `?` | Open **Shortcuts Cheat Sheet** dialog |
| `Esc` | Dismiss modals |

---

## 🌐 Deploying to GitHub Pages

The frontend automatically detects static hosting (such as GitHub Pages) and falls back to `localStorage` persistence while keeping full `server.js` REST API synchronization when running with Node.js.

```bash
npm run deploy
```

This runs `predeploy` (`npm run build`, outputting `dist/index.html`) and publishes `dist/` to the `gh-pages` branch via `gh-pages`.

In your GitHub repository **Settings → Pages**, set **Branch** to **`gh-pages`** (`/ (root)`). The site will be live at:
👉 **`https://sainandagopal.github.io/counter-app-1/`**

---

## ☁️ Deploying to Render

1. Push this repo to GitHub.
2. On [render.com](https://render.com): **New + → Blueprint**, pick this repo. Render reads `render.yaml` and creates the web service automatically.
   (Or **New + → Web Service** with Build Command `npm install` and Start Command `npm start`.)
3. Open the `https://<name>.onrender.com` URL when the deploy finishes.

> On the free plan the filesystem is ephemeral, so the count in `data.json` resets on redeploy/restart.
> To keep it, use a paid plan and uncomment the `disk` + `DATA_FILE` lines in `render.yaml`.
