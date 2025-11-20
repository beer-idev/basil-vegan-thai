import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vegan Thai Catering Henderson | Plant-Based Catering for Events",
  description:
    "Basil Vegan Thai offers plant-based Thai catering in Henderson & Las Vegas. Perfect for corporate events, weddings & parties. Request a quote today.",
  openGraph: {
    title: "Plant-Based Thai Catering in Henderson | Basil Vegan Thai",
    description:
      "Plan your next event with plant-based Thai catering from Basil Vegan Thai in Henderson. Perfect for parties, corporate events, and celebrations.",
  },
};

export default function CateringPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Catering
          </p>
          <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Plant-based Thai catering for every celebration.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700">
            From intimate gatherings to corporate events, Basil Vegan Thai
            offers flexible,{" "}
            <span className="font-medium">
              100% plant-based Thai catering in Henderson and Las Vegas
            </span>
            . Build a menu around favorites like vegan Tom Yum, Panang curry,
            Pad Thai, and award-winning sushi rolls.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4 rounded-3xl border border-emerald-50 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-slate-900">
              Sample catering ideas
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Office lunches with curry and noodle trays</li>
              <li>• Wedding receptions with mixed sushi platters</li>
              <li>• Wellness retreats with gluten-free options</li>
              <li>• Neighborhood gatherings across Green Valley</li>
            </ul>
            <p className="text-sm text-slate-700">
              We can accommodate many dietary needs including gluten-free and
              allium-sensitive menus. Share your requirements in the form and
              our team will follow up with suggestions.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-emerald-50 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-slate-900">
              Catering inquiry form
            </h2>
            <form className="space-y-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="fullName" className="font-medium text-slate-800">
                  Full name (required)
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="e.g. Nina Simone"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="phone" className="font-medium text-slate-800">
                  Phone (required)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="e.g. (702) 357-3837"
                  required
                />
              </div>

              <div className="space-y-2 rounded-2xl bg-cream px-3 py-3 text-xs text-slate-700">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    className="mt-0.5 h-4 w-4 rounded border-emerald-200 text-orange focus:ring-2 focus:ring-orange/40"
                  />
                  <span>
                    I agree to receive marketing text messages from Basil Vegan
                    Thai &amp; Sushi about specials, events, and other exclusive
                    offers. Message and data rates may apply. Your consent is
                    not required to make a reservation or use our services.
                  </span>
                </label>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="font-medium text-slate-800">
                  Email (required)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="e.g. you@example.com"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="company" className="font-medium text-slate-800">
                  Company (optional)
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="Name of your business"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="people" className="font-medium text-slate-800">
                  Number of people (required)
                </label>
                <input
                  id="people"
                  name="people"
                  type="number"
                  min={1}
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="e.g. 40"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="date" className="font-medium text-slate-800">
                    Event date (required)
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="time" className="font-medium text-slate-800">
                    Event time (required)
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="occasion"
                  className="font-medium text-slate-800"
                >
                  Occasion (required)
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an occasion
                  </option>
                  <option value="corporate">Corporate event</option>
                  <option value="wedding">Wedding / reception</option>
                  <option value="party">Private party</option>
                  <option value="retreat">Retreat / workshop</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="serviceType"
                  className="font-medium text-slate-800"
                >
                  Type of catering service (required)
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select service type
                  </option>
                  <option value="pickup">Pickup trays</option>
                  <option value="delivery">Delivery only</option>
                  <option value="full-service">Full-service catering</option>
                </select>
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="budget"
                  className="font-medium text-slate-800"
                >
                  Budget per person (optional)
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="number"
                  min={0}
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="e.g. 30"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="requests"
                  className="font-medium text-slate-800"
                >
                  Description / requests (optional)
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={3}
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="Any special requests, menu ideas, or dietary needs?"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="referral"
                  className="font-medium text-slate-800"
                >
                  How did you hear about us? (optional)
                </label>
                <input
                  id="referral"
                  name="referral"
                  type="text"
                  className="w-full rounded-lg border border-emerald-100 bg-cream px-3 py-2 text-sm text-slate-900 outline-none ring-orange/0 transition focus:border-orange focus:ring-2 focus:ring-orange/40"
                  placeholder="Friend, social media, Google, etc."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
              >
                Submit inquiry
              </button>
            </form>
            <p className="text-xs text-slate-600">
              This form is for planning purposes only. A team member will follow
              up to confirm availability and finalize your catering order.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
