import { useState, useEffect } from "react";
import { useFadeIn } from "../../hooks/useAnimations";

const episodes = [
  {
    num: "Серия 26",
    title: "Звероподобный Титан",
    img: "https://i.ibb.co/wkCcRn7/beast-edit-1-orig.jpg",
    src: "https://drive.google.com/file/d/13Aq0wls_4Gz8t0xNuuInABBV4rTOnB3v/preview",
    desc: "На вершине Стены Розы обнаружено лицо Колоссального Титана — стены сделаны из них. Тем временем за стенами замечена странная фигура: Зверский Титан — огромный, покрытый шерстью, способный говорить. Он уничтожает группу солдат и захватывает чужое манёвренное оборудование. Это существо явно не похоже ни на одного Титана, виденного ранее.",
  },
  {
    num: "Серия 27",
    title: "Я дома",
    img: "https://i.ibb.co/21f3HtKZ/aot23.webp",
    src: "https://drive.google.com/file/d/17WsPIkFOkx5IJn2KlDuG3aRt7NX8-Mst/preview",
    desc: "Конни возвращается в родную деревню Рагако и обнаруживает её полностью опустевшей. Никаких тел, никаких следов бегства — только тишина и огромный Титан, лежащий на фундаменте его дома. Титан произносит слова, напоминающие голос матери Конни: «Добро пожаловать домой». Это один из самых жутких моментов всей серии.",
  },
  {
    num: "Серия 28",
    title: "Юго-запад",
    img: "https://i.ibb.co/d0g9mVpp/aot3.webp",
    src: "https://drive.google.com/file/d/1m08vLqNeHsX3zXkN50mubA_oOqqtbKMM/preview",
    desc: "Группа солдат укрывается в старом замке Утгард. Среди них — Ymir, Connie, Reiner и Bertholdt. Ночью, когда Титаны не должны быть активны, на замок нападают несколько Титанов. Солдаты отбиваются, но оружия катастрофически мало. Напряжение нарастает с каждой минутой.",
  },
  {
    num: "Серия 29",
    title: "Солдат",
    img: "https://i.ibb.co/TxXmGVdx/Ymir-and-Christa-at-Utgard.webp",
    src: "https://drive.google.com/file/d/1uthytNU5xuQFmBCZBZf8QbtEhyGjCb7C/preview",
    desc: "Ситуация в замке Утгард становится критической. Имир, которую давно подозревали в скрытых способностях, наконец трансформируется в небольшого ловкого Титана — Зубастого. Она сражается, защищая товарищей. Райнер и Бертольдт наблюдают за ней с нескрываемым узнаванием — они явно знают о её природе.",
  },
  {
    num: "Серия 30",
    title: "История Имир",
    img: "https://i.ibb.co/rKjTz80M/Screenshotter-Attackon-Titan-E30-Historia-1224.webp",
    src: "https://drive.google.com/file/d/11g-buKohNbzgfC1LvdPH0OeTg1q_WSYT/preview",
    desc: "Подкрепление прибывает — и замок Утгард спасён. Имир в тяжёлом состоянии после боя. Раскрывается часть её прошлого: она была эльдийцем, которого превратили в Чистого Титана много лет назад, и лишь случайно получила обратно человеческую форму, съев одного из Воинов. Прибытие Разведкорпуса с Эреном меняет всё.",
  },
  {
    num: "Серия 31",
    title: "Воин",
    img: "https://i.ibb.co/JWzVRw4B/MV5-BYTI5-Ym-Fi-Yjct-ZWY3-MC00-NDMz-LWJl-Mj-At-MTFk-ZWU2-MTdi-Yj-A3-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    src: "https://drive.google.com/file/d/1a7HAckMMgv2_gsD_R3Cj1rl-4Ti1pu9x/preview",
    desc: "Одна из самых шокирующих сцен в истории аниме. Райнер прямо говорит Эрену: он и Бертольдт — Бронированный и Колоссальный Титаны. Именно они разрушили Шиганшин пять лет назад. Эрен, застывший от ужаса, через мгновение пытается трансформироваться. Начинается схватка. Райнер и Бертольдт превращаются и похищают Эрена.",
  },
  {
    num: "Серия 32",
    title: "Удар, бросок, захват",
    img: "https://i.ibb.co/KxDwd6S2/MV5-BNDUz-Nm-Rl-Nj-Et-YWQw-MS00-Zm-Uz-LWEx-ZWYt-MWZj-NTYy-MTg0-Nz-Ey-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    src: "https://drive.google.com/file/d/1Is9cHae41Mimr1y2WE0nFzpcGzDi3r19/preview",
    desc: "Эрен в плену у Райнера и Бертольдта пытается понять их мотивы. Те объясняют: они Воины Марлии, выполнявшие задание. Микаса, Арлерт и остатки Разведкорпуса бросаются в погоню. Хандзи и Леви координируют спасательную операцию. Зверский Титан наблюдает за происходящим с расстояния.",
  },
  {
    num: "Серия 33",
    title: "Удар, бросок, захват",
    img: "https://i.ibb.co/x8XftVSw/photo.avif",
    src: "https://drive.google.com/file/d/1ePasPs7L__jyOiD0-tUJcKiDizAsXcri/preview",
    desc: "Зверский Титан блокирует отступление Разведкорпуса, превратив лошадей в Титанов через сыворотку. Ловушка захлопывается. Зверский Титан начинает методично уничтожать солдат градом камней, брошенных с невероятной точностью. Армия Чистых Титанов наступает со всех сторон. Ситуация катастрофическая.",
  },
  {
    num: "Серия 34",
    title: "Открытие",
    img: "https://i.ibb.co/8Dfpg7V7/attack-on-titan-episdoe-34.webp",
    src: "https://drive.google.com/file/d/1ktEbhRtCPuJorJEAd_HxH3nFFEJESHLF/preview",
    desc: "Леви в одиночку прорывается через орды Титанов и в считанные секунды разбивает Зверского Титана — серия молниеносных ударов, каждый точнее предыдущего. Однако Зверский Титан успевает сбежать, выбравшись из шеи. Микаса атакует Бертольдта, Эрен освобождён. Но радость кратка — Имир уходит с Воинами добровольно.",
  },
  {
    num: "Серия 35",
    title: "Дети",
    img: "https://i.ibb.co/bgWLgZnp/Fire-Shot-Webpage-Capture-232-Netflix.webp",
    src: "https://drive.google.com/file/d/1p-bwJujOnV-pF5ot1NWFgkS4ItKnkl6y/preview",
    desc: "Эрен спасён, но Разведкорпус понёс огромные потери. Эрен, Микаса и Армин загнаны в угол новой волной Чистых Титанов. Эрен трансформируется, но сил почти нет. В критический момент он прикасается к Диане — и что-то внутри него активируется. Чистые Титаны замирают, повинуясь ему.",
  },
  {
    num: "Серия 36",
    title: "Гнаться изо всех сил",
    img: "https://i.ibb.co/LX3jL7pm/hjgh.webp",
    src: "https://drive.google.com/file/d/1EwRv26LIGW7ZIMZi74M0TJErEfutmHDQ/preview",
    desc: "Эрен получает доступ к Координатному крику — способности повелевать Титанами. Все Чистые разворачиваются и яростно атакуют Бронированного Титана. Райнер и Бертольдт вынуждены бежать в полном ошеломлении. Эрен сам потрясён открытием. Зик Йегер наблюдает за этим с расстояния — и его реакция говорит о многом.",
  },
  {
    num: "Серия 37",
    title: "Крик",
    img: "https://i.ibb.co/m5vmkfS1/MV5-BNm-Jk-NTQ1-YWYt-M2-I3-My00-NGE2-LTg2-OWIt-Nz-Y5-ZTk2-Mz-Y2-MDAy-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    src: "https://drive.google.com/file/d/1qGquzEdm4e_ltdX-3i9hb2dVDPLvRogJ/preview",
    desc: "Разведкорпус возвращается за стены. Потери чудовищны. Эрен осознаёт: внутри него — нечто большее, чем просто Сила. Хистория Рэйсс узнаёт больше о своём происхождении. В финальной сцене — трогательный момент между Эреном и Хисторией. Второй сезон завершается: враг раскрыт, но правда о мире за стенами всё ещё скрыта.",
  },
];

