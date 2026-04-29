import { useState, useEffect } from "react";
import { useFadeIn } from "../../hooks/useAnimations";

const episodes = [
  {
    num: "Серия 38",
    title: "Сигнал дыма",
    img: "https://i.ibb.co/Z6gwq77J/1606428779-ataka-titanov-3-sezon-1-seriya.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Разведкорпус скрывается, пока правительство пытается их устранить. Леви формирует новый отряд из своих лучших учеников, чтобы защитить Эрена и Хисторию. Враг теперь — не титаны, а люди в тени.",
  },
  {
    num: "Серия 39",
    title: "Боль",
    img: "https://i.ibb.co/wFddS2YT/1685198785-5.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Появляется Кенни-Потрошитель, старый наставник Леви и лидер отряда по борьбе с людьми. Происходит масштабная погоня и перестрелка в городе. Кенни похищает Эрена и Хисторию.",
  },
  {
    num: "Серия 40",
    title: "Старые истории",
    img: "https://i.ibb.co/6RN1w2Ms/Fire-Shot-Webpage-Screenshot-3335-Netflix-www-netflix-com.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Вскрывается истинная личность Хистории как наследницы королевского рода Рейсс. Эрвин Смит начинает планировать государственный переворот, осознавая, что нынешний король — лишь марионетка.",
  },
  {
    num: "Серия 41",
    title: "Доверие",
    img: "https://i.ibb.co/1tN3hZFG/1606428870-ataka-titanov-3-sezon-4-seriya.jpg ",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Разведкорпус объявлен вне закона. Эрвин идет на риск, чтобы разоблачить коррумпированную верхушку перед народом и армией. Хитч и Марло присоединяются к отряду Леви.",
  },
  {
    num: "Серия 42",
    title: "Ответ",
    img: "https://i.ibb.co/xKJkJ73w/1606428967-ataka-titanov-3-sezon-5-seriya.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Государственный переворот удается без единого выстрела. Вся правда о фальшивом короле выходит наружу. Тем временем Род Рейсс, отец Хистории, готовится передать ей силу Прародителя.",
  },
  {
    num: "Серия 43",
    title: "Грех",
    img: "https://i.ibb.co/zTRtz1Fx/ataka-titanov-3-sezon-7-seriya.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Эрен, закованный в цепи в хрустальной пещере, узнает ужасную правду о своем отце. Гриша Йегер убил семью Рейсс, чтобы украсть силу Титана, и Эрен поглотил своего отца, став титаном.",
  },
  {
    num: "Серия 44",
    title: "Желание",
    img: "https://i.ibb.co/90mVXB4/7.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Род Рейсс пытается убедить Хисторию убить Эрена и вернуть силу их семье. Однако Хистория выбирает свою судьбу, разбивает шприц и спасает Эрена. В отчаянии Род сам слизывает сыворотку.",
  },
  {
    num: "Серия 45",
    title: "У стен Оруда",
    img: "https://i.ibb.co/PZkvpq3B/8.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Род Рейсс превращается в колоссального, уродливого титана, который в два раза больше Колоссального. Он ползет к стене, сжигая всё на своем пути. Эрен и Разведкорпус готовят план обороны.",
  },
  {
    num: "Серия 46",
    title: "Королева стен",
    img: "https://i.ibb.co/LXFyLNHX/9.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Хистория наносит финальный удар по титану своего отца на глазах у горожан. Народ признает её своей истинной королевой. Кенни, смертельно раненый, передает Леви титаническую сыворотку перед смертью.",
  },
  {
    num: "Серия 47",
    title: "Друг",
    img: "https://i.ibb.co/YBxzLT2X/10.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Эпизод посвящен прошлому Кенни Аккермана. Мы видим его дружбу с Ури Рейссом и понимаем, почему он стал таким. Выясняется, что Кенни — дядя Леви, который воспитал его в подземном городе.",
  },
  {
    num: "Серия 48",
    title: "Посторонний",
    img: "https://i.ibb.co/7dHSP0xD/11.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Кит Шадис, бывший командующий, рассказывает Эрену о встрече с его отцом 20 лет назад. Это важная связующая серия, раскрывающая, как Гриша попал за стены.",
  },
  {
    num: "Серия 49",
    title: "Ночь перед операцией",
    img: "https://i.ibb.co/xqXHrmNB/12.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Разведчики празднуют перед решающей битвой за возвращение стены Мария. Эрен, Микаса и Армин вспоминают детство и мечтают увидеть море. Леви решает оставить сыворотку у себя.",
  },
  {
    num: "Серия 50",
    title: "Город, где всё началось",
    img: "https://i.ibb.co/WvQ03LKj/13.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Армия прибывает в Шиганшину. Армин находит следы врага: Райнер и Бертольд прячутся прямо внутри стен. Начинается засада, и появляется Звероподобный Титан с армией мелких титанов.",
  },
  {
    num: "Серия 51",
    title: "Громовые копья",
    img: "https://i.ibb.co/p6h8WJJY/14.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Бронированный Титан против Эрена. Разведчики используют новую технологию — Громовые копья, чтобы пробить броню Райнера. Это первый случай, когда люди могут эффективно уничтожить Бронированного.",
  },
  {
    num: "Серия 52",
    title: "Спуск",
    img: "https://i.ibb.co/cKQHn1T6/15.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Бертольд (Колоссальный Титан) вступает в бой. Он превращается прямо в воздухе, создавая мощный взрыв, который уничтожает большую часть города. Разведкорпус оказывается зажат между двумя огнями.",
  },
  {
    num: "Серия 53",
    title: "Совершенная игра",
    img: "https://i.ibb.co/j908zwb3/16.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Звероподобный Титан (Зик) методично уничтожает лошадей и солдат, забрасывая их камнями. Эрвин принимает решение пойти на верную смерть, возглавив самоубийственную атаку, чтобы отвлечь Зика.",
  },
  {
    num: "Серия 54",
    title: "Герой",
    img: "https://i.ibb.co/4ZHBPnjR/17.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Пока Эрвин и новобранцы гибнут под градом камней, Леви добирается до Зика и почти убивает его. Армин жертвует собой, обгорая до углей, чтобы дать Эрену шанс победить Колоссального Титана.",
  },
  {
    num: "Серия 55",
    title: "Белая ночь",
    img: "https://i.ibb.co/gMKgCMmn/18.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Самый эмоциональный момент. У Леви есть одна сыворотка, но два умирающих героя: Эрвин и Армин. Происходит жестокий спор о том, чья жизнь важнее для будущего человечества. Леви выбирает Армина.",
  },
  {
    num: "Серия 56",
    title: "Подвал",
    img: "https://i.ibb.co/4RxLHvLm/19.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Эрен, Микаса, Леви и Ханджи заходят в подвал дома Йегеров. Они находят три книги, которые переворачивают всё представление о мире: человечество за стенами процветает, а они — лишь угнетаемая раса на острове.",
  },
  {
    num: "Серия 57",
    title: "Тот день",
    img: "https://i.ibb.co/Y4c9gm53/20.png",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Воспоминания Гриши Йегера о жизни в Марлии. Мы видим трагическую судьбу его сестры и то, как эльдийцы живут в гетто. Гриша становится лидером повстанцев.",
  },
  {
    num: "Серия 58",
    title: "Атакующий Титан",
    img: "https://i.ibb.co/1G2qc25V/21.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Эрен Крюгер спасает Гришу и передает ему свою силу. Выясняется название их титана — Атакующий Титан (Shingeki no Kyojin). Раскрываются законы мира: проклятие 13 лет и пути Имир.",
  },
  {
    num: "Серия 59",
    title: "По ту сторону стен",
    img: "https://i.ibb.co/wNFLZyWW/22.png  ",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Спустя год после битвы все титаны на острове уничтожены. Разведчики выезжают за пределы стен и впервые видят море. Пока все радуются, Эрен понимает: за морем их ждет настоящий враг.",
  },
];

