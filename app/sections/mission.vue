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

      <div class="mission__visual">
        <figure class="mission__shot mission__shot--main">
          <img
            src="/images/pokhara/tea-kanyam.jpg"
            alt="Tea garden terraces in the hills of Nepal"
            width="1284"
            height="868"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <figure class="mission__shot mission__shot--side">
          <img
            src="/images/pokhara/harvest.jpg"
            alt="Tea plucker harvesting fresh leaves on a hillside"
            width="691"
            height="922"
            loading="lazy"
            decoding="async"
          />
        </figure>
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
    display: grid;
    gap: 0.85rem;
    min-height: 18rem;

    @media (min-width: 40rem) {
      grid-template-columns: 1.2fr 0.8fr;
      align-items: end;
    }
  }

  &__shot {
    margin: 0;
    overflow: hidden;
    border-radius: 1.15rem;
    background: var(--color-mist);
    box-shadow: 0 0 0 1px rgb(31 92 58 / 8%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &--main {
      aspect-ratio: 4 / 3;
      animation: drift 9s ease-in-out infinite;
    }

    &--side {
      aspect-ratio: 3 / 4;
      max-height: 22rem;

      @media (min-width: 40rem) {
        margin-bottom: 1.5rem;
        animation: drift 11s ease-in-out infinite reverse;
      }
    }
  }
}

@media (max-width: 40rem) {
  .mission__shot--main,
  .mission__shot--side {
    animation: none;
  }
}
</style>
