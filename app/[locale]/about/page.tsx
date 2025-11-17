export default function AboutPage() {
  return (
    <div className="container-balanced py-12 space-y-6">
      <div className="space-y-3">
        <p className="section-title">About Charming Castle</p>
        <p className="section-subtitle">
          Founded in Forest Hill, we blend artful balloon design, modern rentals, and AI-assisted planning to make celebrations effortless.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-glass p-6 space-y-3">
          <p className="font-display text-xl text-charcoal">Our story</p>
          <p className="text-slate-700">
            Charming Castle was created by décor lovers who wanted luxury styling to feel personal. We obsess over palettes, texture, and flow to build experiences
            that feel cinematic yet warm.
          </p>
        </div>
        <div className="card-glass p-6 space-y-3">
          <p className="font-display text-xl text-charcoal">Why clients choose us</p>
          <ul className="list-disc ml-5 text-slate-700 space-y-2">
            <li>Local Forest Hill team with trusted vendor partners</li>
            <li>AI-assisted quotes in under an hour</li>
            <li>White-glove delivery, install, and strike</li>
            <li>Custom Cricut signage and neon options</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
