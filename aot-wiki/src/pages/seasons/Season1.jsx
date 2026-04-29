import { useState, useEffect } from "react";
import { useFadeIn } from "../../hooks/useAnimations";

const episodes = [
  {
    num: "Серия 01",
    title: "Для человечества в клетке (ч.1). День возрождения",
    img: "https://i.ibb.co/cXyppXh7/lvkk8zmqfsr61.jpg",
    src: "https://drive.google.com/file/d/1KphxLFe3e5uWPHBTuMY5XwhKq1o3z7Yo/preview",
    desc: "Мирная жизнь в Шиганшине обрывается в одночасье: за горизонтом стены появляется исполинская фигура Колоссального Титана. Один удар ноги — и ворота разрушены. Толпы Чистых Титанов врываются в город. Маленький Эрен становится очевидцем гибели матери и клянётся уничтожить всех Титанов до единого.",
  },
  {
    num: "Серия 02",
    title: "Падение Шиганшины (ч.2). Тот самый день",
    img: "https://i.ibb.co/vxF5HVRx/MV5-BODE2-Nj-U2-ODMt-Y2-Vh-My00-Zjk0-LTg4-Nj-It-NTJh-ZTFl-Zm-Rm-Zm-E1-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    src: "https://drive.google.com/file/d/1-mXGqfD5Dok_BfQMNF80GlJWDUHm4V4Y/preview",
    desc: "После разрушения ворот Шиганшины толпы Титанов хлынули в город. Многим жителям удаётся спастись, уплыв на кораблях. Среди спасшихся — Эрен с сестрой Микасой и другом Армином. Путь ребят лежит в лагерь беженцев за Стену Розы.",
  },
  {
    num: "Серия 03",
    title: "Человечество встаёт с колен (ч.1). Тусклый свет посреди отчаяния",
    img: "https://i.ibb.co/cc49qynC/attack-on-titan-s1-e3-3.webp",
    src: "https://drive.google.com/file/d/11sKPzrd92v9XlUxuUrIa4dckgai-SG2H/preview",
    desc: "Эрен с сестрой и другом обучается военному мастерству в 104-м кадетском учебном корпусе. Его инструктором является Кис Шадис — очень грубый военный. Под руководством Шадиса ребятам предстоит освоить тяжёлое ремесло солдата. Однако Эрен в первые дни с трудом справляется с вертикальными манёвренными устройствами.",
  },
  {
    num: "Серия 04",
    title: "Человечество встаёт с колен (ч.2). Первый бой",
    img: "https://i.ibb.co/prBt9vJp/Cadets-during-Titan-combat-training.webp",
    src: "https://drive.google.com/file/d/1hF-trZHn_a1ssE7k791nmU4ptNfW1zpN/preview",
    desc: "Тренировки продолжаются. Эрен, наконец, начинает овладевать ВМУ с помощью Армина — выяснилось, что проблема была в неисправной детали снаряжения. Кадеты знакомятся друг с другом: в кадрах появляются Жан, Конни, Саша, Райнер и Бертольдт.",
  },
  {
    num: "Серия 05",
    title: "Битва за Трост (ч.1). Первые шаги",
    img: "https://i.ibb.co/qF9TgqRs/Eren-inside-the-Titan-s-mouth.webp",
    src: "https://drive.google.com/file/d/16yoKByyWtO5ARzV61Eap0h8MH1_1uTwh/preview",
    desc: "Выпускники академии распределены по подразделениям и отправлены на оборону дистрикта Трост — именно туда, где только что появился Колоссальный Титан. Первый реальный бой обнажает пропасть между учениями и войной. Эрен теряет ногу в пасти Титана и, судя по всему, погибает.",
  },
  {
    num: "Серия 06",
    title: "Битва за Трост (ч.2). Чудо в пылающем городе",
    img: "https://i.ibb.co/zWwqPW1P/Ep-6-2.jpg",
    src: "https://drive.google.com/file/d/1dYCMK-ovPUmRR0AtIkqafI8zU6FcG46H/preview",
    desc: "Армин, Микаса и оставшиеся бойцы с трудом удерживают позиции. Внезапно среди Титанов появляется ещё один — атакующий других Чистых Титанов. Армин узнаёт знакомый шрам на руке: это Эрен. Он жив — и способен превращаться в Титана.",
  },
  {
    num: "Серия 07",
    title: "Битва за Трост (ч.3). Небольшая надежда",
    img: "https://i.ibb.co/fGGTMMC5/Mikasa-recalls-the-moment.webp",
    src: "https://drive.google.com/file/d/1TuUxC2ipUwYGwDeLitTUF1Y9J06Rdy0J/preview",
    desc: "Солдаты в панике: среди них появился Титан. Эрена берут под стражу. Армин предлагает командующему Дот Пиксису план: использовать Эрена в форме Титана для закрытия пробоины в воротах. Пиксис соглашается, видя в этом единственный шанс спасти Трост.",
  },
  {
    num: "Серия 08",
    title: "Битва за Трост (ч.4). Замысел",
    img: "https://i.ibb.co/pBHddp82/Ep8.webp",
    src: "https://drive.google.com/file/d/1_ZDSWW8bCPDWSHwLR8P7eJhRjf-9c5Rq/preview",
    desc: "Пиксис объявляет план всему гарнизону. Часть солдат дезертирует от страха — и Пиксис отпускает их, не желая держать в рядах тех, кто не верит в победу. Эрен трансформируется и поднимает каменный валун. Но внутри Титана он теряет контроль и едва не атакует Микасу.",
  },
  {
    num: "Серия 09",
    title: "Битва за Трост (ч.5). Первая победа",
    img: "https://i.ibb.co/93CYtBh7/Eren-protects-Armin-and-Mikasa.webp",
    src: "https://drive.google.com/file/d/1ydq34MWf7NyuTZs-85GOaPSFc4bDmqYY/preview",
    desc: "Армин вызывает Эрена из транса, окликая его. Тот приходит в себя, поднимает валун и тащит его к воротам, пробиваясь через орды Титанов. Ценой невероятных усилий ворота Трост закрыты. Стена Роза спасена — первая реальная победа человечества после 845 года.",
  },
  {
    num: "Серия 10",
    title: "Ответная реакция. Трибунал над Эреном",
    img: "https://i.ibb.co/DPfNBT2f/episode-image-400x225.webp  ",
    src: "https://drive.google.com/file/d/1KMiBFw4AZ76N96GMB5H7CLOtW_iM07zX/preview",
    desc: "Трост отбит, но Эрен арестован. На военном трибунале его судьбу решают три корпуса: Военная полиция требует казни, Разведкорпус — передачи под своё командование. Эрвин Смит лично защищает Эрена. В критический момент Леви намеренно избивает Эрена на глазах у суда — и судьи соглашаются передать его разведчикам.",
  },
  {
    num: "Серия 11",
    title: "Настоящий враг. Знак завтрашнего дня",
    img: "https://i.ibb.co/zVNtSb5G/Titan-Eren-attacks-Mikasa.webp",
    src: "https://drive.google.com/file/d/1Y4OqvdMjFekW0n12pTZvL8eUe5_fh3sk/preview",
    desc: "Эрен вступает в Разведкорпус. Леви берёт его под личное командование. На базе Хейниа новобранцы впервые встречают Хандзи Зоэ — фанатичного исследователя Титанов, проводящего эксперименты с двумя захваченными Чистыми Титанами. Хандзи делится первыми гипотезами об их природе.",
  },
  {
    num: "Серия 12",
    title: "Долгая дорога к воссоединению. Начало 57-й экспедиции",
    img: "https://i.ibb.co/nMmwc3vs/attack-on-titan-s1-e12-6.png",
    src: "https://drive.google.com/file/d/1wobnuEKzI1tl8cAxcZ4bxCKJJZhv0U-c/preview",
    desc: "Разведкорпус готовится к 57-й экспедиции за стены. Эрвин излагает новую тактику — систему долгосрочного разведывательного охвата, призванную минимизировать потери. Эрен и бойцы отряда Леви получают последние инструкции. Ворота открываются — корпус выходит в открытый мир.",
  },
  {
    num: "Серия 13",
    title: "Поход начался. Женский Титан",
    img: "https://i.ibb.co/QFN8K2DQ/Eren-carries-the-boulder.webp",
    src: "https://drive.google.com/file/d/1F95yLQfqWRwwOazffcs0cKeGqXDy0J4F/preview",
    desc: "В ходе экспедиции на правом фланге появляется Женский Титан — огромный, женского облика, явно разумный. Он целенаправленно движется вглубь строя, уничтожая солдат. Армин понимает: Титан ищет Эрена. Разведкорпус несёт серьёзные потери.",
  },
  {
    num: "Серия 14",
    title: "Глаза обречённых. Преследование",
    img: "https://i.ibb.co/sdQDLw4p/MV5-BZj-Rl-Yzc0-ZTEt-Mz-Mw-Ni00-NTZi-LThk-Ym-Qt-Mm-E0-NTJh-NDA3-Yz-Jk-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    src: "https://drive.google.com/file/d/1eFJ6fbazuJgtx6N5CXJPX-w_chLt-FcA/preview",
    desc: "Женский Титан продолжает преследование. Несколько отрядов пытаются задержать его — безуспешно. Арнин раскрывает Реiner и Jean свои подозрения: Женский Титан знает тактику ВМУ и целенаправленно устраняет опытных бойцов. Лес великих деревьев становится ареной ловушки.",
  },
  {
    num: "Серия 15",
    title: "Ловушка в лесу великих деревьев",
    img: "https://i.ibb.co/tPxCgK1Y/vlcsnap-2013-07-22-15h18m45s29.png",
    src: "https://drive.google.com/file/d/1oqq_FR0BgkOC97NLYFmH4WtMHBBpfTfF/preview",
    desc: "Эрвин Смит приказывает Эрену не трансформироваться и довериться корпусу. Женский Титан загоняют в ловушку из тросов и крюков. Специальный отряд обездвиживает его. Леви пытается извлечь из Титана человека — но Женский Титан кричит, призывая Чистых Титанов, и сбегает, пожертвовав конечностями.",
  },
  {
    num: "Серия 16",
    title: "Что нужно сделать сейчас. Реакция на смерть",
    img: "https://i.ibb.co/s9mYczKn/tumblr-mqmjnvyhqv1qkeih7o4-500.png",
    src: "https://drive.google.com/file/d/15NdbjeIFTanASchzLW8czhB_7oZa9jta/preview",
    desc: "После провала ловушки Эрвин принимает решение вернуться за стены. Экспедиция провалена. Разведкорпус потерял десятки людей. По пути назад Леви и Микаса скорбят по погибшим товарищам. Армин всё сильнее подозревает, кто стоит за Женским Титаном.",
  },
  {
    num: "Серия 17",
    title: "Точка невозврата. Смерть сержанта",
    img: "https://i.ibb.co/TxhjXJjZ/armin-encounters-the-female-titan.webp",
    src: "https://drive.google.com/file/d/1z9VPBSmg70njfab9LGUNDFIen7NIs4tL/preview",
    desc: "Возвращаясь к стенам, отряд Леви внезапно атакован. Гюнтер Шульц убит ударом в спину — боец, замаскированный под разведчика. Женский Титан снова появляется и нападает на отряд. Эрен в отчаянии рвётся трансформироваться, но Леви удерживает его.",
  },
  {
    num: "Серия 18",
    title: "Особый разведывательный отряд. Противостояние",
    img: "https://i.ibb.co/rGZJNVTf/attack-on-titan-s1-e18-3.webp",
    src: "https://drive.google.com/file/d/1pv0wewd-G4KMNg__5rNPVxMGnoNdbNSQ/preview",
    desc: "Эрен наконец трансформируется и вступает в схватку с Женским Титаном. Бой чудовищно интенсивный — оба Титана равны по силе. Женский Титан использует затвердевание кожи. Эрен проигрывает — его вытаскивают из Титана. Микаса и Леви приходят на помощь, спасая Эрена.",
  },
  {
    num: "Серия 19",
    title: "Стохесс. Раскрытие личности",
    img: "https://i.ibb.co/mrjT0ZGH/Scouts-engage-the-Female-Titan.webp",
    src: "https://drive.google.com/file/d/1UcwiLFd9iiGEX-pDJIGWgCJ_sVpnBDsv/preview",
    desc: "Армин раскрывает догадку Эрену и Жану: Женский Титан — это Анни Леонхарт. Операция переносится в столичный дистрикт Стохесс. Армин приближается к Анни под предлогом просьбы о помощи. Анни понимает ловушку, но колеблется — она не хочет причинить вред Армину.",
  },
  {
    num: "Серия 20",
    title: "Стохесс (ч.2). Битва в столице",
    img: "https://i.ibb.co/JR33FsbT/vlcsnap-2013-08-26-17h51m02s157.png",
    src: "https://drive.google.com/file/d/1NpmsCF3LIVlW-VuUAEyV08_aIht9K0S-/preview",
    desc: "Анни трансформируется и начинает бой прямо в городских кварталах Стохесса. Здания рушатся, гибнут мирные жители. Эрен долго не решается превратиться — воспоминания о дружбе с Анни сдерживают его. Наконец он трансформируется и атакует.",
  },
  {
    num: "Серия 21",
    title: "Стохесс (ч.3). Финальная схватка",
    img: "https://i.ibb.co/hq9qSK4/attack-on-titan-s1-e21-5.png",
    src: "https://drive.google.com/file/d/15UaZBDpU1nXk6sl5uVXTi0CydpaKkWea/preview?",
    desc: "Эрен и Анни сражаются в руинах Стохесса. Эрен с яростью атакует, кусает и разрывает Женского Титана. Анни повержена. Но в последний момент она заключает себя в кокон из кристаллической плоти — и засыпает в нём, недосягаемая для допроса. Первая шпионская арка завершена.",
  },
  {
    num: "Серия 22",
    title: "Перемены. Военная полиция контратакует",
    img: "https://i.ibb.co/gbr9kTwC/Fire-Shot-Webpage-Capture-164-Netflix.webp",
    src: "https://drive.google.com/file/d/1IwMC_9bjTkLzybLXNEy7HYRSi4qq2Heb/preview",
    desc: "Разрушения в Стохессе огромны. Правительство и Военная полиция пытаются замять произошедшее. Эрвин Смит под следствием. Внутри армии усиливается противостояние между Разведкорпусом и полицией. Эрен, Армин и Микаса обсуждают будущее — угроза предателей внутри не устранена.",
  },
  {
    num: "Серия 23",
    title: "Смерть другого рода. Тайны правительства",
    img: "https://i.ibb.co/bjZCpGbk/Mikasa-ready-to-battle-Annie-one-more-time.webp",
    src: "https://drive.google.com/file/d/1NfvI6XEZo33fxnH2sEt33NznyemsTUKS/preview",
    desc: "Хандзи Зоэ расследует странные смерти в рядах военной полиции. Появляется подозрение: кто-то внутри правительства уничтожает свидетелей. Эрен и Хистория Рэйсс сближаются. Леви продолжает охранять Эрена, понимая: игра стала куда сложнее, чем война с Титанами.",
  },
  {
    num: "Серия 24",
    title: "Знание. Лицо в стене",
    img: "https://i.ibb.co/Lz9d2944/vlcsnap-2013-09-23-13h51m13s44.png",
    src: "https://drive.google.com/file/d/13tF_YIL1S2tA0vUqYPclSi3xwWx2U5sP/preview",
    desc: "Преподобный Ник из Культа Стен наконец говорит Хандзи нечто важное — не напрямую, но достаточно: в стенах скрыто нечто живое. Армин в разрушенном секторе стены замечает огромное лицо Колоссального Титана, проступающее сквозь камень. Тайна природы стен начинает открываться.",
  },
  {
    num: "Серия 25",
    title: "Стены. Финал первого сезона",
    img: "https://i.ibb.co/Pvgfn1nc/can-we-talk-about-how-different-this-scene-from-episode-25-v0-F3g5-JCA2-Cs-HBF6r1ox9i-Ng-Ze-Gd6-Zm-Dspv.webp",
    src: "https://drive.google.com/file/d/1-hJGNCCELA-vlmcryukf8lBatRqYjq7j/preview",
    desc: "Заключительная серия первого сезона. Разведкорпус, понёсший огромные потери, продолжает борьбу. Правительство усиливает давление. В эпилоге — флэшбек о детстве Эрена и его мечте о свободе за стенами. За кадром остаётся главный вопрос: кто ещё из солдат — предатель? Второй сезон расставит всё на места.",
  },
];

