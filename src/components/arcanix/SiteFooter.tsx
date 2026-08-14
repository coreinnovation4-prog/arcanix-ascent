import { Link } from "@tanstack/react-router";
import { brand, contact, navLinks } from "@/data/arcanix";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-navy/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg tracking-[0.22em] text-gold-gradient">{brand.name}</p>
          <p className="label-caps mt-2">{brand.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {brand.college} · {brand.department} · {brand.location}
          </p>
        </div>
        <div>
          <p className="label-caps">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-caps">The Guild Hall</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phones.join(", ")}</li>
            <li>
              <Link to="/register" className="text-gold transition-colors hover:text-gold-bright">
                Register Now →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {brand.name} — {brand.department}, {brand.college}. All symposium details marked
        TBA are placeholders.
      </div>
    </footer>
  );
}
