"use client";

import { useEffect, useMemo, useState } from "react";
import { modes } from "@/data/modes";
import { generalIdeas, ideasByMode, pauseLines, thoughtLines } from "@/data/toolkit";
import { AppData, ModeId } from "@/lib/types";
import { completeWithChoice, defaults, loadData, saveData, weeklyCount } from "@/lib/storage";

type Screen = "home" | "modes" | "toolkit" | "pause" | "idea" | "thought" | "done" | "settings";

const sample = (items: string[], previous?: string) => {
  const alternatives = items.filter((item) => item !== previous);
  const pool = alternatives.length ? alternatives : items;
  return pool[Math.floor(Math.random() * pool.length)];
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");
  const [data, setData] = useState<AppData>(defaults);
  const [mode, setMode] = useState<ModeId>();
  const [content, setContent] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    setData(loadData());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveData(data);
  }, [data, ready]);

  const enabled = useMemo(() => modes.filter((item) => data.enabledModes.includes(item.id)), [data.enabledModes]);
  const selectedMode = mode ? modes.find((item) => item.id === mode) : undefined;
  const count = weeklyCount(data);
  const countLabel = count === 1 ? "השבוע יצרת רגע בחירה אחד." : `השבוע יצרת ${count} רגעי בחירה.`;

  const goHome = () => {
    setScreen("home");
    setMode(undefined);
    setContent("");
  };

  const chooseMode = (id: ModeId) => {
    setMode(id);
    setContent("");
    setScreen("toolkit");
  };

  const openPause = () => {
    setContent(sample(pauseLines));
    setScreen("pause");
  };

  const openIdea = () => {
    if (!mode) return;
    setContent(sample([...generalIdeas, ...ideasByMode[mode], ...data.personalActions]));
    setScreen("idea");
  };

  const openThought = () => {
    setContent(sample(thoughtLines));
    setScreen("thought");
  };

  const anotherIdea = () => {
    if (!mode) return;
    setContent(sample([...generalIdeas, ...ideasByMode[mode], ...data.personalActions], content));
  };

  const finish = (kind: "רגע קטן" | "רעיון קטן" | "מחשבה קטנה") => {
    if (!mode) return;
    setData((current) => completeWithChoice(current, mode, `${kind}: ${content}`));
    setScreen("done");
  };

  const toggle = (id: ModeId) => setData((current) => {
    const hasMode = current.enabledModes.includes(id);
    if (hasMode && current.enabledModes.length === 1) return current;
    return {
      ...current,
      enabledModes: hasMode ? current.enabledModes.filter((item) => item !== id) : [...current.enabledModes, id],
    };
  });

  const addAction = () => {
    const value = action.trim();
    if (!value) return;
    setData((current) => ({ ...current, personalActions: [...current.personalActions, value] }));
    setAction("");
  };

  if (!ready) return <main className="shell"><section className="card"><p>רגע אחד…</p></section></main>;

  return <main className="shell"><section className="card screenFrame" key={screen} aria-live="polite">
    <header className="top">
      <button className="brand" onClick={goHome}>רגע אחד לעצמי</button>
      {screen !== "settings" && <button className="iconButton" onClick={() => setScreen("settings")} aria-label="הגדרות">⚙</button>}
    </header>

    {screen === "home" && <div className="center intro">
      <span className="orb" aria-hidden="true">◌</span>
      <h1>מה נכון עבורי עכשיו?</h1>
      <p className="homeSubtitle">רגע אחד לעצמי</p>
      <p className="introCopy">לפעמים אנחנו פועלים מתוך הרגל.<br />אפשר לקבל משהו קטן ולהמשיך בחיים.</p>
      {count > 0 && <p className="count">{countLabel}</p>}
      <button className="primary" onClick={() => setScreen("modes")}>לפתוח את הערכה</button>
    </div>}

    {screen === "modes" && <div className="modeSelection">
      <Back onClick={goHome} />
      <p className="eyebrow">בחירה קטנה</p>
      <h1>מה קורה עכשיו?</h1>
      <p className="supportingText">רק לבחור את מה שמתאר את הרגע.</p>
      <div className="stack">{enabled.map((item) => <button className="choice modeChoice" key={item.id} onClick={() => chooseMode(item.id)}>
        <span aria-hidden="true">{item.emoji}</span><span className="choiceLabel">{item.label}</span>
      </button>)}</div>
    </div>}

    {screen === "toolkit" && <div className="toolkit">
      <Back onClick={() => setScreen("modes")} />
      <ModeMarker mode={selectedMode} />
      <h1>מה תרצה לקבל עכשיו?</h1>
      <div className="entryCards">
        <button onClick={openPause}><span aria-hidden="true">🌱</span><b>רגע קטן</b><small>רגע אחד בלי שאלות</small></button>
        <button onClick={openIdea}><span aria-hidden="true">🧰</span><b>רעיון קטן</b><small>אפשרות מעשית אחת</small></button>
        <button onClick={openThought}><span aria-hidden="true">💭</span><b>מחשבה קטנה</b><small>דרך נוספת לראות את הרגע</small></button>
      </div>
    </div>}

    {screen === "pause" && <ExperienceScreen
      mode={selectedMode}
      icon="🌱"
      title="רגע קטן"
      content={content}
      onBack={() => setScreen("toolkit")}
      onFinish={() => finish("רגע קטן")}
    />}

    {screen === "idea" && <ExperienceScreen
      mode={selectedMode}
      icon="🧰"
      title="אפשר לנסות..."
      content={content}
      onBack={() => setScreen("toolkit")}
      onFinish={() => finish("רעיון קטן")}
      secondary={<button className="secondary" onClick={anotherIdea}>רעיון אחר</button>}
    />}

    {screen === "thought" && <ExperienceScreen
      mode={selectedMode}
      icon="💭"
      title="מחשבה קטנה"
      content={content}
      onBack={() => setScreen("toolkit")}
      onFinish={() => finish("מחשבה קטנה")}
    />}

    {screen === "done" && <div className="center done">
      <ModeMarker mode={selectedMode} />
      <span className="doneIcon">🌱</span>
      <h1>איזה יופי שעצרת לרגע ולא פעלת באופן אוטומטי.</h1>
      <p>גם אם הדחף עדיין כאן, כבר יצרת רגע קטן של בחירה.<br />זה בדיוק מה שאנחנו מתרגלים.</p>
      <button className="primary" onClick={goHome}>חזרה למסך הראשי</button>
    </div>}

    {screen === "settings" && <div className="settings">
      <Back onClick={goHome} />
      <h1>הגדרות</h1>
      <section className="settingsSection">
        <h2>מה יופיע עבורי?</h2>
        <p className="sectionHint">אפשר לבחור אילו מצבים יוצגו במסך הבחירה.</p>
        {modes.map((item) => <label className="toggle" key={item.id}><input type="checkbox" checked={data.enabledModes.includes(item.id)} onChange={() => toggle(item.id)} /><span>{item.emoji} {item.label}</span></label>)}
      </section>
      <section className="settingsSection">
        <h2>פעולות אישיות</h2>
        <p className="sectionHint">רעיונות אישיים שיוכלו להופיע ב„רעיון קטן”.</p>
        <div className="inputRow"><input value={action} onChange={(event) => setAction(event.target.value)} placeholder="למשל: לצאת למרפסת" aria-label="פעולה אישית חדשה" /><button onClick={addAction}>שמירה</button></div>
        {data.personalActions.map((item, index) => <div className="saved" key={item + index}>{item}<button onClick={() => setData((current) => ({ ...current, personalActions: current.personalActions.filter((_, itemIndex) => itemIndex !== index) }))} aria-label={`מחיקת ${item}`}>×</button></div>)}
      </section>
      <section className="settingsSection settingsPrivacy">
        <div className="privacy"><b>הפרטיות שלך</b><p>כל הנתונים נשמרים בדפדפן הזה בלבד ואינם נשלחים לשום מקום.</p></div>
        <button className="danger" onClick={() => { if (confirm("למחוק את כל הנתונים המקומיים?")) { localStorage.removeItem("right-for-me-now"); setData(defaults); goHome(); } }}>מחיקת כל הנתונים</button>
      </section>
    </div>}
  </section></main>;
}

function ExperienceScreen({ mode, icon, title, content, onBack, onFinish, secondary }: {
  mode?: { emoji: string; id: ModeId };
  icon: string;
  title: string;
  content: string;
  onBack: () => void;
  onFinish: () => void;
  secondary?: React.ReactNode;
}) {
  return <div className="center experience">
    <Back onClick={onBack} />
    <ModeMarker mode={mode} />
    <span className="experienceIcon" aria-hidden="true">{icon}</span>
    <p className="eyebrow">{title}</p>
    <h1>{content}</h1>
    {secondary}
    <button className="primary" onClick={onFinish}>המשך</button>
  </div>;
}

function Back({ onClick }: { onClick: () => void }) {
  return <button className="back" onClick={onClick}>→ חזרה</button>;
}

function ModeMarker({ mode }: { mode?: { emoji: string; id: ModeId } }) {
  if (!mode) return null;
  const label = { lips: "לשפתיים", nails: "לציפורניים", eating: "לאכילה" }[mode.id];
  return <div className="modeMarker" aria-label={`מצב: ${label}`}><span aria-hidden="true">{mode.emoji}</span><small>{label}</small></div>;
}
