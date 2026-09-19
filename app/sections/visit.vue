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
        <div class="visit__actions">
          <a
            class="visit__cta visit__cta--whatsapp"
            :href="brand.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mdi:whatsapp" aria-hidden="true" />
            {{ t('whatsapp') }}
          </a>
          <a
            class="visit__cta visit__cta--maps"
            :href="brand.mapsHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mdi:map-marker-outline" aria-hidden="true" />
            {{ t('googleMaps') }}
          </a>
        </div>
      </div>

      <div class="visit__map">
        <iframe
          :title="brand.address"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          :src="brand.mapsEmbedHref"
        />
        <a
          class="visit__map-link"
          :href="brand.mapsHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('openMap') }}
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
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin: 1.25rem 0 0;
    font-weight: 500;
    color: var(--color-ink);

    .iconify {
      color: var(--color-leaf);
      flex-shrink: 0;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.65rem;
    margin-top: 1.15rem;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 2.7rem;
    padding: 0.6rem 1.1rem;
    border-radius: var(--radius-md);
    font-weight: 600;

    &--whatsapp {
      background: #1f9b57;
      color: #fff;
    }

    &--maps {
      background: transparent;
      color: var(--color-leaf-deep);
      box-shadow: inset 0 0 0 1.5px rgb(31 92 58 / 28%);

      &:hover {
        background: rgb(31 92 58 / 6%);
      }
    }
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
