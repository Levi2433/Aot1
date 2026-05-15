import { useState, useEffect } from "react";
import { useFadeIn } from "../../hooks/useAnimations";


const episodes = [
  {
    num: "Серия 01",
    title: "К тебе, спустя две тысячи лет: Падение Шиганшины, часть 1",
    img: "https://i.ibb.co/cXyppXh7/lvkk8zmqfsr61.jpg",
    src: "https://kinescope.io/embed/8Z1mT4ZcaptLhfRXn4v8LB",
    desc: "Мирная жизнь в Шиганшине обрывается в одночасье: за горизонтом стены появляется исполинская фигура Колоссального Титана. Один удар ноги — и ворота разрушены. Толпы Чистых Титанов врываются в город. Маленький Эрен становится очевидцем гибели матери и клянётся уничтожить всех Титанов до единого.",
  },
  {
    num: "Серия 02",
    title: "Тот самый день: Падение Шиганшины, часть 2",
    img: "https://i.ibb.co/vxF5HVRx/MV5-BODE2-Nj-U2-ODMt-Y2-Vh-My00-Zjk0-LTg4-Nj-It-NTJh-ZTFl-Zm-Rm-Zm-E1-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    src: "https://kinescope.io/embed/pCEWaNo33wY5nNbaYtdXeA",
    desc: "После разрушения ворот Шиганшины толпы Титанов хлынули в город. Бронированный Титан пробивает внутренние ворота, делая стену Мария непригодной для жизни. Эрен, Микаса и Армин эвакуируются на корабле и отправляются в лагерь беженцев, где сталкиваются с голодом и суровостью новой жизни.",
  },
  {
    num: "Серия 03",
    title: "Тусклый свет в пучине отчаяния: Возвращение человечества, часть 1",
    img: "https://i.ibb.co/cc49qynC/attack-on-titan-s1-e3-3.webp",
    src: "https://kinescope.io/8Pqp5ge1nfXecHr6iqpiw8",
    desc: "Прошло два года. Эрен и его друзья вступают в 104-й кадетский корпус. Инструктор Кит Шадис подвергает новичков суровым испытаниям. Эрен сталкивается с трудностями при освоении Устройства Пространственного Маневрирования (УПМ), но благодаря упорству проходит тест, несмотря на неисправное снаряжение.",
  },
  {
    num: "Серия 04",
    title: "Ночь выпуска: Возвращение человечества, часть 2",
    img: "https://i.ibb.co/prBt9vJp/Cadets-during-Titan-combat-training.webp",
    src: "https://kinescope.io/kK3G8xEbz4pn5UKdUpNFBP",
    desc: "Кадеты завершают трехлетнее обучение. Формируется десятка лучших выпускников. Эрен спорит с Жаном о вступлении в Разведкорпус. Однако празднование окончания учебы прерывается: спустя пять лет Колоссальный Титан внезапно появляется прямо перед воротами Троста.",
  },
  {
    num: "Серия 05",
    title: "Первое сражение: Оборона Троста, часть 1",
    img: "https://i.ibb.co/qF9TgqRs/Eren-inside-the-Titan-s-mouth.webp",
    src: "https://kinescope.io/dYAkLUbUqFw6HS1dBw58uH",
    desc: "Колоссальный Титан пробивает ворота, и кадеты вступают в свой первый бой. Отряд Эрена почти полностью уничтожен в первые минуты. Спасая Армина из пасти титана, Эрен сам оказывается проглоченным. Надежда кажется потерянной, а человечество — на грани гибели.",
  },
  {
    num: "Серия 06",
    title: "Мир в глазах девочки: Оборона Троста, часть 2",
    img: "https://i.ibb.co/zWwqPW1P/Ep-6-2.jpg",
    src: "https://drive.google.com/file/d/1dYCMK-ovPUmRR0AtIkqafI8zU6FcG46H/preview",
    desc: "Армин находится в шоке после гибели друзей. Микаса защищает мирных жителей от титана в узком проулке. Мы видим флешбэк об их детстве: как Эрен спас Микасу от похитителей и как она получила свой красный шарф, ставший символом их связи.",
  },
  {
    num: "Серия 07",
    title: "Крошечный клинок: Оборона Троста, часть 3",
    img: "https://i.ibb.co/fGGTMMC5/Mikasa-recalls-the-moment.webp",
    src: "https://drive.google.com/file/d/1TuUxC2ipUwYGwDeLitTUF1Y9J06Rdy0J/preview",
    desc: "Газ в УПМ кадетов на исходе, они заперты в городе. Узнав о «смерти» Эрена, Микаса теряет волю к жизни, но инстинкт выживания берет верх. Внезапно появляется загадочный титан, который не ест людей, а яростно атакует других титанов.",
  },
  {
    num: "Серия 08",
    title: "Слышу биение сердца: Оборона Троста, часть 4",
    img: "https://i.ibb.co/pBHddp82/Ep8.webp",
    src: "https://drive.google.com/file/d/1_ZDSWW8bCPDWSHwLR8P7eJhRjf-9c5Rq/preview",
    desc: "Армин предлагает использовать таинственного титана, чтобы пробиться к штабу снабжения. План удается: кадеты пополняют запасы газа. Когда загадочный титан падает от истощения, из его шеи на глазах у потрясенных друзей выходит живой и невредимый Эрен.",
  },
  {
    num: "Серия 09",
    title: "Где его левая рука?: Оборона Троста, часть 5",
    img: "https://i.ibb.co/93CYtBh7/Eren-protects-Armin-and-Mikasa.webp",
    src: "https://drive.google.com/file/d/1ydq34MWf7NyuTZs-85GOaPSFc4bDmqYY/preview",
    desc: "Эрен приходит в себя, окруженный испуганными солдатами гарнизона, готовыми его расстрелять. Он не понимает, что произошло. Под угрозой пушечного выстрела Эрен частично трансформируется, чтобы защитить Микасу и Армина, создавая скелет титана.",
  },
  {
    num: "Серия 10",
    title: "Ответ: Оборона Троста, часть 6",
    img: "https://i.ibb.co/DPfNBT2f/episode-image-400x225.webp",
    src: "https://drive.google.com/file/d/1KMiBFw4AZ76N96GMB5H7CLOtW_iM07zX/preview",
    desc: "Армин пытается убедить солдат, что сила Эрена может быть полезна. Ситуацию спасает вмешательство командора Дот Пиксиса. Он решает выслушать план Армина: использовать Эрена в форме титана, чтобы поднять огромный валун и закрыть брешь в стене.",
  },
  {
    num: "Серия 11",
    title: "Идол: Оборона Троста, часть 7",
    img: "https://i.ibb.co/zVNtSb5G/Titan-Eren-attacks-Mikasa.webp",
    src: "https://drive.google.com/file/d/1Y4OqvdMjFekW0n12pTZvL8eUe5_fh3sk/preview",
    desc: "Начинается операция по возвращению Троста. Однако после трансформации Эрен теряет контроль над собой и пытается раздавить Микасу. Пока Эрен находится в трансе, солдаты гарнизона жертвуют собой, отвлекая титанов от него.",
  },
  {
    num: "Серия 12",
    title: "Рана: Оборона Троста, часть 8",
    img: "https://i.ibb.co/nMmwc3vs/attack-on-titan-s1-e12-6.png",
    src: "https://drive.google.com/file/d/1wobnuEKzI1tl8cAxcZ4bxCKJJZhv0U-c/preview",
    desc: "Армин пытается пробудить сознание Эрена, вонзая клинок в шею титана и взывая к его мечте увидеть внешний мир. Эрен вспоминает свою клятву. Тем временем элитный отряд Рико и Яна несет тяжелые потери, ожидая, когда Эрен придет в себя.",
  },
  {
    num: "Серия 13",
    title: "Первобытное желание: Оборона Троста, часть 9",
    img: "https://i.ibb.co/QFN8K2DQ/Eren-carries-the-boulder.webp",
    src: "https://drive.google.com/file/d/1F95yLQfqWRwwOazffcs0cKeGqXDy0J4F/preview",
    desc: "Эрен берет валун на плечи. Под защитой своих товарищей он доходит до ворот и закрывает пробоину. Это первая победа человечества над титанами. Появляется Разведкорпус во главе с Эрвином и Леви, зачищая остатки врагов. Эрена забирают под стражу.",
  },
  {
    num: "Серия 14",
    title: "Не могу смотреть ему в глаза: Подготовка к контрнаступлению, часть 1",
    img: "https://i.ibb.co/sdQDLw4p/MV5-BZj-Rl-Yzc0-ZTEt-Mz-Mw-Ni00-NTZi-LThk-Ym-Qt-Mm-E0-NTJh-NDA3-Yz-Jk-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    src: "https://drive.google.com/file/d/1eFJ6fbazuJgtx6N5CXJPX-w_chLt-FcA/preview",
    desc: "Судьба Эрена решается на военном трибунале. Военная полиция хочет его вскрыть, а Разведкорпус — использовать. Чтобы доказать, что Эрена можно контролировать, Леви жестоко избивает его на глазах у суда. В итоге Эрена передают под надзор отряда Леви.",
  },
  {
    num: "Серия 15",
    title: "Отряд специальных операций: Подготовка к контрнаступлению, часть 2",
    img: "https://i.ibb.co/tPxCgK1Y/vlcsnap-2013-07-22-15h18m45s29.png",
    src: "https://drive.google.com/file/d/1oqq_FR0BgkOC97NLYFmH4WtMHBBpfTfF/preview",
    desc: "Эрена перевозят в старый штаб Разведкорпуса. Он знакомится с элитным отрядом Леви. Ханджи Зоэ рассказывает Эрену о своих безумных экспериментах над захваченными титанами — Сони и Бином. Однако ночью кто-то убивает подопытных титанов, используя УПМ.",
  },
  {
    num: "Серия 16",
    title: "Что нужно сделать сейчас: Подготовка к контрнаступлению, часть 3",
    img: "https://i.ibb.co/s9mYczKn/tumblr-mqmjnvyhqv1qkeih7o4-500.png",
    src: "https://drive.google.com/file/d/15NdbjeIFTanASchzLW8czhB_7oZa9jta/preview",
    desc: "Кадеты должны выбрать свой путь. Жан, потрясенный смертью Марко, решает вступить в Разведкорпус. Большинство друзей Эрена следуют его примеру. Эрвин Смит проводит загадочный опрос новобранцев, пытаясь выявить тех, кто готов идти до конца.",
  },
  {
    num: "Серия 17",
    title: "Женская особь: 57-я экспедиция за стены, часть 1",
    img: "https://i.ibb.co/TxhjXJjZ/armin-encounters-the-female-titan.webp",
    src: "https://drive.google.com/file/d/1z9VPBSmg70njfab9LGUNDFIen7NIs4tL/preview",
    desc: "Разведкорпус отправляется в 57-ю экспедицию. Внезапно появляется Женская особь — разумный титан, обладающий невероятной скоростью и интеллектом. Она уничтожает правый фланг и находит Армина, но почему-то оставляет его в живых.",
  },
  {
    num: "Серия 18",
    title: "Лес гигантских деревьев: 57-я экспедиция за стены, часть 2",
    img: "https://i.ibb.co/rGZJNVTf/attack-on-titan-s1-e18-3.webp",
    src: "https://drive.google.com/file/d/1pv0wewd-G4KMNg__5rNPVxMGnoNdbNSQ/preview",
    desc: "Эрвин направляет строй в Лес гигантских деревьев. Новобранцы не понимают цели маневра. Женская особь преследует отряд Леви. Эрен хочет трансформироваться, чтобы спасти товарищей, но Леви приказывает ему доверять команде и скакать дальше.",
  },
  {
    num: "Серия 19",
    title: "Укус: 57-я экспедиция за стены, часть 3",
    img: "https://i.ibb.co/mrjT0ZGH/Scouts-engage-the-Female-Titan.webp",
    src: "https://drive.google.com/file/d/1UcwiLFd9iiGEX-pDJIGWgCJ_sVpnBDsv/preview",
    desc: "Мы видим воспоминание о том, как Эрен случайно частично превратился, пытаясь поднять ложку. В лесу план Эрвина срабатывает: Женскую особь ловят в засаду с помощью секретного оружия. Она обездвижена, но Леви и Микэ не могут заставить человека внутри показаться.",
  },
  {
    num: "Серия 20",
    title: "Эрвин Смит: 57-я экспедиция за стены, часть 4",
    img: "https://i.ibb.co/JR33FsbT/vlcsnap-2013-08-26-17h51m02s157.png",
    src: "https://drive.google.com/file/d/1NpmsCF3LIVlW-VuUAEyV08_aIht9K0S-/preview",
    desc: "Женская особь издает оглушительный крик, призывая всех ближайших титанов. Они набрасываются на неё и начинают пожирать, позволяя человеку внутри сбежать под покровом пара. Эрвин понимает, что враг надел форму разведчика и затерялся среди них.",
  },
  {
    num: "Серия 21",
    title: "Сокрушительный удар: 57-я экспедиция за стены, часть 5",
    img: "https://i.ibb.co/hq9qSK4/attack-on-titan-s1-e21-5.png",
    src: "https://drive.google.com/file/d/15UaZBDpU1nXk6sl5uVXTi0CydpaKkWea/preview?",
    desc: "Неизвестный в форме разведчика убивает Гюнтера. Женская особь снова трансформируется и уничтожает весь элитный отряд Леви. Обезумевший от горя Эрен превращается в титана и вступает в жестокую схватку, но проигрывает и оказывается похищенным.",
  },
  {
    num: "Серия 22",
    title: "Побеждённые: 57-я экспедиция за стены, часть 6",
    img: "https://i.ibb.co/gbr9kTwC/Fire-Shot-Webpage-Capture-164-Netflix.webp",
    src: "https://drive.google.com/file/d/1IwMC_9bjTkLzybLXNEy7HYRSi4qq2Heb/preview",
    desc: "Микаса и Леви объединяются, чтобы вернуть Эрена. Леви демонстрирует невероятную скорость, калеча Женскую особь и вырезая Эрена из её пасти. Разведкорпус возвращается в город с позором: экспедиция провалена, а народ требует роспуска корпуса.",
  },
  {
    num: "Серия 23",
    title: "Улыбка: Облава в Стохесе, часть 1",
    img: "https://i.ibb.co/bjZCpGbk/Mikasa-ready-to-battle-Annie-one-more-time.webp",
    src: "https://drive.google.com/file/d/1NfvI6XEZo33fxnH2sEt33NznyemsTUKS/preview",
    desc: "Энни Леонхарт из Военной полиции встречает Армина, который просит её помочь Эрену сбежать. В Стохесе они заманивают её в ловушку у входа в подземный ход. Энни понимает, что её раскрыли, и с леденящей кровь улыбкой трансформируется прямо в центре города.",
  },
  {
    num: "Серия 24",
    title: "Милосердие: Облава в Стохесе, часть 2",
    img: "https://i.ibb.co/Lz9d2944/vlcsnap-2013-09-23-13h51m13s44.png",
    src: "https://drive.google.com/file/d/13tF_YIL1S2tA0vUqYPclSi3xwWx2U5sP/preview",
    desc: "Эрен заперт под завалами и не может превратиться из-за своих чувств к Энни. Микаса и Армин пытаются вразумить его. Наконец, вспомнив о своей цели, Эрен трансформируется. Начинается разрушительная битва двух титанов посреди жилых кварталов.",
  },
  {
    num: "Серия 25",
    title: "Стена: Облава в Стохесе, часть 3",
    img: "https://i.ibb.co/Pvgfn1nc/can-we-talk-about-how-different-this-scene-from-episode-25-v0-F3g5-JCA2-Cs-HBF6r1ox9i-Ng-Ze-Gd6-Zm-Dspv.webp",
    src: "https://drive.google.com/file/d/1-hJGNCCELA-vlmcryukf8lBatRqYjq7j/preview",
    desc: "Эрен в ярости почти побеждает Энни. Пытаясь сбежать, она карабкается по стене Сина, но Микаса отрубает ей пальцы. Прежде чем её схватят, Энни заключает себя в неразрушимый кристалл. В финальной сцене отвалившийся кусок стены обнажает лицо титана, спящего внутри неё.",
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
            <div  className="ep-modal-video">
              <iframe
                src={episodes[activeEp].src}
                title={episodes[activeEp].title}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" frameborder="0" allowfullscreen
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