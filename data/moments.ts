import { Moment, ModeId } from "@/lib/types";
const all: ModeId[] = ["lips", "nails", "eating"];
export const moments: Moment[] = [
  {id:"breathe",category:"general",supportedModes:all,title:"🌬️ אפשרות לנשיפה אחת",text:"אפשר לקחת נשיפה אחת ארוכה ואיטית. אין צורך לעשות יותר מזה.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"now",category:"general",supportedModes:all,title:"⏳ רק הרגע הזה",text:"אין צורך להחליט על כל היום. אפשר רק לשים לב לעשר השניות הקרובות.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"space",category:"general",supportedModes:all,title:"🌱 מקום לתחושה",text:"אפשר להיות רגע עם התחושה הזאת. אין צורך לגרש אותה או לפעול עליה.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"counts",category:"general",supportedModes:all,title:"🫶 גם עכשיו נחשב",text:"גם אם כבר התחלת, אפשר לעצור עכשיו. העצירה הזאת עדיין נחשבת.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"lips-release",category:"lips",supportedModes:["lips"],title:"רגע של שחרור",text:"אפשר לשחרר מעט את הלסת, לתת לשיניים להיפרד ולשפתיים לנוח.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"lips-moisture",category:"lips",supportedModes:["lips"],title:"אפשרות ללחות",text:"אם השפתיים יבשות, אפשר למרוח לחות בעדינות, בלי לקלף קודם את העור שמפריע.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"lips-rest",category:"lips",supportedModes:["lips"],title:"לשים לב בעדינות",text:"אפשר לשים לב אם הלשון או השיניים מחפשות אזור מחוספס, ולתת ללשון לנוח בעדינות.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"lips-hands",category:"lips",supportedModes:["lips"],title:"אפשרות לידיים",text:"אפשר לתת לידיים משהו אחר לעשר שניות: עט, כוס, שרוול או חפץ קטן.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"nails-rest",category:"nails",supportedModes:["nails"],title:"רגע של מנוחה לידיים",text:"אפשר להניח את הידיים על הברכיים או על השולחן לעשר שניות.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"nails-object",category:"nails",supportedModes:["nails"],title:"אפשרות לחפץ אחר",text:"אפשר להחזיק עט, מפתח, טבעת או חפץ קטן.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"nails-feel",category:"nails",supportedModes:["nails"],title:"לשים לב לתחושה",text:"אפשר לשים לב לתחושה בקצות האצבעות. אין צורך לשנות אותה מיד.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"nails-care",category:"nails",supportedModes:["nails"],title:"אפשר לטפל בזה בעדינות",text:"אם יש קצה שמפריע,\nאפשר לבחור לטפל בו אחר כך בעדינות\nולא עם השיניים.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"eat-check",category:"eating",supportedModes:["eating"],title:"🍽️ לשים לב בעדינות",text:"אפשר לשים לב לגוף: האם יש רעב, או שמשהו אחר מבקש תשומת לב? אין צורך לענות בצורה מושלמת.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"eat-water",category:"eating",supportedModes:["eating"],title:"💧 אפשרות לרגע לפני",text:"אפשר לקחת לגימה אחת של מים, ואחר כך לבחור מחדש.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"eat-wait",category:"eating",supportedModes:["eating"],title:"⏳ אפשר לתת לזה רגע",text:"אפשר להמתין עשר שניות לפני שמחליטים. גם ההמתנה היא בחירה.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"eat-valid",category:"eating",supportedModes:["eating"],title:"❤️ גם אכילה יכולה להיות הבחירה",text:"אם הגוף רעב או אם בוחרים לאכול, אפשר לעשות זאת מתוך תשומת לב ולא מתוך אשמה.",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"eat-support",category:"eating",supportedModes:["eating"],title:"🍎 מה יתמוך בי?",text:"אם אני בוחר לאכול עכשיו, מה יעזור לי להרגיש טוב ומטופל גם בהמשך?",actionLabel:"ומה נכון עבורי עכשיו?"},
  {id:"eat-need",category:"eating",supportedModes:["eating"],title:"🌿 מה אני צריך?",text:"אולי אוכל. אולי מנוחה, הפסקה, חברה, שקט או שינוי מקום. אפשר רק לשים לב.",actionLabel:"ומה נכון עבורי עכשיו?"}
];
export const deepCopy = {
  seeing: ["כרגע הופיע רצון. אפשר רק לשים לב למה שקורה בגוף ובמחשבות.", "אין צורך להחליט עדיין. רק לראות מה נמצא כאן.", "מה התרחש רגע לפני שהרצון הופיע?"],
  allowing: ["אפשר להיות רגע עם הרצון הזה בלי להילחם בו.", "הרצון אינו פקודה. הוא גם אינו אויב.", "אין צורך להוכיח כוח רצון. אפשר לבדוק בעדינות מה באמת צריך."],
  choices: ["לאכול עכשיו", "לבחור משהו שיזין אותי", "לשתות ולבדוק שוב בעוד כמה דקות", "לקחת הפסקה קצרה", "לנוח", "לשנות מקום", "להמשיך במה שעשיתי ולבדוק שוב אחר כך"]
};
