import { moments } from "@/data/moments";
import { AppData, ModeId, Moment } from "./types";
export function chooseMoment(mode: ModeId,data: AppData): Moment { const pool=moments.filter(m=>m.supportedModes.includes(mode)&&m.id!==data.lastMomentId); const candidates=pool.length?pool:moments.filter(m=>m.supportedModes.includes(mode)); return candidates[Math.floor(Math.random()*candidates.length)]; }
