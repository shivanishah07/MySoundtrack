import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Disc, Play, Plus, Instagram, Twitter, Music, ArrowRight, Menu, X, ChevronRight, Heart, Volume2, Upload, Check, Share2, Download, ExternalLink } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-vinyl/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <Disc className="w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
          <span className="text-2xl font-serif font-bold tracking-tight">Soundtrack</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <Link to="/" className={`hover:text-retro-red transition-colors ${location.pathname === '/' ? 'text-retro-red' : ''}`}>Home</Link>
          <a href="#footer" className="hover:text-retro-red transition-colors">About</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-vinyl/5 p-6 flex flex-col gap-4 text-lg font-serif italic"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <a href="#footer" onClick={() => setIsOpen(false)}>About</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const VinylRecord = ({ image, size = "large" }: { image?: string, size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64 md:w-96 md:h-96"
  };

  return (
    <div className={`relative ${sizeClasses[size]} group`}>
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-vinyl/5 rounded-full blur-2xl group-hover:bg-retro-red/10 transition-colors duration-1000" />
      
      {/* Vinyl Base with rotation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-vinyl rounded-full shadow-2xl border-[1px] border-white/5 overflow-hidden"
      >
        {/* Minimalist Grooves - subtle concentric circles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute inset-0 border border-white/10 rounded-full" 
              style={{ margin: `${(i + 1) * 4}%` }}
            />
          ))}
        </div>
        
        {/* Light Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30" />
      </motion.div>
      
      {/* Center Label */}
      <div className="absolute inset-[32%] bg-white rounded-full overflow-hidden border-[4px] border-vinyl/10 z-10 shadow-inner">
        <img 
          src={image || "https://picsum.photos/seed/album/400/400"} 
          alt="Album Art" 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
        {/* Center Hole */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-background rounded-full shadow-inner border border-vinyl/10" />
        </div>
      </div>

      {/* Minimalist Glossy Reflection Overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none opacity-40" />

      {/* Minimalist Needle Arm */}
      <div className="absolute -right-4 -top-4 w-1/2 h-1/2 pointer-events-none z-30 flex items-start justify-end">
        <motion.div 
          initial={{ rotate: -25 }}
          animate={{ rotate: -15 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full h-0.5 bg-vinyl/30 origin-right rounded-full relative"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1.5 bg-vinyl/40 rounded-sm" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-vinyl/20 rounded-full border border-vinyl/10" />
        </motion.div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <span className="text-retro-red font-bold uppercase tracking-[0.3em] text-xs">Yearly Wrapped 2025</span>
          <h1 className="text-6xl md:text-8xl leading-[0.9] font-bold tracking-tighter">
            This is My <br />
            <span className="italic font-normal text-mustard">Year in Sound.</span>
          </h1>
          <p className="text-lg text-vinyl/60 max-w-md font-light leading-relaxed">
            A curated journey through the music that defined my year—tracks, moods, and moments pressed into vinyl.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link to="/wrapped" className="flex items-center gap-3 bg-vinyl text-background px-8 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-retro-red transition-all group cursor-pointer">
            <Play className="w-5 h-5 fill-current" />
            Create My Wrap
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center lg:justify-end relative"
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-mustard/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-retro-red/10 rounded-full blur-3xl" />
        <div className="relative z-10 p-12 bg-cream rounded-[3rem] border border-vinyl/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-retro-red rounded-full" />
            <h3 className="text-4xl font-serif italic leading-tight">"Music is the <br />shorthand of <br />emotion."</h3>
            <p className="text-xs uppercase tracking-widest opacity-40">— Leo Tolstoy</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const QuickVibes = () => {
  const vibes = ["Top Tracks", "Mood of the Year", "Late Night Loops", "Throwbacks", "Hidden Gems", "Road Trip", "Chill Beats"];
  
  return (
    <div className="border-y border-vinyl/5 py-6 overflow-hidden bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          {vibes.map((vibe, i) => (
            <button key={i} className="text-xs uppercase font-bold tracking-[0.2em] text-vinyl/40 hover:text-vinyl transition-colors flex items-center gap-2 group cursor-pointer">
              <span className="w-1 h-1 bg-retro-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              {vibe}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SoundIdentity = ({ selectedTheme, setSelectedTheme }: { selectedTheme: string, setSelectedTheme: (theme: string) => void }) => {
  const currentTheme = THEMES.find(t => t.name === selectedTheme) || THEMES[2];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className={`${currentTheme.color} ${currentTheme.textColor} rounded-[3rem] p-12 md:p-20 overflow-hidden relative transition-colors duration-700 shadow-2xl`}>
        {/* Background Waveform */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 flex items-end gap-1 px-10">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div 
              key={`${selectedTheme}-${i}`}
              animate={{ height: [20, 100, 40, 80, 20] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
              className={`flex-1 ${selectedTheme === 'Nostalgic' ? 'bg-vinyl' : 'bg-mustard'} rounded-t-full`}
            />
          ))}
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className={`text-5xl md:text-6xl font-bold leading-tight ${currentTheme.font}`}>
                My Soundtrack <br />
                <span className={selectedTheme === 'Funky' ? 'text-mustard' : 'italic text-mustard font-normal'}>Aesthetic</span>
              </h2>
              <p className="opacity-70 text-lg font-light leading-relaxed max-w-md">
                Customize your year's visual identity. Whether you're feeling the warmth of the past or the sharpness of the future, your music deserves a look that matches its soul.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Select Your Theme</p>
              <div className="flex flex-wrap gap-3">
                {THEMES.map((theme) => (
                  <button 
                    key={theme.name}
                    onClick={() => setSelectedTheme(theme.name)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                      selectedTheme === theme.name 
                        ? 'bg-white text-vinyl border-white scale-105 shadow-lg' 
                        : 'border-current opacity-40 hover:opacity-100'
                    }`}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <VinylRecord size="medium" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Music className={`w-8 h-8 ${selectedTheme === 'Nostalgic' ? 'text-mustard' : 'text-retro-red'} z-20`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Constants & Types ---

const THEMES = [
  { 
    name: 'Nostalgic', 
    color: 'bg-navy', 
    textColor: 'text-white', 
    font: 'font-serif italic', 
    accent: 'text-mustard',
    accentBorder: 'border-mustard',
    cardBg: 'bg-white/5'
  },
  { 
    name: 'Funky', 
    color: 'bg-retro-red', 
    textColor: 'text-white', 
    font: 'font-bold uppercase tracking-tighter', 
    accent: 'text-mustard',
    accentBorder: 'border-mustard',
    cardBg: 'bg-black/20'
  },
  { 
    name: 'Modern', 
    color: 'bg-vinyl', 
    textColor: 'text-background', 
    font: 'font-sans font-light', 
    accent: 'text-mustard',
    accentBorder: 'border-mustard',
    cardBg: 'bg-white/5'
  },
  { 
    name: 'Minimalist', 
    color: 'bg-cream', 
    textColor: 'text-vinyl', 
    font: 'font-sans font-thin tracking-widest', 
    accent: 'text-retro-red',
    accentBorder: 'border-retro-red',
    cardBg: 'bg-white'
  },
];

const MusicSplit = ({ selectedTheme }: { selectedTheme: string }) => {
  const stats = [
    { label: "Top Genre", value: "Neo-Soul" },
    { label: "Most Played", value: "Frank Ocean" },
    { label: "Total Time", value: "48,290 Min" },
    { label: "Favorite Mood", value: "Ethereal" },
  ];

  const carouselItems = [
    { title: "Blonde", artist: "Frank Ocean", img: "https://picsum.photos/seed/blonde/400/400" },
    { title: "Currents", artist: "Tame Impala", img: "https://picsum.photos/seed/currents/400/400" },
    { title: "SOS", artist: "SZA", img: "https://picsum.photos/seed/sos/400/400" },
  ];

  const theme = THEMES.find(t => t.name === selectedTheme) || THEMES[2];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <h3 className={`text-4xl font-bold uppercase tracking-tighter ${theme.font}`}>The Statistics</h3>
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`border-l-2 ${theme.accentBorder} pl-6 space-y-1`}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-vinyl/40 font-bold">{stat.label}</span>
              <p className={`text-2xl ${theme.font}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>
        <div className={`p-8 ${theme.cardBg} rounded-3xl space-y-4 border border-vinyl/5`}>
          <p className={`text-sm italic text-vinyl/70 ${theme.font}`}>"Your music taste is like a vintage film—grainy, emotional, and timeless."</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-vinyl flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-background" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Soundtrack AI</span>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key="carousel"
            className="flex items-center justify-center"
          >
            {carouselItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: i * 50, rotate: i * 5, opacity: 0.5 }}
                whileHover={{ x: 0, rotate: 0, opacity: 1, zIndex: 10, scale: 1.1 }}
                className="absolute transition-all cursor-pointer"
                style={{ zIndex: carouselItems.length - i }}
              >
                <div className="bg-white p-4 shadow-2xl rounded-lg border border-vinyl/5">
                  <img src={item.img} alt={item.title} className="w-64 h-64 object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
                  <div className="space-y-1">
                    <h4 className={`font-bold ${theme.font}`}>{item.title}</h4>
                    <p className="text-xs uppercase tracking-widest text-vinyl/40">{item.artist}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ExperienceGrid = ({ selectedTheme }: { selectedTheme: string }) => {
  const theme = THEMES.find(t => t.name === selectedTheme) || THEMES[2];
  
  const cards = [
    { title: "Top Artist", value: "Arctic Monkeys", icon: <Music />, color: selectedTheme === 'Funky' ? "bg-mustard/5" : "bg-retro-red/5" },
    { title: "Most Played", value: "Do I Wanna Know?", icon: <Play />, color: selectedTheme === 'Nostalgic' ? "bg-vinyl/5" : "bg-mustard/5" },
    { title: "Genre Evolution", value: "Rock → Indie → Jazz", icon: <ChevronRight />, color: "bg-vinyl/5" },
    { title: "Mood Timeline", value: "Melancholy Winter", icon: <Heart />, color: selectedTheme === 'Funky' ? "bg-mustard/5" : "bg-retro-red/5" },
    { title: "Discovery", value: "The Marías", icon: <Plus />, color: selectedTheme === 'Nostalgic' ? "bg-vinyl/5" : "bg-mustard/5" },
    { title: "Throwback", value: "Fleetwood Mac", icon: <Disc />, color: "bg-vinyl/5" },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className={`text-5xl font-bold tracking-tighter ${theme.font}`}>Music Journey</h2>
        <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-retro-red transition-colors cursor-pointer">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`${card.color} p-10 rounded-[2.5rem] border border-vinyl/5 flex flex-col justify-between h-64 group cursor-pointer transition-colors hover:bg-white hover:shadow-xl`}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-vinyl group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-vinyl/30">{card.title}</span>
            </div>
            <p className={`text-3xl leading-tight ${theme.font}`}>{card.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SoundtrackBuilder = () => {
  const [step, setStep] = useState(1);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  const templates = [
    { name: "Retro", url: "https://picsum.photos/seed/retro/400/400" },
    { name: "Neon", url: "https://picsum.photos/seed/neon/400/400" },
    { name: "Minimal", url: "https://picsum.photos/seed/minimal/400/400" },
    { name: "Vibrant", url: "https://picsum.photos/seed/vibrant/400/400" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result as string);
        setSelectedTemplate(-1); // Deselect templates when custom image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const currentImage = customImage || templates[selectedTemplate]?.url || templates[0].url;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="create">
      <div className="bg-cream border border-vinyl/10 rounded-[3rem] p-8 md:p-20 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Create Your Soundtrack</h2>
          <p className="text-vinyl/60">Turn your year into a shareable, animated music wrap. Customize every detail from themes to vinyl grooves.</p>
        </div>

        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <button 
              key={s} 
              onClick={() => setStep(s)}
              className={`w-12 h-1.5 rounded-full transition-all cursor-pointer ${step >= s ? 'bg-retro-red' : 'bg-vinyl/10'}`} 
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Preview Side */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-vinyl/5 rounded-full blur-2xl group-hover:bg-retro-red/10 transition-colors" />
              <VinylRecord image={currentImage} size="medium" />
            </div>
            <div className="text-center">
              <h4 className="font-serif text-2xl italic">"My 2025 Soundtrack"</h4>
              <p className="text-xs uppercase tracking-widest text-vinyl/40 mt-1">Previewing your custom cover</p>
            </div>
          </div>

          {/* Controls Side */}
          <div className="space-y-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter">1. Customize Cover</h3>
                    <p className="text-sm text-vinyl/60">Select a pre-designed template or upload your own artistic vision.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {templates.map((template, i) => (
                        <button 
                          key={i}
                          onClick={() => {
                            setSelectedTemplate(i);
                            setCustomImage(null);
                          }}
                          className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${selectedTemplate === i ? 'border-retro-red scale-95' : 'border-transparent hover:border-vinyl/20'}`}
                        >
                          <img src={template.url} alt={template.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                            <span className="text-[10px] text-white font-bold uppercase tracking-widest">{template.name}</span>
                          </div>
                          {selectedTemplate === i && (
                            <div className="absolute top-2 right-2 bg-retro-red text-white p-1 rounded-full">
                              <Check className="w-3 h-3" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <input 
                        type="file" 
                        id="cover-upload" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      <label 
                        htmlFor="cover-upload"
                        className="flex items-center justify-center gap-3 w-full py-4 border-2 border-dashed border-vinyl/20 rounded-2xl cursor-pointer hover:border-retro-red hover:bg-white transition-all group"
                      >
                        <Upload className="w-5 h-5 text-vinyl/40 group-hover:text-retro-red" />
                        <span className="text-sm font-bold uppercase tracking-widest text-vinyl/60 group-hover:text-vinyl">
                          {customImage ? 'Change Custom Artwork' : 'Upload Custom Artwork'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-vinyl text-background py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-retro-red transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter">2. Set the Vibe</h3>
                    <p className="text-sm text-vinyl/60">Choose the mood that best represents your musical journey this year.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {["Melancholy", "Energetic", "Chill", "Nostalgic"].map((mood) => (
                      <button key={mood} className="p-6 bg-white rounded-2xl border border-vinyl/5 text-left hover:border-retro-red transition-all cursor-pointer group">
                        <Heart className="w-5 h-5 mb-3 text-vinyl/20 group-hover:text-retro-red" />
                        <span className="block font-bold uppercase tracking-widest text-xs">{mood}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex-1 border border-vinyl/20 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-vinyl hover:text-background transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="flex-[2] bg-vinyl text-background py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-retro-red transition-all cursor-pointer"
                    >
                      Finalize
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 text-center"
                >
                  <div className="w-20 h-20 bg-retro-red/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-retro-red" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold uppercase tracking-tighter">Ready to Press!</h3>
                    <p className="text-sm text-vinyl/60">Your 2025 Soundtrack is ready to be shared with the world.</p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button className="w-full bg-vinyl text-background py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-retro-red transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <Instagram className="w-4 h-4" /> Share to Stories
                    </button>
                    <button className="w-full border border-vinyl/20 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-vinyl hover:text-background transition-all cursor-pointer">
                      Download High-Res Cover
                    </button>
                    <button 
                      onClick={() => setStep(1)}
                      className="text-xs font-bold uppercase tracking-widest text-vinyl/40 hover:text-retro-red transition-colors cursor-pointer"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-vinyl text-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 border-b border-background/10 pb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Disc className="w-8 h-8 text-mustard" />
            <span className="text-3xl font-serif font-bold tracking-tight">Soundtrack</span>
          </div>
          <p className="text-background/50 max-w-sm font-light">
            Made for music lovers, by music lovers. Turn your year into a story that feels uniquely you.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-retro-red transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-retro-red transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-retro-red transition-colors"><Music /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:justify-items-end">
          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-mustard">Platform</h5>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="#footer" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-background/30">
        <span>© 2025 Soundtrack. All Rights Reserved.</span>
        <span>Designed with rhythm and soul.</span>
      </div>
    </footer>
  );
};

const WrappedPage = ({ selectedTheme }: { selectedTheme: string }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [importService, setImportService] = useState<string | null>(null);
  
  const currentTheme = THEMES.find(t => t.name === selectedTheme) || THEMES[2];

  const handleStartAnalysis = () => {
    if (!importService) return;
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsAnalyzed(true);
    }, 3000);
  };

  const services = [
    { name: 'Spotify', icon: <Music className="w-5 h-5" />, color: 'hover:bg-[#1DB954] hover:text-white' },
    { name: 'Apple Music', icon: <Music className="w-5 h-5" />, color: 'hover:bg-[#FC3C44] hover:text-white' },
    { name: 'Amazon Music', icon: <Music className="w-5 h-5" />, color: 'hover:bg-[#00A8E1] hover:text-white' },
  ];

  if (isAnalyzing) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${currentTheme.color} ${currentTheme.textColor} p-6 transition-colors duration-700`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <Disc className={`w-24 h-24 ${selectedTheme === 'Funky' ? 'text-white' : 'text-retro-red'}`} />
        </motion.div>
        <h2 className={`text-3xl ${currentTheme.font} mb-2`}>Analyzing your sound...</h2>
        <p className="opacity-40 uppercase tracking-widest text-xs">Pressing your {importService} memories into vinyl</p>
      </div>
    );
  }

  if (!isAnalyzed) {
    return (
      <div className="pt-48 pb-24 max-w-2xl mx-auto px-6 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Ready to See Your <br />
            <span className="text-retro-red italic font-normal">Wrapped?</span>
          </h1>
          <p className="text-vinyl/60 text-lg max-w-xl mx-auto">
            Import your listening history directly from your favorite music service to begin the analysis.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-12 border border-vinyl/10 rounded-[3rem] bg-white shadow-xl space-y-8 flex flex-col justify-center"
        >
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-vinyl/40">Select Your Service</h3>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <button 
                  key={service.name}
                  onClick={() => setImportService(service.name)}
                  className={`flex items-center justify-between px-6 py-5 rounded-2xl border transition-all cursor-pointer group ${importService === service.name ? 'border-retro-red bg-retro-red/5' : 'border-vinyl/5 hover:border-vinyl/20'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${importService === service.name ? 'bg-retro-red text-white' : 'bg-vinyl/5 group-hover:bg-vinyl group-hover:text-white'}`}>
                      {service.icon}
                    </div>
                    <span className="text-base font-bold uppercase tracking-widest">{service.name}</span>
                  </div>
                  {importService === service.name && <Check className="w-5 h-5 text-retro-red" />}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={handleStartAnalysis}
          disabled={!importService}
          className={`w-full py-6 rounded-full font-bold uppercase tracking-tighter text-lg transition-all flex items-center justify-center gap-3 shadow-xl ${
            importService 
              ? 'bg-vinyl text-background hover:bg-retro-red cursor-pointer active:scale-95' 
              : 'bg-vinyl/10 text-vinyl/20 cursor-not-allowed'
          }`}
        >
          Import & Create Wrapped <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-retro-red font-bold uppercase tracking-[0.3em] text-xs">Personalized Experience</span>
            <h1 className={`text-6xl md:text-8xl font-bold tracking-tighter leading-none ${currentTheme.font}`}>
              Your 2025 <br />
              <span className={`italic font-normal ${currentTheme.accent}`}>Soundtrack.</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-vinyl/20 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-vinyl hover:text-background transition-all cursor-pointer">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 bg-vinyl text-background px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-retro-red transition-all cursor-pointer">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className={`${currentTheme.color} ${currentTheme.textColor} rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden transition-colors duration-700`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10 space-y-8">
              <h2 className={`text-4xl ${currentTheme.font}`}>"The year you discovered your soul in the grooves of neo-soul and indie rock."</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-current/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Total Minutes</p>
                  <p className="text-3xl font-bold">48,290</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Top Artist</p>
                  <p className="text-3xl font-bold">Frank Ocean</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">New Artists</p>
                  <p className="text-3xl font-bold">124</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Mood</p>
                  <p className={`text-3xl font-bold italic ${currentTheme.accent}`}>Ethereal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cream rounded-[3rem] p-12 flex flex-col items-center justify-center border border-vinyl/5 space-y-6">
            <VinylRecord image="https://picsum.photos/seed/blonde/400/400" size="medium" />
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-vinyl/40 mb-1">Song of the Year</p>
              <h3 className="text-2xl font-serif font-bold italic">Pink + White</h3>
              <p className="text-sm text-vinyl/60">Frank Ocean</p>
            </div>
          </div>
        </div>

        <MusicSplit selectedTheme={selectedTheme} />
        <ExperienceGrid selectedTheme={selectedTheme} />

        <div className="mt-24 p-12 bg-mustard/10 rounded-[3rem] border border-mustard/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-bold tracking-tighter">Want to see more?</h3>
            <p className="text-vinyl/60">Explore your full listening history and deep-dive into your sonic aesthetic.</p>
          </div>
          <button className="bg-vinyl text-background px-10 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-retro-red transition-all flex items-center gap-2 cursor-pointer">
            View Full Library <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage = ({ selectedTheme, setSelectedTheme }: { selectedTheme: string, setSelectedTheme: (theme: string) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <SoundIdentity selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [selectedTheme, setSelectedTheme] = useState('Modern');
  
  return (
    <div className="min-h-screen selection:bg-retro-red selection:text-white">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />} />
              <Route path="/wrapped" element={<WrappedPage selectedTheme={selectedTheme} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
