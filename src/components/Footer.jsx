import zaikaLogo from '../assets/zaika-logo.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <a className="brand footer-brand" href="#top" aria-label="Zaika Food home">
            <img className="brand-logo" src={zaikaLogo} alt="" />
            <span>Zaika Food</span>
          </a>
          <p className="footer-credit">Pakistani food, made with heart and shared with love.</p>
        </div>
        <div className="footer-details">
          <section aria-labelledby="footer-social-title">
            <h2 className="footer-heading" id="footer-social-title">Follow us</h2>
            <div className="footer-socials">
              <a href="https://www.instagram.com/zaikafood.demo/" target="_blank" rel="noreferrer" aria-label="Instagram: @zaikafood.demo">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-fill" cx="18" cy="6" r="1" /></svg>
              </a>
              <a href="https://www.facebook.com/zaikafood.demo/" target="_blank" rel="noreferrer" aria-label="Facebook: zaikafood.demo">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path className="social-icon-fill" d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@zaikafood.demo" target="_blank" rel="noreferrer" aria-label="TikTok: @zaikafood.demo">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path className="social-icon-fill" d="M19.6 8.2a7.1 7.1 0 0 1-4.2-1.4v7.1a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.2a2.5 2.5 0 1 0 1.3 2.2V3h3.2c.2 2 1.7 3.6 4.1 3.8v1.4Z" /></svg>
              </a>
            </div>
          </section>
          <section aria-labelledby="footer-location-title">
            <h2 className="footer-heading" id="footer-location-title">Find us</h2>
            <address className="footer-location">Lahore, Pakistan</address>
          </section>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zaika Food. All rights reserved.</p>
        <a href="#top">Made with care &amp; a pinch of spice.</a>
      </div>
    </footer>
  )
}

export default Footer
