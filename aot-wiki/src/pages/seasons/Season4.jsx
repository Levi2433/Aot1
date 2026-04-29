import { useState, useEffect } from "react";
import { useFadeIn } from "../../hooks/useAnimations";

// Official Attack on Titan Season 4 — 28 episodes total
// Part 1: Episodes 60–75 (16 eps), Part 2: Episodes 76–87 (12 eps)
const part1 = [
  {
    num: "Серия 60",
    title: "Воины",
    img: "https://i.ibb.co/x8sBvFNk/1.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Первая серия шокирует: действие перенесено на материк, в Марлийскую империю. Мы видим войну глазами марлийских Воинов — Галлиара (Челюстной Титан) и Пике. Молодой Фалько — мальчик, кандидат в Воины — хочет получить Силу Титана раньше Гальярда, чтобы спасти Райнера от проклятия. Четыре года прошло после событий 3-го сезона. Перенос перспективы полностью меняет восприятие «врагов» из прошлых сезонов.",
  },
  {
    num: "Серия 61",
    title: "Поезд в ночи",
    img: "https://i.ibb.co/3LMYVsr/2.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Воины возвращаются домой после войны с Союзом Средневосточных стран. Райнер воссоединяется с семьей, но его преследуют кошмары прошлого на Парадизе. Мы видим внутреннюю политику Марлии и подготовку к новому этапу войны за Прародителя.",
  },
  {
    num: "Серия 62",
    title: "Дверь надежды",
    img: "https://i.ibb.co/RFVqnhw/3.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Серия погружает нас в прошлое Райнера Брауна. Мы видим его детство, трудный путь к получению Бронированного Титана и истинные причины пролома стены Мария. Райнер находится на грани психологического срыва.",
  },
  {
    num: "Серия 63",
    title: "Из рук в руки",
    img: "https://i.ibb.co/0jc0x9PS/4.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Фалько заводит дружбу с таинственным раненым солдатом в госпитале. Тем временем семья Тайбер готовит грандиозное выступление в Либерио, которое должно решить судьбу эльдийцев. Напряжение в гетто растет.",
  },
  {
    num: "Серия 64",
    title: "Объявление войны",
    img: "https://i.ibb.co/1fPkxLH6/5r.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Объявление войныИсторический момент: Вилли Тайбер на сцене раскрывает правду об истории титанов. В это же время в подвале под сценой происходит судьбоносная встреча Эрена и Райнера. Эрен произносит фразу: «Я такой же, как и ты», и превращается, объявляя войну всему миру.",
  },
  {
    num: "Серия 65",
    title: "Молот Войны",
    img: "https://i.ibb.co/GQNxMZMz/6.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Хаос в Либерио. Эрен вступает в жестокую схватку с Титаном-Молотом. Впервые за сезон появляются старые герои — Микаса и Разведкорпус с новым снаряжением, атакуя марлийские войска.",
  },
  {
    num: "Серия 66",
    title: "Нападение",
    img: "https://i.ibb.co/WvNTtqn0/7.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Полномасштабное сражение в Либерио. Армин в облике Колоссального Титана уничтожает флот Марлии. Эрен находит способ поглотить силу Титана-Молота, используя челюсти Галлиарда как щипцы.",
  },
  {
    num: "Серия 67",
    title: "Убийственный выстрел",
    img: "https://i.ibb.co/Jwm6sB1T/8.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Разведчики отступают на дирижабле, празднуя победу, но торжество омрачается трагедией. Габи, полная ненависти, пробирается на борт и совершает роковой выстрел, убивая Сашу Браус. Выясняется, что Зик Йегер был в сговоре с Эреном.",
  },
  {
    num: "Серия 68",
    title: "Смельчаки",
    img: "https://i.ibb.co/q3Vv5yhX/9.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Флешбэк объясняет, как на Парадиз прибыли первые добровольцы из Марлии под предводительством Елены. Отношения между Эреном и его друзьями начинают портиться из-за его радикальных действий.",
  },
  {
    num: "Серия 69",
    title: "Весомый аргумент",
    img: "https://i.ibb.co/dwzTP8k5/10.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Политическая ситуация на Парадизе накаляется. Рассматривается план Зика по спасению эльдийцев, требующий передачи силы Зика Хистории. Эрен идет против правительства, считая, что только он знает верный путь.",
  },
  {
    num: "Серия 70",
    title: "Обманщик",
    img: "https://i.ibb.co/R4gGK8f6/11.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Габи и Фалько сбегают из тюрьмы и попадают на ферму, где живет семья Саши. Они сталкиваются с последствиями своих действий и понимают, что на острове живут не «дьяволы», а обычные люди.",
  },
  {
    num: "Серия 71",
    title: "Те, кто ведут за собой",
    img: "https://i.ibb.co/pvC3F35r/12.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Йегеристы (сторонники Эрена) устраивают теракт и убивают главнокомандующего Закклая. Эрен сбегает из заточения и возглавляет восстание. Парадиз расколот изнутри.",
  },
  {
    num: "Серия 72",
    title: "Дети в лесу",
    img: "https://i.ibb.co/xqpWHFb7/13.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Напряженный ужин, где Габи разоблачают перед семьей Саши. Николо в ярости пытается ее убить, но отец Саши проявляет милосердие, стремясь «вывести детей из леса» бесконечной ненависти. Появляется Эрен и требует разговора с Армином и Микасой.",
  },
  {
    num: "Порочность ",
    title: "Последний полёт",
    img: "https://i.ibb.co/W4gGzp5M/14.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Эрен говорит Микасе, что всегда ненавидел ее, и избивает Армина. Тем временем в лесу Леви узнает о плане Зика: спинномозговая жидкость Зика попала в вино, которое выпили солдаты. Леви вынужден сражаться со своими обращенными товарищами.",
  },
  {
    num: "Серия 74",
    title: "Единственное спасение",
    img: "https://i.ibb.co/G3rnxHGn/15.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Прошлое Зика Йегера. Мы узнаем о его детстве, предательстве родителей и плане «эвтаназии» эльдийцев — лишении их возможности иметь детей, чтобы титаны исчезли навсегда. Зик взрывает себя вместе с Леви.",
  },
  {
    num: "Серия 75",
    title: "Небо и земля",
    img: "https://i.ibb.co/PGrwm8yk/16.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Марлия наносит ответный удар. Пик и Райнер прибывают на Парадиз. Эрен готовится к битве против марлийских войск прямо в Шиганшине. Начинается финал первой части сезона.",
  },
];

