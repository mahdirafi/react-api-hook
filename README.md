<div align="center">

# 🪝 React API Hook

**A lightweight custom React hook for fetching data from APIs with built-in loading, error, and data state handling.**

[Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Available Scripts](#-available-scripts)
- [Best Practices](#-best-practices)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📖 About the Project

**React API Hook** is a reusable custom hook that removes the repetitive boilerplate of calling an API inside React components. Instead of writing `useState` and `useEffect` logic in every component, you call one hook and get back the three things every data-driven UI needs: the **data**, a **loading** flag, and an **error** state.

The project is built with **React** and **Vite**, and it works as both a learning reference and a drop-in utility for small to medium React applications.

---

## ✨ Features

- ⚡ **Simple API**: fetch data with a single hook call.
- ⏳ **Loading state**: know when a request is in progress and show spinners or skeletons.
- 🚨 **Error handling**: catch network and HTTP errors and render fallback UI.
- ♻️ **Reusable**: use the same hook for any endpoint across your app.
- 🧹 **Clean components**: keeps data-fetching logic out of your UI code.
- 🔧 **Modern tooling**: Vite for fast development and ESLint for consistent code quality.

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Library | [React](https://react.dev/) |
| Build Tool | [Vite](https://vite.dev/) |
| Language | JavaScript (ES6+) |
| Linting | [ESLint](https://eslint.org/) |
| Package Manager | npm |

---

## 📁 Project Structure

```bash
react-api-hook/
├── public/                 # Static assets
├── src/                    # Application source code (hook, components, entry files)
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json
├── package-lock.json
├── vite.config.js          # Vite configuration
└── README.md
```

> Update the `src/` section with your exact file names (for example `hooks/useApi.js`, `components/`, `App.jsx`, `main.jsx`).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or later**
- npm (included with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mahdirafi/react-api-hook.git
   ```

2. **Move into the project folder**

   ```bash
   cd react-api-hook
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open **http://localhost:5173** in your browser.

---

## 💡 Usage

Import the hook and call it inside any functional component:

```jsx
import useApi from "./hooks/useApi";

function Users() {
  const { data, loading, error } = useApi("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

> Replace `useApi` and the import path with the actual hook name and location in your project.

---

## 📚 API Reference

### `useApi(url)`

| Parameter | Type | Description |
| --- | --- | --- |
| `url` | `string` | The API endpoint to request |

**Returns**

| Property | Type | Description |
| --- | --- | --- |
| `data` | `any` | The parsed response from the API (`null` until loaded) |
| `loading` | `boolean` | `true` while the request is in progress |
| `error` | `string \| null` | Error message if the request fails, otherwise `null` |

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot module replacement |
| `npm run build` | Builds the app for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the project |

---

## ✅ Best Practices

- Keep the hook in its own file (for example `src/hooks/`) so it can be reused and tested independently.
- Always handle all three states (`loading`, `error`, `data`) in your UI.
- Store API base URLs in environment variables (`.env`) instead of hard-coding them.
- Never commit secrets or API keys to the repository.

---

## 🗺️ Roadmap

- [ ] Request cancellation with `AbortController`
- [ ] Support for POST, PUT, and DELETE methods
- [ ] Manual `refetch` function
- [ ] Response caching
- [ ] Custom headers and request options
- [ ] Unit tests
- [ ] Publish as an npm package

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**MD Mahdi**
Web Developer

- GitHub: [@mahdirafi](https://github.com/mahdirafi)

---

<div align="center">

⭐ If you find this project useful, please consider giving it a star!

</div>