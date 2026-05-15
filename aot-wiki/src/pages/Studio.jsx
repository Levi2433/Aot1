import { useEffect, useRef } from "react";

const witAchievements = [
  {
    season: "Сезон 1",
    year: "2013",
    episodes: "25 серий",
    director: "Тэцуро Арахи",
    note: "Мировая сенсация. Первый сезон установил рекорд просмотров на Crunchyroll. IMDb: 9.0/10. Anime of the Year по версии всех крупных изданий.",
  },
  {
    season: "Сезон 2",
    year: "2017",
    episodes: "12 серий",
    director: "Масаси Коидзука",
    note: "Рекордные просмотры в день выхода на Crunchyroll. Несмотря на сокращённый формат — один из самых напряжённых сезонов серии.",
  },
  {
    season: "Сезон 3 (ч. 1)",
    year: "2018",
    episodes: "12 серий",
    director: "Масаси Коидзука",
    note: "Политическая арка. Один из самых сложных в постановке сезонов студии.",
  },
  {
    season: "Сезон 3 (ч. 2)",
    year: "2019",
    episodes: "10 серий",
    director: "Масаси Коидзука",
    note: "Эпизод «Победитель» — 9.95/10 на IMDb. Битва за Шиганшин. Пик эпохи Wit Studio.",
  },
];

const mappaAchievements = [
  {
    season: "Сезон 4 (ч. 1)",
    year: "2020–2021",
    episodes: "16 серий",
    director: "Юитиро Хаяси",
    note: "Смена студии. MAPPA полностью изменила визуальный стиль. ЦГИ-титаны, кинематографическая постановка. Шокировала аудиторию.",
  },
  {
    season: "Сезон 4 (ч. 2)",
    year: "2022",
    episodes: "12 серий",
    director: "Юитиро Хаяси",
    note: "Грохот Земли. Масштабные сцены уничтожения. Огромная нагрузка на команду аниматоров.",
  },
  {
    season: "Сезон 4 (ч. 3)",
    year: "2023",
    episodes: "2 спецвыпуска",
    director: "Юитиро Хаяси",
    note: "Финал. MAPPA завершила историю. Два полнометражных спецвыпуска вместо стандартных серий.",
  },
];

const witOtherAnime = [
  { title: "Vinland Saga", year: "2019", desc: "Эпическая сага о викингах. Совместно с Amazon. Rotten Tomatoes: 100%. Считается одной из лучших адаптаций манги." },
  { title: "Owari no Seraph", year: "2015", desc: "Постапокалиптическая история о вампирах. Два сезона. Коммерческий успех в Японии и на Западе." },
  { title: "Kabaneri of the Iron Fortress", year: "2016", desc: "Оригинальный проект студии. Мир паровых поездов и монстров. Режиссёр Тэцуро Арахи." },
  { title: "The Ancient Magus' Bride", year: "2017–2018", desc: "Тёмное фэнтези. 24 серии. Высоко оценённая адаптация манги Коре Ямадзаки." },
  { title: "86 — Eighty Six", year: "2021", desc: "После передачи AoT. Антивоенная фантастика. Пользователи MAL: один из лучших сезонов 2021 года." },
];

const mappaOtherAnime = [
  { title: "Jujutsu Kaisen", year: "2020–2021", desc: "Оглушительный успех. Один из самых просматриваемых аниме сезона. Сезон 2 — рекордные бюджеты и анимация. MAL: 8.6/10." },
  { title: "Chainsaw Man", year: "2022", desc: "Адаптация манги Тацуки Фудзимото. Кинематографический стиль, живой саундтрек. Один из самых ожидаемых аниме года." },
  { title: "Hajime no Ippo: New Challenger", year: "2009", desc: "Один из первых крупных проектов студии. Классика боксёрской анимации." },
  { title: "Banana Fish", year: "2018", desc: "Адаптация манги 80-х. Современный сеттинг. Высокий рейтинг среди аудитории старшего возраста." },
  { title: "Dororo", year: "2019", desc: "Ремейк классики Осаму Тэдзуки. Совместно с Tezuka Productions. Один из лучших аниме года по версии Anime Trending." },
  { title: "Zombie Land Saga", year: "2018", desc: "Оригинальный комедийный проект. Неожиданный хит. Две части. Поднял жанр айдол-аниме на новый уровень." },
];

