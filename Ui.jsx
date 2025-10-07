import React from 'react';

// Influtics-React-UI.jsx
// Single-file React component that recreates the provided influencer landing UI.
// Requirements: TailwindCSS must be configured in your project.
// Place your images in public/images/ and update the paths below.

export default function InfluticsUI() {
  const social = [
    { name: 'Facebook', handle: 'LindaSusan', followers: '74K', icon: '📘' },
    { name: 'Instagram', handle: '@lindasusan', followers: '240K', icon: '📸' },
    { name: 'TikTok', handle: '@linda', followers: '120K', icon: '🎵' },
    { name: 'YouTube', handle: 'LindaSusan', followers: '64K', icon: '▶️' },
  ];

  const reels = new Array(4).fill(0).map((_, i) => ({
    id: i + 1,
    title: 'Can Robot Solve This...?',
    views: `${12 + i}K views`,
    thumb: `/images/reel-${i + 1}.jpg`,
  }));

  const premium = new Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Premium video ${i + 1}`,
    thumb: `/images/premium-${i + 1}.jpg`,
    price: '$' + (5 + i),
  }));

  const articles = new Array(3).fill(0).map((_, i) => ({
    id: i + 1,
    title: 'Many of those Products Offer the Potential',
    thumb: `/images/article-${i + 1}.jpg`,
    author: 'Linda',
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-pink-600">Influtics</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-pink-600">Home</a>
            <a href="#about" className="hover:text-pink-600">About Me</a>
            <a href="#videos" className="hover:text-pink-600">Videos</a>
            <a href="#pages" className="hover:text-pink-600">Pages</a>
            <a href="#blog" className="hover:text-pink-600">Blog</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-sm">Follow Me</button>
          <button className="text-sm px-3 py-2 border rounded-full">Sign In</button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[url('/images/hero-pattern.jpg')] bg-cover bg-center rounded-2xl p-8">
          <div className="py-6">
            <div className="flex items-center gap-3">
              <img src="/images/avatar-1.jpg" alt="avatar" className="w-12 h-12 rounded-full border-4 border-white shadow" />
              <div>
                <div className="text-xs text-white/90">@lindasusan</div>
                <div className="text-sm text-white/80">74K Followers</div>
              </div>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">I'm <span className="text-yellow-50">Linda Susan</span><br/>Beauty & Lifestyle Influencer</h1>
            <p className="mt-4 text-white/90 max-w-xl">Creator. Storyteller. Beauty lover. Sharing daily tips, reels, and collabs.</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-white text-pink-600 px-5 py-2 rounded-full font-semibold">About Me</button>
              <button className="border border-white text-white px-5 py-2 rounded-full">Contact Me</button>
            </div>

            <div className="mt-8 flex gap-3">
              {social.map((s) => (
                <div key={s.name} className="bg-white/90 rounded-xl px-4 py-3 flex items-center gap-3 shadow">
                  <div className="text-2xl">{s.icon}</div>
                  <div>
                    <div className="text-sm font-semibold">{s.name}</div>
                    <div className="text-xs text-gray-600">{s.followers}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src="/images/hero-avatar.jpg" alt="hero" className="w-[320px] md:w-[420px] rounded-2xl shadow-2xl -mt-6" />
          </div>
        </div>
      </section>

      {/* Latest Reels */}
      <main className="max-w-6xl mx-auto px-6 mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Latest Video Reels</h2>
          <div className="flex gap-3 items-center">
            <button className="p-2 bg-white rounded-full shadow">◀</button>
            <button className="p-2 bg-white rounded-full shadow">▶</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {reels.map((r) => (
            <div key={r.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative">
                <img src={r.thumb} alt={r.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 rounded-full p-3 text-white">▶</div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm">{r.title}</h3>
                <div className="text-xs text-gray-500 mt-1">{r.views}</div>
              </div>
            </div>
          ))}
        </div>

        {/* What Will I Give You / Services */}
        <section id="services" className="mt-10 bg-white rounded-2xl p-6 shadow">
          <div className="flex items-start gap-6">
            <aside className="w-48">
              <ul className="space-y-3">
                <li className="px-3 py-2 rounded-lg bg-pink-50 font-semibold">Brand Collaborations</li>
                <li className="px-3 py-2 rounded-lg text-gray-600">Empowering Creators</li>
                <li className="px-3 py-2 rounded-lg text-gray-600">Content Planning</li>
                <li className="px-3 py-2 rounded-lg text-gray-600">Social Media Management</li>
              </ul>
            </aside>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Strategy Development</h3>
              <p className="text-sm text-gray-600 mt-2">I build creative content strategies that align with brand goals and drive engagement across platforms.</p>

              <ul className="list-disc list-inside mt-3 text-sm text-gray-600 space-y-1">
                <li>Audience research and persona mapping</li>
                <li>Content calendar creation</li>
                <li>Performance reporting and optimization</li>
              </ul>

              <div className="mt-4">
                <button className="bg-pink-600 text-white px-4 py-2 rounded-full">View All Services</button>
              </div>
            </div>
          </div>
        </section>

        {/* About & Upcoming Lives */}
        <section id="about" className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 rounded-2xl">
            <h3 className="text-2xl font-bold">I'm a Social Media influencer & digital content creator</h3>
            <p className="mt-3 text-gray-200">Creating lifestyle and beauty content with a focus on authenticity. I collaborate with brands for product launches, long-term partnerships, and paid promotions.</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>Authentic storytelling in short-form and long-form videos</li>
              <li>High-converting product demos and reviews</li>
              <li>Event coverage and live sessions</li>
            </ul>
            <div className="mt-6">
              <button className="bg-pink-500 px-4 py-2 rounded-full">Contact Me</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold">My Upcoming Lives</h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <img src="/images/live-1.jpg" alt="live" className="w-20 h-14 object-cover rounded-lg" />
                <div>
                  <div className="text-sm font-semibold">Smiley woman pop party studio medium shot</div>
                  <div className="text-xs text-gray-500 mt-1">Jan 28, 2025</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/images/live-2.jpg" alt="live" className="w-20 h-14 object-cover rounded-lg" />
                <div>
                  <div className="text-sm font-semibold">Smiley woman pop party studio medium shot</div>
                  <div className="text-xs text-gray-500 mt-1">Jan 26, 2025</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Premium Videos */}
        <section id="premium" className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">My Latest Premium Videos</h3>
            <a href="#" className="text-pink-600">View All Videos</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {premium.map((p) => (
              <div key={p.id} className="bg-white rounded-lg overflow-hidden shadow">
                <div className="relative">
                  <img src={p.thumb} alt={p.title} className="w-full h-40 object-cover" />
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs">{p.price}</div>
                </div>
                <div className="p-3 text-sm">{p.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-pink-100 to-indigo-100 p-6 rounded-2xl">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg">Let's Work Together on your next Project</h4>
            <p className="text-sm text-gray-600 mt-2">Contact me for collaborations, product reviews, and partnerships.</p>
            <form className="mt-4 space-y-3">
              <input className="w-full border px-3 py-2 rounded" placeholder="Your Name" />
              <input className="w-full border px-3 py-2 rounded" placeholder="Your Email Address" />
              <textarea className="w-full border px-3 py-2 rounded" placeholder="Write Message" rows={4} />
              <button className="bg-pink-600 text-white px-4 py-2 rounded">Send Message</button>
            </form>
          </div>

          <div className="flex items-center justify-center">
            <img src="/images/contact-hero.jpg" alt="contact" className="w-72 rounded-xl shadow" />
          </div>
        </section>

        {/* Articles */}
        <section className="mt-12">
          <h3 className="font-bold text-lg">Latest Articles & News</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {articles.map((a) => (
              <article key={a.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={a.thumb} alt={a.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="text-xs text-gray-500">{a.author}</div>
                  <h4 className="font-semibold mt-2">{a.title}</h4>
                  <a href="#" className="text-pink-600 text-sm mt-3 inline-block">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 bg-black text-white rounded-2xl p-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-lg">Influtics</h4>
              <div className="text-sm text-gray-300 mt-1">contact.me@gmail.com</div>
            </div>
            <div className="flex gap-3 items-center">
              <input className="px-3 py-2 rounded-l" placeholder="Email Address" />
              <button className="bg-pink-600 px-4 py-2 rounded-r">Get Newsletter</button>
            </div>
          </div>
        </footer>

      </main>

    </div>
  );
}
