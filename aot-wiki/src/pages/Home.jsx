import { useState, useEffect } from "react";
import { useFadeIn, useWallParallax } from "../hooks/useAnimations";

// ── Rasm importlari ──────────────────────────────────────────
import erenImg      from "../assets/img/Eren_Jaeger_29_character_image.webp";
import mikasaImg    from "../assets/img/Mikasa_Ackermann_29_character_image.webp";
import arminImg     from "../assets/img/Armin_Arlelt_29_character_image_29.webp";
import leviImg      from "../assets/img/Levi_Ackermann_29_character_image_29.webp";
import erwinImg     from "../assets/img/Erwin_Smith_29_character_image.webp";
import hangeImg     from "../assets/img/xangi.webp";
import jeanImg      from "../assets/img/jean.webp";
import sashaImg     from "../assets/img/sasha.webp";
import connieImg    from "../assets/img/ed0539e509cba1abbf0201fadcb77449.jpg";
import rainerImg    from "../assets/img/reiner.webp";
import bertholdImg  from "../assets/img/berthol2.jpg";
import annieImg     from "../assets/img/enni.webp";
import zikImg       from "../assets/img/zik2.webp";
import pikImg       from "../assets/img/Pieck_Finger_29_character_image.webp";
import porkoImg     from "../assets/img/Porco_Galliard_29_character_image.webp";
import imirFritzImg from "../assets/img/Ymir_Fritz_29_character_image.webp";
import imirImg      from "../assets/img/Ymir_29_character_image.webp";
import hammerImg    from "../assets/img/titan2.jpg";

const characters = [
  { href: "eren",     img: erenImg,      name: "Эрен Йегер",        role: "Разведкорпус · Носитель Атакующего Титана",                          tags: ["survey", "shifter"] },
  { href: "mikasa",   img: mikasaImg,    name: "Микаса Аккерман",   role: "Разведкорпус · Лучший солдат выпуска",                               tags: ["survey"] },
  { href: "armin",    img: arminImg,     name: "Армин Арлерт",      role: "Разведкорпус · Стратег",                                             tags: ["survey", "commander", "shifter"] },
  { href: "levi",     img: leviImg,      name: "Леви Аккерман",     role: "Разведкорпус · Капитан",                                             tags: ["survey"] },
  { href: "erwin",    img: erwinImg,     name: "Эрвин Смит",        role: "Разведкорпус · Командующий",                                         tags: ["survey", "commander"] },
  { href: "hange",    img: hangeImg,     name: "Хандзи Зоэ",        role: "Разведкорпус · Исследователь / Командующий",                         tags: ["survey", "commander"] },
  { href: "jean",     img: jeanImg,      name: "Жан Кирштейн",      role: "Разведкорпус · Умный опытный солдат",                                tags: ["survey"] },
  { href: "sasha",    img: sashaImg,     name: "Саша Браус",        role: "Разведкорпус · 104-й выпуск · «Картофельная девочка»",               tags: ["survey"] },
  { href: "connie",   img: connieImg,    name: "Конни Шпрингер",    role: "Разведкорпус · 104-й выпуск · Солдат из Рагако",                     tags: ["survey"] },
  { href: "rainer",   img: rainerImg,    name: "Райнер Браун",      role: "Воин Марлии · Носитель Бронированного Титана · 104-й выпуск",        tags: ["survey", "marley", "shifter"] },
  { href: "berthold", img: bertholdImg,  name: "Бертольдт Гувер",   role: "Воин Марлии · Носитель Колоссального Титана · 104-й выпуск",        tags: ["survey", "marley", "shifter"] },
  { href: "annie",    img: annieImg,     name: "Анни Леонхарт",     role: "Военная полиция / Воин Марлии · Носительница Женского Титана",       tags: ["marley", "shifter"] },
  { href: "zik",      img: zikImg,       name: "Зик Йегер",         role: "Воин Марлии · Звероподобный Титан",                                  tags: ["marley", "commander", "shifter"] },
  { href: "pik",      img: pikImg,       name: "Пик Фингер",        role: "Воин Марлии · Повозочный Титан",                                     tags: ["marley", "shifter"] },
  { href: "porko",    img: porkoImg,     name: "Порко Гальярд",     role: "Воин Марлии · Носитель Зубастого Титана",                            tags: ["marley", "shifter"] },
  { href: "imir",     img: imirFritzImg, name: "Имир Фриц",         role: "Основательница рода · Мать Титанов · Пленница Путей",                tags: ["survey", "marley", "shifter"] },
  { href: "imer",     img: imirImg,      name: "Имир",              role: "Имир — Кадет 104-го корпуса · Зубастый Титан",                       tags: ["survey", "marley", "shifter"] },
  { href: "hummer",   img: hammerImg,    name: "Титан Молот Войны", role: "Оружие семьи Тайбер · Мастер структурного созидания",                tags: ["survey", "marley", "shifter"] },
];

