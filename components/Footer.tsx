export function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-16">
      <div className="container-balanced py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">Charming Castle</h3>
          <p className="text-sm text-slate-200">Forest Hill, Toronto • Luxury décor & rentals</p>
        </div>
        <div>
          <p className="text-sm text-slate-200">info@charmingcastle.ca</p>
          <p className="text-sm text-slate-200">416-555-0185</p>
        </div>
        <div className="text-sm text-slate-300">
          <p>Follow our magic</p>
          <div className="flex gap-3 mt-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">IG</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">FB</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">TT</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Charming Castle. Crafted with love.
      </div>
    </footer>
  );
}
