import './SignIn.css'

const imgIconSignal = 'https://www.figma.com/api/mcp/asset/72fd8337-5356-40d9-8748-fec14fa70f3f'
const imgIconWifi = 'https://www.figma.com/api/mcp/asset/f964528f-aa32-417a-97aa-cb3d0d73e72e'
const imgBatteryBars = 'https://www.figma.com/api/mcp/asset/c6d0f6c0-a901-460b-bc16-1855c59828e2'
const imgBatteryCap = 'https://www.figma.com/api/mcp/asset/39c7d3e2-7cd2-4a2d-bf2c-a6400ce698ee'
const imgBatteryFill = 'https://www.figma.com/api/mcp/asset/fc6a2936-a1c3-45fe-84c8-007b5bcd5219'
const imgLogo = 'https://www.figma.com/api/mcp/asset/24cfd414-b087-4ca2-b903-f31229be0d2d'
const imgIconGoogle = 'https://www.figma.com/api/mcp/asset/dd0bee0d-a719-49df-98e7-f33f3bb895d6'
const imgIconApple = 'https://www.figma.com/api/mcp/asset/ed2d2aef-76a0-48dc-b08e-c0924a6afdd9'

export default function SignIn() {
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
      <div className="si-content">

        {/* Back Button */}
        <div className="si-top-bar">
          <button className="si-back-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Header */}
        <div className="si-header">
          <div className="si-logo-sm">
            <img src={imgLogo} alt="EventHorizon logo" className="si-logo-icon" />
          </div>
          <p className="si-eyebrow">Welcome Back</p>
          <h1 className="si-title">Sign In</h1>
          <p className="si-subtitle">to your EventHorizon account</p>
        </div>

        {/* Form */}
        <div className="si-form">
          {/* Email Field */}
          <div className="si-field">
            <label className="si-label">Email Address</label>
            <div className="si-input-wrap">
              <svg className="si-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1.5" y="3.75" width="15" height="10.5" rx="2" stroke="rgba(168,85,247,0.7)" strokeWidth="1.2"/>
                <path d="M1.5 6.75L9 11.25L16.5 6.75" stroke="rgba(168,85,247,0.7)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <input
                className="si-input"
                type="email"
                placeholder="you@example.com"
                readOnly
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="si-field">
            <div className="si-label-row">
              <label className="si-label">Password</label>
              <a href="#" className="si-forgot">Forgot Password?</a>
            </div>
            <div className="si-input-wrap">
              <svg className="si-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3.75" y="7.5" width="10.5" height="8.25" rx="1.5" stroke="rgba(168,85,247,0.7)" strokeWidth="1.2"/>
                <path d="M6 7.5V5.25C6 3.59315 7.34315 2.25 9 2.25C10.6569 2.25 12 3.59315 12 5.25V7.5" stroke="rgba(168,85,247,0.7)" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="9" cy="11.25" r="1.125" fill="rgba(168,85,247,0.7)"/>
              </svg>
              <input
                className="si-input"
                type="password"
                placeholder="••••••••"
                readOnly
              />
              <button className="si-eye-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3.75C5.25 3.75 2.25 9 2.25 9C2.25 9 5.25 14.25 9 14.25C12.75 14.25 15.75 9 15.75 9C15.75 9 12.75 3.75 9 3.75Z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="9" r="2.25" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="si-btn-primary">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Sign In</span>
        </button>

        {/* Divider */}
        <div className="si-divider">
          <div className="si-divider-line" />
          <span className="si-divider-text">or continue with</span>
          <div className="si-divider-line" />
        </div>

        {/* Social Buttons */}
        <div className="si-social-buttons">
          <button className="si-btn-social">
            <img src={imgIconGoogle} alt="" className="si-btn-icon" />
            <span>Google</span>
          </button>
          <button className="si-btn-social">
            <img src={imgIconApple} alt="" className="si-btn-icon" />
            <span>Apple</span>
          </button>
        </div>

        {/* Create Account Link */}
        <p className="si-create-link">
          Don't have an account?{' '}
          <a href="#" className="si-link">Create Account</a>
        </p>

        {/* Legal */}
        <p className="si-legal">
          By continuing, you agree to our{' '}
          <a href="#" className="si-legal-link">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="si-legal-link">Privacy Policy</a>
        </p>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator">
        <div className="home-bar" />
      </div>
    </div>
  )
}
