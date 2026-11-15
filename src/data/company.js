// Single source of truth for company details.
// Add the Companies House number to `number` once issued; it then appears in the footer and legal pages.
export const COMPANY = {
  name: 'Veltrion Cove Ltd',
  brand: 'Veltrion Cove',
  number: '',
  street: 'Office 2307, 60 Tottenham Court Road',
  area: 'Fitzrovia',
  city: 'London',
  postcode: 'W1T 2EW',
  country: 'United Kingdom',
  address: 'Office 2307, 60 Tottenham Court Road, Fitzrovia, London, W1T 2EW',
  phone: '+44 7862 605467',
  phoneHref: 'tel:+447862605467',
  email: 'info@veltrioncove.online',
  hours: 'Monday to Friday, 9:00 to 17:30 (UK time)',
  domain: 'veltrioncove.online',
}

export const registrationLine = () =>
  COMPANY.number
    ? `${COMPANY.name} is a private limited company registered in England and Wales, company number ${COMPANY.number}.`
    : `${COMPANY.name} is a private limited company registered in England and Wales.`

export const img = (name) => `${import.meta.env.BASE_URL}images/${name}.jpg`
