<template>
  <div class="container">
    <div class="p">
      {{ $route.params.city }}
      <div class="data">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima
        illum maiores. Fugiat repudiandae esse repellat facere! Maiores magni
        eius quod consequatur vitae impedit assumenda tenetur aspernatur
        delectus natus tempore veniam odio ex, laudantium aliquid odit
        praesentium atque nisi id fuga magnam reiciendis ipsam. Dolorem eaque
        iusto aperiam beatae fugit.
      </div>
    </div>
    <div class="about-school">
      О школе
      <div class="cards-container">
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <text_img_left :text="two" :img="'/img/naash.jpg'" :label="one" />
        <div class="hidden-text">{{ two }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import text_img_left from "@/components/text_img.vue";
export default {
  data() {
    return {
      one: `Несколько дней назад учащимся среднего и старшего звена нашей школы
        посчастливилось принять участие в занимательном проекте "ЭТНО-Хакатон" в
        рамках котороrowо ученики побывали в Нижегородской Авторской Академической
        Школе №186. Целью проекта стало изучение культурных традиций народов
        России.`,
      two: `Несколько дней назад учащимся среднего и старшего звена нашей школы
        посчастливилось принять участие в занимательном проекте "ЭТНО-Хакатон" в
        рамках которого ученики побывали в Нижегородской Авторской Академической
        Школе №186. Целью проекта стало изучение культурных традиций народов
        России.Несколько дней назад учащимся среднего и старшего звена нашей школы
        посчастливилось принять участие в занимательном проекте "ЭТНО-Хакатон" в
        рамках которого ученики побывали в Нижегородской Авторской Академической
        Школе №186. Целью проекта стало изучение культурных традиций народов
        России.Наша группа вооружилась всей необходимой фото- и видеотехникой и
        начала своё путешествие. В школе учеников встретили очень радушно и
        доброжелательно. Нас познакомили с внутренним устройством школы, провели
        увлекательную экскурсию, в ходе которой показали нам классы, в которых
        проходит образовательный процесс. Своими глазами мы увидели спортивный
        зал для занятий физкультурой, бассейн, в котором ученики школы №186
        осваивают плавание, а также участвуют в спортивных соревнованиях по
        данному виду спорта. Также нашей группе особенно запомнились кабинет
        информатики и библиотеки, оснащённые по последнему слову техники,
        предназначенной для освоения учениками учебной программы. Мы сравнивали
        классы нижегородской школы с классами нашей родной школы, отмечали
        интересные детали и беседовали о том, чтобы нам хотелось видеть в
        оснащении и устройстве классов в нашем учебном заведении. Атмосфера в
        школе в урочное время показалась нам очень мягкой и дружелюбной. Учителя
        вежливо относятся к ученикам и получают такое же отношение от детей в
        ответ. Они ведут своих подопечных к высокому уровню знаний
        целенаправленно и в то же время очень мягко и внимательно. Отдельное
        внимание мы уделили переменам. Во время перерывов между уроками в
        коридорах и классах царит настоящее веселье. Нами было отмечено, что в
        школе нет определённого дресс-кода и ученики одеты в свободную форму,
        что создаёт некоторое разнообразие в самовыражении учащихся. На
        переменах все сбрасывают напряжение, развлекаются и занимаются
        интересными делами, отдыхая от изучения различных важных дисциплин.
        После нашего путешествия мы обсуждали свои впечатления и пришли к
        выводу, что такая поездка была для нас очень полезна, так как мы
        посчитали, что такой опыт для нас крайне полезен. Некоторые ребята из
        нашей группы стали задумываться о том, чтобы в будущем стать учителями,
        многие предлагали свои идеи для усовершенствования школ на основе
        увиденного нами в школе №186 г. Нижний Новгород. Во время поездки мы
        много фиксировали на нашу технику и уверены, что проект получится
        замечательным. Наши ученики благодарят администрацию МАОУ "СОШ №61" г.
        Чебоксары и Нижегородской Авторской Академической Школы №186 за
        возможность участия в проекте "ЭТНО-Хакатон" и выражают надежду на
        дальнейшее сотрудничество в целях реализации разнообразных проектов для
        учеников.`,
    };
  },
  components: {
    text_img_left,
  },
};
</script>

<style lang="scss">
.about-school {
  .cards-container {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 20px;
  }
  .hidden-text {
    display: none;
  }

  text-align: left;
  font-family: "Roboto Slab", serif;
  font-size: 30px;
}

.container {
  .p {
    font-size: 40px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    margin-top: 10px;
    margin-bottom: 30px;
    .data {
      margin-top: 10px;
      font-size: 15px;
      font-family: "Roboto Slab", serif;
      text-align: left;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
