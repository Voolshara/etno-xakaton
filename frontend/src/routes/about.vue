<template>
  <div>
    <div class="about_head">Что такое Этно-Хакатон?</div>
    <div class="main-text">
      <span class="red-text"> Интерактивный парк «ЭТНО-хакатон»</span> - это
      проект, в рамках которого формируется ресурсный центр, на базе которого
      обучающиеся школы — участники проекта создали пять интернет-модулей —
      туристических комплектов, раскрывающих основные направления культуры,
      образования, народных традиций и этноязыковых особенностей пяти субъектов
      Российской Федерации:
      <router-link :to="`/city/Йошкар-Ола`" style="text-decoration: none"
        ><span class="city-text">Марий Эл</span></router-link
      >,
      <router-link :to="`/city/Саранск`" style="text-decoration: none"
        ><span class="city-text">Мордовии</span></router-link
      >,
      <router-link :to="`/city/nizhny`" style="text-decoration: none"
        ><span class="city-text">Нижегородской области</span></router-link
      >,
      <router-link :to="`/city/kazan`" style="text-decoration: none"
        ><span class="city-text">Татарстана</span></router-link
      >
      и
      <router-link :to="`/city/cheboksary`" style="text-decoration: none"
        ><span class="city-text">Чувашии</span></router-link
      >. Вся информация — на основе живого знакомства и личных открытий
      школьников в ходе поездок по регионам.
    </div>
    <div class="about_head">Реализация</div>
    <div class="main-text">
      <span class="red-text">МАОУ «СОШ № 61»</span> города
      <router-link :to="`/city/cheboksary`" style="text-decoration: none"
        ><span class="city-text">Чебоксары</span></router-link
      >
      в 2021 году стало победителем федерального проекта «Патриотическое
      воспитание граждан Российской Федерации» в рамках национального проекта
      «Образование» и по итогам конкурса получило грант на реализацию проекта
      Интерактивный парк «ЭТНО-хакатон».
    </div>
    <div class="main-text">
      Предварительно участники проекта обучались основам журналистики: писать
      статьи в различных жанрах, правильно фотографировать и создавать
      видеофильмы. В ходе занятий активно развивались коммуникативные и
      организационные компетенции, ведь в рабочей группе оказались ребята разных
      классов, также и педагоги. Нужно было договариваться о взаимодействии,
      распределять обязанности между собой, чтобы вклад каждого в общую работу
      был посильным и максимально эффективным.
    </div>
    <div class="about_head" style="margin: 100px 0 30px 0">Наша команда</div>
    <div>
      <h2>Кураторы</h2>
      <swiper
        :slides-per-view="count_per_view"
        :space-between="10"
        class="swiper"
      >
        <swiper-slide v-for="element in members['curator']" :key="element"
          ><div class="one_member">
            <div
              style="
                background-color: rgb(244 244 244);
                margin: 0 auto;
                width: fit-content;
              "
            >
              <img :src="element[0]" class="img" />
              <div style="bottom: 0">
                <div class="member_name">{{ element[1] }}</div>
                <div class="member_role" style="color: red">
                  {{ element[2] }}
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
    <div>
      <h2>Программисты</h2>
      <swiper
        :slides-per-view="count_per_view"
        :space-between="10"
        class="swiper"
      >
        <swiper-slide v-for="element in members['prog']" :key="element"
          ><div class="one_member">
            <div
              style="
                background-color: rgb(244 244 244);
                margin: 0 auto;
                width: fit-content;
              "
            >
              <img :src="element[0]" class="img" />
              <div style="bottom: 0">
                <div class="member_name">{{ element[1] }}</div>
                <div class="member_role">{{ element[2] }}</div>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
    <div>
      <h2>Копирайтеры и СММ</h2>
      <swiper
        :slides-per-view="count_per_view"
        :space-between="10"
        class="swiper"
      >
        <swiper-slide v-for="element in members['gym']" :key="element"
          ><div class="one_member">
            <div
              style="
                background-color: rgb(244 244 244);
                margin: 0 auto;
                width: fit-content;
              "
            >
              <img :src="element[0]" class="img" />
              <div style="bottom: 0">
                <div class="member_name">{{ element[1] }}</div>
                <div class="member_role">{{ element[2] }}</div>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      members: {
        prog: [
          ["/img/members/staaaas.jpg", "Тунгулов Станислав", "Team Leader"],
          ["/img/members/maxim.jpg", "Паденев Максим", "Frontend developer"],
          ["/img/members/misha.jpg", "Кадилов Михаил", "Frontend developer"],
          [
            "/img/members/andrey.jpg",
            "Торгашинов Андрей",
            "Frontend developer",
          ],
          ["/img/members/d0nil.jpg", "Карпов Даниил", "Data engineer"],
          ["/img/members/liza.jpg", "Герасимова Елизавета", "Data engineer"],
          ["/img/members/timofey.jpg", "Алексеев Тимофей", "Data engineer"],
          ["/img/members/katya.jpg", "Белова Екатерина", "Data engineer"],
        ],
        curator: [
          [
            "/img/members/mary.jpg",
            "Прокопьева Мария Владимировна",
            "Куратор программистов",
          ],
          [
            "/img/members/gym/ВикторовнаСветлана.jpg",
            "Андреева Светлана Викторовна",
            "Куратор журналистов",
          ],
        ],
        gym: [
          [
            "/img/members/gym/АлексееваАрина.jpg",
            " Алексеева Арина",
            "Журналист",
          ],
          ["/img/members/gym/АндрееваЮлия.jpg", "Андреева Юлия", "Журналист"],
          [
            "/img/members/gym/АфанасьеваДарья.jpg",
            "Афанасьева Дарья",
            "Журналист",
          ],
          [
            "/img/members/gym/ГолубеваВалерия.jpg",
            "Голубева Валерия",
            "Журналист",
          ],
          ["/img/members/gym/ГригоркинаПолина.jpg", "Григоркина Полина", ""],
          ["/img/members/gym/ИгнатьевАртём.jpg", "Игнатьев Артём", ""],
          ["/img/members/gym/КиргизоваЮлия.jpg", "Киргизова Юлия", "Журналист"],
          ["/img/members/gym/КолесоваЯна.jpg", "Колесова Яна", "Журналист"],
          [
            "/img/members/gym/МихайловаАлиса.jpg",
            "Михайлова Алиса",
            "Фотограф",
          ],
          [
            "/img/members/gym/МолодцоваАрина.jpg",
            "Молодцова Арина",
            "Фотограф",
          ],
          ["/img/members/gym/МурзинаЖанна.jpg", "Мурзина Диана", ""],
          ["/img/members/gym/НикитинаДарья.jpg", "Никитина Дарья", "Фотограф"],
          [
            "/img/members/gym/НиколаеваВалентина.jpg",
            "Николаева Валентина",
            "",
          ],
          ["/img/members/gym/ПавловРоман.jpg", "Павлов Роман", "Журналист"],
          [
            "/img/members/gym/СеменоваАнастасия.jpg",
            "Семенова Анастасия",
            "Фотограф",
          ],
          [
            "/img/members/gym/ТитарчукВалерий.jpg",
            "Титарчук Валерий",
            "Видеомонтажёр",
          ],
          ["/img/members/gym/ХадиеваСофия.jpg", "Хадиева София", "Фотограф"],
          ["/img/members/gym/ШароваКарина.jpg", "Шарова Карина", "Журналист"],
        ],
      },
    };
  },
  beforeMount() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.count_per_view = 1.4;
    } else {
      this.count_per_view = 4;
    }
  },
};
</script>

