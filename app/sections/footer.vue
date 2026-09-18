<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__brand">
        <img src="/logo.svg" width="36" height="36" alt="" />
        <div>
          <p class="footer__name">{{ brand.name }}</p>
          <p class="footer__tag">{{ brand.tagline }}</p>
        </div>
      </div>

      <p class="footer__note">
        Fair trade · Pure goodness · Real impact — from {{ brand.location }}.
      </p>

      <p class="footer__copy">
        © {{ year }} {{ brand.name }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { brand } from '~/data/content'

const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  padding-block: 2.5rem 2rem;
  border-top: 1px solid var(--color-border);
  background: rgb(232 242 235 / 45%);

  &__inner {
    display: grid;
    gap: 1rem;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__name {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--color-leaf-deep);
  }

  &__tag {
    margin: 0.15rem 0 0;
    font-size: 0.9rem;
    font-style: italic;
    color: var(--color-muted);
  }

  &__note,
  &__copy {
    margin: 0;
    font-size: 0.9rem;
    color: var(--color-muted);
  }
}
</style>
