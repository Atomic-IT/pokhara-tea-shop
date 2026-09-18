<template>
  <section id="top" class="hero" aria-label="Welcome">
    <div class="hero__media" aria-hidden="true">
      <img
        class="hero__photo"
        src="/images/pokhara/phewa.jpg"
        alt=""
        width="1800"
        height="1200"
        fetchpriority="high"
      />
      <div class="hero__shade" />
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

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/pokhara/phewa.jpg',
      fetchpriority: 'high',
    },
  ],
})
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
  background: #163528;

  &__media {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 40%;
    transform: scale(1.02);
    animation: hero-drift 18s ease-in-out infinite alternate;
  }

  &__shade {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        105deg,
        rgb(10 28 18 / 82%) 0%,
        rgb(15 36 24 / 62%) 42%,
        rgb(15 36 24 / 28%) 100%
      ),
      linear-gradient(180deg, rgb(10 28 18 / 25%) 0%, rgb(10 28 18 / 55%) 100%);
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
    text-shadow: 0 12px 40px rgb(8 24 16 / 45%);
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

@keyframes hero-drift {
  from {
    transform: scale(1.02) translate3d(0, 0, 0);
  }

  to {
    transform: scale(1.06) translate3d(-1.2%, -0.8%, 0);
  }
}

@media (min-width: 64rem) {
  .hero {
    align-items: center;

    &__content {
      width: min(100% - 2 * var(--container-px), 38rem);
      margin-left: max(
        var(--container-px),
        calc((100% - var(--container-max)) / 2)
      );
      padding-block: clamp(5rem, 10vh, 7rem);
    }

    &__photo {
      object-position: center 35%;
    }
  }
}

@media (max-width: 48rem) {
  .hero {
    align-items: start;
    min-height: unset;
    height: auto;

    &__pillars {
      display: none;
    }

    &__photo {
      animation: none;
      object-position: 65% center;
    }

    &__shade {
      background:
        linear-gradient(
          180deg,
          rgb(10 28 18 / 55%) 0%,
          rgb(10 28 18 / 78%) 100%
        );
    }

    &__content {
      width: min(100% - 2 * var(--container-px), 36rem);
      margin-inline: auto;
      padding-block: 0.85rem 1.35rem;
    }

    &__place {
      margin-bottom: 0.45rem;
      font-size: 0.78rem;
    }

    &__brand {
      margin-bottom: 0.45rem;
    }

    &__brand-main {
      font-size: clamp(2.45rem, 11vw, 3.15rem);
    }

    &__brand-sub {
      font-size: clamp(1.2rem, 5vw, 1.55rem);
    }

    &__headline {
      margin-bottom: 0.45rem;
      font-size: 1rem;
    }

    &__support {
      margin-bottom: 0.95rem;
      font-size: 0.92rem;
      line-height: 1.4;
    }

    &__actions {
      margin-bottom: 0;
      gap: 0.5rem;
    }
  }

  .btn {
    min-height: 2.45rem;
    padding: 0.5rem 0.95rem;
    font-size: 0.9rem;
  }
}
</style>
