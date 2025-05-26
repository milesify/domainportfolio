import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 border-t-2 border-blue-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="material-icons text-blue-400 text-3xl">language</span>
              <h3 className="text-xl font-bold">8-bit Domains</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted source for premium domain names. Find the perfect domain to build your online presence.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex w-8 justify-center" aria-label="Facebook">
                <span className="material-icons">facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex w-8 justify-center" aria-label="Twitter">
                <span className="material-icons">twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex w-8 justify-center" aria-label="LinkedIn">
                <span className="material-icons">linkedin</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex w-8 justify-center" aria-label="Instagram">
                <span className="material-icons">instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-yellow-300 cursor-pointer" style={{ fontFamily: "'VT323', monospace", fontSize: "1.2rem" }}>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/domains">
                  <span className="text-gray-300 hover:text-yellow-300 cursor-pointer" style={{ fontFamily: "'VT323', monospace", fontSize: "1.2rem" }}>Browse Domains</span>
                </Link>
              </li>
              <li>
                <Link href="/domains?filter=featured">
                  <span className="text-gray-300 hover:text-yellow-300 cursor-pointer" style={{ fontFamily: "'VT323', monospace", fontSize: "1.2rem" }}>Featured Domains</span>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <span className="text-gray-300 hover:text-yellow-300 cursor-pointer" style={{ fontFamily: "'VT323', monospace", fontSize: "1.2rem" }}>Categories</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-light hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="text-neutral-light hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-light hover:text-white">Domain Valuation</a>
              </li>
              <li>
                <a href="#" className="text-neutral-light hover:text-white">Domain Transfer Guide</a>
              </li>
              <li>
                <a href="#" className="text-neutral-light hover:text-white">Pricing Information</a>
              </li>
              <li>
                <a href="#" className="text-neutral-light hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-neutral-light hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-neutral-light hover:text-white">Help Center</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-neutral-light mb-4">
              Subscribe to receive updates on new domain listings and special offers.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-l-md focus:outline-none text-neutral-dark border-0"
              />
              <Button className="bg-primary hover:bg-primary-dark text-white rounded-l-none">
                <span className="material-icons">send</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 8-bit Domains. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
