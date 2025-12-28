import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Let's create something timeless.</h2>
          <p className="text-gray-400 max-w-md font-light">
            Available for freelance projects, editorials, and private sessions worldwide.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-8">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:hello@shuttersurprise.com" className="hover:text-gray-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            © 2024 ShutterSurprise Photography. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
