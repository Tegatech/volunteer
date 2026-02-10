import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ChevronDown, Check, Disc, Zap, Globe, Mail, ChevronUp, ExternalLink } from 'lucide-react';
import { COLORS, JOBS } from './constants';
import BubbleBackground from './components/BubbleBackground';
import ApplicationForm from './components/ApplicationForm';

const App = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [logoTheme, setLogoTheme] = useState('green');
  const [view, setView] = useState('home');
  const [selectedRole, setSelectedRole] = useState(undefined);

  const logoUrl = "https://thereplaymag.com/wp-content/uploads/2022/03/dark-mode-removebg.png";
  const platformUrl = "https://thereplaymag.com/?utm_source=join_the_team_nav&utm_medium=referral&utm_campaign=volunteer_portal";

  useEffect(() => {
    if (view !== 'home') {
      window.scrollTo(0, 0);
      return;
    }

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId === 'about') {
            setLogoTheme('orange');
          } else {
            setLogoTheme('green');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ['hero', 'about', 'openings', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [view]);

  const handleApply = (job) => {
    if (job.redirectUrl) {
      window.open(job.redirectUrl, '_blank');
    } else {
      setSelectedRole(job.zohoLabel);
      setView('apply');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const greenFilter = 'brightness(0) saturate(100%) invert(13%) sepia(34%) saturate(996%) hue-rotate(113deg) brightness(91%) contrast(101%)';
  const orangeFilter = 'brightness(0) saturate(100%) invert(64%) sepia(96%) saturate(3025%) hue-rotate(1deg) brightness(103%) contrast(106%)';

  const navTextColor = logoTheme === 'green' ? COLORS.forestGreen : COLORS.primaryOrange;

  if (view === 'apply') {
    return (
      <ApplicationForm 
        initialRole={selectedRole} 
        onBack={() => setView('home')} 
      />
    );
  }

  return (
    <div className="min-h-screen selection:bg-blue-200" style={{ color: COLORS.forestGreen }}>
      
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none p-4 md:p-8 transition-all duration-500">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          <div className="hidden md:flex flex-1 justify-start">
            <a 
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500"
              style={{ color: navTextColor }}
            >
              <span className="border-b-2 border-transparent group-hover:border-current transition-all pb-0.5">The Platform</span>
              <ExternalLink size={10} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-105" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src={logoUrl} 
              alt="TheReplayMAG" 
              className="h-8 md:h-12 w-auto drop-shadow-sm transition-all duration-500"
              style={{ filter: logoTheme === 'green' ? greenFilter : orangeFilter }} 
            />
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <button 
              onClick={() => scrollToSection('openings')}
              className="pointer-events-auto group text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500"
              style={{ color: navTextColor }}
            >
              <span className="border-b-2 border-transparent group-hover:border-current transition-all pb-0.5">Current Roles</span>
            </button>
          </div>

          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <a 
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto text-[8px] font-black uppercase tracking-widest border border-current px-2 py-1 rounded-sm"
              style={{ color: navTextColor }}
            >
              Platform
            </a>
          </div>
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden" style={{ backgroundColor: COLORS.primaryOrange }}>
        <BubbleBackground />
        
        <div className="max-w-4xl w-full relative z-10 text-left">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">SINCE 2018</span>
            <div className="h-[1px] w-8 md:w-12 opacity-30" style={{ backgroundColor: COLORS.forestGreen }} />
          </div>

          <h1 className="text-[2.5rem] md:text-[6.5rem] font-black leading-[0.9] tracking-tighter mb-8 md:mb-10 font-editorial flex flex-col">
            <span>Join the team</span>
            <span>behind</span>
            <span>TheReplayMAG</span>
          </h1>

          <div className="max-w-xl">
            <p className="text-sm md:text-base font-bold mb-8 md:mb-10 leading-snug opacity-90 max-sm:max-w-full max-w-sm">
              TheReplayMAG is an independent culture-led platform spotlighting the voices, ideas, and movements shaping the now and the next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="group px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all flex items-center justify-center gap-2 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: COLORS.forestGreen, color: COLORS.primaryOrange }}
              >
                OUR PHILOSOPHY <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('openings')}
                className="px-8 md:px-10 py-4 md:py-5 border-2 font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all hover:bg-forestGreen hover:text-white active:scale-95"
                style={{ borderColor: COLORS.forestGreen }}
              >
                OPEN ROLES
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-24 animate-bounce opacity-40 flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('about')}>
           <ChevronDown size={18} />
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Scroll to Discover</span>
        </div>
      </section>

      <section id="about" className="relative py-12 md:py-40 px-6 md:px-24 text-white overflow-hidden" style={{ backgroundColor: COLORS.forestGreen }}>
        <BubbleBackground variant="dark" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] mb-4 md:mb-12" style={{ color: COLORS.primaryOrange }}>HOW WE OPERATE</h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-24">
            <div>
              <p className="text-2xl md:text-5xl font-black font-editorial leading-tight mb-4 md:mb-8">
                We are a culture platform with an editorial backbone.
              </p>
              <div className="space-y-4 md:space-y-6">
                 {[
                   { icon: <Disc />, title: "CULTURAL CURATION", text: "We scout talent and trends before they go mainstream." },
                   { icon: <Zap />, title: "SOCIAL FIRST", text: "Content built for the platforms people actually use." },
                   { icon: <Globe />, title: "GLOBAL REACH", text: "A remote network of creatives from London to Lagos." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 md:gap-6">
                     <div style={{ color: COLORS.primaryOrange }} className="shrink-0">{item.icon}</div>
                     <div>
                       <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{item.title}</h4>
                       <p className="text-xs md:text-sm opacity-60 font-medium">{item.text}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="flex flex-col justify-end">
               <p className="text-base md:text-xl font-bold opacity-80 leading-relaxed border-l-2 pl-6 md:pl-8" style={{ borderColor: COLORS.primaryOrange }}>
                 We value people who can manage their time, communicate clearly, and follow through. Ownership is our core principle.
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { label: "REMOTE", desc: "Work from anywhere" },
              { label: "OWNERSHIP", desc: "Lead your own projects" },
              { label: "BYLINES", desc: "Build your portfolio" },
              { label: "COMMUNITY", desc: "Shared Discord space" },
              { label: "FEEDBACK", desc: "Editorial development" },
              { label: "IMPACT", desc: "Real output, real reach" }
            ].map((item, i) => (
              <div key={i} className="bg-[#00321f] p-4 md:p-8 flex flex-col justify-between md:aspect-video h-20 md:h-auto">
                <span className="text-[8px] md:text-[9px] font-black tracking-widest text-primaryOrange uppercase" style={{ color: COLORS.primaryOrange }}>{item.label}</span>
                <p className="text-[9px] md:text-[11px] font-bold uppercase opacity-60 tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="relative py-20 md:py-40 px-6 md:px-24 min-h-screen overflow-hidden" style={{ backgroundColor: COLORS.primaryOrange }}>
        <BubbleBackground />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6">OPPORTUNITIES</h2>
            <h3 className="text-3xl md:text-7xl font-black uppercase font-editorial leading-none">BE PART OF <br/> THE FAMILY.</h3>
          </div>

          <div className="space-y-0">
            {JOBS.map((job) => (
              <div key={job.id} className="group relative">
                <button
                  onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                  className={`w-full text-left py-4 md:py-8 px-4 md:px-8 border-b-2 flex items-center justify-between transition-all duration-300 ${activeJob === job.id ? 'bg-forestGreen text-primaryOrange' : 'hover:bg-forestGreen hover:text-primaryOrange'}`}
                  style={{ borderColor: COLORS.forestGreen }}
                >
                  <div className="flex items-center gap-4 md:gap-8 flex-grow">
                    <span className={`text-[10px] md:text-xs font-black tracking-widest transition-opacity duration-300 ${activeJob === job.id ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'}`}>
                      0{JOBS.indexOf(job) + 1}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                      <h4 className="text-sm md:text-2xl font-black uppercase tracking-tight">{job.title}</h4>
                      <div className="flex gap-3 md:gap-4 items-center">
                        {job.department !== 'General' && (
                          <>
                            <span className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-opacity ${activeJob === job.id ? 'opacity-80' : 'opacity-40 group-hover:opacity-80'}`}>
                              {job.department}
                            </span>
                            <div className="w-[3px] h-[3px] rounded-full bg-current opacity-20" />
                            <span className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-opacity ${activeJob === job.id ? 'opacity-80' : 'opacity-40 group-hover:opacity-80'}`}>
                              VOLUNTEER
                            </span>
                          </>
                        )}
                        {job.status && (
                          <span className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-opacity ${activeJob === job.id ? 'opacity-80' : 'opacity-40 group-hover:opacity-80'}`}>
                            {job.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`transition-transform duration-500 ${activeJob === job.id ? 'rotate-45' : ''}`}>
                    <ArrowRight size={24} className="md:w-6 md:h-6" />
                  </div>
                </button>

                {activeJob === job.id && (
                  <div 
                    className="border-x-2 border-b-2 z-30 relative overflow-hidden bg-primaryOrange animate-in slide-in-from-top-1 duration-500"
                    style={{ 
                      color: COLORS.forestGreen,
                      borderColor: COLORS.forestGreen
                    }}
                  >
                    <div className="p-6 md:p-12 pb-8 md:pb-12">
                      <div className="flex items-center gap-4 mb-10">
                         {job.department !== 'General' && (
                           <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                             {job.department}
                           </span>
                         )}
                         
                         <span 
                           className="px-3 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border"
                           style={{ borderColor: COLORS.forestGreen }}
                         >
                           {job.commitment || 'VOLUNTEER ROLE'}
                         </span>
                         <span 
                           className="px-3 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border opacity-40"
                           style={{ borderColor: COLORS.forestGreen }}
                         >
                           {job.location || 'REMOTE'}
                         </span>
                      </div>

                      <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
                        <div className="md:col-span-7">
                          <p className="text-base md:text-xl font-black mb-8 md:mb-12 leading-snug">{job.description}</p>
                          
                          {job.sections && job.sections.map((section, idx) => (
                            <div key={idx} className="mb-10">
                               <h5 className="text-[9px] md:text-[11px] font-black uppercase tracking-widest mb-6 opacity-40">
                                {section.title}
                              </h5>
                              {section.items ? (
                                <ul className="space-y-4">
                                  {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[10px] md:text-[13px] font-black uppercase tracking-tight leading-tight">
                                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: COLORS.forestGreen }} /> {item}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-xs md:text-sm font-bold opacity-80 leading-relaxed uppercase tracking-tight">{section.content}</p>
                              )}
                            </div>
                          ))}

                          <div className="mb-6">
                             <h5 className="text-[9px] md:text-[11px] font-black uppercase tracking-widest mb-6 opacity-40">
                              {job.department === 'General' ? 'Who This Is For' : (job.isXulture ? 'How Xulture Operates' : 'Requirements')}
                            </h5>
                            <ul className="space-y-4">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-4 text-[10px] md:text-[13px] font-black uppercase tracking-tight leading-tight">
                                  <Check size={16} className="shrink-0 mt-0.5" style={{ color: COLORS.forestGreen }} /> {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="md:col-span-5 flex flex-col justify-center">
                           <div className="p-0 text-center">
                              <button 
                                onClick={() => handleApply(job)}
                                className="w-full py-6 md:py-8 font-black uppercase tracking-[0.2em] text-[12px] md:text-[14px] transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-4"
                                style={{ backgroundColor: COLORS.forestGreen, color: COLORS.primaryOrange }}
                              >
                                {job.redirectUrl ? 'VIEW XULTURE' : 'APPLY NOW'} <ArrowRight size={18} />
                              </button>
                              <p className="mt-6 text-[10px] font-black uppercase opacity-60 tracking-widest">
                                {job.isXulture ? 'External redirect to the Xulture platform' : 'Rolling Review Process'}
                              </p>
                           </div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="w-full py-8 md:py-12 mt-4 flex justify-center items-center cursor-pointer group/close transition-all hover:bg-[#002a1a] active:scale-[0.99]"
                      style={{ backgroundColor: COLORS.forestGreen }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveJob(null);
                        setTimeout(() => {
                          const openingsSection = document.getElementById('openings');
                          if (openingsSection) {
                            openingsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                    >
                      <button className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] flex items-center gap-4 pointer-events-none" style={{ color: COLORS.primaryOrange }}>
                        CLOSE ROLE <ChevronUp size={20} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 relative overflow-hidden" style={{ backgroundColor: COLORS.primaryOrange, color: COLORS.forestGreen }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black font-editorial mb-4 uppercase" style={{ color: COLORS.forestGreen }}>REMOTE</h3>
              <p className="text-lg md:text-xl font-bold" style={{ color: COLORS.forestGreen }}>Work from anywhere</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black font-editorial mb-4 uppercase" style={{ color: COLORS.forestGreen }}>OWNERSHIP</h3>
              <p className="text-lg md:text-xl font-bold" style={{ color: COLORS.forestGreen }}>Lead your own projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black font-editorial mb-4 uppercase" style={{ color: COLORS.forestGreen }}>BYLINES</h3>
              <p className="text-lg md:text-xl font-bold" style={{ color: COLORS.forestGreen }}>Build your portfolio</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black font-editorial mb-4 uppercase" style={{ color: COLORS.forestGreen }}>COMMUNITY</h3>
              <p className="text-lg md:text-xl font-bold" style={{ color: COLORS.forestGreen }}>Shared Discord space</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black font-editorial mb-4 uppercase" style={{ color: COLORS.forestGreen }}>FEEDBACK</h3>
              <p className="text-lg md:text-xl font-bold" style={{ color: COLORS.forestGreen }}>Editorial development</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black font-editorial mb-4 uppercase" style={{ color: COLORS.forestGreen }}>IMPACT</h3>
              <p className="text-lg md:text-xl font-bold" style={{ color: COLORS.forestGreen }}>Real output, real reach</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-40 px-6 text-center relative overflow-hidden" style={{ backgroundColor: COLORS.primaryOrange, color: COLORS.forestGreen }}>
        <BubbleBackground />
        <div className="max-w-4xl mx-auto relative z-10">
          <img 
            src={logoUrl} 
            alt="Replay" 
            className="h-8 md:h-12 mx-auto mb-8 md:mb-12 opacity-30" 
            style={{ filter: greenFilter }}
          />
          <h3 className="text-4xl md:text-[6rem] font-black font-editorial mb-8 md:mb-12 leading-none uppercase">STAY CREATIVE.</h3>
          <p className="text-lg md:text-xl opacity-80 mb-8 md:mb-12 font-bold max-w-xl mx-auto">
            If you have a unique skill or vision that belongs in our ecosystem, we are always listening.
          </p>
          <a 
            href="https://thereplaymag.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 md:gap-4 px-10 md:px-12 py-4 md:py-6 font-black uppercase tracking-widest text-[10px] md:text-xs transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: COLORS.forestGreen, color: COLORS.primaryOrange }}
          >
            GET IN TOUCH <Mail size={18} />
          </a>
        </div>
      </section>

      <footer className="py-12 md:py-24 text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-6 md:px-24" style={{ backgroundColor: COLORS.forestGreen }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <p className="text-primaryOrange text-base md:text-xl normal-case font-black tracking-tight">For the People, By the People</p>
            <div className="opacity-50 space-y-1">
              <p>© {new Date().getFullYear()} THEREPLAYMAG</p>
              <p>ESTABLISHED 2018</p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-8 md:justify-end">
            <p className="font-black text-xs md:text-sm tracking-normal uppercase">
              Powered by <span className="text-primaryOrange">THE</span><span className="text-white">REPLAY</span><span className="text-primaryOrange">NETWORK</span>
            </p>
            <div className="flex gap-8 justify-start md:justify-end">
              <a 
                href="https://thereplaymag.com/connectwithus/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primaryOrange transition-colors border-b-2 border-white/20 hover:border-primaryOrange pb-1"
              >
                Connect with Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
