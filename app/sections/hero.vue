<template>
  <section id="top" class="hero" aria-label="Welcome">
    <div class="hero__scene" aria-hidden="true">
      <div class="hero__mist hero__mist--back" />
      <div class="hero__sun" />
      <svg
        class="hero__ridges"
        viewBox="0 0 1440 520"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          class="hero__ridge hero__ridge--far"
          d="M0 320 C180 260 280 220 420 250 C560 280 640 180 780 200 C920 220 1020 140 1180 170 C1300 192 1380 210 1440 190 L1440 520 L0 520 Z"
        />
        <path
          class="hero__ridge hero__ridge--mid"
          d="M0 360 C220 300 340 280 480 310 C650 350 740 250 900 270 C1060 290 1180 230 1440 260 L1440 520 L0 520 Z"
        />
        <path
          class="hero__ridge hero__ridge--near"
          d="M0 420 C160 380 300 390 460 410 C680 440 780 360 980 380 C1160 398 1280 360 1440 390 L1440 520 L0 520 Z"
        />
      </svg>

      <div class="hero__terraces">
        <span
          v-for="n in 6"
          :key="n"
          class="hero__terrace"
          :style="{ '--i': n }"
        />
      </div>

      <div class="hero__steam hero__steam--1" />
      <div class="hero__steam hero__steam--2" />
      <div class="hero__steam hero__steam--3" />

      <svg
        class="hero__vine hero__vine--left"
        viewBox="0 0 180 420"
        fill="none"
      >
        <path
          d="M90 420 C70 340 40 300 55 240 C70 180 120 170 110 110 C100 50 60 40 70 0"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
        />
        <ellipse
          cx="48"
          cy="250"
          rx="28"
          ry="14"
          transform="rotate(-35 48 250)"
          fill="currentColor"
          opacity="0.55"
        />
        <ellipse
          cx="128"
          cy="170"
          rx="32"
          ry="15"
          transform="rotate(28 128 170)"
          fill="currentColor"
          opacity="0.45"
        />
        <ellipse
          cx="62"
          cy="90"
          rx="26"
          ry="13"
          transform="rotate(-20 62 90)"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>

      <svg
        class="hero__vine hero__vine--right"
        viewBox="0 0 180 420"
        fill="none"
      >
        <path
          d="M90 420 C110 340 140 300 125 240 C110 180 60 170 70 110 C80 50 120 40 110 0"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
        />
        <ellipse
          cx="132"
          cy="250"
          rx="28"
          ry="14"
          transform="rotate(35 132 250)"
          fill="currentColor"
          opacity="0.55"
        />
        <ellipse
          cx="52"
          cy="170"
          rx="32"
          ry="15"
          transform="rotate(-28 52 170)"
          fill="currentColor"
          opacity="0.45"
        />
        <ellipse
          cx="118"
          cy="90"
          rx="26"
          ry="13"
          transform="rotate(20 118 90)"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>

      <p class="hero__watermark">Pokhara</p>
    </div>

    <div class="hero__content container">
      <p class="hero__place">
        <Icon name="mdi:map-marker-outline" aria-hidden="true" />
        {{ brand.location }}
      </p>

      <h1 class="hero__brand">
        <span class="hero__brand-main">Healthy</span>
        <span class="hero__brand-sub">Organic Teas</span>
      </h1>

      <p class="hero__headline">{{ brand.tagline }}</p>
      <p class="hero__support">
        We collect directly from villagers and promote local products —
        empowering communities and preserving tradition.
      </p>

      <div class="hero__actions">
        <a class="btn btn--primary" href="#products">Explore products</a>
        <a class="btn btn--ghost" href="#contact">Talk with us</a>
      </div>

      <ul class="hero__pillars" aria-label="Our promise">
        <li v-for="pillar in brand.pillars" :key="pillar">{{ pillar }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { brand } from '~/data/content'
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  isolation: isolate;
  min-height: min(100svh, 54rem);
  display: grid;
  align-items: end;
  overflow: hidden;
  color: #f4faf6;
  background:
    radial-gradient(ellipse 70% 50% at 18% 18%, rgb(232 201 106 / 28%), transparent 60%),
    radial-gradient(ellipse 50% 40% at 88% 12%, rgb(90 154 106 / 35%), transparent 55%),
    linear-gradient(165deg, #0f2419 0%, #163528 28%, #1f5c3a 58%, #2a6844 100%);

  &__scene {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  &__mist {
    position: absolute;
    inset: 8% -10% auto;
    height: 42%;
    background: radial-gradient(ellipse at center, rgb(232 242 235 / 22%), transparent 68%);
    filter: blur(18px);
    animation: mist-drift 14s ease-in-out infinite;

    &--back {
      opacity: 0.85;
    }
  }

  &__sun {
    position: absolute;
    top: 10%;
    left: 14%;
    width: clamp(5rem, 11vw, 9rem);
    height: clamp(5rem, 11vw, 9rem);
    border-radius: 50%;
    background:
      radial-gradient(circle at 35% 35%, #fff6c8 0%, #e8c96a 42%, rgb(232 201 106 / 0%) 72%);
    box-shadow: 0 0 60px rgb(232 201 106 / 35%);
    animation: drift 10s ease-in-out infinite;
  }

  &__ridges {
    position: absolute;
    inset: auto 0 0;
    width: 100%;
    height: min(58%, 28rem);
  }

  &__ridge {
    &--far {
      fill: #2f6b4a;
      opacity: 0.55;
    }

    &--mid {
      fill: #1d4f35;
      opacity: 0.85;
    }

    &--near {
      fill: #10281c;
    }
  }

  &__terraces {
    position: absolute;
    left: 0;
    right: 42%;
    bottom: 0;
    height: 38%;
    overflow: hidden;
  }

  &__terrace {
    position: absolute;
    left: -5%;
    right: -5%;
    height: 18%;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    background: linear-gradient(90deg, #184830, #2d6a45 45%, #1a3f2c);
    opacity: calc(0.35 + var(--i) * 0.08);
    bottom: calc((var(--i) - 1) * 14%);
    transform: scaleX(calc(0.72 + var(--i) * 0.06));
    animation: terrace-breathe 7s ease-in-out infinite;
    animation-delay: calc(var(--i) * 0.15s);
  }

  &__steam {
    position: absolute;
    bottom: 28%;
    width: 2.5rem;
    height: 7rem;
    border-radius: 999px;
    background: linear-gradient(180deg, rgb(255 255 255 / 0%), rgb(255 255 255 / 22%));
    filter: blur(8px);
    animation: steam-rise 6s ease-in-out infinite;

    &--1 {
      left: 18%;
    }

    &--2 {
      left: 28%;
      animation-delay: 1.4s;
      height: 5.5rem;
    }

    &--3 {
      left: 38%;
      animation-delay: 2.6s;
      height: 6.5rem;
      opacity: 0.7;
    }
  }

  &__vine {
    position: absolute;
    top: 0;
    width: clamp(5.5rem, 12vw, 9rem);
    height: auto;
    color: rgb(90 154 106 / 55%);
    animation: leaf-sway 8s ease-in-out infinite;

    &--left {
      left: -1%;
      transform-origin: top center;
    }

    &--right {
      right: -1%;
      animation-duration: 9.5s;
      animation-direction: reverse;
      color: rgb(90 154 106 / 40%);
    }
  }

  &__watermark {
    position: absolute;
    left: 4%;
    bottom: 18%;
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(4rem, 14vw, 11rem);
    font-weight: 700;
    line-height: 0.85;
    letter-spacing: -0.04em;
    color: rgb(244 250 246 / 6%);
    user-select: none;
    white-space: nowrap;
  }

  &__content {
    position: relative;
    z-index: 2;
    width: min(100% - 2 * var(--container-px), 36rem);
    margin: 0 auto 0 var(--container-px);
    justify-self: start;
    padding-block: clamp(5.5rem, 12vw, 7.5rem) clamp(3rem, 7vw, 4.75rem);
    animation: fade-up 0.9s var(--ease-out) both;
  }

  &__place {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin: 0 0 1rem;
    font-size: 0.92rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgb(244 250 246 / 78%);
  }

  &__brand {
    margin: 0 0 1rem;
    font-family: var(--font-display);
    line-height: 0.92;
    letter-spacing: -0.03em;
    text-wrap: balance;
  }

  &__brand-main {
    display: block;
    font-size: clamp(3.4rem, 9vw, 5.8rem);
    font-weight: 700;
    text-shadow: 0 12px 40px rgb(8 24 16 / 35%);
  }

  &__brand-sub {
    display: block;
    margin-top: 0.2rem;
    font-size: clamp(1.55rem, 3.8vw, 2.45rem);
    font-weight: 500;
    color: rgb(232 242 235 / 92%);
  }

  &__headline {
    margin: 0 0 0.85rem;
    font-family: var(--font-display);
    font-size: clamp(1.2rem, 2.4vw, 1.55rem);
    font-weight: 500;
    font-style: italic;
    color: var(--color-sun);
  }

  &__support {
    margin: 0 0 1.75rem;
    max-width: 32rem;
    font-size: 1.05rem;
    color: rgb(244 250 246 / 84%);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.75rem;
  }

  &__pillars {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem 1.1rem;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgb(244 250 246 / 68%);

    li {
      position: relative;

      &:not(:last-child)::after {
        content: '✦';
        position: absolute;
        right: -0.85rem;
        color: var(--color-honey);
        font-size: 0.65rem;
      }
    }
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.9rem;
  padding: 0.7rem 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &--primary {
    background: var(--color-sun);
    color: #1a2e20;
  }

  &--ghost {
    border: 1.5px solid rgb(244 250 246 / 45%);
    color: #fff;
    background: rgb(255 255 255 / 6%);

    &:hover {
      border-color: rgb(244 250 246 / 75%);
      background: rgb(255 255 255 / 12%);
    }
  }
}

@keyframes mist-drift {
  0%,
  100% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(3%) scale(1.04);
  }
}

@keyframes steam-rise {
  0%,
  100% {
    opacity: 0.15;
    transform: translateY(12px) scaleY(0.85);
  }

  50% {
    opacity: 0.55;
    transform: translateY(-18px) scaleY(1.05);
  }
}

@keyframes terrace-breathe {
  0%,
  100% {
    transform: scaleX(calc(0.72 + var(--i) * 0.06)) translateY(0);
  }

  50% {
    transform: scaleX(calc(0.74 + var(--i) * 0.06)) translateY(-2px);
  }
}

@media (min-width: 64rem) {
  .hero {
    align-items: center;

    &__content {
      width: min(100% - 2 * var(--container-px), 38rem);
      margin-left: max(var(--container-px), calc((100% - var(--container-max)) / 2));
      padding-block: clamp(5rem, 10vh, 7rem);
    }

    &__terraces {
      right: 36%;
      height: 42%;
    }

    &__sun {
      left: 22%;
      top: 12%;
    }

    &__watermark {
      left: 42%;
      bottom: 22%;
      color: rgb(244 250 246 / 7%);
    }

    &__steam--1 {
      left: 22%;
    }

    &__steam--2 {
      left: 32%;
    }

    &__steam--3 {
      left: 44%;
    }
  }
}

@media (max-width: 40rem) {
  .hero {
    &__vine--right,
    &__watermark {
      display: none;
    }

    &__terraces {
      right: 0;
      opacity: 0.7;
    }
  }
}
</style>
