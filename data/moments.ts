import { Moment, ModeId } from "@/lib/types";
const all: ModeId[] = ["lips", "nails", "eating"];
export const moments: Moment[] = [
  {id:"breathe",category:"general",supportedModes:all,title:"🌬️ נשיפה אחת",text:"קחו נשיפה אחת ארוכה ואיטית. אין צורך לעשות יותר מזה.",actionLabel:"סיימתי את הרגע"},
  {id:"now",category:"general",supportedModes:all,title:"⏳ רק הרגע הזה",text:"אין צורך להחליט על כל היום. רק לשים לב לעשר השניות הקרובות.",actionLabel:"סיימתי את הרגע"},
  {id:"space",category:"general",supportedModes:all,title:"🌱 לתת מקום",text:"אפשר להיות רגע עם התחושה הזאת. לא חייבים לגרש אותה ולא חייבים לפעול עליה.",actionLabel:"סיימתי את הרגע"},
  {id:"counts",category:"general",supportedModes:all,title:"🫶 גם עכשיו נחשב",text:"גם אם כבר התחלת, אפשר לעצור עכשיו. העצירה הזאת עדיין נחשבת.",actionLabel:"סיימתי את הרגע"},
  {id:"lips-release",category:"lips",supportedModes:["lips"],title:"לשחרר",text:"שחררו מעט את הלסת. תנו לשיניים להיפרד ולשפתיים לנוח.",actionLabel:"סיימתי את הרגע"},
  {id:"lips-moisture",category:"lips",supportedModes:["lips"],title:"לחות",text:"אם השפתיים יבשות, אפשר למרוח לחות בעדינות. בלי לקלף קודם את העור שמפריע.",actionLabel:"סיימתי את הרגע"},
  {id:"lips-rest",category:"lips",supportedModes:["lips"],title:"מנוחה בפה",text:"שימו לב אם הלשון או השיניים מחפשות אזור מחוספס. תנו ללשון לנוח בעדינות.",actionLabel:"סיימתי את הרגע"},
  {id:"lips-hands",category:"lips",supportedModes:["lips"],title:"ידיים",text:"תנו לידיים משהו אחר לעשות לעשר שניות: עט, כוס, שרוול או חפץ קטן.",actionLabel:"סיימתי את הרגע"},
  {id:"nails-rest",category:"nails",supportedModes:["nails"],title:"להניח את הידיים",text:"הניחו את הידיים על הברכיים או על השולחן לעשר שניות.",actionLabel:"סיימתי את הרגע"},
  {id:"nails-object",category:"nails",supportedModes:["nails"],title:"חפץ אחר",text:"החזיקו עט, מפתח, טבעת או חפץ קטן.",actionLabel:"סיימתי את הרגע"},
  {id:"nails-feel",category:"nails",supportedModes:["nails"],title:"להרגיש בלי לפעול",text:"שימו לב לתחושה בקצות האצבעות. אין צורך לשנות אותה מיד.",actionLabel:"סיימתי את הרגע"},
  {id:"nails-care",category:"nails",supportedModes:["nails"],title:"טיפול במקום כסיסה",text:"אם יש קצה שמפריע, אפשר לבחור לטפל בו אחר כך בעדינות ולא עם השיניים.",actionLabel:"סיימתי את הרגע"},
  {id:"eat-check",category:"eating",supportedModes:["eating"],title:"🍽️ לבדוק בעדינות",text:"שימו לב לגוף. האם יש רעב, או שמשהו אחר מבקש תשומת לב? אין צורך לענות בצורה מושלמת.",actionLabel:"סיימתי את הרגע"},
  {id:"eat-water",category:"eating",supportedModes:["eating"],title:"💧 רגע לפני",text:"אפשר לקחת לגימה אחת של מים. אחר כך לבחור מחדש.",actionLabel:"סיימתי את הרגע"},
  {id:"eat-wait",category:"eating",supportedModes:["eating"],title:"⏳ אין צורך למהר",text:"אפשר להמתין עשר שניות לפני שמחליטים. גם ההמתנה היא בחירה.",actionLabel:"סיימתי את הרגע"},
  {id:"eat-valid",category:"eating",supportedModes:["eating"],title:"❤️ גם אכילה יכולה להיות הבחירה",text:"אם הגוף רעב או אם בוחרים לאכול, אפשר לעשות זאת מתוך תשומת לב ולא מתוך אשמה.",actionLabel:"סיימתי את הרגע"},
  {id:"eat-support",category:"eating",supportedModes:["eating"],title:"🍎 מה יתמוך בי?",text:"אם אני בוחר לאכול עכשיו, מה יעזור לי להרגיש טוב ומטופל גם בהמשך?",actionLabel:"סיימתי את הרגע"},
  {id:"eat-need",category:"eating",supportedModes:["eating"],title:"🌿 מה אני צריך?",text:"אולי אוכל. אולי מנוחה, הפסקה, חברה, שקט או שינוי מקום. רק לשים לב.",actionLabel:"סיימתי את הרגע"}
];
export const deepCopy = {
  seeing: ["כרגע הופיע רצון. אפשר רק לשים לב למה שקורה בגוף ובמחשבות.", "אין צורך להחליט עדיין. רק לראות מה נמצא כאן.", "מה התרחש רגע לפני שהרצון הופיע?"],
  allowing: ["אפשר להיות רגע עם הרצון הזה בלי להילחם בו.", "הרצון אינו פקודה. הוא גם אינו אויב.", "אין צורך להוכיח כוח רצון. אפשר לבדוק בעדינות מה באמת צריך."],
  choices: ["לאכול עכשיו", "לבחור משהו שיזין אותי", "לשתות ולבדוק שוב בעוד כמה דקות", "לקחת הפסקה קצרה", "לנוח", "לשנות מקום", "להמשיך במה שעשיתי ולבדוק שוב אחר כך"]
};
