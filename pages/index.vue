<template>
  <div class="wrapper">
    <section>
      <div class="hero container">
        <div class="hero--info">
          <h2>3D game Dev</h2>
          <h1>Work that we produce for our clients</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button type="button" class="btn">Get more details</button>
        </div>
        <img src="/static/images/joystick.svg" alt="Джойстик" />
      </div>
    </section>

    <section>
      <div class="container trending">
        <a href="#" class="see-all">SEE ALL</a>
        <h3>Currently Trending Games</h3>

        <div class="games">
          <div class="block">
            <img src="/static/images/game1.png" alt="Игра 1" />
            <span
              ><img src="/static/images/fire.svg" alt="Популярное" />40
              Followers</span
            >
          </div>
          <div class="block">
            <img src="/static/images/game2.png" alt="Игра 2" />
            <span
              ><img src="/static/images/fire.svg" alt="Популярное" />40
              Followers</span
            >
          </div>
          <div class="block">
            <img src="/static/images/game3.png" alt="Игра 3" />
            <span
              ><img src="/static/images/fire.svg" alt="Популярное" />40
              Followers</span
            >
          </div>
          <div class="block">
            <img src="/static/images/game4.png" alt="Игра 4" />
            <span
              ><img src="/static/images/fire.svg" alt="Популярное" />40
              Followers</span
            >
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container big-text">
        <h2 class="visible-hidden">Big Text</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </section>

    <section>
      <div class="container banner">
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <img src="/static/images/banner.png" alt="Баннер" />
      </div>
    </section>
  </div>

  <section>
    <div class="features">
      <div class="container">
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div class="info">
          <div class="block">
            <img src="/static/images/features1.png" alt="Устройство 1" />
            <p>Mobile Game Development</p>
            <img src="/static/images/arrow.png" alt="Стрелка" />
          </div>
          <div class="block">
            <img src="/static/images/features2.png" alt="Устройство 2" />
            <p>PC Game Development</p>
            <img src="/static/images/arrow.png" alt="Стрелка" />
          </div>
          <div class="block">
            <img src="/static/images/features3.png" alt="Устройство 3" />
            <p>PS4 Game Development</p>
            <img src="/static/images/arrow.png" alt="Стрелка" />
          </div>
          <div class="block">
            <img src="/static/images/features4.png" alt="Устройство 4" />
            <p>AR/VR Solutions</p>
            <img src="/static/images/arrow.png" alt="Стрелка" />
          </div>
          <div class="block">
            <img src="/static/images/features5.png" alt="Устройство 5" />
            <p>AR/ VR design</p>
            <img src="/static/images/arrow.png" alt="Стрелка" />
          </div>
          <div class="block">
            <img src="/static/images/features6.png" alt="Устройство 6" />
            <p>3D Modelings</p>
            <img src="/static/images/arrow.png" alt="Стрелка" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="wrapper">
    <section>
      <div class="container projects">
        <h3>Our Recent Projects</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="images">
          <img src="/static/images/project1.png" alt="Проект 1" />
          <img src="/static/images/project2.png" alt="Проект 2" />
          <img src="/static/images/project3.png" alt="Проект 3" />
        </div>
        <div class="images">
          <img src="/static/images/project4.png" alt="Проект 4" />
          <img src="/static/images/project5.png" alt="Проект 5" />
          <img src="/static/images/project6.png" alt="Проект 6" />
        </div>
        <a href="#" class="see-all">SEE ALL</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Главная | WebSite",
  meta: [{ name: "description", content: "Это главная страница сайта" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style></style>
