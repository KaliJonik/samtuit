<script setup lang="ts">

</script>

<template>
    <ClientOnly>
      <section class="home-showcase p-0 m-0">
        <Swiper :modules="[SwiperAutoplay, SwiperParallax, SwiperPagination, SwiperNavigation]" :slides-per-view="1"
          :parallax="true" :navigation="{
          nextEl: '.showcaseSlider-next',
          prevEl: '.showcaseSlider-prev',
        }" :speed="1000" :pagination="{
          el: '.showcaseSlider-pagination',
          clickable: true,
        }" :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }" class="home-showcaseSlider">

          <SwiperSlide>
            <div class="swiper-image" data-swiper-parallax-x="3%"
              style="background-image:url('/IMG_0530.jpg')">
              <div class="text-container">
                <h1 class="bigTitle">Muhammad al-Xorazmiy nomidagi<span class="orangeIcon"></span> <br> Toshkent axborot texnologiyalari universiteti  <span
                    class="orangeIcon"></span> <br> Samarqand filiali <span class="orangeIcon"></span></h1>
                <div class="container-arrow-button">
                  <a class="cta arrow-button" href="#homeCard">
                    an example of link
                    <svg viewBox="0 0 76.922 65">
                      <circle cx="32.5" cy="32.5" r="32" transform="translate(11.922)" fill="none" stroke="#8c97d0"
                        stroke-width="1"></circle>
                      <path id="Union_1" data-name="Union 1"
                        d="M-6071.353,33.349l9.643-9.642H-6111v-2h48.941l-9.293-9.294,1.414-1.414,11.881,11.883-11.881,11.881Z"
                        transform="translate(6111 10)" fill="#10112b"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="filter"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-image" data-swiper-parallax-x="3%"
            style="background-image:url('/IMG_0532.jpg')">
            <div class="text-container">
                <h1 class="bigTitle">Muhammad al-Xorazmiy nomidagi<span class="orangeIcon"></span> <br> Toshkent axborot texnologiyalari universiteti  <span
                    class="orangeIcon"></span> <br> Samarqand filiali <span class="orangeIcon"></span></h1>
                <div class="container-arrow-button">
                  <a class="cta arrow-button" href="#">
                    an example of link
                    <svg viewBox="0 0 76.922 65">
                      <circle cx="32.5" cy="32.5" r="32" transform="translate(11.922)" fill="none" stroke="#8c97d0"
                        stroke-width="1"></circle>
                      <path id="Union_1" data-name="Union 1"
                        d="M-6071.353,33.349l9.643-9.642H-6111v-2h48.941l-9.293-9.294,1.414-1.414,11.881,11.883-11.881,11.881Z"
                        transform="translate(6111 10)" fill="#10112b"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="filter"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-image" data-swiper-parallax-x="3%"
            style="background-image:url('/IMG_0534.jpg')">
            <div class="text-container">
                <h1 class="bigTitle">Muhammad al-Xorazmiy nomidagi<span class="orangeIcon"></span> <br> Toshkent axborot texnologiyalari universiteti  <span
                    class="orangeIcon"></span> <br> Samarqand filiali <span class="orangeIcon"></span></h1>
                <div class="container-arrow-button">
                  <a class="cta arrow-button" href="#">
                    an example of link
                    <svg viewBox="0 0 76.922 65">
                      <circle cx="32.5" cy="32.5" r="32" transform="translate(11.922)" fill="none" stroke="#8c97d0"
                        stroke-width="1"></circle>
                      <path id="Union_1" data-name="Union 1"
                        d="M-6071.353,33.349l9.643-9.642H-6111v-2h48.941l-9.293-9.294,1.414-1.414,11.881,11.883-11.881,11.881Z"
                        transform="translate(6111 10)" fill="#10112b"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="filter"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-image" data-swiper-parallax-x="3%"
            style="background-image:url('/inc2.jpg')">
            <div class="text-container">
                <h1 class="bigTitle">Muhammad al-Xorazmiy nomidagi<span class="orangeIcon"></span> <br> Toshkent axborot texnologiyalari universiteti  <span
                    class="orangeIcon"></span> <br> Samarqand filiali <span class="orangeIcon"></span></h1>
                <div class="container-arrow-button">
                  <a class="cta arrow-button" href="#">
                    an example of link
                    <svg viewBox="0 0 76.922 65">
                      <circle cx="32.5" cy="32.5" r="32" transform="translate(11.922)" fill="none" stroke="#8c97d0"
                        stroke-width="1"></circle>
                      <path id="Union_1" data-name="Union 1"
                        d="M-6071.353,33.349l9.643-9.642H-6111v-2h48.941l-9.293-9.294,1.414-1.414,11.881,11.883-11.881,11.881Z"
                        transform="translate(6111 10)" fill="#10112b"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="filter"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-image" data-swiper-parallax-x="3%"
              style="background-image:url('/books.jpg')">
              <div class="text-container">
                <h1 class="bigTitle">Muhammad al-Xorazmiy nomidagi<span class="orangeIcon"></span> <br> Toshkent axborot texnologiyalari universiteti  <span
                    class="orangeIcon"></span> <br> Samarqand filiali <span class="orangeIcon"></span></h1>
                <div class="container-arrow-button">
                  <a class="cta arrow-button" href="#">
                    an example of link
                    <svg viewBox="0 0 76.922 65">
                      <circle cx="32.5" cy="32.5" r="32" transform="translate(11.922)" fill="none" stroke="#8c97d0"
                        stroke-width="1"></circle>
                      <path id="Union_1" data-name="Union 1"
                        d="M-6071.353,33.349l9.643-9.642H-6111v-2h48.941l-9.293-9.294,1.414-1.414,11.881,11.883-11.881,11.881Z"
                        transform="translate(6111 10)" fill="#10112b"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="filter"></div>
            </div>
          </SwiperSlide>

          <!-- pagination -->
          <div class="swiper-pagination showcaseSlider-pagination"></div>

          <!-- navigation buttons -->
          <div class="showcaseSlider-nav">
            <div class="swiper-button-prev showcaseSlider-prev"></div>
            <div class="swiper-button-next showcaseSlider-next"></div>
          </div>

        </Swiper>
      </section>
    </ClientOnly>
