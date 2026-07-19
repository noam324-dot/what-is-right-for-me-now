import { AppData, ModeId } from "./types";
export const STORAGE_KEY = "right-for-me-now";
export const defaults: AppData = { version: 1, enabledModes: ["lips","nails","eating"], personalActions: [], feedback: {}, completions: [], choices: [] };
export function loadData(): AppData { try { const raw=localStorage.getItem(STORAGE_KEY); if(!raw) return defaults; const value=JSON.parse(raw); if(value.version!==1) return defaults; return {...defaults,...value}; } catch { return defaults; } }
export function saveData(data: AppData){ localStorage.setItem(STORAGE_KEY,JSON.stringify(data)); }
export function weeklyCount(data: AppData){ const since=Date.now()-7*24*60*60*1000; return data.completions.filter(x=>new Date(x.at).getTime()>=since).length; }
export function complete(data: AppData, mode: ModeId){ return {...data,completions:[...data.completions,{mode,at:new Date().toISOString()}]}; }
export function completeWithChoice(data: AppData, mode: ModeId, choice: string){ const at=new Date().toISOString(); return {...data,completions:[...data.completions,{mode,at}],choices:[...data.choices,{mode,choice,at}]}; }
