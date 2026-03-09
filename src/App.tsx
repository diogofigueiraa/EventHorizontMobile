import './App.css'

const imgIconSignal = 'https://www.figma.com/api/mcp/asset/72fd8337-5356-40d9-8748-fec14fa70f3f'
const imgIconWifi = 'https://www.figma.com/api/mcp/asset/f964528f-aa32-417a-97aa-cb3d0d73e72e'
const imgBatteryBars = 'https://www.figma.com/api/mcp/asset/c6d0f6c0-a901-460b-bc16-1855c59828e2'
const imgBatteryCap = 'https://www.figma.com/api/mcp/asset/39c7d3e2-7cd2-4a2d-bf2c-a6400ce698ee'
const imgBatteryFill = 'https://www.figma.com/api/mcp/asset/fc6a2936-a1c3-45fe-84c8-007b5bcd5219'
const imgLogo = 'https://www.figma.com/api/mcp/asset/24cfd414-b087-4ca2-b903-f31229be0d2d'
const imgIconSignIn = 'https://www.figma.com/api/mcp/asset/5a04cc16-cbd0-4eb3-be70-4614c0b38166'
const imgIconCreateAccount = 'https://www.figma.com/api/mcp/asset/1a8110ef-9087-45e9-92eb-986671dccbe5'
const imgIconGoogle = 'https://www.figma.com/api/mcp/asset/dd0bee0d-a719-49df-98e7-f33f3bb895d6'
const imgIconApple = 'https://www.figma.com/api/mcp/asset/ed2d2aef-76a0-48dc-b08e-c0924a6afdd9'

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
          <img src={imgIconSignal} alt="" className="status-icon" />
          <img src={imgIconWifi} alt="" className="status-icon" />
          <div className="battery-icon">
            <img src={imgBatteryBars} alt="" className="battery-bars" />
            <img src={imgBatteryCap} alt="" className="battery-cap" />
            <img src={imgBatteryFill} alt="" className="battery-fill" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Hero Section */}
        <div className="hero">
          {/* App Logo */}
          <div className="logo-container">
            <img src={imgLogo} alt="EventHorizon logo" className="logo-icon" />
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
