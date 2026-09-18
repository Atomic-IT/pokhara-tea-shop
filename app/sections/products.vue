<template>
  <section id="products" class="products section">
    <div class="container">
      <div class="products__intro">
        <p class="products__eyebrow">{{ t('productsEyebrow') }}</p>
        <h2 class="section-heading">{{ t('productsHeading') }}</h2>
        <p class="section-lead">{{ t('productsLead') }}</p>
      </div>

      <ul class="products__grid">
        <li
          v-for="(product, index) in products"
          :key="product.id"
          class="products__card"
          :style="{ animationDelay: `${0.06 * index}s` }"
        >
          <button
            type="button"
            class="products__open"
            :aria-label="`${t('readMore')} ${product.name}`"
            @click="openProduct(product)"
          >
            <figure class="products__media">
              <img
                :src="product.image"
                :alt="product.alt"
                width="320"
                height="320"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div class="products__body">
              <h3>{{ product.name }}</h3>
              <p>{{ product.note }}</p>
              <span class="products__more-link">{{ t('readMore') }}</span>
            </div>
          </button>
        </li>
      </ul>

      <p class="products__more">
        <Icon name="mdi:spa-outline" aria-hidden="true" />
        {{ t('moreTreasures') }}
      </p>
    </div>

    <dialog
      ref="dialogEl"
      class="products__dialog"
      aria-labelledby="product-dialog-title"
      @close="active = null"
      @click="onBackdrop"
    >
      <article v-if="active" class="products__sheet">
        <button
          type="button"
          class="products__close"
          :aria-label="t('close')"
          @click="closeProduct"
        >
          <Icon name="mdi:close" aria-hidden="true" />
        </button>
        <img
          class="products__dialog-image"
          :src="active.image"
          :alt="active.alt"
          width="480"
          height="480"
        />
        <div class="products__dialog-copy">
          <p class="products__dialog-origin">{{ active.origin }}</p>
          <h3 id="product-dialog-title">{{ active.name }}</h3>
          <p class="products__dialog-note">{{ active.note }}</p>
          <p class="products__dialog-text">{{ active.description }}</p>
          <a
            class="products__dialog-cta"
            :href="brand.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mdi:whatsapp" aria-hidden="true" />
            {{ t('askWhatsapp') }}
          </a>
        </div>
      </article>
    </dialog>
  </section>
</template>

<script setup lang="ts">
import { brand, products } from '~/data/content'

type Product = (typeof products)[number]

const { t } = useLocale()
const dialogEl = ref<HTMLDialogElement | null>(null)
const active = ref<Product | null>(null)

function openProduct(product: Product) {
  active.value = product
  nextTick(() => dialogEl.value?.showModal())
}

function closeProduct() {
  dialogEl.value?.close()
}

function onBackdrop(event: MouseEvent) {
  if (event.target === dialogEl.value) closeProduct()
}
</script>

<style lang="scss" scoped>
.products {
  background:
    linear-gradient(180deg, rgb(232 242 235 / 75%), rgb(243 248 244 / 35%));

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

  &__grid {
    display: grid;
    gap: 1.15rem;
    margin: 2.5rem 0 1.5rem;
    padding: 0;
    list-style: none;

    @media (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.35rem;
    }

    @media (min-width: 64rem) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }

  &__card {
    animation: fade-up 0.7s var(--ease-out) both;

    @media (min-width: 40rem) and (max-width: 63.99rem) {
      &:last-child:nth-child(odd) {
        grid-column: 1 / -1;
        max-width: 22rem;
        justify-self: center;
      }
    }

    @media (min-width: 64rem) {
      &:last-child:nth-child(3n + 1) {
        grid-column: 2;
      }
    }
  }

  &__open {
    display: grid;
    gap: 0.85rem;
    width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    text-align: left;
    cursor: pointer;
    color: inherit;
    font: inherit;
  }

  &__media {
    margin: 0;
    overflow: hidden;
    border-radius: 1.25rem;
    aspect-ratio: 1;
    background: var(--color-mist);
    box-shadow: 0 0 0 1px rgb(31 92 58 / 8%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.55s var(--ease-out);
    }
  }

  &__open:hover &__media img,
  &__open:focus-visible &__media img {
    transform: scale(1.04);
  }

  &__body {
    padding-inline: 0.15rem;

    h3 {
      margin: 0 0 0.2rem;
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-leaf-deep);
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      color: var(--color-muted);
    }
  }

  &__more-link {
    display: inline-block;
    margin-top: 0.45rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-leaf);
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

  &__dialog {
    width: min(92vw, 52rem);
    max-height: min(90vh, 40rem);
    padding: 0;
    border: 0;
    border-radius: 1.25rem;
    background: transparent;
    overflow: hidden;

    &::backdrop {
      background: rgb(12 28 18 / 55%);
      backdrop-filter: blur(4px);
    }
  }

  &__sheet {
    position: relative;
    display: grid;
    background: #fff;
    color: var(--color-ink);

    @media (min-width: 48rem) {
      grid-template-columns: 0.95fr 1.05fr;
    }
  }

  &__close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border: 0;
    border-radius: 999px;
    background: rgb(255 255 255 / 88%);
    color: var(--color-leaf-deep);
    cursor: pointer;
  }

  &__dialog-image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    max-height: 16rem;

    @media (min-width: 48rem) {
      max-height: none;
      min-height: 100%;
    }
  }

  &__dialog-copy {
    padding: 1.35rem 1.35rem 1.5rem;
  }

  &__dialog-origin {
    margin: 0 0 0.45rem;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-moss);
  }

  &__dialog-copy h3 {
    margin: 0 0 0.35rem;
    font-family: var(--font-display);
    font-size: 1.7rem;
    color: var(--color-leaf-deep);
  }

  &__dialog-note {
    margin: 0 0 0.85rem;
    font-style: italic;
    color: var(--color-muted);
  }

  &__dialog-text {
    margin: 0 0 1.25rem;
    line-height: 1.55;
    color: var(--color-ink);
  }

  &__dialog-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 2.6rem;
    padding: 0.55rem 1rem;
    border-radius: var(--radius-md);
    background: #1f9b57;
    color: #fff;
    font-weight: 600;
  }
}
</style>
