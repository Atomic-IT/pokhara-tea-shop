<template>
  <section id="products" class="products section">
    <div class="container">
      <div class="products__intro">
        <p class="products__eyebrow">Our premium products</p>
        <h2 class="section-heading">Himalayan treasures, honestly sourced</h2>
        <p class="section-lead">
          From tea gardens to mountain resins — authentic local goods, and more
          treasures from the communities we work with.
        </p>
      </div>

      <ul class="products__list">
        <li
          v-for="(product, index) in products"
          :key="product.id"
          class="products__item"
          :style="{ animationDelay: `${0.05 * index}s` }"
        >
          <span class="products__icon">
            <Icon :name="product.icon" size="1.45rem" aria-hidden="true" />
          </span>
          <div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.note }}</p>
          </div>
        </li>
      </ul>

      <p class="products__more">
        <Icon name="mdi:spa-outline" aria-hidden="true" />
        &amp; more local treasures
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { products } from '~/data/content'
</script>

<style lang="scss" scoped>
.products {
  background:
    linear-gradient(180deg, rgb(232 242 235 / 70%), rgb(243 248 244 / 30%));

  &__eyebrow {
    margin: 0 0 0.6rem;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-moss);
  }

  &__intro {
    max-width: 40rem;
  }

  &__list {
    display: grid;
    gap: 0.85rem;
    margin: 2.5rem 0 1.5rem;
    padding: 0;
    list-style: none;

    @media (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 64rem) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    padding: 1rem 0.2rem;
    border-bottom: 1px solid var(--color-border);
    animation: fade-up 0.7s var(--ease-out) both;

    h3 {
      margin: 0 0 0.2rem;
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-leaf-deep);
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      color: var(--color-muted);
    }
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    color: var(--color-leaf);
    background: rgb(45 106 69 / 10%);
  }

  &__more {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin: 0;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.1rem;
    color: var(--color-leaf-deep);
  }
}
</style>
