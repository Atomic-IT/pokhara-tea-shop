import { describe, expect, it } from 'vitest'

import { brand, products, values } from '../app/data/content'

describe('content', () => {
  it('exposes brand contact details', () => {
    expect(brand.name).toContain('Healthy Organic Teas')
    expect(brand.phone).toMatch(/^\+977/)
    expect(brand.email).toContain('@')
  })

  it('lists premium products', () => {
    expect(products.length).toBeGreaterThanOrEqual(7)
    expect(products.map((item) => item.id)).toContain('tea')
  })

  it('defines the three core values', () => {
    expect(values).toHaveLength(3)
  })
})
