<template>
  <div class='school-main'>
    <section
        class="hero-banner"
        :style="{ backgroundImage: `url(${'/img/school_61.jpg'})` }"
    >
      <div class="text-center">
        <span class="hero-banner-icon">
          <img class="school-icon" src="/img/sosh61.png"/>
        </span>
        </div>
    </section>
    <div v-for="(theme, code) in schoolinfo" :key="(theme, code)">
      <div v-if="code % 2 == 0" class="school-container-1">
        <div v-for="(article, index) in theme" :key="(article, index)">
          <div v-if="index == 0">
            <h1 class='school-h1-pc'>
                {{ article[0] }}
            </h1>
            <h1 class='school-h1-mob'>
                ~{{ article[0] }}
            </h1>
          </div>
          <div v-else>
            <div class="school-container">
              {{ article[0] }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="school-container-2">
        <div v-for="(article, index) in theme" :key="(article, index)">
          <div v-if="index == 0">
            <h1 class='school-h1-pc'>
                {{ article[0] }}
            </h1>
            <h1 class='school-h1-mob'>
                ~{{ article[0] }}
            </h1>
          </div>
          <div v-else>
            <div class="school-container">
              {{ article[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schoolinfo: [
        [
          [
            'О нашей школе',
          ],
          [
            'Муниципальное автономное общеобразовательное учреждение «Средняя общеобразовательная школа №61» муниципального образования города Чебоксары – столицы Чувашской Республики (далее школа №61) является одной из лучших школ города. В настоящее время в 69 классах обучается 1929 учащихся.',
          ],
          [
            'Школа работает с 1992 года, в 2019 году введен в эксплуатацию еще один учебный корпус на 500 мест.',
          ],
          [
            'Главная цель школы – создание условий для формирования творческой саморазвивающейся личности, способной к успешной адаптации и самореализации в изменяющемся мире.',
          ],
          [
            'Структура и содержание деятельности школы позволяет каждому учащемуся осуществлять выбор в области обучения и во внеурочной деятельности в соответствии со своими интересами и возможностями, быть успешным в той или иной сфере школьной жизни.',
          ],
          [
            'В соответствии с современными требованиями к организации учебно-воспитательного процесса в школе имеется 6 компьютерных классов, интерактивные доски, столы, панели. В каждом учебном кабинете имеется АРМ учителя с выходом в Интернет. Педагогам и учащимся обеспечен бесплатный доступ в Интернет. Единая локальная сеть, включающая 360 компьютеров, 3 компьютерных мобильных класса. Спортивная база школы включает два бассейна, четыре спортивных зала, 2 стадиона и спортивные площадки.',
          ],
          [
            'Возможность выбора видов внеурочной деятельности по интересам способствуют успешной социализации обучающихся, формируют уверенность в себе и позитивное отношение к жизни.',
          ],
          [
            'Учебно-воспитательный процесс осуществляют 116 педагогических работников, 82% из них имеют первую и высшую квалификационную категории. Педагоги школы не раз становились победителями городского и финалистами республиканского конкурса профессионального мастерства «Учитель года». Восемь педагогов школы являются лауреатами премии Президента РФ в рамках национального проекта «Образование», пять педагогов удостоены премии Главы Чувашской Республики.',
          ],
          [
            'Многолетний опыт работы школы по программам развивающего обучения Д.Б. Эльконина-В.В. Давыдова позволил педагогическому коллективу освоить профессиональные компетенции, которые полностью соответствуют требованиям ФГОС и позволяют осуществлять качественное образование. Результаты ГИА и ЕГЭ стабильно выше городских, республиканских и российских. Школа более 16 лет является лидером среди общеобразовательных школ города по результатам муниципального и регионального этапов Всероссийской олимпиады школьников.',
          ],
          [
            'Спортсмены школы занимают призовые места в районных, городских, республиканских и российских соревнованиях по различным видам спорта. На базе спортивно-оздоровительного комплекса воспитаны 15 кандидатов в мастера спорта по плаванию и 8 мастеров спорта. Футбольная команда школы занимает призовые места в первенствах ПФО и России.',
          ]
        ],
        [
          [
            'Достижения нашей школы',
          ],
          [
            'С 2004 года школа участвует в международном проекте "Ассоциированные школы ЮНЕСКО".',
          ],
          [
            'В 2015 году мы стали партнерской школой НИУ "Высшая школа экономики".',
          ],
          [
            'Школа дважды вошла в топ-500 лучших школ России и является единственной общеобразовательной школой Чувашской Республики, вошедшей в число 500 лучших школ страны. В 2014, 2015, 2016 и 2017 годах школа была включена в национальный реестр РФ «Ведущие образовательные учреждения».',
          ],
          [
            "Победитель Всероссийского конкурса «100 ЛУЧШИХ ПРЕДПРИЯТИЙ И ОРГАНИЗАЦИЙ РОССИИ-2018» в номинации «ЛУЧШАЯ ШКОЛА РОССИИ».",
          ],
          [
            "Лауреат Всероссийского конкурса «ОБРАЗОВАТЕЛЬНАЯ ОРГАНИЗАЦИЯ XXI ВЕКА. ЛИГА ЛИДЕРОВ - 2018» в номинации «ЛИДЕР В ОБЛАСТИ ВНЕДРЕНИЯ ИННОВАЦИОННЫХ ТЕХНОЛОГИЙ»",
          ],
          [
            'Лауреат Всероссийского конкурса «ШКОЛА ЗДОРОВЬЯ – 2018».',
          ],
          [
            'Победитель республиканского конкурса образовательных организаций, внедряющих инновационные образовательные программы (Грант Главы Чувашской Республики в размере 200 тысяч).',
          ],
          [
            'Лауреат Всероссийского конкурса «500 лучших образовательных организаций страны – 2019» в номинации «Лучшая образовательная организация - 2019».',
          ],
          [
            'Победитель конкурсного отбора на предоставление гранта Минпросвещения России на реализацию проекта «Школьный образовательный цифроКУБ» в рамках федерального проекта "Кадры для цифровой экономики" национальной программы "Цифровая экономика".',
          ],
          [
            'Лауреат Всероссийского конкурса «Образовательная организация XXI века. Лига лидеров - 2019» в номинации «Лучшая инновационная общеобразовательная организация».',
          ],
          [
            'Лауреат конкурса «100 лучших школ России», 2019 г.',
          ],
          [
            'В 2020 году наша школа вошла в 10 лучших школ республики Чувашия по количеству выпускников, поступивших в ведущие вузы России (рейтинг RAEX: абсолютное количество выпускников школ, которые поступили в университеты из топ-50 рейтинга вузов России RAEX 2019 года).',
          ],
          [
            'В 2020 году школа получила благодарность от Российского совета олимпиад школьников, как школа, подготовившая значительное количество победителей и призеров олимпиад, входящих в Перечень Министерства науки и высшего образования Российской Федерации на 2019/20 учебный год.',
          ],
          [
            'Лауреат-победитель Всероссийского смотра-конкурса образовательных организаций «ШКОЛА ГОДА - 2021». Организаторы конкурса - редакционная коллегия издательского дома «ФЕДЕРАЛЬНЫЕ СМИ РФ» при содействии органов исполнительной власти, осуществляющих государственное управление в образовании (сроки проведения с 23 октября 2020 г. по 25 марта 2021 г.).',
          ],
          [
            'В 2021 г. согласно рейтингу, составленному RAEX, школа вошла в список 10 школ Чувашской Республики, готовящих абитуриентов для лучших вузов технического профиля.',
          ]
        ],
        [
          [
            'Этно-Хакатон',
          ],
          [
            'В апреле 2021 г. МАОУ "СОШ № 61" стала победителем федерального проекта "Патриотическое воспитание граждан РФ" в рамках нацпроекта "Образование" и по итогам конкурса получила грант в размере 10 млн.рублей.',
          ],
          [
            'Грант направлен на реализацию проекта Интерактивный парк «ЭТНО-Хакатон». В рамках данного проекта создан ресурсный центр, на базе которого участники проекта создан цифровой ресурс в сети Интернет в виде пяти туристических этнокомплектов, представляющих собой модули, которые раскрывают основные направления культуры, образования, народных традиций и этноязыковых особенностей пяти субъектов Российской Федерации: Чувашии, Татарстана, Марий Эл, Мордовии, Нижнего Новгорода.',
          ],
          [
            'После создания цифрового ресурса будет организована Всероссийская конференция-фестиваль «ЭТНО-Хакатошка». В организацию фестиваля будут вовлечены представители школ ЮНЕСКО указанных выше регионов Поволжья.',
          ],
          [
            'Участниками проекта в 2021 году стало более 1000 человек. Проект продолжается…',
          ],
        ],
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .hero-banner {
    position: relative;
    padding: 70px 0;
    background-size: cover;
    margin: 0 -15px 0 -15px;
    height: 75vh;
  }
  .text-center {
    text-align: center !important;
    font-family: "Roboto", sans-serif;
  }
  .school-main {
    margin-left: -15px;
    margin-right: -15px;
  }
  .school-container {
    position: relative;
    color: black;
    font-family: "Oswald", sans-serif;
    font-size: 22px;
    line-height: 26px;
    text-indent: 30px;
    text-align: left;
    padding-bottom: 10px;
  }
  .school-h1-pc {
    font-size: 35px;
    font-family: fantasy;
    margin-bottom: 20px;
    margin-top: 0px;
  }
  .school-h1-mob {
    display: none;
    margin: 0;
  }
  .school-container-1 {
    background-color: #ffd49a;
    padding-bottom: 20px;

  }
  .school-container-2 {
    background-color: rgb(255 229 198);
    padding-bottom: 20px;
  }
}
@media screen and (max-width: 768px) {
  .school-icon {
    width: 50vw;
  }
  .text-center {
    text-align: center !important;
    font-family: "Roboto", sans-serif;
  }
   .hero-banner {
    position: relative;
    padding: 70px 0;
    background-size: cover;
    margin: 0 -15px 0 -15px;
    padding-bottom: 45vh;
  }
  .school-main {
    margin-left: 1vw;
  }
  .school-container {
    position: relative;
    color: black;
    line-height: 26px;
    text-align: left;
    font-size: 20px;
    padding: 20 0 0 0px;
  }
  .school-h1-mob {
    font-size: 40px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    text-transform: capitalize;
    text-align: left;
    margin-bottom: 20px;
  }
  .school-h1-pc {
    display: none;
    margin: 0;
  }
}
</style>
