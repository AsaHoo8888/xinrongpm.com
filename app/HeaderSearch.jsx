import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <details className="header-search">
      <summary aria-label="Search website">
        <Search size={20} aria-hidden="true" />
      </summary>
      <form action="/search" className="header-search-panel">
        <label>
          <span>Search</span>
          <input name="q" placeholder="Search products, news..." type="search" />
        </label>
        <button type="submit">
          <Search size={18} aria-hidden="true" />
        </button>
      </form>
    </details>
  );
}