const part2 = [
  {
    num: "Серия 76",
    title: "Осуждение",
    img: "https://i.ibb.co/nq6JL9MM/17.png",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Битва в Шиганшине в разгаре. Эрен сражается против Райнера и Галлиарда одновременно. Солдаты Парадиза в смятении, а Зик прибывает, чтобы помочь брату.",
  },
  {
    num: "Серия 77",
    title: "Нападение исподтишка",
    img: "https://i.ibb.co/cS8fnsqm/18.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Микаса и Армин решают помочь Эрену, несмотря на его слова. Армия Марлии использует тактику и мощное оружие против Зика. Фалько случайно оказывается в эпицентре событий.",
  },
  {
    num: "Серия 78",
    title: "Старший и младший братья",
    img: "https://i.ibb.co/zVSBGGFZ/19.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Кульминация битвы. Зик кричит, превращая всех, кто пил вино, в титанов (включая Фалько). В момент, когда Эрен бежит к Зику, Габи отстреливает Эрену голову. Но их контакт происходит, и они попадают в Пути.",
  },
  {
    num: "Серия 79",
    title: "Воспоминания о будущем",
    img: "https://i.ibb.co/kg2qVPPq/20.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Эрен и Зик путешествуют по воспоминаниям их отца, Гриши. Зик в шоке понимает, что это не он управлял отцом, а Эрен из будущего манипулировал Гришей, чтобы тот получил силу Прародителя.",
  },
  {
    num: "Серия 80",
    title: "От тебя, 2000 лет назад",
    img: "https://i.ibb.co/LdPSz53p/21r.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "История Имир, первой из титанов. Эрен отвергает план Зика и пробуждает Имир, давая ей выбор. Она выбирает Эрена. Стены рушатся — начинается «Гул Земли».",
  },
  {
    num: "Серия 81",
    title: "Размораживание",
    img: "https://i.ibb.co/BH2dDM7L/22.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Колоссальные титаны начинают свой марш через мир. Энни Леонхарт освобождается из своего кристалла. Хаос охватывает остров, пока титаны внутри стен убивают оставшихся марлийцев.",
  },
  {
    num: "Серия 82",
    title: "Закат",
    img: "https://i.ibb.co/XGF757b/23.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Армин и остальные пытаются понять, как остановить Эрена. Энни встречается с Хитч. Группы бывших врагов начинают медленно объединяться перед лицом полного уничтожения мира.",
  },
  {
    num: "Серия 83",
    title: "Гордость",
    img: "https://i.ibb.co/zWX3mkBV/24.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Формируется неожиданный союз: Разведкорпус (Микаса, Армин, Леви, Ханджи) объединяется с марлийцами (Райнер, Пик, Энни), чтобы остановить «Гул Земли».",
  },
  {
    num: "Серия 84",
    title: "Ночь перед концом",
    img: "https://i.ibb.co/FqgYr0Dg/25.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Герои собираются у костра. Вскрываются старые раны, Жан избивает Райнера за смерть Марко. Это серия о прощении и понимании того, что все они — просто люди, застрявшие в жестоком цикле.",
  },
  {
    num: "Серия 85",
    title: "Предатель",
    img: "https://i.ibb.co/d4TcFmg1/26.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Альянсу нужно захватить корабль в порту, который удерживают Йегеристы под командованием Флока. Конни и Армин вынуждены убивать своих бывших друзей, чтобы спасти мир.",
  },
  {
    num: "Серия 86",
    title: "Ретроспектива",
    img: "https://i.ibb.co/7dZPPCXf/27.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Жестокая битва в порту. Фалько впервые превращается в Челюстного Титана. Магат и Шадис жертвуют собой, чтобы уничтожить крейсер марлийцев и дать Альянсу шанс догнать Эрена.",
  },
  {
    num: "Серия 87",
    title: "Рассвет человечества",
    img: "https://i.ibb.co/5W2H2Htw/28.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Флешбэки показывают поездку героев в Марлию до начала войны. Мы видим момент, когда Эрен окончательно решил идти до конца. В настоящем Гул Земли достигает берегов Марлии. Эрен в форме гигантского скелета ведет армию вперед.",
  },
  {
    num: "Спецвыпуск 1 (Серия 88)",
    title: "Гул Земли / Грешники",
    img: "https://i.ibb.co/rRQG658Z/29.webp",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Гул достигает материка, уничтожая города. Корабль Альянса заправляется, и Ханджи жертвует собой, чтобы задержать титанов, передав звание Командора Армину. Герои высаживаются на спину Эрена-Прародителя, где их ждут фантомы прошлых титанов.",
  },
  {
    num: "Спецвыпуск 2 (Серия 89)",
    title: "Длинный сон / К дереву на том холме",
    img: "https://i.ibb.co/Wv1YCSfL/30.jpg",
    src: "https://www.youtube.com/embed/o2KMiMftCl0",
    desc: "Финальная битва на спине Эрена. Армин сражается с Эреном в облике Колоссов. Микаса принимает тяжелое решение и проникает в пасть Эрена, чтобы оборвать его жизнь. Проклятие титанов исчезает. В конце мы видим разговор Эрена и Армина в Путях, где раскрываются истинные мотивы Эрена. Мир спасен, но цена оказалась огромной.",
  },
];