export default function Studio({ navigate }) {
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observerRef.current.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".st-fade").forEach((el) =>
      observerRef.current.observe(el)
    );
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <div className="studio-page">
        <div className="st-ink-deco" />
        <div className="st-ink-deco-2" />

        {/* ═══ HERO ═══ */}
        <section className="st-hero">
          <div className="st-hero-bg">
            <div className="st-film-grain" />
          </div>
          <div className="st-hero-content">
            <p className="st-eyebrow">Аниме-адаптация · Производство</p>
            <h1 className="st-hero-title">
              <span className="st-title-wit">WIT</span>
              <span className="st-title-sep">×</span>
              <span className="st-title-mappa">MAPPA</span>
            </h1>
            <p className="st-hero-sub">進撃の巨人 — За кадром</p>
            <p className="st-hero-desc">
              Две студии. Четыре сезона. Одиннадцать лет производства.<br />
              История о том, как аниме-адаптация меняет облик индустрии.
            </p>
            <div className="st-hero-stats">
              <div className="st-hs-item">
                <span className="st-hs-num">4</span>
                <span className="st-hs-label">Сезона</span>
              </div>
              <div className="st-hs-item">
                <span className="st-hs-num">87</span>
                <span className="st-hs-label">Серий</span>
              </div>
              <div className="st-hs-item">
                <span className="st-hs-num">2</span>
                <span className="st-hs-label">Студии</span>
              </div>
              <div className="st-hs-item">
                <span className="st-hs-num">11</span>
                <span className="st-hs-label">Лет</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BODY ═══ */}
        <div className="st-body">

          {/* ─── WIT STUDIO ─── */}
          <div className="st-sec-divider st-fade">
            <span className="st-sec-num">01</span>
            <span className="st-sec-title">Wit Studio</span>
            <div className="st-sec-line" />
          </div>

          <div className="st-studio-grid st-fade d1">
            <div className="st-studio-text">
              <div className="st-studio-logo-block wit">
                <span className="st-logo-text">WIT STUDIO</span>
                <span className="st-logo-sub">ウィットスタジオ</span>
              </div>
              <p>
                <strong>Wit Studio</strong> была основана в <em>июне 2012 года</em> как дочерняя компания Production I.G — одной из самых уважаемых анимационных студий Японии. Основатель — <strong>Го Хосода</strong>, продюсер с многолетним опытом в Production I.G. Штаб-квартира расположена в Митаке, Токио.
              </p>
              <p>
                Студия была создана специально для работы с <strong>«Атакой на Титанов»</strong> — этот проект стал её дебютом и одновременно определил её репутацию. За несколько месяцев до выхода первого сезона Wit Studio практически не существовала как самостоятельная единица. Первый сезон AoT превратил её в одно из самых обсуждаемых имён в индустрии.
              </p>
              <p>
                Эстетика Wit — это <em>кинематографическое напряжение, динамичная камера, выразительная анимация персонажей</em>. Сцены боёв на ODM-снаряжении в первых сезонах считаются эталоном экшн-анимации: сложная трёхмерная среда, быстрые монтажные переходы, точно выверенная хореография. Всё это — ручная работа сотен аниматоров.
              </p>
              <p>
                В 2019 году студия <strong>официально отказалась от дальнейшей работы над AoT</strong>. Причина — критическая рабочая нагрузка. По словам самих сотрудников, производство сезонов AoT было <em>на грани физических возможностей команды</em>: многомесячные переработки, постоянный дефицит кадров, давление со стороны расписания трансляций. Тем не менее все четыре части под руководством Wit считаются вершиной адаптации.
              </p>

              <div className="st-directors-block">
                <p className="st-block-label">Ключевые имена</p>
                <div className="st-directors-grid">
                  {[
                    { name: "Го Хосода", role: "Основатель студии" },
                    { name: "Тэцуро Арахи", role: "Режиссёр — Сезон 1, 3 (ч.2)" },
                    { name: "Масаси Коидзука", role: "Режиссёр — Сезон 2, 3 (ч.1)" },
                    { name: "Хироюки Саваноо", role: "Композитор — OST Сезонов 1–3" },
                  ].map((d) => (
                    <div className="st-director-card" key={d.name}>
                      <span className="st-dir-name">{d.name}</span>
                      <span className="st-dir-role">{d.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="st-studio-sidebar">
              <div className="st-info-card">
                {[
                  ["Основана", "Июнь 2012"],
                  ["Расположение", "Митака, Токио"],
                  ["Основатель", "Го Хосода"],
                  ["Родительская", "Production I.G"],
                  ["Дебют", "AoT Сезон 1 (2013)"],
                  ["Сезонов AoT", "4 (S1–S3 Ч.2)"],
                  ["Статус", "Активна"],
                ].map(([l, v]) => (
                  <div className="st-info-row" key={l}>
                    <span className="st-info-label">{l}</span>
                    <span className="st-info-val">{v}</span>
                  </div>
                ))}
              </div>

              <div className="st-achievements-card">
                <p className="st-block-label">Достижения на AoT</p>
                {[
                  "Anime of the Year 2013 — большинство изданий",
                  "Эпизод «Победитель» — 9.95/10 на IMDb",
                  "Рекорд Crunchyroll по просмотрам (2017)",
                  "Лучшая экшн-анимация десятилетия (2010–2020)",
                ].map((a, i) => (
                  <div className="st-ach-item" key={i}>
                    <span className="st-ach-icon">◆</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WIT таблица сезонов */}
          <div className="st-sec-divider st-fade" style={{ paddingTop: "20px" }}>
            <span className="st-sec-num" style={{ fontSize: "60px", opacity: 0.1 }}>—</span>
            <span className="st-sec-title">Сезоны Wit</span>
            <div className="st-sec-line" />
          </div>
          <div className="st-table-wrap st-fade d1">
            <table className="st-table">
              <thead>
                <tr>
                  <th>Сезон</th><th>Год</th><th>Серий</th><th>Режиссёр</th><th>Примечание</th>
                </tr>
              </thead>
              <tbody>
                {witAchievements.map((r, i) => (
                  <tr key={i}>
                    <td><span className="st-badge wit-badge">{r.season}</span></td>
                    <td>{r.year}</td>
                    <td>{r.episodes}</td>
                    <td>{r.director}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* WIT другие аниме */}
          <div className="st-sec-divider st-fade" style={{ paddingTop: "20px" }}>
            <span className="st-sec-num" style={{ fontSize: "60px", opacity: 0.1 }}>—</span>
            <span className="st-sec-title">Другие работы Wit</span>
            <div className="st-sec-line" />
          </div>
          <div className="st-other-grid st-fade d1">
            {witOtherAnime.map((a, i) => (
              <div className="st-other-card" key={i}>
                <span className="st-other-year">{a.year}</span>
                <p className="st-other-title">{a.title}</p>
                <p className="st-other-desc">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* ─── MAPPA ─── */}
          <div className="st-sec-divider st-fade">
            <span className="st-sec-num">02</span>
            <span className="st-sec-title">MAPPA</span>
            <div className="st-sec-line" />
          </div>

          <div className="st-studio-grid st-fade d1">
            <div className="st-studio-text">
              <div className="st-studio-logo-block mappa">
                <span className="st-logo-text">MAPPA</span>
                <span className="st-logo-sub">Marvy Artist Pictures Plus Arts</span>
              </div>
              <p>
                <strong>MAPPA</strong> (аббр. от <em>Marvy Artist Pictures Plus Arts</em>) была основана в <strong>июне 2011 года</strong> Масао Маруяма — легендарным продюсером, одним из основателей Madhouse. После ухода из Madhouse Маруяма создал студию с акцентом на авторский подход и высокий художественный уровень. Штаб-квартира — Тосима, Токио.
              </p>
              <p>
                Когда Wit Studio объявила об отказе от проекта, Kadokawa и Pony Canyon выбрали MAPPA в качестве преемника. Это решение было <em>встречено скептицизмом</em>: студия известна, но никогда не работала с проектом такого масштаба и такой ответственности.
              </p>
              <p>
                MAPPA кардинально изменила визуальный язык сериала. Вместо ручной рисовки в духе Wit — <strong>гибридная анимация</strong>: ЦГИ-титаны, кинематографическая постановка камеры, более мрачная цветовая палитра. Многие фанаты поначалу реагировали негативно. Но со временем этот стиль стали воспринимать как точное отражение духа финальной арки — <em>тяжёлой, индустриальной, безжалостной</em>.
              </p>
              <p>
                Производство финального сезона проходило в условиях <strong>жесточайшего дедлайна</strong>. Ряд аниматоров публично жаловался на условия труда: работа до изнеможения, срывы дедлайнов внутри студии, отсутствие нормального отдыха. MAPPA стала символом как творческого подъёма современной анимации, так и <em>системных проблем индустрии</em>.
              </p>

              <div className="st-directors-block">
                <p className="st-block-label">Ключевые имена</p>
                <div className="st-directors-grid">
                  {[
                    { name: "Масао Маруяма", role: "Основатель студии" },
                    { name: "Юитиро Хаяси", role: "Режиссёр — Сезон 4 (все части)" },
                    { name: "Хироки Ямада", role: "Главный аниматор, Сезон 4" },
                    { name: "Хироюки Саваноо", role: "Композитор — продолжение OST" },
                  ].map((d) => (
                    <div className="st-director-card" key={d.name}>
                      <span className="st-dir-name">{d.name}</span>
                      <span className="st-dir-role">{d.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="st-studio-sidebar">
              <div className="st-info-card mappa-card">
                {[
                  ["Основана", "Июнь 2011"],
                  ["Расположение", "Тосима, Токио"],
                  ["Основатель", "Масао Маруяма"],
                  ["Бывшая связь", "Madhouse"],
                  ["Дебют на AoT", "Сезон 4 (2020)"],
                  ["Сезонов AoT", "3 (S4 ч.1–3)"],
                  ["Статус", "Активна"],
                ].map(([l, v]) => (
                  <div className="st-info-row" key={l}>
                    <span className="st-info-label">{l}</span>
                    <span className="st-info-val">{v}</span>
                  </div>
                ))}
              </div>

              <div className="st-achievements-card mappa-ach">
                <p className="st-block-label">Достижения на AoT</p>
                {[
                  "Завершение 11-летней франшизы",
                  "Финальный спецвыпуск — 2 полнометражных эпизода",
                  "Реализация сложнейшей финальной арки манги",
                  "Охват аудитории 300M+ по всему миру",
                ].map((a, i) => (
                  <div className="st-ach-item mappa-ach-item" key={i}>
                    <span className="st-ach-icon mappa-icon">◆</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAPPA таблица сезонов */}
          <div className="st-sec-divider st-fade" style={{ paddingTop: "20px" }}>
            <span className="st-sec-num" style={{ fontSize: "60px", opacity: 0.1 }}>—</span>
            <span className="st-sec-title">Сезоны MAPPA</span>
            <div className="st-sec-line" />
          </div>
          <div className="st-table-wrap st-fade d1">
            <table className="st-table mappa-table">
              <thead>
                <tr>
                  <th>Сезон</th><th>Год</th><th>Серий</th><th>Режиссёр</th><th>Примечание</th>
                </tr>
              </thead>
              <tbody>
                {mappaAchievements.map((r, i) => (
                  <tr key={i}>
                    <td><span className="st-badge mappa-badge">{r.season}</span></td>
                    <td>{r.year}</td>
                    <td>{r.episodes}</td>
                    <td>{r.director}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MAPPA другие аниме */}
          <div className="st-sec-divider st-fade" style={{ paddingTop: "20px" }}>
            <span className="st-sec-num" style={{ fontSize: "60px", opacity: 0.1 }}>—</span>
            <span className="st-sec-title">Другие работы MAPPA</span>
            <div className="st-sec-line" />
          </div>
          <div className="st-other-grid mappa-other-grid st-fade d1">
            {mappaOtherAnime.map((a, i) => (
              <div className="st-other-card mappa-other-card" key={i}>
                <span className="st-other-year">{a.year}</span>
                <p className="st-other-title">{a.title}</p>
                <p className="st-other-desc">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* ─── СРАВНЕНИЕ ─── */}
          <div className="st-sec-divider st-fade">
            <span className="st-sec-num">03</span>
            <span className="st-sec-title">Сравнение</span>
            <div className="st-sec-line" />
          </div>

          <div className="st-compare-grid st-fade d1">
            {[
              { label: "Визуальный стиль", wit: "Ручная рисовка, выразительная линия, тёплая палитра", mappa: "Гибрид ЦГИ/2D, кинематографичность, холодная палитра" },
              { label: "Экшн-сцены", wit: "ODM-бои вручную, динамичная камера, детализация", mappa: "ЦГИ-титаны, широкие планы, масштаб разрушений" },
              { label: "Атмосфера", wit: "Героическая, трагическая, напряжённая", mappa: "Апокалиптическая, политическая, мрачная" },
              { label: "Условия труда", wit: "Критические переработки → отказ от AoT", mappa: "Публичные жалобы аниматоров на условия" },
              { label: "Наследие на AoT", wit: "Эталон экшн-анимации, 9.95/10 на IMDb", mappa: "Завершение легенды, 300M+ аудитория" },
              { label: "После AoT", wit: "Vinland Saga, 86 Eighty Six, рост репутации", mappa: "JJK Сезон 2, CSM — доминирование в индустрии" },
            ].map((row, i) => (
              <div className="st-compare-row" key={i}>
                <div className="st-cmp-label">{row.label}</div>
                <div className="st-cmp-wit">
                  <span className="st-cmp-tag wit-tag">WIT</span>
                  <p>{row.wit}</p>
                </div>
                <div className="st-cmp-mappa">
                  <span className="st-cmp-tag mappa-tag">MAPPA</span>
                  <p>{row.mappa}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ─── ДЕДЛАЙНЫ И ТРУДНОСТИ ─── */}
          <div className="st-sec-divider st-fade">
            <span className="st-sec-num">04</span>
            <span className="st-sec-title">За кулисами</span>
            <div className="st-sec-line" />
          </div>

          <div className="st-behind-bento st-fade d1">
            <div className="st-bh-cell tall">
              <span className="st-bh-num">01</span>
              <span className="st-bh-tag">Wit Studio · Отказ</span>
              <p className="st-bh-title">Почему Wit ушла от AoT</p>
              <p className="st-bh-body">
                В 2019 году Wit Studio официально передала права на производство. По словам продюсера Го Хосоды, студия <strong>физически не могла продолжать</strong>: каждый сезон AoT требовал настолько высокого уровня производства, что у команды не оставалось ресурсов ни на другие проекты, ни на нормальный отдых. Ключевые аниматоры работали на износ. Несмотря на коммерческий успех, человеческая цена производства была слишком высокой.
              </p>
              <br />
              <p className="st-bh-body">
                Уход Wit с проекта открыл студии возможность работать над <em>Vinland Saga</em> и <em>86 Eighty Six</em> — обоими признанными шедеврами. Иными словами, решение отказаться от самой кассовой франшизы оказалось <strong>стратегически верным</strong> и для студии, и для её сотрудников.
              </p>
            </div>
            <div className="st-bh-cell">
              <span className="st-bh-num">02</span>
              <span className="st-bh-tag">MAPPA · Давление</span>
              <p className="st-bh-title">Сверхнагрузка финального сезона</p>
              <p className="st-bh-body">
                Несколько аниматоров MAPPA анонимно рассказали о <strong>60–80-часовых рабочих неделях</strong> в период производства 4-го сезона. Студия одновременно работала над AoT, JJK и другими крупными проектами. Это стало частью широкой дискуссии о <em>системных проблемах аниме-индустрии</em>.
              </p>
            </div>
            <div className="st-bh-cell">
              <span className="st-bh-num">03</span>
              <span className="st-bh-tag">Смена стиля</span>
              <p className="st-bh-title">Реакция аудитории на MAPPA</p>
              <p className="st-bh-body">
                Первый эпизод 4-го сезона вызвал острые споры: ЦГИ-лошади и изменённый визуальный стиль шокировали часть аудитории. Однако уже к середине сезона большинство зрителей признали, что <strong>новый стиль точно передаёт атмосферу финальной арки</strong>.
              </p>
            </div>
            <div className="st-bh-cell wide">
              <span className="st-bh-num">04</span>
              <span className="st-bh-tag">Наследие</span>
              <p className="st-bh-title">AoT как водораздел аниме-индустрии</p>
              <p className="st-bh-body">
                Производство «Атаки на Титанов» стало одним из самых влиятельных событий в истории аниме-индустрии — не только как художественный успех, но и как <strong>показатель её возможностей и ограничений</strong>. История Wit и MAPPA — это история о том, что великое произведение создаётся людьми, и за каждым кадром стоят сотни часов работы и человеческий выбор.
              </p>
            </div>
          </div>

        </div>

        {/* ═══ FOOTER ═══ */}
        <footer className="st-footer">
          <p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama · Wit Studio · MAPPA</p>
          <button className="st-back-btn" onClick={() => navigate("home")}>
            ← На главную
          </button>
        </footer>
      </div>
    </>
  );
}