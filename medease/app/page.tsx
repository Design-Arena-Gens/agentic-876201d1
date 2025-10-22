import Image from "next/image";
import {
  BeakerIcon,
  BoltIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  SparklesIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const categories = [
  {
    name: "Doctor Curated",
    description: "Specialist-approved treatments",
    accent: "from-sky-500 to-cyan-500",
    icon: ShieldCheckIcon,
  },
  {
    name: "Wellness Boost",
    description: "Immunity & daily care essentials",
    accent: "from-emerald-500 to-teal-400",
    icon: SparklesIcon,
  },
  {
    name: "Personal Care",
    description: "Skincare & hygiene must-haves",
    accent: "from-blue-500 to-indigo-500",
    icon: HeartIcon,
  },
  {
    name: "Medical Devices",
    description: "Home diagnostics & monitors",
    accent: "from-cyan-500 to-sky-400",
    icon: BeakerIcon,
  },
];

const featuredProducts = [
  {
    name: "Easibreath Smart Inhaler",
    description: "App-connected relief with real-time dosage coaching.",
    price: "₹3,990",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    tag: "Doctor's Choice",
    dosage: "Salbutamol 100 mcg",
  },
  {
    name: "PureVital Immunity Pack",
    description: "Daily sachets of Vit-C, Zinc, and Probiotics.",
    price: "₹1,249",
    image:
      "https://images.unsplash.com/photo-1618506551562-258859e62245?auto=format&fit=crop&w=900&q=80",
    tag: "Trending",
    dosage: "28 sachets",
  },
  {
    name: "Cardioscan BP Monitor",
    description: "Clinical accuracy with auto-sync health reports.",
    price: "₹2,899",
    image:
      "https://images.unsplash.com/photo-1580281656831-6a097ffd91e1?auto=format&fit=crop&w=900&q=80",
    tag: "Trusted Device",
    dosage: "Bluetooth enabled",
  },
];

const wellnessTips = [
  {
    title: "Morning wellness ritual",
    description:
      "Hydrate, stretch, and take your prescribed supplements before breakfast.",
  },
  {
    title: "Medication reminders synced",
    description:
      "Enable smart alerts to avoid missed doses and duplicate intake.",
  },
  {
    title: "Pharmacist live chat",
    description: "Certified experts available 8am–10pm for quick answers.",
  },
];

const trustBadges = [
  {
    title: "NABL Certified Labs",
    description: "Quality-verified medicines sourced directly from manufacturers.",
    icon: BeakerIcon,
  },
  {
    title: "Same-Day Dispatch",
    description: "Orders placed before 6pm ship the very same day.",
    icon: TruckIcon,
  },
  {
    title: "24×7 Care Team",
    description: "Pharmacists and wellness managers ready on chat.",
    icon: HeartIcon,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-1/2 h-72 w-72 -translate-x-1/3 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-y-1/3 rounded-full bg-emerald-200/30 blur-3xl" />
      <main className="relative mx-auto flex w-full max-w-md flex-col gap-10 px-5 pb-28 pt-6 sm:max-w-2xl">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 shadow-md shadow-sky-100/70 backdrop-blur md:h-12 md:w-12">
              <SparklesIcon className="h-6 w-6 text-sky-500" />
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-semibold text-white shadow-sm">
                24h
              </span>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-600">
                MedEase
              </p>
              <p className="text-base font-semibold text-slate-900">
                Mobile Pharmacy, human care.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-slate-600 shadow-md shadow-teal-100/60 backdrop-blur transition hover:scale-105 hover:text-slate-900"
              aria-label="Notifications"
            >
              <BoltIcon className="h-5 w-5" />
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 text-white shadow-lg shadow-emerald-200/60 transition hover:scale-105"
              aria-label="Cart"
            >
              <ShoppingBagIcon className="h-5 w-5" />
            </button>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-xl shadow-sky-100/80 backdrop-blur">
          <div className="absolute -top-8 right-4 h-24 w-24 rounded-full bg-gradient-to-br from-sky-300/60 to-emerald-300/40 blur-2xl" />
          <div className="flex flex-col gap-5">
            <span className="flex w-fit items-center gap-2 rounded-full bg-sky-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-600">
              <ShieldCheckIcon className="h-4 w-4 text-sky-500" />
              NABL Trusted
            </span>
            <div className="space-y-3 text-slate-900">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Your trusted mobile pharmacy for modern families.
              </h1>
              <p className="text-sm leading-relaxed text-slate-600">
                Discover clinically verified medicines, wellness routines, and
                smart devices delivered with hospital-grade care. All from your
                phone.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <label
                className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-sm shadow-inner shadow-slate-100 ring-1 ring-slate-200/60 focus-within:ring-2 focus-within:ring-sky-300"
                htmlFor="search"
              >
                <MagnifyingGlassIcon className="h-5 w-5 text-sky-500" />
                <input
                  id="search"
                  type="search"
                  placeholder="Search by medicine, condition or brand"
                  className="w-full bg-transparent font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
              </label>
              <div className="flex gap-3">
                <div className="flex flex-1 flex-col rounded-2xl bg-sky-50/80 px-4 py-3 text-xs font-medium text-slate-600 shadow-inner shadow-sky-100">
                  <span className="text-sm font-semibold text-slate-900">
                    12k+
                  </span>
                  Verified medicines ready today
                </div>
                <div className="flex flex-1 flex-col rounded-2xl bg-emerald-50/80 px-4 py-3 text-xs font-medium text-slate-600 shadow-inner shadow-emerald-100">
                  <span className="text-sm font-semibold text-slate-900">
                    4.9★
                  </span>
                  Customer trust score
                </div>
              </div>
            </div>
            <div className="relative mt-2 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-100 via-white to-emerald-100">
              <Image
                src="https://images.unsplash.com/photo-1580281657521-66c2434bf2a2?auto=format&fit=crop&w=900&q=80"
                alt="Pharmacist preparing medicine order"
                width={512}
                height={320}
                className="h-40 w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 text-xs font-medium text-slate-600 shadow-lg shadow-slate-900/10 backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Live order scan
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    QA Check • 3 mins ago
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Sterile pack
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Shop by need
              </h2>
              <p className="text-sm text-slate-500">
                Curated collections made for mobile lifestyles.
              </p>
            </div>
            <button className="text-sm font-semibold text-sky-600">
              View all
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.name}
                  className="min-w-[230px] rounded-3xl border border-white/60 bg-white/80 p-4 shadow-sm shadow-slate-200/60 backdrop-blur"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-white shadow-lg shadow-sky-200/30`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                    Explore
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      →
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Featured care picks
              </h2>
              <p className="text-sm text-slate-500">
                Expert-selected medicines & devices ready to dispatch.
              </p>
            </div>
            <button className="rounded-2xl border border-sky-200/80 bg-white/60 px-3 py-1 text-xs font-semibold text-sky-600 shadow-sm shadow-sky-100">
              Order history
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-xl shadow-slate-200/70 backdrop-blur"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={480}
                    height={320}
                    className="h-44 w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600 shadow-sm">
                    {product.tag}
                  </span>
                </div>
                <div className="space-y-3 px-5 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {product.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                        {product.dosage}
                      </p>
                    </div>
                    <span className="rounded-2xl bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-600">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{product.description}</p>
                  <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200/60 transition hover:scale-[1.01]">
                    <ShoppingBagIcon className="h-4 w-4" />
                    Add to care bag
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur">
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="h-8 w-8 text-emerald-500" />
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Why patients trust MedEase
              </h2>
              <p className="text-sm text-slate-500">
                Built for reliability, privacy, and hospital-grade safety.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.title}
                  className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-slate-50/80 via-white to-emerald-50/80 px-4 py-4 shadow-inner shadow-slate-100"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-500 shadow-md shadow-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-900">
                      {badge.title}
                    </p>
                    <p className="text-xs text-slate-500">{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-4 text-white shadow-xl shadow-slate-900/30">
            <StarIcon className="h-5 w-5" />
            <p className="text-sm font-medium leading-relaxed">
              Rated 4.9/5 by 18,000+ verified customers thanks to transparent
              sourcing, sealed cold-chain delivery, and 100% pharmacist review.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Wellness essentials today
              </h2>
              <p className="text-sm text-slate-500">
                Bite-sized guidance from our care team.
              </p>
            </div>
            <button className="text-sm font-semibold text-emerald-600">
              Chat now
            </button>
          </div>
          <div className="space-y-4">
            {wellnessTips.map((tip, index) => (
              <article
                key={tip.title}
                className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-lg shadow-slate-200/60 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    Tip {index + 1}
                  </span>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-600">
                    2 min read
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{tip.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-sky-500 via-cyan-500 to-emerald-400 p-6 text-white shadow-2xl shadow-sky-200/80">
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -right-10 top-4 h-28 w-28 rounded-full bg-white/10 blur-xl" />
          <div className="relative space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
              Smart refill
            </p>
            <h2 className="text-2xl font-semibold leading-snug">
              Automate refills & dose reminders in one tap.
            </h2>
            <p className="text-sm text-white/80">
              Set refill schedules, share reports with your doctor, and track
              vitals in the MedEase vault.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="flex-1 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-sky-600 shadow-lg shadow-sky-200/60 backdrop-blur transition hover:scale-[1.01]">
                Schedule my first refill
              </button>
              <button className="flex-1 rounded-2xl border border-white/60 bg-transparent px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Talk to a care coach
              </button>
            </div>
          </div>
        </section>
      </main>
      <nav className="fixed bottom-5 left-1/2 z-10 flex w-[90%] max-w-sm -translate-x-1/2 items-center justify-between rounded-3xl bg-white/95 px-6 py-4 text-xs font-semibold text-slate-500 shadow-[0_18px_40px_-15px_rgba(15,23,42,0.35)] backdrop-blur">
        <button className="flex flex-col items-center gap-1 text-sky-600">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <span>Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <HeartIcon className="h-5 w-5" />
          <span>Care Plan</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <BoltIcon className="h-5 w-5" />
          <span>Vitals</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <TruckIcon className="h-5 w-5" />
          <span>Orders</span>
        </button>
      </nav>
    </div>
  );
}
