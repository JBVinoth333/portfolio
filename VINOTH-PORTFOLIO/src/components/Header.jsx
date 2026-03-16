export default function Header({ theme, onToggleTheme }) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    return (
        <header id="site-header" className="site-navbar">
            <div className="site-header-container">
                <div className="site-brand-wrap">
                    <a href="#site-header" className="site-brand-link">Vinoth's Portfolio</a>
                </div>

                <div className="site-header-controls">
                    <nav className="site-nav-links" aria-label="Main navigation">
                        <a href="#about">About Me</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#tools">Tools</a>
                        <a href="#footer">Contact</a>
                    </nav>

                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={onToggleTheme}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme} theme`}
                    >
                        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
                    </button>
                </div>
            </div>
        </header>
    )
}