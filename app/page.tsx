import Link from 'next/link';
import Script from 'next/script';

// JSON-LD Schema for SEO & AI
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Win88Today Gaming Platform",
  "url": "https://win88.today",
  "logo": "https://win88.today/logo.png",
  "sameAs": ["https://t.me/WT88_User_Bot"],
  "description": "Win88Today Gaming Platform — play on web or Telegram Mini App with top providers, instant wallet, and blockchain-verified transactions.",
  "offers": {
    "@type": "Offer",
    "url": "https://game.ubet.fun",
    "category": "Online Gaming"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Win88Today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Win88Today is a multi-platform gaming hub offering web and Telegram Mini App play with top providers and secure wallet management."
      }
    },
    {
      "@type": "Question",
      "name": "Which game providers are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Supported providers include Pragmatic Play, W88, Habanero, DT Gaming, PG Soft, NetEnt, Microgaming, and Play'n GO."
      }
    },
    {
      "@type": "Question",
      "name": "How do I play via Telegram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open Telegram, launch @WT88_User_Bot, tap Open to start the Mini App, and play instantly without a separate login."
      }
    },
    {
      "@type": "Question",
      "name": "How do deposits and withdrawals work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top up from the Top-up section, withdraw from the Withdraw section with your wallet address, and verify transactions on TronScan."
      }
    },
    {
      "@type": "Question",
      "name": "Is Win88Today secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Win88Today uses encrypted connections, keeps secrets server-side, logs transactions, and supports blockchain verification for transparency."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
            <Link href="#providers" className="hover:text-orange-400 transition">Providers</Link>
            <Link href="#telegram" className="hover:text-orange-400 transition">Telegram</Link>
            <Link href="#services" className="hover:text-orange-400 transition">Services</Link>
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
            <span className="text-orange-400 text-sm font-medium">🎮 Your All-in-One Gaming Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Win88 Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Play on web or Telegram Mini App. Top providers, instant wallet, and blockchain-verified transactions.
          </p>

          <p className="text-lg text-gray-500 mb-4 max-w-2xl mx-auto">
            Win88Today Gaming Platform is a modern multi-platform gaming hub that unites top providers in one seamless experience. Play on desktop, mobile, or inside Telegram with secure wallet management and instant transactions.
          </p>
          
          <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
            Established heritage with roots dating back to 2018 (see <Link href="https://web.archive.org/web/20180203163406/https://win88.today/" target="_blank" className="text-orange-400 hover:text-orange-300">web archive snapshots</Link>). Evolved into a multi-platform hub with Telegram Mini App support, fast payouts, transparent wallet tracking, and responsible gaming.
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
              href="https://t.me/WT88_User_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition shadow-xl flex items-center justify-center gap-2"
            >
              📱 Open Telegram App
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">1000+</div>
              <div className="text-gray-500 mt-1">Games Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">8+</div>
              <div className="text-gray-500 mt-1">Game Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">20+</div>
              <div className="text-gray-500 mt-1">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">24/7</div>
              <div className="text-gray-500 mt-1">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">Instant</div>
              <div className="text-gray-500 mt-1">Transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">✨ Key Features</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need for a seamless gaming experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard icon="⚡" title="Instant Registration" description="Sign up in seconds with Email, Google, or Telegram account. Start playing immediately." />
            <FeatureCard icon="💰" title="Secure Wallet System" description="Instant top-ups, fast withdrawals, USDT TRC20 support, and complete transaction history." />
            <FeatureCard icon="🔗" title="Blockchain Verification" description="Every transaction recorded on blockchain. Verify on TronScan for complete transparency." />
            <FeatureCard icon="📱" title="Play Anywhere" description="Web browser, mobile browser, or Telegram Mini App — play on any device." />
            <FeatureCard icon="🔒" title="Security & Trust" description="Encrypted connections, secure backend, session management, and complete audit trail." />
            <FeatureCard icon="🌍" title="Multi-Language Support" description="Platform available in 20+ languages including English, Chinese, Thai, Vietnamese, and more." />
          </div>

          <div className="text-center mt-12">
            <Link href="https://game.ubet.fun" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition">
              Start Playing Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Game Providers Section */}
      <section id="providers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🎯 Premium Game Providers</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Access games from world-class providers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ProviderCard name="Pragmatic Play" description="Popular slots and casino games" />
            <ProviderCard name="W88" description="Comprehensive gaming collection" />
            <ProviderCard name="Habanero" description="Exciting slot games" />
            <ProviderCard name="DT Gaming" description="Live casino and more" />
            <ProviderCard name="PG Soft" description="Mobile-optimized games" />
            <ProviderCard name="NetEnt" description="Legendary slots with polished gameplay" />
            <ProviderCard name="Microgaming" description="Progressive jackpots and classics" />
            <ProviderCard name="Play'n GO" description="Feature-rich mobile-first titles" />
          </div>
        </div>
      </section>

      {/* Telegram Mini App Section */}
      <section id="telegram" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">📱 Telegram Mini App</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Play directly within Telegram — no app download required!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔐</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">No Separate Login</h3>
                  <p className="text-gray-400">Uses your Telegram account automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚡</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Instant Access</h3>
                  <p className="text-gray-400">Open and play immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎮</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Native Experience</h3>
                  <p className="text-gray-400">Feels like a Telegram feature</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔔</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Notifications</h3>
                  <p className="text-gray-400">Get updates directly in Telegram</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Secure</h3>
                  <p className="text-gray-400">Leverages Telegram&apos;s built-in security</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">How to Get Started</h3>
              <ol className="text-left text-blue-100 space-y-3 mb-6">
                <li className="flex gap-3"><span className="font-bold">1.</span> Open Telegram</li>
                <li className="flex gap-3"><span className="font-bold">2.</span> Search for <strong>@WT88_User_Bot</strong></li>
                <li className="flex gap-3"><span className="font-bold">3.</span> Tap &quot;Open&quot; to start the Mini App</li>
                <li className="flex gap-3"><span className="font-bold">4.</span> Play instantly — no separate login needed!</li>
              </ol>
              <Link 
                href="https://t.me/WT88_User_Bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition"
              >
                📱 Open Telegram Mini App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Management Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">💳 Wallet Management</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fast, secure, and transparent transactions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">💵 Add Funds (Top-up)</h3>
              <ol className="text-gray-400 space-y-2 text-sm">
                <li>1. Go to &quot;Top-up&quot; section</li>
                <li>2. Enter amount in your currency</li>
                <li>3. Choose payment method</li>
                <li>4. Complete transaction</li>
                <li>5. Funds appear instantly!</li>
              </ol>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">💸 Withdraw Winnings</h3>
              <ol className="text-gray-400 space-y-2 text-sm">
                <li>1. Go to &quot;Withdraw&quot; section</li>
                <li>2. Enter your wallet address</li>
                <li>3. Specify amount</li>
                <li>4. Confirm transaction</li>
                <li>5. Receive funds within minutes</li>
                <li>6. Verify on TronScan</li>
              </ol>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">🔄 Transfer Between Wallets</h3>
              <p className="text-gray-400 text-sm">
                Transfer funds between your gaming wallets instantly for different game providers. Seamless switching between games without delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">👑 Premium VIP Services</h2>
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Why Choose Win88 Today?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">For Players</h3>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Wide game selection</li>
                <li>✓ Multiple payment options</li>
                <li>✓ Fast withdrawals</li>
                <li>✓ Fair gaming</li>
                <li>✓ Responsive support</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">For Mobile Users</h3>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Optimized mobile experience</li>
                <li>✓ Telegram Mini App integration</li>
                <li>✓ Play on the go</li>
                <li>✓ Low data usage</li>
                <li>✓ Fast loading times</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-400 mb-4">For Crypto Users</h3>
              <ul className="text-gray-400 space-y-2">
                <li>✓ USDT TRC20 support</li>
                <li>✓ Blockchain verification</li>
                <li>✓ Low transaction fees</li>
                <li>✓ Fast confirmations</li>
                <li>✓ Complete transparency</li>
              </ul>
            </div>
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
            <FAQItem question="What is Win88Today?" answer="Win88Today is a multi-platform gaming hub offering web and Telegram Mini App play with top providers and secure wallet management. Established heritage with roots dating back to 2018." />
            <FAQItem question="Which game providers are supported?" answer="Supported providers include Pragmatic Play, W88, Habanero, DT Gaming, PG Soft, NetEnt, Microgaming, and Play'n GO." />
            <FAQItem question="How do I get started?" answer="Visit game.ubet.fun, sign up with your email, Google, or Telegram, make a deposit, and start playing. The whole process takes less than 5 minutes." />
            <FAQItem question="How do I play via Telegram?" answer="Open Telegram, launch @WT88_User_Bot, tap 'Open' to start the Mini App, and play instantly without a separate login." />
            <FAQItem question="What payment methods are accepted?" answer="We accept USDT (TRC20), NPR bank transfers, and other local payment methods. Crypto deposits are processed instantly." />
            <FAQItem question="How fast are withdrawals?" answer="Platform withdrawals are automated and typically processed within 5-10 minutes. Premium service withdrawals are manually reviewed and processed within 30 minutes." />
            <FAQItem question="Is Win88Today secure?" answer="Yes. Win88Today uses encrypted connections, keeps secrets server-side, logs transactions, and supports blockchain verification for transparency on TronScan." />
            <FAQItem question="Can I set personal limits?" answer="Yes! We promote responsible gaming. You can set your own deposit limits, track your gaming budget, and review transaction history regularly." />
          </div>
        </div>
      </section>

      {/* Responsible Gaming Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">🔐 Responsible Gaming</h2>
          <p className="text-gray-400 mb-6">We promote responsible gaming:</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500">
            <span className="bg-slate-800 px-4 py-2 rounded-lg">Set your own limits</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg">Take regular breaks</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg">Play for entertainment</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg">Never chase losses</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg">Seek help if needed</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">🎮 Ready to Play?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of players enjoying premium gaming experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://game.ubet.fun" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-xl">
              🎮 Get Started on Win88Today
            </Link>
            <Link href="https://t.me/WT88_User_Bot" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-800 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-orange-900 transition shadow-xl border border-orange-500">
              📱 Open Telegram App
            </Link>
          </div>
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
              <p className="text-gray-500 text-sm">Your all-in-one gaming hub. Multi-Platform Gaming Hub since 2018.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="https://game.ubet.fun" target="_blank" className="hover:text-orange-400 transition">Launch App</Link></li>
                <li><Link href="https://t.me/WT88_User_Bot" target="_blank" className="hover:text-orange-400 transition">Telegram Mini App</Link></li>
                <li><Link href="#providers" className="hover:text-orange-400 transition">Game Providers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="#faq" className="hover:text-orange-400 transition">FAQ</Link></li>
                <li><Link href="https://t.me/WT88_User_Bot" target="_blank" className="hover:text-orange-400 transition">Telegram Support</Link></li>
                <li><a href="mailto:wincasa77@gmail.com" className="hover:text-orange-400 transition">Email Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/terms" className="hover:text-orange-400 transition">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
                <li><Link href="/responsible-gaming" className="hover:text-orange-400 transition">Responsible Gaming</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
            <p>Win88Today Gaming Platform v1.0.48 | Multi-Platform Gaming Hub</p>
            <p className="mt-2">© {new Date().getFullYear()} Win88Today. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
    </>
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

function ProviderCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-orange-500/50 transition text-center">
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
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
