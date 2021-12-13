<template>
  <div class="map-wrapper">
    <div class="text">~ Нашe Путешествие</div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import { loadYmap } from "vue-yandex-maps";
export default {
  name: "Map",
  props: {
    data: Array,
  },
  async mounted() {
    var data_map = this.data;
    await loadYmap({
      apiKey: "49ba2530-8257-44cb-b1cb-a19fb39e046c",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1",
      debug: true,
    });
    ymaps.ready(init);
    function init() {
      var multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: data_map,
          params: {
            routingMode: "pedestrian",
          },
        },
        {
          boundsAutoApply: true,
        }
      );

      // Создаем карту с добавленной на нее кнопкой.
      var myMap = new ymaps.Map("map", {
        center: [55.739625, 37.5412],
        zoom: 12,
      });

      // Добавляем мультимаршрут на карту.
      myMap.geoObjects.add(multiRoute);
    }
  },
};
</script>

<style lang="scss">
.map-wrapper {
  background-color: #faf7f5;
  margin: 0 -15px 0 -15px;

  .text {
    padding-bottom: 20px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    text-align: left;
    font-size: 40px;
    margin-left: 6vw;
  }
  .map {
    width: 100vw;
    height: 500px;
  }
}
</style>
