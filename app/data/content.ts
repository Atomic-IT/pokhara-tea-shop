export const brand = {
  name: 'Healthy Organic Teas',
  shortName: 'Healthy Organic Teas',
  location: 'Pokhara, Nepal',
  tagline: 'From Local Hands With Honest Hearts',
  secondaryBrand: 'A step local',
  pillars: ['Fair Trade', 'Pure Goodness', 'Real Impact'] as const,
  phone: '+977 9804101078',
  phoneHref: 'tel:+9779804101078',
  whatsapp: '+977 9804101078',
  whatsappHref:
    'https://wa.me/9779804101078?text=Hello%20Healthy%20Organic%20Teas',
  email: 'healthy.organicteas@gmail.com',
  emailHref: 'mailto:healthy.organicteas@gmail.com',
  facebook: 'https://www.facebook.com/healthy.organicteas',
  facebookLabel: 'Healthy Organic Teas',
  instagram: 'https://www.instagram.com/Healthy_organictea/',
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
    description:
      'Hand-picked leaves from highland gardens around Pokhara. Soft, clean cup with gentle floral notes — perfect morning or afternoon ritual.',
    origin: 'Hill villages near Pokhara',
    image: '/images/products/tea.jpg',
    alt: 'Loose green tea leaves in a ceramic bowl',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    note: 'Locally roasted beans',
    description:
      'Small-batch Nepali beans roasted for balance — nutty aroma, medium body, and a smooth finish without harsh bitterness.',
    origin: 'Local highland farms',
    image: '/images/products/coffee.jpg',
    alt: 'Roasted coffee beans in a wooden scoop',
  },
  {
    id: 'honey',
    name: 'Local Honey',
    note: 'Wildflower sweetness',
    description:
      'Golden wildflower honey collected from village apiaries. Rich and floral — lovely in tea, on bread, or straight from the spoon.',
    origin: 'Village beekeepers',
    image: '/images/products/honey.jpg',
    alt: 'Jar of golden honey with a wooden dipper',
  },
  {
    id: 'mad-honey',
    name: 'Mad Honey',
    note: 'Rare mountain harvest',
    description:
      'Dark amber honey from high cliff rhododendron blooms. Intensely aromatic and traditionally prized — enjoy sparingly and with care.',
    origin: 'High Himalayan cliffs',
    image: '/images/products/mad-honey.jpg',
    alt: 'Jar of dark amber mad honey',
  },
  {
    id: 'silajit',
    name: 'Silajit',
    note: 'Mineral-rich resin',
    description:
      'Sticky mountain resin gathered from Himalayan rock faces. Earthy, mineral character used for generations as a traditional tonic.',
    origin: 'Himalayan rock seams',
    image: '/images/products/silajit.jpg',
    alt: 'Chunks of dark silajit resin',
  },
  {
    id: 'cordyceps',
    name: 'Cordyceps',
    note: 'Traditional tonic',
    description:
      'Dried Himalayan cordyceps valued in local wellness traditions. Warm, earthy profile — often steeped or used as a daily tonic.',
    origin: 'High-altitude meadows',
    image: '/images/products/cordyceps.jpg',
    alt: 'Dried cordyceps on linen',
  },
  {
    id: 'saffron',
    name: 'Saffron',
    note: 'Precious red threads',
    description:
      'Delicate crimson threads with honeyed aroma. A pinch colours rice, tea, and desserts — pure, fragrant, and carefully sourced.',
    origin: 'Trusted regional growers',
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
