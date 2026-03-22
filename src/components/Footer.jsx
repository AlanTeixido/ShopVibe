import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebookF, FaPinterestP } from 'react-icons/fa'

const links = {
  Botiga: ['Dona', 'Home', 'Accessoris', 'Sales'],
  Ajuda: ['Enviaments', 'Devolucions', 'Guia de talles', 'FAQ'],
  Empresa: ['Sobre nosaltres', 'Sostenibilitat', 'Treballa amb nosaltres', 'Contacte'],
}

const socials = [
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaTwitter, label: 'Twitter' },
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaPinterestP, label: 'Pinterest' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-black text-white">
              Shop<span className="text-accent">Vibe</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Moda moderna i sostenible. Descobreix el teu estil amb ShopVibe.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-accent text-gray-400 hover:text-white transition-all"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 ShopVibe. Tots els drets reservats. Projecte demo.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">Privacitat</a>
            <a href="#" className="hover:text-accent transition-colors">Termes</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