<style>
.main-text {
  font-size: 3vh;
  margin-bottom: 10px;
}
h2 {
  font-size: 40px;
  font-family: "Oswald";
}
.red-text {
  color: red;
  font-family: cursive;
}
.city-text {
  color: blue;
  -webkit-text-stroke-width: medium;
  text-decoration: none;
  font-size: 2.5vh;
}

.about_head {
  font-size: 60px;
  margin: 50px 0 100px 0;
  font-family: fantasy;
  color: #0071db;
}
.about_head::first-letter {
  color: red;
}
.members {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  position: relative;
}
.member_name {
  font-size: 35px;
  /**
             * Для эксплорера
             */
  -ms-user-select: none;

  /**
             * Для мозилы
             */
  -moz-user-select: none;

  /**
             * Для конкверора
             */
  -khtml-user-select: none;

  /**
             * Для Сафари и Хрома
             */
  -webkit-user-select: none;
  -user-select: none;
}
.one_member {
  font-size: 30px;
  position: relative;
  height: 500px;
}
.one_member img {
  font-size: 30px;
  position: relative;
  height: 300px;
  width: 100%;
}
.member_role {
  font-size: 20px;
  color: blue;
  /**
             * Для эксплорера
             */
  -ms-user-select: none;

  /**
             * Для мозилы
             */
  -moz-user-select: none;

  /**
             * Для конкверора
             */
  -khtml-user-select: none;

  /**
             * Для Сафари и Хрома
             */
  -webkit-user-select: none;
  -user-select: none;
}
</style>
