import { Users, Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'HYDRA',
    role: 'Основатель & Дизайнер',
    description: 'Создатель Night Word, специалист по 3D-визуализации',
    icon: '🌙',
  },
  {
    name: 'Мария Сергеева',
    role: 'CTO & AI-инженер',
    description: 'Разработка AI-движка и интерактивных историй',
    icon: '⚡',
  },
  {
    name: 'Иван Петров',
    role: 'Full-Stack разработчик',
    description: 'Архитектура платформы и интеграции',
    icon: '💻',
  },
  {
    name: 'Софья Волкова',
    role: 'Креативный директор',
    description: 'Дизайн интерфейса и UX/UI',
    icon: '🎨',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 px-4 bg-[#0a0010]" data-testid="team-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Наша команда</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 text-white">
            Творцы Night Word
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Талантливая команда разработчиков и дизайнеров, создающих уникальный ночной опыт
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              data-testid={`team-member-${index}`}
            >
              <div className="text-5xl mb-4">{member.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-1 uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
              <div className="flex gap-3">
                <button className="text-purple-400 hover:text-purple-300 transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </button>
                <button className="text-purple-400 hover:text-purple-300 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="text-purple-400 hover:text-purple-300 transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