export default function Season2({ navigate }) {
  useFadeIn();
  const [activeEp, setActiveEp] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    document.body.style.overflow = activeEp !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeEp]);

  return (
    <>
      <div className="noise-overlay" />
      <div className="blood-splatter top-left" />

      {activeEp !== null && (
        <div className="ep-modal-overlay" onClick={() => setActiveEp(null)}>
          <div className="ep-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ep-modal-close" onClick={() => setActiveEp(null)}>✕</button>
            <div className="ep-modal-video">
              <iframe src={episodes[activeEp].src} title={episodes[activeEp].title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
            </div>
            <div className="ep-modal-info">
              <span className="ep-num">{episodes[activeEp].num}</span>
              <h2 className="ep-modal-title">{episodes[activeEp].title}</h2>
              <p className="ep-modal-desc">{episodes[activeEp].desc}</p>
            </div>
          </div>
        </div>
      )}

      <div className="episodes-page container">
        <div className="episodes-header fade-in-up">
          <p className="breadcrumb">
            <a onClick={() => navigate("home")}>Главная</a> ›{" "}
            <a onClick={() => navigate("series")}>Серии</a> › Сезон 2
          </p>
          <span className="ep-season-tag">Сезон 2 · 2017 · 12 серий · Wit Studio</span>
          <h1>Титаны против Титанов</h1>
          <p className="ep-synopsis">
            Второй сезон переворачивает представление об угрозе: враг больше не снаружи — он уже внутри стен. Жители деревни Рагако превращены в Титанов, и среди самих солдат оказываются шпионы с нечеловеческой силой. Райнер и Бертольдт раскрывают свои истинные личности — и мир Эрена рушится во второй раз.
          </p>
        </div>

        <div className="season-nav fade-in-up">
          <a onClick={() => navigate("season1")}>Сезон 1</a>
          <a className="active" onClick={() => navigate("season2")}>Сезон 2</a>
          <a onClick={() => navigate("season3")}>Сезон 3</a>
          <a onClick={() => navigate("season4")}>Сезон 4</a>
        </div>

        <div className="ep-cards-grid" style={{marginTop:"40px"}}>
          {episodes.map((ep, i) => (
            <div key={i} className="ep-card fade-in-up" onClick={() => setActiveEp(i)}>
              <div className="ep-card-thumb">
                <img src={ep.img} onError={(e)=>{e.target.onerror=null;e.target.src=`https://placehold.co/480x270/1a0808/c0392b?text=${encodeURIComponent(ep.num)}`;}} alt={ep.title} />
                <div className="ep-card-hover"><span className="ep-card-play">▶ Смотреть</span></div>
              </div>
              <div className="ep-card-body">
                <span className="ep-num">{ep.num}</span>
                <p className="ep-card-title">{ep.title}</p>
                <p className="ep-card-desc">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="season-nav fade-in-up" style={{marginTop:"48px"}}>
          <a onClick={() => navigate("season1")}>Сезон 1</a>
          <a onClick={() => navigate("series")}>Все сезоны</a>
          <a onClick={() => navigate("season3")}>Сезон 3</a>
        </div>
      </div>

      <footer className="site-footer" style={{marginTop:"60px"}}>
        <div className="container"><p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama</p></div>
      </footer>
    </>
  );
}