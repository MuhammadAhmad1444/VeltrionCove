import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import { COMPANY } from '../data/company'

const Mail = () => <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>

function WhoWeAre() {
  return (
    <ul>
      <li><strong>Company:</strong> {COMPANY.name}, a private limited company registered in England and Wales{COMPANY.number ? `, company number ${COMPANY.number}` : ''}</li>
      <li><strong>Office:</strong> {COMPANY.address}</li>
      <li><strong>Email:</strong> <Mail /></li>
      <li><strong>Telephone:</strong> {COMPANY.phone}</li>
    </ul>
  )
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy policy" intro="How we collect, use and protect your personal data when you shop with us, use our services or visit this website.">
      <p>{COMPANY.name} ("we", "us", "our") is the controller of personal data collected through {COMPANY.domain}. We process personal data in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
      <h2>1. Who we are</h2>
      <WhoWeAre />
      <h2>2. Data we collect</h2>
      <ul>
        <li><strong>Identity and contact data:</strong> name, email address, telephone number and delivery address.</li>
        <li><strong>Order data:</strong> products ordered, order references, delivery and returns history.</li>
        <li><strong>Payment data:</strong> payments are handled by our payment provider through a secure payment link. We do not see or store your full card details.</li>
        <li><strong>Enquiry data:</strong> information you give us about your business when you ask about our digital services.</li>
        <li><strong>Technical data:</strong> IP address, browser type, device and pages visited, collected through cookies where you allow it.</li>
      </ul>
      <h2>3. How we use your data and our lawful basis</h2>
      <table>
        <thead><tr><th>Purpose</th><th>Lawful basis</th></tr></thead>
        <tbody>
          <tr><td>Processing and delivering your order, handling returns</td><td>Performance of a contract</td></tr>
          <tr><td>Replying to messages and service enquiries</td><td>Legitimate interests, or steps before entering a contract</td></tr>
          <tr><td>Keeping accounting and tax records</td><td>Legal obligation</td></tr>
          <tr><td>Preventing fraud and keeping the site secure</td><td>Legitimate interests</td></tr>
          <tr><td>Sending marketing emails</td><td>Consent, which you can withdraw at any time</td></tr>
          <tr><td>Analytics cookies</td><td>Consent</td></tr>
        </tbody>
      </table>
      <h2>4. Who we share data with</h2>
      <p>We share only what is needed with: payment providers; delivery and fulfilment partners; online marketplaces where you buy from us there; IT, hosting and email providers; and professional advisers. We never sell your personal data.</p>
      <h2>5. International transfers</h2>
      <p>Some providers may process data outside the UK. Where they do, we rely on UK adequacy regulations or the International Data Transfer Agreement to protect your data.</p>
      <h2>6. How long we keep data</h2>
      <p>Order and accounting records are kept for six years to meet tax law. Enquiries that do not lead to an order are deleted after two years. Marketing data is kept until you unsubscribe.</p>
      <h2>7. Your rights</h2>
      <p>You have the right to access, correct, erase or restrict your data, to object to processing, to data portability, and to withdraw consent. To use any of these rights, email <Mail />. We reply within one month.</p>
      <p>You can also complain to the Information Commissioner's Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or on 0303 123 1113.</p>
      <h2>8. Security</h2>
      <p>This website is served over HTTPS. Access to customer data is limited to staff who need it, and our providers are chosen for their security standards.</p>
      <h2>9. Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>
    </LegalPage>
  )
}

export function TermsOfService() {
  return (
    <LegalPage title="Terms of service" intro="The terms that apply when you buy products from us or use this website. Please read them before placing an order.">
      <h2>1. About us</h2>
      <WhoWeAre />
      <h2>2. These terms</h2>
      <p>These terms apply to orders placed through {COMPANY.domain} by consumers. Our digital services are provided under a separate written proposal and agreement. Nothing in these terms affects your statutory rights under the Consumer Rights Act 2015.</p>
      <h2>3. Placing an order</h2>
      <p>When you send an order request, we check stock and email you a secure payment link. A contract is formed when we email you to confirm payment has been received and your order is accepted. If we cannot accept your order, for example because an item is out of stock, we will tell you and you will not be charged.</p>
      <h2>4. Prices and payment</h2>
      <p>Product prices are in pounds sterling and include UK VAT. Delivery charges are shown before you send your order. If a price is clearly wrong because of an error, we will contact you before accepting the order. Payment is taken through our payment provider's secure page.</p>
      <h2>5. Delivery</h2>
      <p>Delivery options, charges and times are set out in our <Link to="/shipping-policy">shipping policy</Link>. Risk in the products passes to you on delivery.</p>
      <h2>6. Your right to cancel and returns</h2>
      <p>You may cancel within 14 days of delivery under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. We also offer a 30-day returns period. See our <Link to="/refund-policy">refund policy</Link>.</p>
      <h2>7. Faulty products and warranty</h2>
      <p>Products must be as described, of satisfactory quality and fit for purpose. In addition to your legal rights, each product has a 12-month warranty against manufacturing faults.</p>
      <h2>8. Our liability</h2>
      <p>We are responsible for loss or damage you suffer that is a foreseeable result of our breaking these terms. We do not exclude liability for death or personal injury caused by negligence, for fraud, or for breach of your statutory rights. We are not liable for business losses where products are bought for private use.</p>
      <h2>9. Use of this website</h2>
      <p>Content on this website belongs to {COMPANY.name}. You may not copy it for commercial use without our permission, or use the site in a way that damages it or other users.</p>
      <h2>10. Complaints and law</h2>
      <p>Please contact <Mail /> if you are unhappy and we will try to resolve it quickly. These terms are governed by the law of England and Wales. You may bring proceedings in the courts of England and Wales, or of Scotland or Northern Ireland if you live there.</p>
    </LegalPage>
  )
}

