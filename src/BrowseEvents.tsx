import './BrowseEvents.css'

const imgCarouselCard1 = 'https://www.figma.com/api/mcp/asset/5f087037-772d-492f-98eb-cd4501a20978'
const imgCarouselCard2 = 'https://www.figma.com/api/mcp/asset/62689dda-c48b-4342-a80b-27d3f1563aba'
const imgBackground = 'https://www.figma.com/api/mcp/asset/1779a063-7325-44e3-8dd4-88d1f75d0469'
const imgBackground1 = 'https://www.figma.com/api/mcp/asset/7f5774fe-4dfb-44b6-95f2-bc9c0f6c739d'
const imgBackground2 = 'https://www.figma.com/api/mcp/asset/a131947b-a2a5-489d-b054-b42f4fad0f06'
const imgChipAll = 'https://www.figma.com/api/mcp/asset/64262e80-477c-4158-b989-ca9c5d31c6ae'
const imgChipMusic = 'https://www.figma.com/api/mcp/asset/17d87303-1af4-4592-856e-a1603e802598'
const imgChipArts = 'https://www.figma.com/api/mcp/asset/6076f087-dcf2-4b2d-9fd8-7942bea15fb2'
const imgChipTech = 'https://www.figma.com/api/mcp/asset/517d1617-cf9b-40a5-ae00-9ad61000d8c3'
const imgChipFood = 'https://www.figma.com/api/mcp/asset/79f9d399-ff47-47c9-8640-0708dd24f92b'
const imgCalendar = 'https://www.figma.com/api/mcp/asset/cf663d69-d950-46e2-b9ba-09cf82e4bfff'
const imgBookmark = 'https://www.figma.com/api/mcp/asset/e2ce97f5-05b4-4c5c-94e2-d6a5d52e61e2'
const imgPin = 'https://www.figma.com/api/mcp/asset/f041f316-e100-4263-a28d-b061b9bb0b30'
const imgProfile = 'https://www.figma.com/api/mcp/asset/5e3e2f20-03ba-4ff3-910e-e1ad9a4dfbef'
const imgSearch = 'https://www.figma.com/api/mcp/asset/94e6ef43-4d72-4ac8-8705-816a975f4228'
const imgNavExplore = 'https://www.figma.com/api/mcp/asset/c9e5485f-9c6b-48e0-9ea2-b0861df45cd4'
const imgNavSaved = 'https://www.figma.com/api/mcp/asset/30f5a416-8037-4a5d-96a7-7b84085f1259'
const imgNavTickets = 'https://www.figma.com/api/mcp/asset/f5c7c76a-70e6-4bd3-977b-d5e306bcc942'
const imgNavAlerts = 'https://www.figma.com/api/mcp/asset/0dffb684-86b0-4b7d-9b2f-e10fd67d1245'

