import { useEffect } from "react";
import { useFadeIn } from "../hooks/useAnimations";
import mainPoster from "../assets/img/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";

import season1Img from "../assets/img/review_Attack_on_Titan_-_Season_12.jpg";
import season2Img from "../assets/img/titans1-2-1038x576.jpg";
import season3Img from "../assets/img/attack-on-titan-season-3-episode-1-smoke-signal-review_jwqg.1200.webp";
import season4Img from "../assets/img/Attack-on-Titan-Season-4-Part-3-Everything-You-Need-to-Know.webp";

const seasons = [
  { page:"season1", num:"Сезон 1", img:season1Img, tag:"2013 · 25 серий · Wit Studio", title:"Люди против Титанов",  desc:"Падение Шиганшины. Клятва Эрена. Первые сражения за стенами. Человечество узнаёт: у него есть солдат, способный стать Титаном.", conflict:"Люди vs Титаны", eps:25 },
  { page:"season2", num:"Сезон 2", img:season2Img, tag:"2017 · 12 серий · Wit Studio", title:"Титаны против Титанов", desc:"Титаны внутри стен. Предательство Райнера и Бертольдта. Война принимает новое измерение — враги оказываются среди своих.", conflict:"Титаны vs Титаны", eps:12 },
  { page:"season3", num:"Сезон 3", img:season3Img, tag:"2018–2019 · 22 серии · Wit Studio", title:"Люди против Людей", desc:"Революция против фальшивого короля. Правда об истории. Возвращение Шиганшины. Гибель Эрвина. Подвалы открыты.", conflict:"Люди vs Люди", eps:22 },
  { page:"season4", num:"Сезон 4", img:season4Img, tag:"2020–2023 · 30 серий · MAPPA", title:"Эрен против Мира", desc:"Грохот. Марлия. Йегеристы. Союзники становятся врагами. Эрен идёт до конца — и его должны остановить те, кого он любил.", conflict:"Эрен vs Мир", eps:30 },
];

export default function Series({ navigate }) {
  useFadeIn();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div className="blood-splatter top-left" />
      <div className="blood-splatter bottom-right" />

      <section className="char-page-header">
        <div className="container">
          <div className="char-portrait fade-in-up">
            <img
              src={mainPoster}
              onError={(e)=>{e.target.onerror=null;e.target.src="https://placehold.co/400x500/1a0808/c0392b?text=Серии";}}
              alt="Серии"
            />
            <p className="portrait-caption">Shingeki no Kyojin — 4 сезона, 89 серий</p>
          </div>
          <div className="char-intro fade-in-up delay-1">
            <p className="breadcrumb"><a onClick={()=>navigate("home")}>Главная</a> › Серии</p>
            <h1>Серии аниме</h1>
            <p className="char-subtitle">Shingeki no Kyojin · 2013–2023 · 4 сезона</p>
            <p className="char-lead">
              «Атака на Титанов» охватывает четыре сезона, каждый из которых кардинально меняет тон, масштаб и суть конфликта. История начинается как борьба людей за выживание — и заканчивается как философская трагедия о свободе, цикле ненависти и цене мира.
            </p>
            <table className="char-meta-table"><tbody>
              <tr><td>Сезонов</td><td>4 (+ финальные части)</td></tr>
              <tr><td>Серий всего</td><td>89 эпизодов</td></tr>
              <tr><td>Студия (1–3)</td><td>Wit Studio</td></tr>
              <tr><td>Студия (4)</td><td>MAPPA</td></tr>
              <tr><td>Период</td><td>2013–2023</td></tr>
              <tr><td>Оригинал</td><td>Манга Хадзимэ Исаяма</td></tr>
            </tbody></table>
          </div>
        </div>
      </section>

      <section className="char-content" style={{paddingTop:"60px"}}>
        <div className="container">
          <div className="char-main">
            <div className="article-section fade-in-up">
              <h2><span>★</span>Четыре акта одной истории</h2>
              <p>Каждый сезон «Атаки на Титанов» — это не просто новая арка сюжета, но принципиально иная природа конфликта. История трансформируется от простого к сложному, от ясного врага к невидимому, от внешней угрозы к внутренней. Именно эта эволюция сделала произведение одним из самых обсуждаемых аниме в истории.</p>
              <p>Первый сезон — классическая история выживания, где всё ясно: есть люди и есть монстры. Второй ломает эту ясность: монстры оказываются среди людей. Третий переворачивает всё — главный враг человек, а не Титан. Финальный сезон делает из злодея главного героя — и заставляет зрителя усомниться в том, за кого он болел все четыре года.</p>
            </div>

            <div className="seasons-grid fade-in-up">
              {seasons.map((s) => (
                <div key={s.page} className="season-card" onClick={()=>navigate(s.page)} style={{cursor:"pointer"}}>
                  <span className="season-card-num">{s.num}</span>
                  <div className="season-card-img">
                    <img src={s.img} onError={(e)=>{e.target.onerror=null;e.target.src=`https://placehold.co/400x200/1a0808/c0392b?text=${s.num}`;}} alt={s.title} />
                  </div>
                  <div className="season-card-body">
                    <span className="season-card-tag">{s.tag}</span>
                    <p className="season-card-title">{s.title}</p>
                    <p className="season-card-desc">{s.desc}</p>
                  </div>
                  <div className="season-card-glow" />
                </div>
              ))}
            </div>

            <div className="char-nav fade-in-up" style={{marginTop:"48px"}}>
              <a onClick={()=>navigate("season1")}>Сезон 1</a>
              <a onClick={()=>navigate("home")}>Главная</a>
              <a onClick={()=>navigate("home")}>Персонажи</a>
            </div>
          </div>

          <aside className="char-sidebar">
            <div className="sidebar-card fade-in-up delay-1">
              <h3>Навигация</h3>
              {seasons.map((s)=>(
                <div className="sidebar-stat" key={s.page} style={{cursor:"pointer"}} onClick={()=>navigate(s.page)}>
                  <span className="s-label" style={{color:"var(--red-light)"}}>▶ {s.num}</span>
                </div>
              ))}
            </div>
            <div className="sidebar-card fade-in-up delay-2">
              <h3>Сезоны</h3>
              {seasons.map((s)=>(
                <div className="sidebar-stat" key={s.page}>
                  <span className="s-label">{s.num}</span><span className="s-val">{s.eps} серий</span>
                </div>
              ))}
              <div className="sidebar-stat">
                <span className="s-label">Итого</span><span className="s-val">87 эпизодов</span>
              </div>
            </div>
            <div className="sidebar-card fade-in-up delay-3">
              <h3>Конфликты</h3>
              {seasons.map((s)=>(
                <div className="sidebar-stat" key={s.page}>
                  <span className="s-label">{s.num}</span><span className="s-val">{s.conflict}</span>
                </div>
              ))}
            </div>
          </aside>
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