import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Basil Vegan Thai - Windmill Ln, Henderson, NV",
  description:
    "Find us at 500 E Windmill Ln in Henderson, serving Green Valley and Las Vegas. Call (702) 357-3837 or visit us for authentic vegan Thai food.",
  openGraph: {
    title: "Contact & Location | Basil Vegan Thai in Henderson",
    description:
      "Visit Basil Vegan Thai on Windmill Lane in Henderson, NV. Authentic vegan Thai food in Green Valley.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <section className="space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Visit Us
          </p>
          <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Two locations serving Henderson and Las Vegas.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700">
            Find Basil Vegan Thai in Henderson&apos;s Green Valley neighborhood
            and our sister restaurant Daikon Vegan Sushi in Las Vegas. Use the
            maps and contact details below to plan your visit.
          </p>
        </div>

        {/* Basil location */}
        <div className="grid overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm md:grid-cols-2">
          <div className="h-72 w-full md:h-full">
            <iframe
              title="Basil Vegan Thai & Sushi location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.066470316889!2d-115.157!3d36.046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBasil%20Vegan%20Thai!5e0!3m2!1sen!2sus!4v1700000000000"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 bg-white p-6">
            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold text-slate-900">
                Basil Vegan Thai &amp; Sushi – Henderson
              </h2>
              <div className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="mb-1 flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                      📍
                    </span>
                    <span>
                      500 E Windmill Ln #145
                      <br />
                      Henderson, NV 89123
                    </span>
                  </p>
                  <p className="ml-8 text-xs text-slate-600">
                    Located near Green Valley &amp; Windmill
                  </p>
                </div>
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                    📞
                  </span>
                  <a
                    href="tel:+17023573837"
                    className="font-medium text-teal hover:text-orange"
                  >
                    (702) 357-3837
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                    ✉️
                  </span>
                  <a
                    href="mailto:basilveganthai01@gmail.com"
                    className="text-teal hover:text-orange"
                  >
                    basilveganthai01@gmail.com
                  </a>
                </p>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                    ⏰
                  </span>
                  <div className="space-y-0.5 text-sm">
                    <p className="font-semibold text-slate-900">Hours</p>
                    <p>Mon–Thu: 11:30am – 9:00pm</p>
                    <p>Fri–Sat: 11:30am – 9:30pm</p>
                    <p>Sun: 12:00pm – 8:30pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=500+E+Windmill+Ln+Henderson+NV+89123"
                className="inline-flex items-center justify-center rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange/90"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Daikon location */}
        <div className="grid overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm md:grid-cols-2">
          <div className="h-72 w-full md:h-full">
            <iframe
              title="Daikon Vegan Sushi & More location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.998!2d-115.252!3d36.194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDaikon%20Vegan%20Sushi!5e0!3m2!1sen!2sus!4v1700000000002"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 bg-white p-6">
            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold text-slate-900">
                Daikon Vegan Sushi &amp; More – Las Vegas
              </h2>
              <div className="space-y-3 text-sm text-slate-700">
                <p className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                    📍
                  </span>
                  <span>
                    7210 W Lake Mead Blvd, Ste 1
                    <br />
                    Las Vegas, NV 89128
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                    📞
                  </span>
                  <a
                    href="tel:+17027493283"
                    className="font-medium text-teal hover:text-orange"
                  >
                    (702) 749-3283
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                    ✉️
                  </span>
                  <a
                    href="mailto:daikonvegan01@gmail.com"
                    className="text-teal hover:text-orange"
                  >
                    daikonvegan01@gmail.com
                  </a>
                </p>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-teal">
                    ⏰
                  </span>
                  <div className="space-y-0.5 text-sm">
                    <p className="font-semibold text-slate-900">Hours</p>
                    <p>Mon–Sat: 11:00am – 9:00pm</p>
                    <p>Sun: 3:00pm – 9:00pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=7210+W+Lake+Mead+Blvd+Ste+1+Las+Vegas+NV+89128"
                className="inline-flex items-center justify-center rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange/90"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