export function RefundPolicy() {
  return (
    <LegalPage title="Refund and returns policy" intro="You can return most items within 30 days. Your statutory right to cancel within 14 days always applies.">
      <h2>1. Your 14-day right to cancel</h2>
      <p>Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, you can cancel your order for any reason within 14 days of the day you receive the goods. Tell us by emailing <Mail /> with your order reference. You then have a further 14 days to send the goods back.</p>
      <h2>2. Our 30-day returns promise</h2>
      <p>We extend this so you can return unused items in their original packaging within 30 days of delivery for a full refund of the item price.</p>
      <h2>3. Items we cannot accept back</h2>
      <ul>
        <li>In-ear products such as earbuds once the hygiene seal has been broken, unless faulty.</li>
        <li>Items damaged through misuse after delivery.</li>
      </ul>
      <h2>4. How to return an item</h2>
      <ul>
        <li>Email <Mail /> with your order reference and the items you are returning.</li>
        <li>We reply with the return address and instructions within one working day.</li>
        <li>Pack the item securely, ideally in its original packaging, and keep proof of postage.</li>
      </ul>
      <h2>5. Refunds</h2>
      <p>We refund you within 14 days of receiving the goods back, or of you giving us evidence you have returned them, whichever is sooner. Refunds go to your original payment method. If you cancel the whole order within 14 days we also refund the standard delivery charge you paid. You pay the cost of returning goods unless they are faulty or not as described.</p>
      <p>We may reduce a refund if the value of the goods has been reduced by handling them more than needed to check them.</p>
      <h2>6. Faulty or incorrect items</h2>
      <p>Under the Consumer Rights Act 2015 you can reject faulty goods within 30 days for a full refund. After that, and for 12 months under our warranty, we will repair or replace the product, or refund you if that is not possible. We cover return postage for faulty or incorrect items.</p>
      <h2>7. Orders bought on marketplaces</h2>
      <p>If you bought from us through an online marketplace, please start your return through that marketplace so it can be tracked. Our policy still applies.</p>
    </LegalPage>
  )
}

export function ShippingPolicy() {
  return (
    <LegalPage title="Shipping policy" intro="Where we deliver, how much it costs and how long it takes.">
      <h2>1. Dispatch</h2>
      <p>Orders are dispatched once payment is confirmed. Orders paid by 2pm on a working day (Monday to Friday, excluding UK bank holidays) are usually dispatched the same day.</p>
      <h2>2. Delivery options</h2>
      <table>
        <thead><tr><th>Destination</th><th>Cost</th><th>Estimated time after dispatch</th></tr></thead>
        <tbody>
          <tr><td>UK standard (tracked)</td><td>£3.95, free on orders over £40</td><td>2 to 4 working days</td></tr>
          <tr><td>Europe (tracked)</td><td>From £9.95</td><td>4 to 8 working days</td></tr>
          <tr><td>Rest of the world (tracked)</td><td>From £9.95</td><td>6 to 12 working days</td></tr>
        </tbody>
      </table>
      <p>Delivery times are estimates and are not guaranteed. The final international charge depends on parcel weight and destination and is confirmed with your payment link before you pay.</p>
      <h2>3. Tracking</h2>
      <p>We email you a tracking number when your parcel is dispatched.</p>
      <h2>4. Customs, duties and taxes</h2>
      <p>Orders delivered outside the UK may be charged import duties and taxes by the destination country. These are the responsibility of the recipient and are not included in our prices.</p>
      <h2>5. Lost or damaged parcels</h2>
      <p>If your parcel has not arrived within 10 working days of the estimated date, or arrives damaged, email <Mail /> with your order reference and photos where relevant. We will investigate with the carrier and send a replacement or refund.</p>
      <h2>6. Address errors</h2>
      <p>Please check your delivery address carefully. If a parcel is returned to us because the address was incorrect, we may charge the cost of sending it again.</p>
    </LegalPage>
  )
}

export function CookiePolicy() {
  const clear = () => {
    try { localStorage.removeItem('veltrioncove_cookie_consent') } catch { /* ignore */ }
    window.location.reload()
  }
  return (
    <LegalPage title="Cookie policy" intro="What cookies and similar technologies we use, and how you can control them.">
      <h2>1. What cookies are</h2>
      <p>Cookies are small files stored on your device when you visit a website. We also use your browser's local storage, which works in a similar way. We follow the Privacy and Electronic Communications Regulations (PECR).</p>
      <h2>2. Cookies we use</h2>
      <table>
        <thead><tr><th>Name</th><th>Type</th><th>Purpose</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>veltrioncove_cart_v1</td><td>Essential (local storage)</td><td>Remembers the items in your basket</td><td>Until cleared</td></tr>
          <tr><td>veltrioncove_cookie_consent</td><td>Essential (local storage)</td><td>Remembers your cookie choice</td><td>Until cleared</td></tr>
          <tr><td>Analytics cookies</td><td>Analytics, only with consent</td><td>Help us understand how visitors use the site</td><td>Up to 13 months</td></tr>
        </tbody>
      </table>
      <h2>3. Managing cookies</h2>
      <p>Essential storage is needed for the basket to work and cannot be switched off on this site. Analytics cookies are only used if you select Accept all. You can change your choice at any time.</p>
      <p><button onClick={clear} className="btn-outline !py-2 !px-4 text-sm">Change cookie preferences</button></p>
      <p>You can also block or delete cookies in your browser settings.</p>
      <h2>4. Contact</h2>
      <p>Questions about cookies? Email <Mail />.</p>
    </LegalPage>
  )
}
