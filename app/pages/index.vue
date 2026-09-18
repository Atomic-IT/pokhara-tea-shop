<template>
  <div id="index">
    <SiteNavbar />
    <main>
      <HeroSection />
      <ValuesSection />
      <ProductsSection />
      <MissionSection />
      <VisitSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteNavbar from '~/sections/navbar.vue'
import HeroSection from '~/sections/hero.vue'
import ValuesSection from '~/sections/values.vue'
import ProductsSection from '~/sections/products.vue'
import MissionSection from '~/sections/mission.vue'
import VisitSection from '~/sections/visit.vue'
import ContactSection from '~/sections/contact.vue'
import SiteFooter from '~/sections/footer.vue'
import { brand } from '~/data/content'

useSeoMeta({
  title: `${brand.name} · ${brand.location}`,
  description:
    'Fair trade organic teas and Himalayan treasures from Pokhara — collected directly from villagers.',
  ogTitle: brand.name,
  ogDescription: brand.tagline,
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
})
</script>
