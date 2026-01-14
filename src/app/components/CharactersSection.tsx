import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Shield, Target, Flame, Skull, Sword, Eye, Wand2, Wind, Moon, Users, Sparkles, Heart, Crown } from 'lucide-react';

const sorcerers = [
  {
    name: 'Yuji Itadori',
    role: 'Vessel of Sukuna',
    power: 'Cursed Energy Manipulation',
    icon: Zap,
    description: 'A high school student with superhuman strength, now hosting the fearsome King of Curses within his body.',
    signature: 'Black Flash',
    emoji: '⚡',
    color: 'from-red-600 to-orange-500',
    image: 'Yuji Itadori.png'
  },
  {
    name: 'Satoru Gojo',
    role: 'Special Grade Sorcerer',
    power: 'Limitless & Six Eyes',
    icon: Shield,
    description: 'The strongest sorcerer alive with infinite cursed energy and reality-bending spatial manipulation abilities.',
    signature: 'Infinite Void',
    emoji: '🔵',
    color: 'from-cyan-400 to-blue-500',
    image: 'Satoru Gojo.png'
  },
  {
    name: 'Megumi Fushiguro',
    role: 'Grade 2 Sorcerer',
    power: 'Ten Shadows Technique',
    icon: Target,
    description: 'A prodigy who summons divine shikigami from shadows, inheritor of the legendary Zenin clan technique.',
    signature: 'Demon Dog: Totality',
    emoji: '🐺',
    color: 'from-indigo-500 to-purple-600',
    image: 'Megumi Fushiguro.png'
  },
  {
    name: 'Nobara Kugisaki',
    role: 'Grade 3 Sorcerer',
    power: 'Straw Doll Technique',
    icon: Flame,
    description: 'A fearless country girl who strikes enemies from afar using cursed nails and voodoo resonance techniques.',
    signature: 'Resonance',
    emoji: '🔨',
    color: 'from-orange-500 to-red-600',
    image: 'Nobara Kugisaki.png'
  },
  {
    name: 'Yuta Okkotsu',
    role: 'Special Grade Sorcerer',
    power: 'Cursed Energy Copying',
    icon: Eye,
    description: 'Possesses bottomless cursed energy and can copy any technique. Once bonded with Rika, the Queen of Curses.',
    signature: 'Rika Manifestation',
    emoji: '👁️',
    color: 'from-blue-500 to-indigo-600',
    image: 'Yuta Okkotsu.png'
  },
  {
    name: 'Maki Zenin',
    role: 'Grade 4 Sorcerer',
    power: 'Heavenly Restriction',
    icon: Sword,
    description: 'Born with zero cursed energy but blessed with superhuman strength and speed, wielding cursed weapons with precision.',
    signature: 'Split Soul Katana',
    emoji: '⚔️',
    color: 'from-green-500 to-emerald-600',
    image: 'Maki Zenin.png'
  },
  {
    name: 'Toge Inumaki',
    role: 'Grade 2 Sorcerer',
    power: 'Cursed Speech',
    icon: Wand2,
    description: 'Commands cursed energy through his voice, forcing opponents to obey his words at the cost of straining his throat.',
    signature: 'Blast Away',
    emoji: '🗣️',
    color: 'from-purple-500 to-violet-600',
    image: 'Toge Inumaki.png'
  },
  {
    name: 'Kento Nanami',
    role: 'Grade 1 Sorcerer',
    power: 'Ratio Technique',
    icon: Target,
    description: 'A former salaryman who divides targets into weak points, striking with calculated precision for maximum damage.',
    signature: 'Collapse',
    emoji: '👔',
    color: 'from-yellow-600 to-amber-700',
    image: 'Kento Nanami.png'
  },
  {
    name: 'Suguru Geto',
    role: 'Special Grade Sorcerer',
    power: 'Cursed Spirit Manipulation',
    icon: Users,
    description: 'A fallen ally who absorbs and commands armies of cursed spirits, seeking to eliminate non-sorcerers from the world.',
    signature: 'Uzumaki',
    emoji: '🌀',
    color: 'from-slate-600 to-gray-700',
    image: 'Suguru Geto.png'
  },
  {
    name: 'Panda',
    role: 'Grade 2 Sorcerer',
    power: 'Cursed Corpse Cores',
    icon: Heart,
    description: 'An intelligent cursed corpse with three cores, each granting unique fighting styles and overwhelming physical power.',
    signature: 'Gorilla Mode',
    emoji: '🐼',
    color: 'from-gray-400 to-slate-500',
    image: 'Panda.png'
  },
  {
    name: 'Aoi Todo',
    role: 'Grade 1 Sorcerer',
    power: 'Boogie Woogie',
    icon: Wind,
    description: 'A battle-obsessed powerhouse who swaps positions with anything containing cursed energy through a single clap.',
    signature: 'Clap Switch',
    emoji: '👏',
    color: 'from-red-500 to-pink-600',
    image: ' Aoi Todo.png'
  }
];

