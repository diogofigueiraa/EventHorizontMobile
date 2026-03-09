import './App.css'

const imgIcon = "https://www.figma.com/api/mcp/asset/e09dac4d-3123-4386-b932-f596044c49cc";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/92ff2838-686f-421d-be0c-bfa14a4a27fe";
const imgVector = "https://www.figma.com/api/mcp/asset/2306c370-086f-41af-b78f-ea6408827c7a";
const imgVector1 = "https://www.figma.com/api/mcp/asset/4ae21efb-78b7-449a-8502-5355d8de03ff";
const imgVector2 = "https://www.figma.com/api/mcp/asset/45f82330-5223-4bb1-91aa-992d5ce55d7b";
const imgIconLogo = "https://www.figma.com/api/mcp/asset/bc7e94fe-3373-4cf3-aeb7-2c33ca105387";
const imgIconSignIn = "https://www.figma.com/api/mcp/asset/641be9f4-7d6d-4989-95a9-8aa91331a6d8";
const imgIconCreateAccount = "https://www.figma.com/api/mcp/asset/a3f4cce2-fb7f-45b4-b334-f4135dea6ad4";
const imgIconGoogle = "https://www.figma.com/api/mcp/asset/e074ff29-c94d-400a-8005-769a1c3a7fa0";
const imgIconApple = "https://www.figma.com/api/mcp/asset/376f7697-5587-4687-9346-2b00ae9b9e1e";

export default function App() {
  return (
    <div className="phone-frame">
      {/* Background gradients */}
      <div className="bg-gradient bg-gradient-purple" />
      <div className="bg-gradient bg-gradient-pink" />
      <div className="bg-gradient bg-gradient-blue" />

      {/* Stars */}
      <div className="star" style={{ left: 56, top: 68, width: 2, height: 2, opacity: 0.79 }} />
      <div className="star" style={{ left: 270, top: 102, width: 1, height: 1, opacity: 0.16 }} />
      <div className="star" style={{ left: 30, top: 212, width: 1, height: 1, opacity: 0.57 }} />
      <div className="star" style={{ left: 345, top: 340, width: 1, height: 1, opacity: 0.44 }} />

      {/* Status Bar */}
      <div className="status-bar">
        <span className="status-time">9:41</span>
        <div className="status-icons">
          <img src={imgIcon} alt="" className="status-icon" />
          <img src={imgIcon1} alt="" className="status-icon" />
          <div className="battery-icon">
            <img src={imgVector} alt="" className="battery-bars" />
            <img src={imgVector1} alt="" className="battery-cap" />
            <img src={imgVector2} alt="" className="battery-fill" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Hero Section */}
        <div className="hero">
          {/* App Logo */}
          <div className="logo-container">
            <img src={imgIconLogo} alt="EventHorizon logo" className="logo-icon" />
          </div>

          {/* App Name */}
          <h1 className="app-name">EventHorizon</h1>

          {/* Tagline */}
          <p className="tagline">Explore the Universe of Events</p>

          {/* Headline */}
          <div className="headline">
            <span className="headline-text">Where Every Moment Becomes </span>
            <span className="headline-gradient">Extraordinary</span>
          </div>

          {/* Description */}
          <p className="description">
            Discover curated events, connect with communities, and experience the world like never before.
          </p>

          {/* Pagination dots */}
          <div className="dots">
            <div className="dot dot-active" />
            <div className="dot dot-secondary" />
            <div className="dot dot-inactive" />
          </div>
        </div>

        {/* Auth Section */}
        <div className="auth-section">
          {/* Sign In Button */}
          <button className="btn-primary">
            <img src={imgIconSignIn} alt="" className="btn-icon" />
            <span>Sign In</span>
          </button>

          {/* Create Account Button */}
          <button className="btn-secondary">
            <img src={imgIconCreateAccount} alt="" className="btn-icon" />
            <span>Create Account</span>
          </button>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">or continue with</span>
            <div className="divider-line" />
          </div>

          {/* Social Buttons */}
          <div className="social-buttons">
            <button className="btn-social">
              <img src={imgIconGoogle} alt="" className="btn-icon" />
              <span>Google</span>
            </button>
            <button className="btn-social">
              <img src={imgIconApple} alt="" className="btn-icon" />
              <span>Apple</span>
            </button>
          </div>

          {/* Legal */}
          <p className="legal">
            By continuing, you agree to our{' '}
            <a href="#" className="legal-link">Terms of Service</a>
            <br />
            and <a href="#" className="legal-link">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator">
        <div className="home-bar" />
      </div>
    </div>
  )
}
