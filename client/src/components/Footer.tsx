import { Moon } from 'lucide-react';
import { SiTelegram, SiDiscord, SiX, SiGithub } from 'react-icons/si';

const socialLinks = [
  { icon: SiTelegram, href: '#', label: 'Telegram' },
  { icon: SiDiscord, href: '#', label: 'Discord' },
  { icon: SiX, href: '#', label: 'X' },
  { icon: SiGithub, href: '#', label: 'GitHub' },
];

const footerLinks = [
  {
    title: 'Продукт',
    links: [
      { label: 'Особенности', href: '#features' },
      { label: 'Дорожная карта', href: '#roadmap' },
      { label: 'Цены', href: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#about' },
      { label: 'Блог', href: '#' },
      { label: 'Карьера', href: '#' },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { label: 'Документация', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Контакты', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6" data-testid="link-footer-logo">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold uppercase tracking-wider text-white">
                Night Word
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Платформа нового поколения для интерактивных историй и ночных приключений с AI.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-500/40 transition-all"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-purple-300 transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Night Word. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-purple-300 transition-colors text-sm"
                data-testid="link-privacy"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-purple-300 transition-colors text-sm"
                data-testid="link-terms"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
