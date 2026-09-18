<template>
  <section id="visit" class="visit section">
    <div class="visit__layout container">
      <div class="visit__copy">
        <p class="visit__eyebrow">{{ t('place') }}</p>
        <h2 class="section-heading">{{ t('visitHeading') }}</h2>
        <p class="section-lead">{{ t('visitLead') }}</p>
        <p class="visit__note">
          <Icon name="mdi:calendar-clock" aria-hidden="true" />
          {{ t('visitNote') }}
        </p>
        <a
          class="visit__cta"
          :href="brand.whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="mdi:whatsapp" aria-hidden="true" />
          {{ t('whatsapp') }}
        </a>
      </div>

      <div class="visit__map">
        <iframe
          title="Map of Lakeside, Pokhara"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=83.945%2C28.200%2C83.970%2C28.220&amp;layer=mapnik&amp;marker=28.2096%2C83.9556"
        />
        <a
          class="visit__map-link"
          href="https://www.openstreetmap.org/?mlat=28.2096&amp;mlon=83.9556#map=15/28.2096/83.9556"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open larger map
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { brand } from '~/data/content'

const { t } = useLocale()
</script>

<style lang="scss" scoped>
.visit {
  background: var(--color-fog);

  &__layout {
    display: grid;
    gap: 2rem;
    align-items: center;

    @media (min-width: 64rem) {
      grid-template-columns: 0.9fr 1.1fr;
      gap: 2.5rem;
    }
  }

  &__eyebrow {
    margin: 0 0 0.55rem;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-moss);
  }

  &__note {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin: 1.25rem 0 1.35rem;
    font-weight: 500;
    color: var(--color-ink);

    .iconify {
      color: var(--color-leaf);
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 2.7rem;
    padding: 0.6rem 1.1rem;
    border-radius: var(--radius-md);
    background: #1f9b57;
    color: #fff;
    font-weight: 600;
  }

  &__map {
    position: relative;
    overflow: hidden;
    border-radius: 1.15rem;
    background: var(--color-mist);
    box-shadow: 0 0 0 1px rgb(31 92 58 / 10%);
    min-height: 18rem;

    iframe {
      display: block;
      width: 100%;
      height: min(50vw, 22rem);
      border: 0;
    }
  }

  &__map-link {
    display: inline-block;
    padding: 0.65rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-leaf-deep);
  }
}
</style>
