import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Wand2, Hexagon } from 'lucide-react';

const powers = [
  {
    name: 'Cursed Energy',
    icon: Zap,
    description: 'The fundamental power source born from negative human emotions. All sorcerers manipulate this dark energy.',
    color: 'cyan'
  },
  {
    name: 'Cursed Techniques',
    icon: Wand2,
    description: 'Unique abilities inherited or developed by sorcerers. Each technique is distinct and powerful.',
    color: 'purple'
  },
  {
    name: 'Domain Expansion',
    icon: Hexagon,
    description: 'The pinnacle of jujutsu sorcery. A barrier technique that manifests the user\'s innate domain.',
    color: 'red'
  }
];

export function PowerSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-6xl md:text-7xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a855f7, #ef4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            POWER SYSTEM
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master the art of cursed energy and unleash devastating techniques
          </p>
        </motion.div>

        {/* Powers Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {powers.map((power, index) => {
            const Icon = power.icon;
            const colorMap = {
              cyan: {
                bg: 'from-cyan-500 to-cyan-600',
                glow: 'rgba(34, 211, 238, 0.6)',
                border: 'border-cyan-400/30'
              },
              purple: {
                bg: 'from-purple-500 to-purple-600',
                glow: 'rgba(168, 85, 247, 0.6)',
                border: 'border-purple-400/30'
              },
              red: {
                bg: 'from-red-500 to-red-600',
                glow: 'rgba(239, 68, 68, 0.6)',
                border: 'border-red-400/30'
              }
            };

            const colors = colorMap[power.color as keyof typeof colorMap];

            return (
              <motion.div
                key={power.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Outer Ring Animation */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${colors.border} -m-8`}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  style={{ boxShadow: `0 0 40px ${colors.glow}` }}
                />

                {/* Middle Ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full border ${colors.border} -m-4`}
                  animate={{
                    rotate: -360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity }
                  }}
                />

                {/* Card */}
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                  <div className="relative z-10 text-center">
                    {/* Icon with Pulse Effect */}
                    <motion.div
                      className="mb-6 flex justify-center"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <div className={`relative p-6 rounded-full bg-gradient-to-br ${colors.bg}`}
                        style={{ boxShadow: `0 0 50px ${colors.glow}` }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                        
                        {/* Pulse Rings */}
                        <motion.div
                          className={`absolute inset-0 rounded-full border-2 ${colors.border}`}
                          animate={{
                            scale: [1, 1.5, 2],
                            opacity: [0.8, 0.4, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                        <motion.div
                          className={`absolute inset-0 rounded-full border-2 ${colors.border}`}
                          animate={{
                            scale: [1, 1.5, 2],
                            opacity: [0.8, 0.4, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-3xl font-black text-white mb-4 tracking-wide">
                      {power.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {power.description}
                    </p>

                    {/* Energy Wave Animation */}
                    <motion.div
                      className="mt-8 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                      animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </div>

                  {/* Corner Accents */}
                  <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${colors.border} rounded-tl-2xl`} />
                  <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${colors.border} rounded-tr-2xl`} />
                  <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${colors.border} rounded-bl-2xl`} />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${colors.border} rounded-br-2xl`} />
                </div>

                {/* Outer Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-30 blur-2xl -z-10 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </div>

        {/* Central Connection Lines */}
        <div className="relative mt-20">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <motion.div
              className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 1 }}
              style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
            />
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
