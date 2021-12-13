<template>
  <div class="defilee__outer">
    <section id="defilee" class="defilee__ctnr">
      <div class="defilee__div defilee__div--text">
        <h2>
          <a
            href="https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/"
            style="text-decoration: none"
          >
            <img src="/img/nac_project.png" alt="Avatar for user 3" />
          </a>
        </h2>
      </div>
      <div class="defilee__div defilee__div--special2">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 1" />
        <p>Hi, I'm Lora!</p>
      </div>
      <div class="defilee__div defilee__div--special">
        aoQ4DYZLE_E
        <img src="/img/БЛИН.jpg" alt="Avatar for user 2" />
        <p>Hello, I'm Steve.</p>
      </div>
      <div class="defilee__div defilee__div--special1 first">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 3" />
        <p>I'm the boss.</p>
      </div>
      <div class="defilee__div defilee__div--special3">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 4" />
        <p>One word - Warrior.</p>
      </div>
      <div class="defilee__div defilee__div--special4">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 5" />
        <p>Brave & Humble</p>
      </div>
      <div class="defilee__div defilee__div--special1">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 6" />
        <p>Girl in Love</p>
      </div>
      <div class="defilee__div">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 7" />
        <p>The Friendliest One</p>
      </div>
      <div class="defilee__div defilee__div--text">
        <h2>
          <a
            href="https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/"
            style="text-decoration: none"
          >
            <img src="/img/nac_project.png" alt="Avatar for user 3" />
          </a>
        </h2>
      </div>
      <div class="defilee__div defilee__div--special3">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 8" />
        <p>Christina.</p>
      </div>
      <div class="defilee__div defilee__div--special1">
        <img src="/img/БЛИН.jpg" alt="Avatar for user 9" />
        <p>George</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    //Forked by https://codepen.io/pehaa/pen/abvyeBo
    class Defilee {
      constructor(element) {
        if (!element) {
          return;
        }
        this.element = element;
        this._name = "defilee";
        this._itemSelector = "." + this._itemClass;
      }
      init() {
        this.addLoop();
      }
      addLoop() {
        const parent = this.element;
        Array.prototype.slice
          .call(this.element.children)
          .reverse()
          .forEach((el) => {
            const clone = el.cloneNode(true);
            clone.classList.add("clone");
            parent.insertBefore(clone, parent.firstChild);
          });
      }
    }

    const defilee = new Defilee(document.getElementById("defilee"));
    defilee.init();
  },
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
  border-bottom: 0.75vw solid;
}
p {
  margin: 0;
  text-align: center;
  font-size: calc(0.5rem + 0.5vw);
}
h1 {
  margin: 0;
  font-size: calc(7vw + 20px);
  position: absolute;
  left: 5%;
  bottom: 5%;
  color: rgb(90, 211, 233);
}

h2 {
  font-size: 6vw;
  color: rgb(81, 247, 247);
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.defilee__main {
  position: relative;
  margin: 0 auto;
}
.defilee__outer {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  perspective: 0.5px;
  transform-style: preserve-3d;
  overflow: hidden;
}

.defilee__ctnr {
  transform-style: preserve-3d;
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
}

.defilee__div {
  position: relative;
  transform: translateZ(-0.1px) scale(1.4) translateX(30px) translateY(5vh);
}
.defilee__div:not(.defilee__div--text) {
  width: 25vw;
  margin: 0 5vw;
  background: white;
  padding: 0.75vw;
  border-radius: 4px;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 1);
}
.defilee__div--text {
  a {
    border-bottom: none;
  }
  margin: 0 0 0 10vw;
  width: 400px;
  transform: translateZ(-0.25px) scale(1.4) translateX(60px) translateY(-5vh);
  animation: zoom infinite 1s;
}

.defilee__div--special {
  transform: translateZ(-0.2px) scale(1.4) translateX(30px) translateY(20vh);
}
.defilee__div--special1 {
  transform: translateZ(-0.25px) scale(1.4) translateX(-0.3vw) translateY(0);
}

.defilee__div--special2 {
  transform: translateZ(-0.3px) scale(1.5) translateX(-0.5vw) translateY(-5vh);
}
.defilee__div--special3 {
  transform: translateZ(-0.5px) scale(1.5) translateX(-30px) translateY(-30vh);
}
.defilee__div--special4 {
  transform: translateZ(-0.65px) scale(3) translateX(30px) translateY(-10vh);
}
.defilee__ctnr {
  transform: translate3d(-10%, 0, 0);
  will-change: transform;
  animation: slide 25s 0.7s linear infinite;
}
@keyframes slide {
  100% {
    transform: translate3d(-60%, 0, 0);
  }
}
.defilee__div--special1.first {
  animation: vertical infinite 5s -2s;
}
@keyframes vertical {
  50% {
    transform: translateZ(-0.25px) scale(1.6) translateX(-0.3vw)
      translateY(-5vh);
  }
}

@keyframes zoom {
  50% {
    transform: translateZ(-0.25px) scale(1.5) translateX(60px) translateY(-5vh);
  }
}

img {
  width: 100%;
  margin-bottom: 0.75vw;
  filter: sepia(100%) hue-rotate(180deg);
}
div:nth-child(3n + 1) > img {
  filter: sepia(100%) hue-rotate(-83deg);
}
</style>
