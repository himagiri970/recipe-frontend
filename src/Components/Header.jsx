
export default function Header() {
    return (
      <header className="ai-header">
        <div className="header-content">
          <img src="/logo.png" alt="AI Chef Logo" className="logo" />
          <div className="header-text">
            <h1>AI CHEF</h1>
            <p>Your personal recipe assistant</p>
          </div>
          <div className="ai-pulse"></div>
        </div>
      </header>
    )
  }