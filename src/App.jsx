import "./App.css"
import perfil from "./assets/eu.png"
import moon from "./assets/moon-stars.svg"
import sun from "./assets/sun.svg"
import perfilLight from "./assets/eu-light.png"

function App() {
  function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
      img.setAttribute("src", perfilLight)
      img.setAttribute("alt", "Imagem Guilherme mais escura")
    } else {
      img.setAttribute("src", perfil)
      img.setAttribute("alt", "Imagem Guilherme mais clara")
    }

    const troca = document.querySelector("#btn-switch img")

    if (html.classList.contains("light")) {
      troca.setAttribute("src", sun)
    } else {
      troca.setAttribute("src", moon)
    }
  }

  return (
    <body>
      <div className="container">
        <div id="profile">
          <img src={perfil} />
          <p>@guiweber</p>
        </div>

        <div id="switch" onClick={toggleMode}>
          <button id="btn-switch">
            <img src={sun} alt="" />
          </button>
          <span></span>
        </div>

        <ul>
          <li>
            <a
              href="https://guiziin227.github.io/project-port/"
              target="_blank"
            >
              Portfólio
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-gantt-chart-square"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 8h7" />
                  <path d="M8 12h6" />
                  <path d="M11 16h5" />
                </svg>
              </span>
            </a>
          </li>

          <li>
            <a href="https://github.com/Guiziin227" target="_blank">
              Github
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-weber-henriques/"
              target="_blank"
            >
              Linkedin
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
            </a>
          </li>
        </ul>

        <div id="social-links">
          <a
            href="https://www.instagram.com/guiziinweber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        <footer>
          <p>Feito por Guilherme Weber Henriques</p>
        </footer>
      </div>
    </body>
  )
}

export default App
