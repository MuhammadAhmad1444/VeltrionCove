import { img } from './company'

export const CATEGORIES = ['Audio', 'Wearables', 'Desk setup']

export const PRODUCTS = [
  {
    slug: 'tidewave-studio-headphones', sku: 'VC-AU-101', name: 'Tidewave Studio Headphones', category: 'Audio',
    price: 79, image: img('headphones-studio'), featured: true,
    summary: 'Closed-back over-ear headphones with a balanced, detailed sound for music, calls and long work sessions.',
    description: 'Tidewave pairs 40 mm drivers with soft protein-leather cushions and a padded headband that stays comfortable for hours. Use them wireless over Bluetooth 5.3 or plug in the included 3.5 mm cable for zero-latency listening.',
    specs: [['Drivers', '40 mm dynamic'], ['Battery', 'Up to 45 hours'], ['Connection', 'Bluetooth 5.3, 3.5 mm wired'], ['Charging', 'USB-C, 10 min gives 5 hours'], ['Weight', '265 g'], ['In the box', 'Headphones, USB-C cable, 3.5 mm cable, pouch']],
  },
  {
    slug: 'harbour-anc-headphones', sku: 'VC-AU-102', name: 'Harbour ANC Headphones', category: 'Audio',
    price: 129, image: img('headphones-anc'), featured: true,
    summary: 'Hybrid active noise cancelling for commutes, flights and open-plan offices.',
    description: 'Six microphones work together to reduce engine hum and office chatter, while transparency mode lets you hear announcements without taking the headphones off. Multipoint pairing keeps your phone and laptop connected at the same time.',
    specs: [['Noise cancelling', 'Hybrid ANC, transparency mode'], ['Battery', 'Up to 38 hours with ANC on'], ['Connection', 'Bluetooth 5.3, multipoint'], ['Codecs', 'AAC, SBC'], ['Weight', '250 g'], ['In the box', 'Headphones, hard case, USB-C cable, flight adapter']],
  },
  {
    slug: 'driftline-on-ear-headphones', sku: 'VC-AU-103', name: 'Driftline On-Ear Headphones', category: 'Audio',
    price: 49, image: img('headphones-onear'), featured: false,
    summary: 'Lightweight on-ear headphones that fold flat for everyday carry.',
    description: 'Driftline is built around a brushed-metal headband and memory-foam ear pads. It folds flat into a slim pouch, so it fits in a jacket pocket or laptop sleeve.',
    specs: [['Drivers', '32 mm dynamic'], ['Battery', 'Up to 30 hours'], ['Connection', 'Bluetooth 5.2'], ['Charging', 'USB-C'], ['Weight', '180 g'], ['In the box', 'Headphones, USB-C cable, pouch']],
  },
  {
    slug: 'current-pro-earbuds', sku: 'VC-AU-201', name: 'Current Pro Earbuds', category: 'Audio',
    price: 69, image: img('earbuds-pro'), featured: true,
    summary: 'True wireless earbuds with noise cancelling and a pocket-sized charging case.',
    description: 'Current Pro gives you active noise cancelling, IPX4 sweat resistance and three sizes of silicone tips for a secure fit. The case adds four full charges and supports wireless charging.',
    specs: [['Noise cancelling', 'Active, up to 30 dB'], ['Battery', '7 h buds, 28 h with case'], ['Water resistance', 'IPX4'], ['Charging', 'USB-C and Qi wireless'], ['Connection', 'Bluetooth 5.3'], ['In the box', 'Earbuds, case, 3 tip sizes, USB-C cable']],
  },
  {
    slug: 'shoal-duo-earbuds', sku: 'VC-AU-202', name: 'Shoal Duo Earbuds', category: 'Audio',
    price: 39, image: img('earbuds-duo'), featured: false,
    summary: 'Compact everyday earbuds with clear call quality.',
    description: 'A simple, reliable pair for calls, podcasts and the gym. Two microphones per bud with wind reduction keep your voice clear on the move.',
    specs: [['Battery', '6 h buds, 24 h with case'], ['Water resistance', 'IPX5'], ['Connection', 'Bluetooth 5.3'], ['Charging', 'USB-C'], ['Weight', '4.2 g per bud'], ['In the box', 'Earbuds, case, 3 tip sizes, USB-C cable']],
  },
  {
    slug: 'bearing-smartwatch', sku: 'VC-WR-301', name: 'Bearing Smartwatch', category: 'Wearables',
    price: 119, image: img('smartwatch'), featured: true,
    summary: 'An AMOLED smartwatch with heart-rate, sleep and workout tracking.',
    description: 'Bearing tracks steps, heart rate, blood oxygen and sleep, and shows notifications from iOS and Android. The aluminium case and fluoroelastomer strap are built for daily wear, including in the pool.',
    specs: [['Display', '1.78 inch AMOLED, always-on'], ['Battery', 'Up to 10 days'], ['Water resistance', '5 ATM'], ['Sensors', 'Heart rate, SpO2, accelerometer'], ['Compatibility', 'iOS 14+, Android 8+'], ['In the box', 'Watch, magnetic charger, spare strap loop']],
  },
  {
    slug: 'glide-wireless-mouse', sku: 'VC-DK-401', name: 'Glide Wireless Mouse', category: 'Desk setup',
    price: 29, image: img('mouse'), featured: false,
    summary: 'A quiet, rechargeable mouse that switches between three devices.',
    description: 'Silent switches, a contoured shell and a precise 4000 DPI sensor make Glide a good everyday mouse. Pair up to three devices and switch between them with one button.',
    specs: [['Sensor', 'Optical, up to 4000 DPI'], ['Connection', 'Bluetooth and 2.4 GHz USB-C receiver'], ['Battery', 'Up to 70 days per charge'], ['Buttons', '6, silent clicks'], ['Weight', '92 g'], ['In the box', 'Mouse, receiver, USB-C cable']],
  },
  {
    slug: 'flatline-slim-keyboard', sku: 'VC-DK-402', name: 'Flatline Slim Keyboard', category: 'Desk setup',
    price: 59, image: img('keyboard-slim'), featured: false,
    summary: 'A low-profile wireless keyboard with a UK layout.',
    description: 'Scissor-switch keys give a quiet, stable feel, and the aluminium base keeps the keyboard flat on the desk. Works with Mac, Windows, iPadOS and Android.',
    specs: [['Layout', 'UK ISO, full size'], ['Switches', 'Scissor, low profile'], ['Connection', 'Bluetooth, up to 3 devices'], ['Battery', 'Up to 3 months'], ['Charging', 'USB-C'], ['In the box', 'Keyboard, USB-C cable']],
  },
  {
    slug: 'keel-mechanical-keyboard', sku: 'VC-DK-403', name: 'Keel 75% Mechanical Keyboard', category: 'Desk setup',
    price: 99, image: img('keyboard-mech'), featured: true,
    summary: 'A hot-swappable 75% mechanical keyboard with PBT keycaps.',
    description: 'Keel uses pre-lubricated tactile switches you can swap without soldering, a gasket-mounted plate and double-shot PBT keycaps. Connect by cable, Bluetooth or the 2.4 GHz receiver.',
    specs: [['Layout', '75%, UK ISO'], ['Switches', 'Tactile, hot-swappable'], ['Keycaps', 'Double-shot PBT'], ['Connection', 'USB-C, Bluetooth 5.1, 2.4 GHz'], ['Battery', '4000 mAh'], ['In the box', 'Keyboard, receiver, cable, keycap and switch puller']],
  },
  {
    slug: 'beacon-bookshelf-speaker', sku: 'VC-AU-501', name: 'Beacon Bookshelf Speaker', category: 'Audio',
    price: 89, image: img('speaker'), featured: false,
    summary: 'A powered wooden-cabinet speaker for desks and small rooms.',
    description: 'Beacon combines a 4 inch woofer and silk-dome tweeter in a walnut-finish cabinet. Stream over Bluetooth or connect a turntable, TV or computer with optical and RCA inputs.',
    specs: [['Drivers', '4 inch woofer, 1 inch silk tweeter'], ['Power', '40 W RMS'], ['Inputs', 'Bluetooth 5.0, optical, RCA, 3.5 mm'], ['Finish', 'Walnut veneer'], ['Dimensions', '24 x 15 x 19 cm'], ['In the box', 'Speaker, power cable, remote, RCA cable']],
  },
]

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug)

export const formatGBP = (n) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n)

export const SHIPPING = { freeThreshold: 40, ukStandard: 3.95, international: 9.95 }

export const shippingFor = (subtotal, region) => {
  if (subtotal === 0) return 0
  if (region === 'international') return SHIPPING.international
  return subtotal >= SHIPPING.freeThreshold ? 0 : SHIPPING.ukStandard
}
