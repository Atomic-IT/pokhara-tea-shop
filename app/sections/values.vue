<template>
  <section id="values" class="values section">
    <div class="container">
      <p class="values__eyebrow">What we stand for</p>
      <h2 class="section-heading">Good for people, nature, and you</h2>
      <p class="section-lead">
        Every jar, leaf, and spice we share carries the same promise printed on
        our card: fair trade, pure goodness, real impact.
      </p>

      <ul class="values__grid">
        <li v-for="(item, index) in values" :key="item.id" class="values__item">
          <span
            class="values__icon"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <Icon :name="item.icon" size="1.6rem" aria-hidden="true" />
          </span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { values } from '~/data/content'
</script>

<style lang="scss" scoped>
.values {
  &__eyebrow {
    margin: 0 0 0.6rem;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-moss);
  }

  &__grid {
    display: grid;
    gap: 1.75rem;
    margin: 2.5rem 0 0;
    padding: 0;
    list-style: none;

    @media (min-width: 48rem) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }

  &__item {
    h3 {
      margin: 0 0 0.55rem;
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--color-leaf-deep);
    }

    p {
      margin: 0;
      color: var(--color-muted);
    }
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
    border-radius: 50%;
    color: var(--color-leaf-deep);
    background: var(--color-mist);
    animation: drift 5.5s ease-in-out infinite;
  }
}
</style>