const curses = [
  {
    name: 'Ryomen Sukuna',
    role: 'King of Curses',
    power: 'Malevolent Shrine',
    icon: Skull,
    description: 'An ancient demon from the Heian era with unmatched destructive power, possessing devastating slashing techniques.',
    signature: 'Cleave & Dismantle',
    emoji: '💀',
    color: 'from-red-700 to-rose-900',
    image: 'Ryomen Sukuna.png'
  },
  {
    name: 'Mahito',
    role: 'Special Grade Curse',
    power: 'Idle Transfiguration',
    icon: Sparkles,
    description: 'A sadistic curse born from human hatred who manipulates souls, reshaping bodies into grotesque forms at will.',
    signature: 'Soul Multiplicity',
    emoji: '🎭',
    color: 'from-teal-500 to-cyan-600',
    image: 'Mahito.png'
  },
  {
    name: 'Jogo',
    role: 'Special Grade Curse',
    power: 'Volcanic Cursed Energy',
    icon: Flame,
    description: 'Embodiment of humanity\'s fear of volcanoes and earth, unleashing apocalyptic fire and magma-based attacks.',
    signature: 'Maximum Meteor',
    emoji: '🌋',
    color: 'from-orange-600 to-red-700',
    image: 'Jogo.png'
  },
  {
    name: 'Choso',
    role: 'Cursed Womb: Death Painting',
    power: 'Blood Manipulation',
    icon: Moon,
    description: 'A half-human hybrid who weaponizes his blood into deadly projectiles, shields, and poisonous attacks.',
    signature: 'Piercing Blood',
    emoji: '🩸',
    color: 'from-rose-700 to-red-800',
    image: 'Choso.png'
  }
];

export function CharactersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const CharacterCard = ({ character, index, category }: any) => {
    const Icon = character.icon;
    const categoryEmoji = category === 'sorcerer' ? '🧙‍♂️' : '😈';

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="group relative"
      >
        {/* Card */}
        <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20">
          {/* Character Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Image Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t ${
              category === 'sorcerer' 
                ? 'from-black via-black/60 to-transparent' 
                : 'from-black via-black/70 to-transparent'
            }`} />
            
            {/* Category Badge on Image */}
            <div className="absolute top-4 left-4 flex items-center gap-2 backdrop-blur-md bg-black/50 px-3 py-1.5 rounded-full border border-white/20">
              <span className="text-xl">{categoryEmoji}</span>
              <span className={`text-xs font-bold tracking-wider uppercase ${
                category === 'sorcerer' ? 'text-cyan-400' : 'text-red-400'
              }`}>
                {category === 'sorcerer' ? 'Sorcerer' : 'Curse'}
              </span>
            </div>

            {/* Technique Icon Badge */}
            <div className="absolute top-4 right-4">
              <motion.div
                className={`p-3 rounded-full bg-gradient-to-br ${character.color} backdrop-blur-md`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{ boxShadow: `0 0 30px ${category === 'sorcerer' ? 'rgba(34, 211, 238, 0.6)' : 'rgba(239, 68, 68, 0.6)'}` }}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            {/* Glow Effect on Hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-0 blur-2xl`}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Card Content */}
          <div className="p-6 relative">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              {/* Name */}
              <h3 className={`text-2xl font-black text-white mb-2 ${
                category === 'sorcerer' ? 'group-hover:text-cyan-400' : 'group-hover:text-red-400'
              } transition-colors duration-300`}>
                {character.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-400 mb-3 font-semibold tracking-wider uppercase">
                {character.role}
              </p>

              {/* Power Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${character.color} text-white text-xs font-bold`}
                  style={{ boxShadow: `0 0 20px ${category === 'sorcerer' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(239, 68, 68, 0.3)'}` }}
                >
                  {character.power}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {character.description}
              </p>

              {/* Signature Move */}
              <div className={`flex items-center gap-2 p-3 rounded-lg ${
                category === 'sorcerer' ? 'bg-cyan-400/10 border border-cyan-400/20' : 'bg-red-600/10 border border-red-600/20'
              }`}>
                <span className="text-lg">{character.emoji}</span>
                <div className="flex-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    category === 'sorcerer' ? 'text-cyan-400' : 'text-red-400'
                  }`}>
                    Signature Move
                  </span>
                  <p className="text-white text-sm font-semibold">{character.signature}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className={`absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 ${
            category === 'sorcerer' ? 'border-cyan-400/30' : 'border-red-600/30'
          } rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className={`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 ${
            category === 'sorcerer' ? 'border-cyan-400/30' : 'border-red-600/30'
          } rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>

        {/* Shadow Effect */}
        <div className={`absolute -inset-2 bg-gradient-to-br ${character.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-2xl transition-opacity duration-500`} />
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-[#0b0b0d] to-black">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-6xl md:text-7xl font-black mb-6"
            style={{
              background: 'linear-gradient(to right, #ef4444, #22d3ee, #ef4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            SORCERERS & CURSES
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"
              style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)' }}
            />
          </div>
        </motion.div>

        {/* SORCERERS Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-5xl">🧙‍♂️</span>
            <div>
              <h3 
                className="text-4xl md:text-5xl font-black"
                style={{
                  background: 'linear-gradient(to right, #22d3ee, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                JUJUTSU SORCERERS
              </h3>
              <p className="text-cyan-400 text-sm tracking-wider mt-1">Protectors of Humanity</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400 to-transparent ml-4"
              style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sorcerers.map((character, index) => (
              <CharacterCard key={character.name} character={character} index={index} category="sorcerer" />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-20"
          style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
        />

        {/* CURSES Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-5xl">😈</span>
            <div>
              <h3 
                className="text-4xl md:text-5xl font-black"
                style={{
                  background: 'linear-gradient(to right, #ef4444, #dc2626)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                CURSED SPIRITS
              </h3>
              <p className="text-red-400 text-sm tracking-wider mt-1">Born from Humanity's Fears</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600 to-transparent ml-4"
              style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curses.map((character, index) => (
              <CharacterCard key={character.name} character={character} index={index} category="curse" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
