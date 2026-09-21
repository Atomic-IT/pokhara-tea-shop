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
          <em>{{ t('stepLocal') }}</em>
        </span>
      </a>

      <button
        type="button"
        class="navbar__toggle"
        :class="{ 'is-open': menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="nav-panel"
        :aria-label="menuOpen ? t('closeMenu') : t('openMenu')"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>

      <nav class="navbar__links navbar__links--desktop" aria-label="Primary">
        <a v-for="link in links" :key="link.href" :href="link.href">
          {{ link.label }}
        </a>
        <div class="navbar__langs" role="group" aria-label="Language">
          <button
            type="button"
            class="navbar__lang"
            :class="{ 'is-active': locale === 'en' }"
            @click="setLocale('en')"
          >
            {{ t('langEn') }}
          </button>
          <button
            type="button"
            class="navbar__lang"
            :class="{ 'is-active': locale === 'ne' }"
            @click="setLocale('ne')"
          >
            {{ t('langNe') }}
          </button>
        </div>
        <a class="navbar__cta" href="#contact">{{ t('navCta') }}</a>
      </nav>
    </div>

    <ClientOnly>
      <Teleport to="body">
        <div
          v-show="menuOpen"
          class="nav-shell__backdrop"
          aria-hidden="true"
          @click="closeMenu"
        />
        <aside
          id="nav-panel"
          class="nav-shell__drawer"
          :class="{ 'is-open': menuOpen }"
          :aria-hidden="!menuOpen"
          aria-label="Primary"
        >
          <button
            type="button"
            class="nav-shell__close"
            :aria-label="t('closeMenu')"
            @click="closeMenu"
          >
            <Icon name="mdi:close" aria-hidden="true" />
          </button>
          <nav class="nav-shell__nav" @click="onDrawerNavClick">
            <a v-for="link in links" :key="link.href" :href="link.href">
              {{ link.label }}
            </a>
            <div class="nav-shell__langs" role="group" aria-label="Language">
              <button
                type="button"
                class="nav-shell__lang"
                :class="{ 'is-active': locale === 'en' }"
                @click="setLocale('en')"
              >
                {{ t('langEn') }}
              </button>
              <button
                type="button"
                class="nav-shell__lang"
                :class="{ 'is-active': locale === 'ne' }"
                @click="setLocale('ne')"
              >
                {{ t('langNe') }}
              </button>
            </div>
            <a class="nav-shell__cta" href="#contact"> {{ t('navCta') }} </a>
          </nav>
        </aside>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
const { locale, t, setLocale } = useLocale()
const menuOpen = ref(false)
const scrolled = ref(false)

const links = computed(() => [
  { label: t('navValues'), href: '#values' },
  { label: t('navProducts'), href: '#products' },
  { label: t('navStory'), href: '#mission' },
  { label: t('visitHeading'), href: '#visit' },
  { label: t('navContact'), href: '#contact' },
])

function closeMenu() {
  menuOpen.value = false
}

function onDrawerNavClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return
  // Close on any link; language controls are <button>, so they stay open.
  if (target.closest('a')) closeMenu()
}

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

function onHashChange() {
  if (menuOpen.value) closeMenu()
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('hashchange', onHashChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('hashchange', onHashChange)
  document.body.style.overflow = ''
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
    position: relative;
    z-index: 70;
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

    em {
      display: block;
      margin-top: 0.1rem;
      font-size: 0.72rem;
      font-style: italic;
      font-weight: 500;
      letter-spacing: 0.04em;
      color: var(--color-moss);
    }
  }

  &__toggle {
    display: none;
    position: relative;
    z-index: 70;
    width: 2.75rem;
    height: 2.75rem;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    cursor: pointer;
    padding: 0;

    span {
      position: absolute;
      left: 0.65rem;
      right: 0.65rem;
      height: 2px;
      background: var(--color-leaf-deep);
      border-radius: 2px;
      transition:
        top 0.28s var(--ease-out),
        transform 0.28s var(--ease-out),
        opacity 0.2s ease;
    }

    span:nth-child(1) {
      top: 0.85rem;
    }

    span:nth-child(2) {
      top: 50%;
      margin-top: -1px;
    }

    span:nth-child(3) {
      top: calc(100% - 0.85rem - 2px);
    }

    &.is-open span:nth-child(1),
    &.is-open span:nth-child(3) {
      top: 50%;
      margin-top: -1px;
    }

    &.is-open span:nth-child(1) {
      transform: rotate(45deg);
    }

    &.is-open span:nth-child(2) {
      opacity: 0;
    }

    &.is-open span:nth-child(3) {
      transform: rotate(-45deg);
    }
  }

  &__links--desktop {
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

  &__langs {
    display: inline-flex;
    align-items: center;
    gap: 0.15rem;
    padding: 0.2rem;
    border-radius: 999px;
    background: rgb(31 92 58 / 8%);
  }

  &__lang {
    min-width: 2.2rem;
    height: 1.85rem;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--color-muted);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;

    &.is-active {
      background: var(--color-leaf-deep);
      color: #fff;
    }
  }
}

@media (max-width: 48rem) {
  .navbar {
    &__toggle {
      display: block;
    }

    &__links--desktop {
      display: none;
    }

    &__name {
      strong {
        font-size: 1.05rem;
      }

      em {
        display: none;
      }
    }
  }
}
</style>

<style lang="scss">
.nav-shell__backdrop {
  position: fixed;
  inset: 0;
  z-index: 65;
  background: rgb(12 32 22 / 45%);
  animation: nav-shell-fade 0.28s ease both;
}

.nav-shell__drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 66;
  width: min(19.5rem, 86vw);
  height: 100dvh;
  padding: 4.5rem 1.35rem 1.75rem;
  background: #f7faf7;
  box-shadow: -12px 0 40px rgb(12 32 22 / 18%);
  transform: translateX(105%);
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  overflow-y: auto;
  pointer-events: none;

  &.is-open {
    transform: translateX(0);
    pointer-events: auto;
  }
}

.nav-shell__close {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 0.65rem;
  background: transparent;
  color: #1f5c3a;
  cursor: pointer;

  .iconify {
    font-size: 1.55rem;
  }

  &:hover {
    background: rgb(31 92 58 / 8%);
  }
}

.nav-shell__nav {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.25rem;

  a {
    padding: 0.9rem 0.85rem;
    border-radius: 0.75rem;
    font-size: 1.12rem;
    font-weight: 600;
    color: #1f5c3a;
    text-decoration: none;
  }
}

.nav-shell__langs {
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
  align-self: flex-start;
  margin: 0.55rem 0.35rem;
  padding: 0.2rem;
  border-radius: 999px;
  background: rgb(31 92 58 / 8%);
}

.nav-shell__lang {
  min-width: 2.2rem;
  height: 1.85rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #5a7264;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;

  &.is-active {
    background: #1f5c3a;
    color: #fff;
  }
}

.nav-shell__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.65rem;
  min-height: 3rem;
  padding: 0.55rem 1rem;
  border-radius: 0.85rem;
  background: #1f5c3a;
  color: #fff !important;
  font-size: 1.05rem;
  font-weight: 600 !important;
  text-decoration: none;
}

@keyframes nav-shell-fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (min-width: 48.01rem) {
  .nav-shell__backdrop,
  .nav-shell__drawer {
    display: none !important;
  }
}
</style>
