export default function Filters() {
  return (
    <aside className="filters">
      <div className="filter-group">
        <div className="filter-title">Condition</div>
        <label><input type="checkbox" /> NWT</label>
        <label><input type="checkbox" /> Excellent</label>
        <label><input type="checkbox" /> Good</label>
        <label><input type="checkbox" /> Fair</label>
      </div>
      <div className="filter-group">
        <div className="filter-title">Size</div>
        <div className="pills">
          <button>XS</button><button>S</button><button>M</button><button>L</button><button>XL</button>
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-title">Brand</div>
        <input placeholder="Search brand" />
      </div>
      <div className="filter-group">
        <div className="filter-title">Price</div>
        <div className="range">
          <input type="number" placeholder="$0" />
          <span>–</span>
          <input type="number" placeholder="$500" />
        </div>
      </div>
      <label className="toggle"><input type="checkbox" /> Verified Only</label>
    </aside>
  )
}