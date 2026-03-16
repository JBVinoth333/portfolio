export default function Footer() {
        return (
                <footer id="footer">
                        <div className="footer-container">
                                <div className="footer-top">
                                        <div className="footer-left-column">
                                                <div className="social-links" aria-label="Social links">
                                                        <a className="footer-link" href="https://github.com/JBVinoth333" target="_blank" rel="noreferrer">
                                                                <img
                                                                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/github.svg"
                                                                        alt=""
                                                                        className="footer-icon"
                                                                        loading="lazy"
                                                                />
                                                                GitHub
                                                        </a>
                                                </div>

                                                <div className="contact-list">
                                                        <p className="contact-line">
                                                                <img
                                                                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg"
                                                                        alt=""
                                                                        className="footer-icon"
                                                                        loading="lazy"
                                                                />
                                                                <span>Email:</span>
                                                                <span className="contact-value">vinoth.baskar@zohocorp.com</span>
                                                        </p>

                                                        <p className="contact-line">
                                                                <img
                                                                        src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/telephone-fill.svg"
                                                                        alt=""
                                                                        className="footer-icon"
                                                                        loading="lazy"
                                                                />
                                                                <span>Zoho ID:</span>
                                                                <span className="contact-value">ZSTTK-433/25</span>
                                                        </p>
                                                </div>
                                        </div>

                                        <nav aria-label="Footer navigation" className="footer-nav">
                                                <a href="#about">About</a>
                                                <a href="#skills">Skills</a>
                                                <a href="#projects">Projects</a>
                                                <a href="#tools">Tools</a>
                                        </nav>
                                </div>

                                <p className="footer-copy">© {new Date().getFullYear()} Vinoth Baskar. All rights reserved.</p>
                        </div>
                </footer>
        )
}
