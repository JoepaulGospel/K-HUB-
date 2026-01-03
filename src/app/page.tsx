"use client";
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';
export default function KHubLogin() {
const [hubName, setHubName] = useState("");
const [accessCode, setAccessCode] = useState("");
const [loading, setLoading] = useState(false);
const handleEnterHub = async () => {
setLoading(true);
// Logic to verify Hub and Code will go here in Milestone 3
console.log(`Attempting to enter: ${hubName}`);
setTimeout(() => setLoading(false), 1000);
};
return (
<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
<div className="max-w-sm w-full space-y-12">
{/* Branding */}
<div class="text-center space-y-2">
<h1 className="text-4xl font-black italic tracking-tighter uppercase underline decoration-orange-500 decoration-4 underline-offset-8">K-HUB</h1>
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Creative Infrastructure</p>
</div>
{/* Login Card */}
<div className="bg-zinc-900/50 border border-white/5 p-10 rounded-[40px] backdrop-blur-2xl shadow-2xl">
<div className="space-y-6">
<div>
<label className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-2 block ml-1">Agency Hub</label>
<input
type="text"
placeholder="e.g. TIZIANO"
className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-white transition-all uppercase font-bold tracking-tighter text-xl"
value={hubName}
onChange={(e) => setHubName(e.target.value)}
/>
</div>
<div>
<label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1">Access Code</label>
<input
type="password"
placeholder="••••"
maxLength={4}
className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-white transition-all text-center font-bold text-2xl tracking-[0.5em]"
value={accessCode}
onChange={(e) => setAccessCode(e.target.value)}
/>
</div>
<button
onClick={handleEnterHub}
disabled={loading}
className="w-full bg-white text-black py-5 rounded-[24px] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all active:scale-95"
>
{loading ? "Authenticating..." : "Enter Hub"}
<ArrowRight size={14} />
</button>
</div>
</div>
{/* Footer */}
<div className="flex justify-center gap-8 text-[9px] font-black text-zinc-700 uppercase tracking-widest">
<div className="flex items-center gap-2"><Globe size={12}/> Global Standard</div>
<div className="flex items-center gap-2"><ShieldCheck size={12}/> Secure Data</div>
</div>
</div>
</div>
);
}
