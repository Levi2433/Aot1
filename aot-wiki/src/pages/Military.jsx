import { useEffect } from "react";
import { useFadeIn } from "../hooks/useAnimations";
import soldierMainImg from "../assets/img/soldier.jpg";
import soldier2Img from "../assets/img/soldier2.jpg";
import soldier23Img from "../assets/img/soldier23.png";
import soldier4Img from "../assets/img/soldier4.png";

export default function Military({ navigate }) {
  useFadeIn();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div className="blood-splatter top-left" />

      <section className="char-page-header">
        <div className="container">
          <div className="char-portrait fade-in-up">
            <img
              src={soldierMainImg}
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/0a1a0a/c0392b?text=Армия"; }}
              alt="Военные силы Парадиза"
            />
            <p className="portrait-caption">Военные силы Парадиза — три корпуса армии</p>
          </div>
          <div className="char-intro fade-in-up delay-1">
            <p className="breadcrumb">
              <a onClick={() => navigate("home")}>Главная</a> › Мир › Военные силы Парадиза
            </p>
            <h1>Военные силы Парадиза</h1>
            <p className="char-subtitle">Разведкорпус · Военная полиция · Гарнизон</p>
            <p className="char-lead">
              Военная система острова Паради — единственная организованная сила, противостоящая угрозе Титанов. Три корпуса несли разные задачи, но служили одной цели: выживанию человечества за стенами.
            </p>
            <table className="char-meta-table">
              <tbody>
                <tr><td>Корпусов</td><td>3 подразделения</td></tr>
                <tr><td>Общая численность</td><td>~32 300 человек</td></tr>
                <tr><td>Оружие</td><td>ВМУ, клинки, орудия</td></tr>
                <tr><td>Штаб армии</td><td>Округ Хейниа, Стена Роза</td></tr>
                <tr><td>Академия</td><td>Директор — Кейт Шадис</td></tr>
                <tr><td>Статус</td><td>Реорганизован после Грохота</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="char-content">
        <div className="container">
          <div className="char-main">
            <div className="article-section fade-in-up">
              <h2><span>01</span>Разведкорпус — «Крылья свободы»</h2>
              <div className="article-img-banner">
                <img
                  src={soldier2Img}
                  onError={(e) => { e.target.onerror=null; e.target.src="https://placehold.co/800x300/071407/1a6a1a?text=Разведкорпус"; }}
                  alt="Разведкорпус"
                />
                <div className="article-img-caption">Разведкорпус · Survey Corps · Символ: «Крылья свободы»</div>
              </div>
              <p><strong>Разведкорпус</strong> (<em>Survey Corps</em>) — наиболее прославленное и самое опасное военное подразделение Парадиза. Его символ — <strong>«Крылья свободы»</strong>: пара синих крыльев на белом поле. Единственный корпус, действующий за пределами стен — в открытом мире, кишащем Титанами.</p>
              <p>Смертность в Разведкорпусе — наивысшая в армии. Большинство новобранцев не переживают первых экспедиций. Вступление воспринимается обществом как добровольная гибель. Но без разведчиков человечество было бы обречено. Корпус держится не на приказе сверху, а на <em>осознанном личном выборе</em> каждого солдата.</p>
              <p><strong>Командующие:</strong> 13-й — <strong>Эрвин Смит</strong> (вернул Шиганшин, погиб в битве); 14-й — <strong>Хандзи Зоэ</strong> (создала громовые копья, погибла сдерживая Колоссальных Титанов); 15-й — <strong>Армин Арлерт</strong> (носитель Колоссального Титана, выжил, возглавил переговоры после Грохота).</p>
              <p>Именно Разведкорпус вскрыл подвалы Йегеров, раскрыл правду о природе Титанов, организовал революцию против фальшивого короля и в конечном счёте остановил Грохот. <em>Вся история «Атаки на Титанов» — это история Разведкорпуса.</em></p>
            </div>

            <div className="article-section fade-in-up">
              <h2><span>02</span>Военная полиция — Привилегия лучших</h2>
              <div className="article-img-banner">
                <img
                    src={soldier23Img}
                    onError={(e) => { e.target.onerror=null; e.target.src="https://placehold.co/800x300/0b0b1e/5555cc?text=Военная+полиция"; }}
                    alt="Военная полиция"
                />
                <div className="article-img-caption">Военная полиция · Military Police Regiment · Символ: Единорог</div>
              </div>
              <p><strong>Военная полиция</strong> (<em>Military Police Regiment</em>) — наиболее привилегированное подразделение армии. Символ — <strong>единорог</strong>, знак власти и королевской благосклонности. Задача: охрана короля, дворянства и поддержание порядка внутри Стены Синой.</p>
              <p>Доступ в Военную полицию строго ограничен: туда принимаются <strong>исключительно лучшие десять выпускников</strong> академии каждого набора. Этот принцип создал парадоксальную систему — самые способные солдаты отправлялись в самое безопасное место.</p>
              <p>Военная полиция являлась также <em>инструментом государственных репрессий</em>: она подавляла инакомыслие и скрывала правду о внешнем мире. Элитный карательный отряд <strong>«Центр»</strong> ликвидировал тех, кто знал лишнее.</p>
            </div>

            <div className="article-section fade-in-up">
              <h2><span>03</span>Гарнизон — Хранители стен</h2>
              <div className="article-img-banner">
                <img
                  src={soldier4Img}
                  onError={(e) => { e.target.onerror=null; e.target.src="https://placehold.co/800x300/081408/1a7a2a?text=Гарнизон"; }}
                  alt="Гарнизон"
                 />
                <div className="article-img-caption">Гарнизон · Garrison Regiment · Символ: Двойная роза</div>
              </div>
              <p><strong>Гарнизон</strong> (<em>Garrison Regiment</em>) — самый многочисленный корпус и хребет обороны Парадиза. Символ — <strong>двойная роза</strong>. Численность: около <strong>30 000 человек</strong>. Несёт постоянное дежурство на стенах, в крепостях и городских укреплениях, принимая первый удар каждый раз, когда стена оказывается под угрозой.</p>
              <p>В 850 году, когда Колоссальный Титан пробил ворота <strong>Трост</strong>, Гарнизон принял первый удар. Командующий <strong>Дот Пиксис</strong> принял решение использовать Эрена-Титана для закрытия пробоины. Валун в воротах Трост — первая реальная победа человечества после катастрофы 845 года — <em>«Чудо Трост»</em>.</p>
            </div>

            <div className="article-section fade-in-up">
              <h2><span>04</span>Три корпуса: итог</h2>
              <p>Три корпуса образуют единую, но противоречивую систему. <strong>Гарнизон</strong> — щит и первая линия, самый многочисленный, но наименее мобильный. <strong>Военная полиция</strong> — элита по рангу, но практически лишённая боевого опыта. <strong>Разведкорпус</strong> — немногочисленный авангард с наивысшими потерями и наибольшим вкладом в победу.</p>
              <p>Главный парадокс системы: самые способные выпускники шли в полицию — в безопасность. В Разведкорпус шли те, кто сознательно отказался от привилегии. Именно они, а не элита, изменили мир.</p>
            </div>

            <div className="char-nav fade-in-up">
              <a onClick={() => navigate("home")}>Главная</a>
              <a onClick={() => navigate("home")}>Все персонажи</a>
              <a onClick={() => navigate("walls")}>Три Стены</a>
            </div>
          </div>

          <aside className="char-sidebar">
            <div className="sidebar-card fade-in-up delay-2">
              <h3>Численность</h3>
              {[["Гарнизон","~30 000"],["Военная полиция","~2 000"],["Разведкорпус","~300"],["Итого","~32 300"]].map(([l,v]) => (
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>
            <div className="sidebar-card fade-in-up delay-2">
              <h3>Символы</h3>
              {[["Разведкорпус","Крылья свободы"],["Военная полиция","Единорог"],["Гарнизон","Двойная роза"]].map(([l,v]) => (
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>
            <div className="sidebar-card fade-in-up delay-3">
              <h3>Командиры</h3>
              {[["Разведкорпус","Эрвин Смит"],["Военная полиция","Найле Доке"],["Гарнизон (Юг)","Дот Пиксис"],["Академия","Кейт Шадис"]].map(([l,v]) => (
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>
            <div className="sidebar-card fade-in-up delay-3">
              <h3>Навигация</h3>
              <div className="sidebar-stat"><a onClick={() => navigate("walls")} style={{color:"var(--red-light)",textDecoration:"none",fontSize:".85rem",cursor:"pointer"}}> Три Стены</a></div>
              <div className="sidebar-stat"><a onClick={() => navigate("home")} style={{color:"var(--red-light)",textDecoration:"none",fontSize:".85rem",cursor:"pointer"}}> Персонажи</a></div>
              <div className="sidebar-stat"><a onClick={() => navigate("home")} style={{color:"var(--red-light)",textDecoration:"none",fontSize:".85rem",cursor:"pointer"}}> Главная</a></div>
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