export default function Season3({ navigate }) {
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
            <a onClick={() => navigate("series")}>Серии</a> › Сезон 3
          </p>
          <span className="ep-season-tag">Сезон 3 · 2018–2019 · 22 серии · Wit Studio</span>
          <h1>Люди против Людей</h1>
          <p className="ep-synopsis">
            Третий сезон меняет природу конфликта: главный враг — уже не Титаны, а люди. Коррумпированное правительство, фальшивый король, тайна семьи Рэйсс. Кульминация — возвращение Шиганшина и подвал, в котором скрыта правда о мире за стенами. Цена победы — почти весь Разведкорпус и его командующий Эрвин Смит.
          </p>
        </div>

        <div className="season-nav fade-in-up">
          <a onClick={() => navigate("season1")}>Сезон 1</a>
          <a onClick={() => navigate("season2")}>Сезон 2</a>
          <a className="active" onClick={() => navigate("season3")}>Сезон 3</a>
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
          <a onClick={() => navigate("season2")}>Сезон 2</a>
          <a onClick={() => navigate("series")}>Все сезоны</a>
          <a onClick={() => navigate("season4")}>Сезон 4</a>
        </div>
      </div>

      <footer className="site-footer" style={{marginTop:"60px"}}>
        <div className="container"><p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama</p></div>
      </footer>
    </>
  );
}