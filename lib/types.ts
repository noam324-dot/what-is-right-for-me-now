export type ModeId = "lips" | "nails" | "eating";
export type Category = "general" | ModeId;
export type PauseType = "quick" | "deep";
export type Moment = { id: string; category: Category; supportedModes: ModeId[]; title: string; text: string; actionLabel: string };
export type Feedback = { shown: number; yes: number; no: number };
export type AppData = { version: 1; enabledModes: ModeId[]; personalActions: string[]; lastMomentId?: string; feedback: Record<string, Feedback>; completions: Array<{ mode: ModeId; at: string }>; choices: Array<{ mode: ModeId; choice: string; at: string }> };
