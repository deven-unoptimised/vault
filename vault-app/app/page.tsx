import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎁</span>
            <span className="text-2xl font-bold text-gray-900">Vault</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#freebies" className="text-gray-600 hover:text-gray-900">
              Freebies
            </Link>
            <Link href="#categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎁</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Free Resources & Templates
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download high-quality ebooks, templates, guides, and checklists.
            100% free, no sign-up required.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/freebies">
              <Button size="lg" className="text-lg">
                Browse Freebies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Inside</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Ebooks</h3>
              <p className="text-gray-600">Comprehensive guides and educational resources</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">Templates</h3>
              <p className="text-gray-600">Ready-to-use templates for productivity</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Checklists</h3>
              <p className="text-gray-600">Actionable checklists to get things done</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Downloading Today</h2>
          <p className="text-lg mb-6 opacity-90">
            No email required. No sign-up. Just free resources.
          </p>
          <Link href="/freebies">
            <Button size="lg" variant="secondary" className="text-lg">
              View All Freebies
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 text-center text-gray-600">
        <p>© 2026 Vault. All freebies are 100% free to download and use.</p>
      </footer>
    </div>
  );
}
