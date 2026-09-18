<template>
  <section id="mission" class="mission section">
    <div class="mission__layout container">
      <div class="mission__copy">
        <p class="mission__eyebrow">Directly from villagers</p>
        <h2 class="section-heading">Fair trade with honest hearts</h2>
        <p class="section-lead">
          We work directly with local communities to bring you authentic,
          high-quality products while supporting their livelihood.
        </p>

        <ul class="mission__promises">
          <li v-for="promise in promises" :key="promise">
            <Icon name="mdi:leaf" aria-hidden="true" />
            <span>{{ promise }}</span>
          </li>
        </ul>
      </div>

      <div class="mission__visual" aria-hidden="true">
        <div class="mission__sky" />
        <div class="mission__sun" />
        <div class="mission__peak mission__peak--far" />
        <div class="mission__peak mission__peak--near" />
        <div class="mission__terrace" />
        <div class="mission__plant">
          <span class="mission__leaf mission__leaf--l" />
          <span class="mission__leaf mission__leaf--r" />
          <span class="mission__stem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { promises } from '~/data/content'
</script>

<style lang="scss" scoped>
.mission {
  &__layout {
    display: grid;
    gap: 2.75rem;
    align-items: center;

    @media (min-width: 64rem) {
      grid-template-columns: 1.05fr 0.95fr;
      gap: 3.5rem;
    }
  }

  &__eyebrow {
    margin: 0 0 0.6rem;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    color: var(--color-moss);
  }

  &__promises {
    display: grid;
    gap: 0.75rem;
    margin: 2rem 0 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-weight: 500;
      color: var(--color-ink);

      .iconify {
        color: var(--color-leaf);
        flex-shrink: 0;
      }
    }
  }

  &__visual {
    position: relative;
    overflow: hidden;
    min-height: 22rem;
    border-radius: var(--radius-lg);
    background: linear-gradient(180deg, #cfe6d8 0%, #9fc9ae 38%, #3f8a58 100%);
  }

  &__sky {
    position: absolute;
    inset: 0 0 45%;
    background:
      radial-gradient(ellipse at 70% 20%, rgb(255 255 255 / 55%), transparent 55%),
      linear-gradient(180deg, #dceee4, transparent);
  }

  &__sun {
    position: absolute;
    top: 14%;
    right: 18%;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background: radial-gradient(circle, #f0d878 0%, #e8c96a 55%, transparent 70%);
    animation: drift 8s ease-in-out infinite;
  }

  &__peak {
    position: absolute;
    bottom: 28%;
    width: 0;
    height: 0;
    border-style: solid;

    &--far {
      left: 8%;
      border-width: 0 7rem 9rem;
      border-color: transparent transparent #6f9e7e transparent;
      opacity: 0.85;
    }

    &--near {
      right: 6%;
      border-width: 0 9rem 12rem;
      border-color: transparent transparent #2d6a45 transparent;
    }
  }

  &__terrace {
    position: absolute;
    inset: auto 0 0;
    height: 34%;
    background:
      repeating-linear-gradient(
        -8deg,
        #1f5c3a 0 1.1rem,
        #276843 1.1rem 2.2rem
      );
    clip-path: polygon(0 35%, 100% 0, 100% 100%, 0 100%);
  }

  &__plant {
    position: absolute;
    left: 18%;
    bottom: 18%;
    width: 4rem;
    height: 5.5rem;
    animation: leaf-sway 6s ease-in-out infinite;
  }

  &__stem {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 3px;
    height: 3.2rem;
    background: #163528;
    transform: translateX(-50%);
  }

  &__leaf {
    position: absolute;
    width: 2.4rem;
    height: 1.4rem;
    border-radius: 80% 0;
    background: linear-gradient(135deg, #5a9a6a, #1f5c3a);

    &--l {
      left: 0;
      top: 0.6rem;
      transform: rotate(-25deg);
    }

    &--r {
      right: 0;
      top: 1.4rem;
      transform: rotate(35deg) scaleX(-1);
    }
  }
}

@media (max-width: 40rem) {
  .mission__visual {
    min-height: 16rem;
  }
}
</style>
