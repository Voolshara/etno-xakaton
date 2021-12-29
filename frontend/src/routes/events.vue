<template>
  <div class="school-main">
    <section
      class="hero-banner"
      :style="{ backgroundImage: `url(${'/img/news.jpg'})` }"
    ></section>
    <div style="margin: 10px 0 40px 0">
      <h1>Конкурс "Многоликая Россия"</h1>
      <iframe
        width="100%"
        height="520px"
        src="https://www.youtube-nocookie.com/embed/XHmtmiLL3FQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div style="margin: 10px 0 40px 0">
      <h1>Поездка в Этнокомплекс "Ясна"</h1>
      <iframe
        width="100%"
        height="520px"
        src="https://www.youtube-nocookie.com/embed/1B__IqRY7UI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div style="margin: 10px 0 40px 0">
      <h1>Фестиваль</h1>
      <iframe
        width="100%"
        height="520px"
        src="https://www.youtube-nocookie.com/embed/YG12X79HjEo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script></script>

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
