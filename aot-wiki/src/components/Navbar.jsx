import { useEffect } from "react";

export default function Navbar({ currentPage, navigate }) {
  useEffect(() => {
    const handleScroll = () => {
      const h = document.querySelector(".site-header");
      if (!h) return;
      h.style.boxShadow = window.scrollY > 50 ? "0 4px 30px rgba(0,0,0,0.7)" : "";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Главная", page: "home" },
    { label: "Персонажи", page: "home" },
    { label: "Стены", page: "walls" },
    { label: "Военные", page: "military" },
    { label: "Серии", page: "series" },
    { label: "Манга", page: "manga" },
    { label: "Студиа", page: "studio" },
    { label: "Автор", page: "author" },
    { label: "Парадиз", page: "paradis" },
    { label: "Марли", page: "marli" }
    
  ];

  return (
    <header className="site-header">
      <nav className="nav">
        <a className="nav-logo" onClick={() => navigate("home")} style={{ cursor: "pointer" }}>
          <span className="logo-wings">⚔</span>
          <span>AoT <span className="accent">Wiki</span></span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label}>
              <a
                className={currentPage === l.page ? "active" : ""}
                onClick={() => navigate(l.page)}
                style={{ cursor: "pointer" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}