</template>

<style lang="scss">
$color__purple-blue: #8c97d0;
$color__night-blue: #10112b;
$color__orange: #0e39f7;
$color__dark-gray: #8f9397;

@font-face {
  font-family: 'CabinetGrotesk-light';
  src: url('http://lucasroussy.com/fonts/cabinet-grotesk/CabinetGrotesk-Light.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}



$grotesk-light: 'CabinetGrotesk-light', sans-serif;
$grotesk-extrabold: 'CabinetGrotesk-extrabold', sans-serif;

@mixin screen-min($min) {
  @media (min-width: $min) {
    @content
  }
}

;

@mixin big-orange-square {
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: $color__orange;

  @include screen-min(768px) {
    width: 13px;
    height: 13px;
  }

  @include screen-min(1440px) {
    width: 16px;
    height: 16px;
  }
}

;



.bigTitle {
  font-family: $grotesk-extrabold;
  line-height: 1.2;
  font-size: 13vw;

  @include screen-min(425px) {
    font-size: 10vw;
  }

  @include screen-min(1024px) {
    font-size: 4vw;
  }

  .orangeIcon {
    @include big-orange-square;
    display: inline-block;
    margin-left: 5px;
  }
}

.arrow-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: $grotesk-extrabold;
  color: #000;
  transition: padding 1s cubic-bezier(0.16, 1, 0.3, 1);
  width: fit-content;
  font-size: 12px;

  svg {
    width: 33px;
    margin-left: 10px;

    circle {
      transition: fill 0.75s ease;
      fill: transparent;
    }
  }

  @include screen-min(425px) {
    font-size: 16px;

    svg {
      width: 45px;
    }
  }

  @include screen-min(1024px) {
    font-size: 20px;

    svg {
      width: 62px;
    }

    &:hover {
      padding-left: 20px;

      svg {
        circle {
          fill: $color__purple-blue;
        }
      }
    }
  }

  @include screen-min(1440px) {
    font-size: 15px;

    svg {
      width: 60px;
    }
  }

  @include screen-min(1920px) {
    font-size: 18px;

    svg {
      width: 70px;
    }
  }
}

.home-showcase {
  padding: 0 var(--columnExt) 0;
  position: relative;

  height: 100dvh;

  .home-showcaseSlider {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;

    .swiper-wrapper {
      .swiper-slide {
        position: relative;
        height: 100%;
        overflow: hidden;

        .swiper-image {
          padding: 5vw;
          width: 100%;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: flex-end;

          .text-container {
            max-width: 100%;
            margin: 0 0 5rem;

            .bigTitle {
              transform: translate(-140%, 0);
              transition: transform 1.15s cubic-bezier(0.58, 0, 0.28, 0.99) 0.4s;
              color: #fff;
              margin: 0 0 2.5rem;
              text-shadow: #21212121 0px 0px 5px;
            }

            .container-arrow-button {
              transform: translate(-160%, 0);
              transition: transform .6s cubic-bezier(0.58, 0, 0.28, 0.99) 1s;
              width: fit-content;

              .arrow-button {
                color: #fff;
              }

              svg {
                path {
                  fill: #fff;
                }

                circle {
                  stroke: #fff;
                }
              }

              &:hover {
                svg {
                  circle {
                    stroke: $color__purple-blue;
                  }
                }
              }
            }
          }

          .filter {
            width: 100%;
            height: 100%;
            background-color: $color__night-blue;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            opacity: 0.5;
            transition: opacity .8s ease-in .5s;
          }
        }

        &-active {
          .swiper-image {
            .text-container {

              .bigTitle,
              .container-arrow-button {
                transform: translate(0, 0);
              }
            }

            .filter {
              opacity: 0;
            }
          }
        }
      }
    }

    .swiper-pagination {
      position: relative;
      bottom: 0;
      left: 0;
      width: fit-content;
      padding: 3.5% 0;

      &-bullet {
        width: 4vw;
        border-radius: 50px;
        height: 2px;
        background-color: $color__dark-gray;
        opacity: 1;
        transition: width .8s ease-in-out, .4s ease-in-out;
        margin: 0 4px !important;

        &-active {
          background-color: $color__orange;
          width: 8vw;
        }
      }
    }

    .showcaseSlider-nav {
      display: flex;
      flex-direction: row;
      padding: 0 0 3.5% 5%;
      padding-right: 0;

      .showcaseSlider-prev,
      .showcaseSlider-next {
        position: static;
        display: flex;
        align-items: flex-end;
        font-weight: 900;
        margin: 0 2vw;
        width: 20px;
        height: auto;

        &.swiper-button-disabled {
          opacity: 1;

          &:after {
            color: $color__dark-gray;
          }
        }

        &::after {
          font-size: 4vw;
          color: $color__orange;
        }
      }
    }

    #macaron {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      margin: 5%;
      width: 30%;

      #text-circle {
        animation: rotate-360 12s linear 0s infinite reverse forwards;
        transform-origin: center;
      }
    }
  }

  .scrollSliderButton {
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, 0%);
    color: #fff !important;
    text-decoration: none;
    font-size: 3.5vw;
    height: 21vw;
    font-family: $grotesk-light;

    .line {
      height: 15vw;
      width: 1px;
      background: #8c97d0;
      margin-top: 5px;
      animation: scroll-anim-mobile 1.6s cubic-bezier(0.62, 0.01, 0.71, 0.47) 0s infinite normal forwards;
    }
  }

  @include screen-min(1024px) {


    .home-showcaseSlider {
      display: block;


      .swiper-slide {
        height: clamp(45rem, 75vh, 5000px);
      

        .swiper-image {
          align-items: center;
          

          .text-container {
            max-width: 75%;
            margin: 0;

            .bigTitle {
              margin: 0 0 1.25rem;
            }
          }
        }
      }


      .swiper-pagination {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 0 2.5% 5%;

        &-bullet {
          width: 1.5vw;
          height: 3px;
          margin: 0 8px !important;

          &-active {
            width: 3vw;
          }
        }
      }

      .showcaseSlider-nav {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        padding: 0 5% 2.5% 5%;

        .showcaseSlider-prev,
        .showcaseSlider-next {
          margin: 0 0.6vw;

          &::after {
            font-size: 1vw;
          }
        }
      }

      #macaron {
        width: fit-content;
        width: 8.4vw;
      }
    }

    .scrollSliderButton {
      position: absolute;
      left: 50%;
      bottom: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translate(-50%, 40%);
      color: #fff !important;
      text-decoration: none;
      font-size: .9vw;
      height: 4.8vw;
      font-family: $grotesk-light;

      .line {
        height: 4.8vw;
        width: 2px;
        background: $color__purple-blue;
        margin-top: 5px;
        animation: scroll-anim 1.6s cubic-bezier(.62, .01, .71, .47) 0s infinite normal forwards;
      }
    }
  }

}
</style>
