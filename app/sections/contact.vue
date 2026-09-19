<template>
  <section id="contact" class="contact section">
    <div class="contact__panel container">
      <div class="contact__copy">
        <p class="contact__eyebrow">{{ t('contactEyebrow') }}</p>
        <h2 class="section-heading">{{ t('contactHeading') }}</h2>
        <p class="section-lead">{{ t('contactLead') }}</p>
      </div>

      <div class="contact__aside">
        <div class="contact__channels">
          <a class="contact__link" :href="brand.phoneHref">
            <Icon name="mdi:phone-outline" aria-hidden="true" />
            <span>
              <strong>{{ t('phone') }}</strong>
              {{ brand.phone }}
            </span>
          </a>
          <a class="contact__link" :href="brand.emailHref">
            <Icon name="mdi:email-outline" aria-hidden="true" />
            <span>
              <strong>{{ t('email') }}</strong>
              {{ brand.email }}
            </span>
          </a>
          <a
            class="contact__link"
            :href="brand.mapsHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mdi:map-marker-outline" aria-hidden="true" />
            <span>
              <strong>{{ t('googleMaps') }}</strong>
              {{ brand.address }}
            </span>
          </a>
        </div>

        <div class="contact__socials" role="list">
          <a
            class="contact__social contact__social--whatsapp"
            :href="brand.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('whatsapp')"
            role="listitem"
          >
            <Icon name="mdi:whatsapp" aria-hidden="true" />
          </a>
          <a
            class="contact__social"
            :href="brand.facebook"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="brand.facebookLabel"
            role="listitem"
          >
            <Icon name="mdi:facebook" aria-hidden="true" />
          </a>
          <a
            class="contact__social"
            :href="brand.instagram"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="brand.instagramLabel"
            role="listitem"
          >
            <Icon name="mdi:instagram" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { brand } from '~/data/content'

const { t } = useLocale()
</script>

<style lang="scss" scoped>
.contact {
  &__panel {
    display: grid;
    gap: 2rem;
    padding: clamp(1.75rem, 4vw, 2.75rem);
    border-radius: var(--radius-lg);
    background:
      linear-gradient(145deg, #1f5c3a 0%, #2d6a45 55%, #3f8a58 100%);
    color: #f4faf6;
    box-shadow: var(--shadow-soft);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: -30% auto auto 55%;
      width: 18rem;
      height: 18rem;
      border-radius: 50%;
      background: radial-gradient(circle, rgb(232 201 106 / 28%), transparent 70%);
      pointer-events: none;
    }

    @media (min-width: 56rem) {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2.5rem;
    }
  }

  &__eyebrow {
    margin: 0 0 0.55rem;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgb(232 201 106 / 90%);
  }

  .section-heading {
    color: #fff;
  }

  .section-lead {
    color: rgb(244 250 246 / 82%);
  }

  &__aside {
    display: grid;
    gap: 1rem;
    position: relative;
  }

  &__channels {
    display: grid;
    gap: 0.75rem;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.85rem 1rem;
    border-radius: var(--radius-md);
    background: rgb(255 255 255 / 8%);
    border: 1px solid rgb(255 255 255 / 12%);
    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: rgb(255 255 255 / 14%);
      transform: translateX(4px);
    }

    .iconify {
      font-size: 1.35rem;
      color: var(--color-sun);
      flex-shrink: 0;
    }

    span {
      display: grid;
      gap: 0.1rem;
      font-size: 0.98rem;
    }

    strong {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgb(244 250 246 / 65%);
    }
  }

  &__socials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  &__social {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 999px;
    background: rgb(255 255 255 / 10%);
    border: 1px solid rgb(255 255 255 / 14%);
    color: var(--color-sun);
    transition:
      background 0.2s ease,
      transform 0.2s ease,
      color 0.2s ease;

    .iconify {
      font-size: 1.35rem;
    }

    &:hover {
      background: rgb(255 255 255 / 18%);
      transform: translateY(-2px);
    }

    &--whatsapp {
      background: rgb(31 155 87 / 28%);
      border-color: rgb(31 155 87 / 45%);
      color: #7dffb0;

      &:hover {
        background: rgb(31 155 87 / 42%);
      }
    }
  }
}
</style>
