import React, { useState } from 'react';
import { ArrowLeft, Upload, ChevronDown, X, FileText } from 'lucide-react';
import { COLORS } from '../constants';
import BubbleBackground from './BubbleBackground';

const ApplicationForm = ({ initialRole, onBack }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen relative flex flex-col pt-20 md:pt-32 px-4 md:px-24 overflow-x-hidden" style={{ backgroundColor: COLORS.primaryOrange }}>
      <BubbleBackground />
      
      <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col flex-grow mb-20 md:mb-32">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] mb-10 hover:translate-x-[-4px] transition-transform"
          style={{ color: COLORS.forestGreen }}
        >
          <ArrowLeft size={16} /> BACK TO ROLES
        </button>

        <div 
          className="border-2 overflow-hidden shadow-2xl relative" 
          style={{ 
            backgroundColor: COLORS.primaryOrange, 
            borderColor: COLORS.forestGreen 
          }}
        >
          <div className="p-8 md:p-12 border-b-2" style={{ backgroundColor: COLORS.forestGreen, borderColor: COLORS.forestGreen }}>
            <h1 className="text-4xl md:text-7xl font-black font-editorial mb-4 leading-none uppercase" style={{ color: COLORS.primaryOrange }}>
              APPLY TO JOIN.
            </h1>
            <p className="text-sm md:text-base font-bold opacity-100 max-w-lg" style={{ color: COLORS.primaryOrange }}>
              Tell us who you are and why you want to be part of the family. We review applications on a rolling basis.
            </p>
          </div>

          <form 
            action="https://forms.zohopublic.com/replaymedia/form/Volunteer/formperma/DDVvngWAENgIYJ2-Gf5xqmkNHbQgX2XaSUBHlicVwf4/htmlRecords/submit" 
            name="form" 
            id="form" 
            method="POST" 
            acceptCharset="UTF-8" 
            encType="multipart/form-data"
            className="p-8 md:p-12 space-y-12 pb-40"
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />

            <div className="flex flex-col gap-3 p-6 md:p-8 border-2" style={{ backgroundColor: COLORS.forestGreen, borderColor: COLORS.forestGreen }}>
              <label className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.primaryOrange }}>Target Position</label>
              <div className="relative">
                <select 
                  name="Dropdown1" 
                  defaultValue={initialRole || "-Select-"}
                  className="w-full bg-transparent border-b-2 py-4 font-black uppercase tracking-tight text-xl md:text-3xl focus:outline-none focus:border-primaryOrange transition-colors appearance-none cursor-pointer"
                  style={{ borderColor: COLORS.primaryOrange, color: COLORS.primaryOrange }}
                >
                  <option value="-Select-" style={{ color: COLORS.forestGreen }}>-Select-</option>
                  <option value="Editorial Writer" style={{ color: COLORS.forestGreen }}>Editorial Writer</option>
                  <option value="Marketing Associate" style={{ color: COLORS.forestGreen }}>Marketing Associate</option>
                  <option value="People Lead" style={{ color: COLORS.forestGreen }}>People Lead</option>
                  <option value="Speculative" style={{ color: COLORS.forestGreen }}>Speculative</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={28} style={{ color: COLORS.primaryOrange }} />
                </div>
              </div>
              <p className="text-[10px] font-black uppercase opacity-80" style={{ color: COLORS.primaryOrange }}>Please confirm your target role</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-1" style={{ color: COLORS.forestGreen }}>
                  Full Name <span className="text-red-700 font-bold">*</span>
                </label>
                <input 
                  type="text" 
                  name="SingleLine" 
                  required
                  placeholder="e.g. Tega Replay"
                  className="bg-transparent border-b-2 py-4 font-black text-lg md:text-xl placeholder:opacity-30 placeholder:text-forestGreen focus:outline-none focus:border-white transition-colors"
                  style={{ borderColor: COLORS.forestGreen, color: COLORS.forestGreen }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-1" style={{ color: COLORS.forestGreen }}>
                  Email Address <span className="text-red-700 font-bold">*</span>
                </label>
                <input 
                  type="email" 
                  name="Email" 
                  required
                  placeholder="tega@thereplaymag.com"
                  className="bg-transparent border-b-2 py-4 font-black text-lg md:text-xl placeholder:opacity-30 placeholder:text-forestGreen focus:outline-none focus:border-white transition-colors"
                  style={{ borderColor: COLORS.forestGreen, color: COLORS.forestGreen }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.forestGreen }}>Scene Connection</label>
              <div className="relative">
                <select 
                  name="Dropdown" 
                  required
                  className="w-full bg-transparent border-b-2 py-4 font-black uppercase tracking-tight text-lg md:text-xl focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  style={{ borderColor: COLORS.forestGreen, color: COLORS.forestGreen }}
                >
                  <option value="-Select-">-Select-</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="South Africa">South Africa</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={24} style={{ color: COLORS.forestGreen }} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.forestGreen }}>Why does TheReplayMAG interest you?</label>
                <p className="text-[11px] font-black uppercase mb-1 opacity-80" style={{ color: COLORS.forestGreen }}>What specifically made you want to join our team?</p>
              </div>
              <textarea 
                name="MultiLine" 
                required
                rows={4}
                placeholder="Share your story..."
                className="bg-white/5 border-2 p-4 font-black text-lg md:text-xl placeholder:opacity-30 placeholder:text-forestGreen focus:outline-none focus:border-forestGreen transition-colors resize-none"
                style={{ borderColor: COLORS.forestGreen, color: COLORS.forestGreen }}
              ></textarea>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.forestGreen }}>How would you like to contribute?</label>
                <p className="text-[11px] font-black uppercase mb-1 opacity-80" style={{ color: COLORS.forestGreen }}>Ideas, visuals, writing, curation, or something else.</p>
              </div>
              <textarea 
                name="MultiLine1" 
                required
                rows={4}
                placeholder="I want to help by..."
                className="bg-white/5 border-2 p-4 font-black text-lg md:text-xl placeholder:opacity-30 placeholder:text-forestGreen focus:outline-none focus:border-forestGreen transition-colors resize-none"
                style={{ borderColor: COLORS.forestGreen, color: COLORS.forestGreen }}
              ></textarea>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.forestGreen }}>Links & Socials</label>
              <input 
                type="text" 
                name="Website" 
                placeholder="Work, socials, design portfolio, playlists..."
                className="bg-transparent border-b-2 py-4 font-black text-lg md:text-xl placeholder:opacity-30 placeholder:text-forestGreen focus:outline-none focus:border-white transition-colors"
                style={{ borderColor: COLORS.forestGreen, color: COLORS.forestGreen }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.forestGreen }}>CV / Portfolio (Optional)</label>
              <div className="relative group">
                <input 
                  type="file" 
                  name="FileUpload" 
                  multiple 
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
                <div 
                  className="flex items-center gap-4 border-2 border-dashed p-8 md:p-12 transition-all group-hover:bg-white/10"
                  style={{ borderColor: COLORS.forestGreen }}
                >
                  <Upload size={24} style={{ color: COLORS.forestGreen }} />
                  <span className="text-sm font-black uppercase tracking-widest" style={{ color: COLORS.forestGreen }}>Attach Files Here</span>
                </div>
              </div>
              
              {selectedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {selectedFiles.map((file, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-3 border-2 text-[10px] font-black uppercase tracking-widest"
                      style={{ borderColor: COLORS.forestGreen, color: COLORS.forestGreen, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <div className="flex items-center gap-2 truncate pr-4">
                        <FileText size={14} />
                        <span className="truncate">{file.name}</span>
                        <span className="opacity-40">({(file.size / 1024 / 1024).toFixed(2)}MB)</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => removeFile(idx)}
                        className="p-1 hover:bg-forestGreen hover:text-primaryOrange transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 w-full">
              <button 
                type="submit" 
                className="w-full py-8 md:py-12 font-black uppercase tracking-[0.5em] text-lg md:text-2xl transition-all flex items-center justify-center hover:brightness-110 active:scale-95 border-t-2"
                style={{ 
                  backgroundColor: COLORS.forestGreen, 
                  color: COLORS.primaryOrange, 
                  borderColor: COLORS.forestGreen 
                }}
              >
                SUBMIT APPLICATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