const filters = [
  { label: "Все",          value: "all" },
  { label: "Разведкорпус", value: "survey" },
  { label: "Командиры",    value: "commander" },
  { label: "Титаны",       value: "shifter" },
  { label: "Марли",        value: "marley" },
];

export default function Home({ navigate }) {
  const [activeFilter, setActiveFilter] = useState("all");
  useFadeIn();
  useWallParallax();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const visible = characters.filter(
    (c) => activeFilter === "all" || c.tags.includes(activeFilter)
  );

  return (
    <>
      <div className="noise-overlay" />
      <div className="blood-splatter top-left" />
      <div className="blood-splatter bottom-right" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="wall wall-1" />
          <div className="wall wall-2" />
          <div className="wall wall-3" />
        </div>
        <div className="hero-content">
          <p className="hero-pre fade-in-up delay-1">Shingeki no Kyojin</p>
          <h1 className="hero-title fade-in-up delay-2">
            <span className="title-main">ATTACK</span>
            <span className="title-sub">ON TITAN</span>
          </h1>
          <div className="hero-divider fade-in-up delay-3">
            <span />
            <span className="diamond">◆</span>
            <span />
          </div>
          <p className="hero-tagline fade-in-up delay-4">Вики-энциклопедия</p>
        </div>
        <div className="scroll-hint">↓</div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>О произведении</h2>
            <div className="section-line" />
          </div>
          <div className="about-grid">
            <div className="about-text fade-in-up">
              <p>
                <strong>«Атака на титанов»</strong> (<em>進撃の巨人, Shingeki no Kyojin</em>) — манга Хадзимэ Исаяма, публиковавшаяся с 2009 по 2021 год. Аниме-адаптация студии Wit Studio (впоследствии MAPPA) стала одной из самых обсуждаемых в истории жанра.
              </p>
              <p>
                Действие разворачивается в мире, где человечество укрылось за гигантскими стенами — <strong>Марией</strong>, <strong>Розой</strong> и <strong>Шиной</strong> — спасаясь от Титанов: огромных гуманоидных существ, пожирающих людей. Когда в стену Марию врывается Колоссальный Титан, молодой Эрен Йегер клянётся уничтожить всех Титанов до единого.
              </p>
              <p>
                История охватывает темы <em>свободы, цикла ненависти, политики власти</em> и морального выбора, превращаясь из истории выживания в масштабную трагедию.
              </p>
            </div>
            <div className="about-stats fade-in-up delay-2">
              {[
                { num: "139", label: "Глав манги" },
                { num: "4",   label: "Сезона аниме" },
                { num: "89",  label: "Серий аниме" },
                { num: "2009",label: "Год выхода" },
              ].map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV ────────────────────────────────────────── */}
      <section className="about-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filter-bar fade-in-up">
            <button className="filter-btn" onClick={() => navigate("series")}>📺 Серии аниме</button>
            <button className="filter-btn" onClick={() => navigate("walls")}>🏰 Три Стены</button>
            <button className="filter-btn" onClick={() => navigate("military")}>⚔ Военные силы</button>
          </div>
        </div>
      </section>

      {/* ── CHARACTERS ───────────────────────────────────────── */}
      <section className="characters-section">
        <div className="container">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Персонажи</h2>
            <div className="section-line" />
          </div>
          <div className="filter-bar fade-in-up">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`filter-btn${activeFilter === f.value ? " active" : ""}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="char-counter">
            Показано: {visible.length} из {characters.length} персонажей
          </p>
        </div>

        <div className="cards-grid">
          {visible.map((c, i) => (
            <div
              key={c.href}
              className="char-card fade-in-up visible"
              style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              onClick={() => navigate(c.href)}
            >
              <div className="card-image-wrap">
                <img
                  src={c.img}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/400x500/1a0a0a/c0392b?text=${encodeURIComponent(c.name)}`;
                  }}
                  alt={c.name}
                  loading="lazy"
                />
                <div className="card-overlay">
                  <span className="card-cta">Подробнее →</span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-name">{c.name}</h3>
                <p className="card-role">{c.role}</p>
              </div>
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ────────────────────────────────────────────── */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="big-quote fade-in-up">
            <p>«Если ты потеряешь волю к борьбе — ты уже мёртв.»</p>
            <cite>— Эрвин Смит</cite>
          </blockquote>
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