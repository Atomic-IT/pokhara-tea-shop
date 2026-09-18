<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__inner container">
      <a class="navbar__brand" href="#top" @click="closeMenu">
        <img
          class="navbar__mark"
          src="/logo.svg"
          width="40"
          height="40"
          alt=""
        />
        <span class="navbar__name">
          <strong>Healthy</strong>
          Organic Teas
        </span>
      </a>

      <button
        type="button"
        class="navbar__toggle"
        :aria-expanded="menuOpen"
        aria-controls="nav-panel"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>

      <nav
        id="nav-panel"
        class="navbar__links"
        :class="{ 'is-open': menuOpen }"
        aria-label="Primary"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a class="navbar__cta" href="#contact" @click="closeMenu">
          Get in touch
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { label: 'Values', href: '#values' },
  { label: 'Products', href: '#products' },
  { label: 'Our story', href: '#mission' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 40;
  transition:
    background 0.35s var(--ease-out),
    box-shadow 0.35s var(--ease-out),
    backdrop-filter 0.35s var(--ease-out);

  &--scrolled {
    background: rgb(243 248 244 / 88%);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 0 var(--color-border);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 4.25rem;
    gap: 1rem;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
  }

  &__mark {
    width: 2.5rem;
    height: 2.5rem;
    animation: leaf-sway 5s ease-in-out infinite;
  }

  &__name {
    font-family: var(--font-display);
    font-size: 1.05rem;
    line-height: 1.15;
    color: var(--color-leaf-deep);

    strong {
      display: block;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  &__toggle {
    display: none;
    width: 2.5rem;
    height: 2.5rem;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    cursor: pointer;
    padding: 0.55rem;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      height: 2px;
      background: var(--color-leaf-deep);
      border-radius: 2px;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 0.35rem 1.35rem;

    a {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--color-muted);
      transition: color 0.2s ease;

      &:hover {
        color: var(--color-leaf-deep);
      }
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    padding: 0.55rem 1rem;
    border-radius: var(--radius-md);
    background: var(--color-leaf-deep);
    color: #fff !important;
    font-weight: 600 !important;
    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: var(--color-leaf) !important;
      transform: translateY(-1px);
    }
  }
}

@media (max-width: 48rem) {
  .navbar {
    &__toggle {
      display: flex;
    }

    &__links {
      position: absolute;
      inset: 4.25rem var(--container-px) auto;
      flex-direction: column;
      align-items: stretch;
      gap: 0.25rem;
      padding: 0.85rem;
      border-radius: var(--radius-lg);
      background: rgb(255 255 255 / 96%);
      box-shadow: var(--shadow-soft);
      border: 1px solid var(--color-border);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-8px);
      transition:
        opacity 0.25s ease,
        transform 0.25s ease;

      &.is-open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      a {
        padding: 0.7rem 0.85rem;
        border-radius: var(--radius-sm);
      }

      .navbar__cta {
        justify-content: center;
        margin-top: 0.35rem;
      }
    }
  }
}
</style>