export default function Season4({ navigate }) {
  useFadeIn();
  const [activeEp, setActiveEp] = useState(null);
  const allEps = [...part1, ...part2];
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
              <iframe
                src={allEps[activeEp].src}
                title={allEps[activeEp].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="ep-modal-info">
              <span className="ep-num">{allEps[activeEp].num}</span>
              <h2 className="ep-modal-title">{allEps[activeEp].title}</h2>
              <p className="ep-modal-desc">{allEps[activeEp].desc}</p>
            </div>
          </div>
        </div>
      )}

      <div className="episodes-page container">
        <div className="episodes-header fade-in-up">
          <p className="breadcrumb">
            <a onClick={() => navigate("home")}>Главная</a> ›{" "}
            <a onClick={() => navigate("series")}>Серии</a> › Сезон 4
          </p>
          <span className="ep-season-tag">Сезон 4 · 2020–2023 · 30 серий · MAPPA</span>
          <h1>Эрен против Мира</h1>
          <p className="ep-synopsis">
            Финальный сезон разрушает все привычные категории «свой/чужой». Перенос действия в Марлию открывает перспективу противника — и делает его человечным. Эрен, изменившийся до неузнаваемости, запускает Грохот — армию Колоссальных Титанов против всего мира. Бывшие союзники объединяются с бывшими врагами, чтобы остановить человека, которого когда-то любили.
          </p>
        </div>

        <div className="season-nav fade-in-up">
          <a onClick={() => navigate("season1")}>Сезон 1</a>
          <a onClick={() => navigate("season2")}>Сезон 2</a>
          <a onClick={() => navigate("season3")}>Сезон 3</a>
          <a className="active" onClick={() => navigate("season4")}>Сезон 4</a>
        </div>

        <div style={{ marginTop: "40px" }}>
          <div className="season-divider">
            <p>Часть I · 2020–2021 · Серии 60–75 · 16 серий</p>
          </div>
          <div className="ep-cards-grid">
            {part1.map((ep, i) => (
              <div key={i} className="ep-card fade-in-up" onClick={() => setActiveEp(i)}>
                <div className="ep-card-thumb">
                  <img
                    src={ep.img}
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/480x270/1a0808/c0392b?text=${encodeURIComponent(ep.num)}`; }}
                    alt={ep.title}
                  />
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

          <div className="season-divider" style={{ margin: "32px 0 24px" }}>
            <p>Часть II · 2022–2023 · Серии 76–89 · 14 серий</p>
          </div>
          <div className="ep-cards-grid">
            {part2.map((ep, i) => (
              <div key={i} className="ep-card fade-in-up" onClick={() => setActiveEp(part1.length + i)}>
                <div className="ep-card-thumb">
                  <img
                    src={ep.img}
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/480x270/1a0808/c0392b?text=${encodeURIComponent(ep.num)}`; }}
                    alt={ep.title}
                  />
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
        </div>

        <div className="season-nav fade-in-up" style={{ marginTop: "48px" }}>
          <a onClick={() => navigate("season3")}>Сезон 3</a>
          <a onClick={() => navigate("series")}>Все сезоны</a>
          <a onClick={() => navigate("home")}>Главная</a>
        </div>
      </div>

      <footer className="site-footer" style={{ marginTop: "60px" }}>
        <div className="container">
          <p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama</p>
        </div>
      </footer>
    </>
  );
}