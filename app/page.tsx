import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-orange-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Win88 Today
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-300">
            <Link href="#platform" className="hover:text-orange-400 transition">Platform</Link>
            <Link href="#services" className="hover:text-orange-400 transition">Services</Link>
            <Link href="#compare" className="hover:text-orange-400 transition">Compare</Link>
            <Link href="#faq" className="hover:text-orange-400 transition">FAQ</Link>
          </div>
          <Link 
            href="https://game.ubet.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition shadow-lg shadow-orange-500/25"
          >
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-400 text-sm font-medium">🎮 Your Gateway to Premium Gaming</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Play Your Way with
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Win88 Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Choose between instant self-serve gaming or premium VIP services. 
            Multiple game providers, crypto payments, and 24/7 availability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://game.ubet.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              🎮 Launch Gaming Platform
            </Link>
            
            <Link 
              href="#services"
              className="bg-slate-800 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-slate-700 transition border border-slate-700 flex items-center justify-center gap-2"
            >
              👑 Premium Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">500+</div>
              <div className="text-gray-500 mt-1">Games Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">10+</div>
              <div className="text-gray-500 mt-1">Game Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">24/7</div>
              <div className="text-gray-500 mt-1">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">5min</div>
              <div className="text-gray-500 mt-1">Withdrawal Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Gaming Platform</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Instant access to hundreds of games. No waiting, no hassle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard icon="⚡" title="Instant Registration" description="Sign up in seconds with email, Google, or Telegram. Start playing immediately." />
            <FeatureCard icon="💳" title="Crypto & Fiat Payments" description="Deposit with USDT, NPR, or other supported currencies. Fast and secure." />
            <FeatureCard icon="🎰" title="Multiple Providers" description="Access games from Pragmatic Play, PGSoft, Habanero, and more." />
            <FeatureCard icon="📱" title="Mobile Ready" description="Play on any device. Telegram Mini App available for seamless mobile gaming." />
            <FeatureCard icon="🔒" title="Secure & Fair" description="All games are provably fair with secure transactions." />
            <FeatureCard icon="💰" title="Fast Withdrawals" description="Automated withdrawals processed within minutes, not days." />
          </div>

          <div className="text-center mt-12">
            <Link href="https://game.ubet.fun" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition">
              Start Playing Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Premium Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              For high rollers and VIP players who want personalized attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard icon="👤" title="Dedicated Agent" description="Personal account manager for all your gaming needs." />
            <FeatureCard icon="💎" title="VIP Treatment" description="Exclusive bonuses, higher limits, and priority support." />
            <FeatureCard icon="📞" title="24/7 Direct Line" description="Contact your agent anytime via Telegram or WhatsApp." />
            <FeatureCard icon="🏦" title="Flexible Deposits" description="Bank transfer, crypto, or other payment methods." />
            <FeatureCard icon="🎁" title="Custom Bonuses" description="Tailored promotions based on your play style." />
            <FeatureCard icon="🛡️" title="Priority Processing" description="VIP queue for deposits and withdrawals." />
          </div>

          <div className="text-center mt-12">
            <Link href="https://t.me/win88today" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-600 transition border border-slate-600">
              Contact for VIP Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Which Option is Right for You?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Compare our self-serve platform with premium VIP services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-6 text-gray-400 font-medium">Feature</th>
                  <th className="py-4 px-6 text-orange-400 font-semibold">Gaming Platform</th>
                  <th className="py-4 px-6 text-purple-400 font-semibold">Premium Services</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <ComparisonRow feature="Registration" platform="Instant (1 min)" premium="Contact required" />
                <ComparisonRow feature="Deposits" platform="Auto (USDT/NPR)" premium="Manual processing" />
                <ComparisonRow feature="Withdrawals" platform="Automated (5-10 min)" premium="Priority (30 min)" />
                <ComparisonRow feature="Support" platform="24/7 Chat/Bot" premium="Dedicated agent" />
                <ComparisonRow feature="Min Deposit" platform="500 NPR / 5 USDT" premium="10,000 NPR" />
                <ComparisonRow feature="Bonuses" platform="Standard promotions" premium="Custom VIP bonuses" />
                <ComparisonRow feature="Limits" platform="Standard limits" premium="Higher limits" />
                <ComparisonRow feature="Best For" platform="Casual players" premium="High rollers" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            <FAQItem question="How do I get started?" answer="Visit game.ubet.fun, sign up with your email or Telegram, make a deposit, and start playing. The whole process takes less than 5 minutes." />
            <FAQItem question="What payment methods are accepted?" answer="We accept USDT (TRC20), NPR bank transfers, and other local payment methods. Crypto deposits are processed instantly." />
            <FAQItem question="How fast are withdrawals?" answer="Platform withdrawals are automated and typically processed within 5-10 minutes. Premium service withdrawals are manually reviewed and processed within 30 minutes." />
            <FAQItem question="Is it safe to play?" answer="Yes, all games are from licensed providers with provably fair mechanics. Your funds are secured with industry-standard encryption." />
            <FAQItem question="Can I use Telegram to play?" answer="Yes! We have a Telegram Mini App that allows you to play directly within Telegram. No app download required." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Playing?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of players enjoying the best gaming experience.
          </p>
          <Link href="https://game.ubet.fun" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-xl">
            🎮 Launch Gaming Platform
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                Win88 Today
              </div>
              <p className="text-gray-500 text-sm">Your gateway to premium gaming experiences.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="https://game.ubet.fun" className="hover:text-orange-400 transition">Launch App</Link></li>
                <li><Link href="#platform" className="hover:text-orange-400 transition">Features</Link></li>
                <li><Link href="#compare" className="hover:text-orange-400 transition">Compare Plans</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="#faq" className="hover:text-orange-400 transition">FAQ</Link></li>
                <li><Link href="https://t.me/win88today" className="hover:text-orange-400 transition">Telegram</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/terms" className="hover:text-orange-400 transition">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Win88 Today. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

// Components
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ComparisonRow({ feature, platform, premium }: { feature: string; platform: string; premium: string }) {
  return (
    <tr className="border-b border-slate-700/50">
      <td className="py-4 px-6 text-white font-medium">{feature}</td>
      <td className="py-4 px-6">{platform}</td>
      <td className="py-4 px-6">{premium}</td>
    </tr>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
      <summary className="flex justify-between items-center p-6 cursor-pointer text-white font-semibold hover:text-orange-400 transition">
        {question}
        <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div className="px-6 pb-6 text-gray-400">{answer}</div>
    </details>
  );
}