export default function Season1({ navigate }) {
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

      {/* === PLAYER MODAL === */}
      {activeEp !== null && (
        <div className="ep-modal-overlay" onClick={() => setActiveEp(null)}>
          <div className="ep-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ep-modal-close" onClick={() => setActiveEp(null)}>✕</button>
            <div className="ep-modal-video">
              <iframe
                src={episodes[activeEp].src}
                title={episodes[activeEp].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
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
            <a onClick={() => navigate("series")}>Серии</a> › Сезон 1
          </p>
          <span className="ep-season-tag">Сезон 1 · 2013 · 25 серий · Wit Studio</span>
          <h1>Люди против Титанов</h1>
          <p className="ep-synopsis">
            Первый сезон знакомит нас с миром, где человечество укрылось за тремя гигантскими стенами, спасаясь от Титанов — огромных существ, пожирающих людей без видимой причины. В день, когда Колоссальный Титан пробивает ворота Шиганшины, юный Эрен Йегер клянётся уничтожить всех Титанов. Спустя годы он обнаруживает в себе способность превращаться в одного из них — и становится последней надеждой человечества.
          </p>
        </div>

        <div className="season-nav fade-in-up">
          <a className="active" onClick={() => navigate("season1")}>Сезон 1</a>
          <a onClick={() => navigate("season2")}>Сезон 2</a>
          <a onClick={() => navigate("season3")}>Сезон 3</a>
          <a onClick={() => navigate("season4")}>Сезон 4</a>
        </div>

        <div className="ep-cards-grid" style={{marginTop:"40px"}}>
          {episodes.map((ep, i) => (
            <div
              key={i}
              className="ep-card fade-in-up"
              onClick={() => setActiveEp(i)}
            >
              <div className="ep-card-thumb">
                <img
                  src={ep.img}
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/480x270/1a0808/c0392b?text=${encodeURIComponent(ep.num)}`; }}
                  alt={ep.title}
                />
                <div className="ep-card-hover">
                  <span className="ep-card-play">▶ Смотреть</span>
                </div>
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
          <a onClick={() => navigate("series")}>Все сезоны</a>
          <a className="active" onClick={() => navigate("season1")}>Сезон 1</a>
          <a onClick={() => navigate("season2")}>Сезон 2</a>
        </div>
      </div>

      <footer className="site-footer" style={{marginTop:"60px"}}>
        <div className="container">
          <p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama</p>
        </div>
      </footer>
    </>
  );
}