export default function BrowseEvents() {
  return (
    <div className="be-screen">
      {/* ── Scrollable content ── */}
      <div className="be-scroll">
        {/* Spacer for sticky header */}
        <div className="be-header-spacer" />

        {/* Category Chips */}
        <div className="be-chips">
          <button className="be-chip be-chip-active">
            <img src={imgChipAll} alt="" className="be-chip-icon" />
            All
          </button>
          <button className="be-chip be-chip-inactive">
            <img src={imgChipMusic} alt="" className="be-chip-icon" />
            Music
          </button>
          <button className="be-chip be-chip-inactive">
            <img src={imgChipArts} alt="" className="be-chip-icon" />
            Arts
          </button>
          <button className="be-chip be-chip-inactive">
            <img src={imgChipTech} alt="" className="be-chip-icon" />
            Tech
          </button>
          <button className="be-chip be-chip-inactive">
            <img src={imgChipFood} alt="" className="be-chip-icon" />
            Food
          </button>
        </div>

        {/* Trending Now */}
        <div className="be-trending">
          <div className="be-section-header">
            <h2 className="be-section-title">Trending Now</h2>
            <button className="be-section-link">See all</button>
          </div>
          <div className="be-carousel">
            {/* Card 1 */}
            <div className="be-carousel-card">
              <img src={imgCarouselCard1} alt="Neon Pulse Festival" className="be-card-bg" />
              <div className="be-card-gradient" />
              <span className="be-card-badge be-card-badge-hot">Hot Pick</span>
              <div className="be-card-info">
                <p className="be-card-name">Neon Pulse Festival</p>
                <div className="be-card-date">
                  <img src={imgCalendar} alt="" />
                  <span className="be-card-date-text">July 14–16</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="be-carousel-card">
              <img src={imgCarouselCard2} alt="Canvas & Cocktails" className="be-card-bg" />
              <div className="be-card-gradient" />
              <span className="be-card-badge be-card-badge-selling">Selling Fast</span>
              <div className="be-card-info">
                <p className="be-card-name">Canvas &amp; Cocktails</p>
                <div className="be-card-date">
                  <img src={imgCalendar} alt="" />
                  <span className="be-card-date-text">Tomorrow, 7 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Events */}
        <div className="be-section-header">
          <h2 className="be-section-title">Nearby Events</h2>
        </div>
        <div className="be-nearby">
          {/* Event Card 1 */}
          <div className="be-event-card">
            <div className="be-event-img-wrap">
              <img src={imgBackground} alt="Taste of the Heights" className="be-event-bg" />
              <button className="be-event-bookmark" aria-label="Save">
                <img src={imgBookmark} alt="" />
              </button>
              <div className="be-event-price">$25.00</div>
            </div>
            <div className="be-event-details">
              <div className="be-event-meta">
                <p className="be-event-name">Taste of the Heights</p>
                <div className="be-event-location">
                  <img src={imgPin} alt="" />
                  <span className="be-event-location-text">Downtown Plaza</span>
                </div>
              </div>
              <div className="be-event-date-badge">
                <span className="be-event-month">Jun</span>
                <span className="be-event-day">22</span>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="be-event-card">
            <div className="be-event-img-wrap">
              <img src={imgBackground1} alt="Future Tech Summit '24" className="be-event-bg" />
              <button className="be-event-bookmark" aria-label="Save">
                <img src={imgBookmark} alt="" />
              </button>
              <div className="be-event-price">Free</div>
            </div>
            <div className="be-event-details">
              <div className="be-event-meta">
                <p className="be-event-name">Future Tech Summit '24</p>
                <div className="be-event-location">
                  <img src={imgPin} alt="" />
                  <span className="be-event-location-text">Innovation Hub</span>
                </div>
              </div>
              <div className="be-event-date-badge">
                <span className="be-event-month">Jul</span>
                <span className="be-event-day">05</span>
              </div>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="be-event-card">
            <div className="be-event-img-wrap">
              <img src={imgBackground2} alt="Midnight Jazz Sessions" className="be-event-bg" />
              <button className="be-event-bookmark" aria-label="Save">
                <img src={imgBookmark} alt="" />
              </button>
              <div className="be-event-price">$45.00</div>
            </div>
            <div className="be-event-details">
              <div className="be-event-meta">
                <p className="be-event-name">Midnight Jazz Sessions</p>
                <div className="be-event-location">
                  <img src={imgPin} alt="" />
                  <span className="be-event-location-text">The Blue Note</span>
                </div>
              </div>
              <div className="be-event-date-badge">
                <span className="be-event-month">Jul</span>
                <span className="be-event-day">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky Header ── */}
      <div className="be-header">
        <div className="be-header-row">
          <h1 className="be-title">Browse Events</h1>
          <button className="be-profile-btn" aria-label="Profile">
            <img src={imgProfile} alt="" />
          </button>
        </div>
        <div className="be-search-wrap">
          <img src={imgSearch} alt="" className="be-search-icon" />
          <input
            type="text"
            className="be-search-input"
            placeholder="Artists, venues, or cities..."
            readOnly
          />
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <nav className="be-bottom-nav">
        <button className="be-nav-item">
          <img src={imgNavExplore} alt="" className="be-nav-icon" />
          <span className="be-nav-label be-nav-label-active">Explore</span>
          <div className="be-nav-dot" />
        </button>
        <button className="be-nav-item">
          <img src={imgNavSaved} alt="" className="be-nav-icon" style={{ height: '18.35px' }} />
          <span className="be-nav-label be-nav-label-inactive">Saved</span>
        </button>
        <button className="be-nav-item">
          <img src={imgNavTickets} alt="" className="be-nav-icon" style={{ height: '16px' }} />
          <span className="be-nav-label be-nav-label-inactive">Tickets</span>
        </button>
        <button className="be-nav-item">
          <img src={imgNavAlerts} alt="" className="be-nav-icon" style={{ width: '16px', height: '20px' }} />
          <span className="be-nav-label be-nav-label-inactive">Alerts</span>
        </button>
      </nav>
    </div>
  )
}
