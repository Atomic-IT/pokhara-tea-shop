export const brand = {
  name: 'Healthy Organic Teas',
  shortName: 'Healthy Organic Teas',
  location: 'Pokhara, Nepal',
  tagline: 'From Local Hands With Honest Hearts',
  pillars: ['Fair Trade', 'Pure Goodness', 'Real Impact'] as const,
  phone: '+977 9804101078',
  phoneHref: 'tel:+9779804101078',
  email: 'healthy.organicteas@gmail.com',
  emailHref: 'mailto:healthy.organicteas@gmail.com',
  facebook: 'https://www.facebook.com/HealthyOrganicTeas',
  facebookLabel: 'Healthy Organic Teas',
  instagram: 'https://www.instagram.com/Healthy_organictea',
  instagramLabel: '@Healthy_organictea',
}

export const values = [
  {
    id: 'people',
    title: 'Good for People',
    text: 'We collect directly from villagers, supporting livelihoods and keeping local traditions alive.',
    icon: 'mdi:account-group-outline',
  },
  {
    id: 'nature',
    title: 'Good for Nature',
    text: 'Organic, fair-trade sourcing that respects the Himalayan landscape and its seasons.',
    icon: 'mdi:leaf',
  },
  {
    id: 'you',
    title: 'Good for You',
    text: 'Authentic, high-quality products chosen for purity, taste, and everyday wellness.',
    icon: 'mdi:heart-outline',
  },
] as const

export const products = [
  {
    id: 'tea',
    name: 'Tea',
    note: 'Fresh Himalayan leaves',
    image: '/images/products/tea.jpg',
    alt: 'Loose green tea leaves in a ceramic bowl',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    note: 'Locally roasted beans',
    image: '/images/products/coffee.jpg',
    alt: 'Roasted coffee beans in a wooden scoop',
  },
  {
    id: 'honey',
    name: 'Local Honey',
    note: 'Wildflower sweetness',
    image: '/images/products/honey.jpg',
    alt: 'Jar of golden honey with a wooden dipper',
  },
  {
    id: 'mad-honey',
    name: 'Mad Honey',
    note: 'Rare mountain harvest',
    image: '/images/products/mad-honey.jpg',
    alt: 'Jar of dark amber mad honey',
  },
  {
    id: 'silajit',
    name: 'Silajit',
    note: 'Mineral-rich resin',
    image: '/images/products/silajit.jpg',
    alt: 'Chunks of dark silajit resin',
  },
  {
    id: 'cordyceps',
    name: 'Cordyceps',
    note: 'Traditional tonic',
    image: '/images/products/cordyceps.jpg',
    alt: 'Dried cordyceps on linen',
  },
  {
    id: 'saffron',
    name: 'Saffron',
    note: 'Precious red threads',
    image: '/images/products/saffron.jpg',
    alt: 'Red saffron threads in a ceramic dish',
  },
] as const

export const promises = [
  'Fair Trade',
  'Directly from Villagers',
  'Promoting Local Products',
  'Good for you / Good for all',
] as const
