import { useState, useEffect } from "react";
import "./style.css";

import Navbar from "./components/Navbar";

// Pages
import Home     from "./pages/Home";
import Annie    from "./pages/Annie";
import Armin    from "./pages/Armin";
import Berthold from "./pages/Berthold";
import Connie   from "./pages/Connie";
import Eren     from "./pages/Eren";
import Erwin    from "./pages/Erwin";
import Hange    from "./pages/Hange";
import Hummer   from "./pages/Hummer";
import Imer     from "./pages/Imer";
import Imir     from "./pages/Imir";
import Jean     from "./pages/Jean";
import Levi     from "./pages/Levi";
import Mikasa   from "./pages/Mikasa";
import Military from "./pages/Military";
import Pik      from "./pages/Pik";
import Porko    from "./pages/Porko";
import Rainer   from "./pages/Rainer";
import Sasha    from "./pages/Sasha";
import Series   from "./pages/Series";
import Walls    from "./pages/Walls";
import Zik      from "./pages/Zik";
import Manga    from "../src/pages/Manga"

// Season pages
import Season1 from "./pages/seasons/Season1";
import Season2 from "./pages/seasons/Season2";
import Season3 from "./pages/seasons/Season3";
import Season4 from "./pages/seasons/Season4";

// Placeholder for not-yet-built chars
function PlaceholderPage({ name, navigate }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <div className="noise-overlay" />
      <section className="char-page-header" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="char-intro">
            <p className="breadcrumb">
              <a onClick={() => navigate("home")}>Главная</a> › Персонажи › {name}
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.2rem)", color: "var(--text)", marginBottom: "20px" }}>
              {name}
            </h1>
            <p style={{ color: "var(--text-dim)", fontSize: "1.1rem" }}>
              Страница персонажа находится в разработке. Скоро здесь появится полная информация.
            </p>
            <div className="char-nav" style={{ marginTop: "32px" }}>
              <a onClick={() => navigate("home")}>← Все персонажи</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama</p>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p) => setPage(p);

  useEffect(() => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.45s ease";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.style.opacity = "1";
      });
    });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":     return <Home     navigate={navigate} />;
      case "annie":    return <Annie    navigate={navigate} />;
      case "armin":    return <Armin    navigate={navigate} />;
      case "berthold": return <Berthold navigate={navigate} />;
      case "connie":   return <Connie   navigate={navigate} />;
      case "eren":     return <Eren     navigate={navigate} />;
      case "erwin":    return <Erwin    navigate={navigate} />;
      case "hange":    return <Hange    navigate={navigate} />;
      case "hummer":   return <Hummer   navigate={navigate} />;
      case "imer":     return <Imer     navigate={navigate} />;
      case "imir":     return <Imir     navigate={navigate} />;
      case "jean":     return <Jean     navigate={navigate} />;
      case "levi":     return <Levi     navigate={navigate} />;
      case "mikasa":   return <Mikasa   navigate={navigate} />;
      case "military": return <Military navigate={navigate} />;
      case "pik":      return <Pik      navigate={navigate} />;
      case "porko":    return <Porko    navigate={navigate} />;
      case "rainer":   return <Rainer   navigate={navigate} />;
      case "sasha":    return <Sasha    navigate={navigate} />;
      case "series":   return <Series   navigate={navigate} />;
      case "walls":    return <Walls    navigate={navigate} />;
      case "zik":      return <Zik      navigate={navigate} />;
      case "season1":  return <Season1  navigate={navigate} />;
      case "season2":  return <Season2  navigate={navigate} />;
      case "season3":  return <Season3  navigate={navigate} />;
      case "season4":  return <Season4  navigate={navigate} />;
      case "manga":      return <Manga      navigate={navigate} />;
      // remaining placeholders
      default:
        const names = {
          mikasa2: "Микаса Аккерман",
        };
        return <PlaceholderPage name={names[page] || page} navigate={navigate} />;
    }
  };

  return (
    <>
      <Navbar currentPage={page} navigate={navigate} />
      {renderPage()}
    </>
  );
} 