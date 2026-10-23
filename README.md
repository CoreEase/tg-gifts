# tg-gifts

مستودع بيانات TypeScript لهدايا Telegram، منظم بحيث تبقى الفهارس العامة والبيانات التفصيلية لكل مجموعة منفصلة وسهلة التوسع.

## البنية

```text
backdrops.ts                 # مصفوفة جميع الخلفيات الفريدة
collections.ts               # فهرس المجموعات مع أعداد العناصر
index.ts                     # نقطة دخول للفهارس والأنواع
types.ts                     # مخططات TypeScript المشتركة
gifts/
  <collection-slug>/
    index.ts                 # موديلات وأنماط وخلفيات المجموعة
scripts/
  generate-data.cjs          # إعادة توليد الملفات من المصدر
```

كل مجلد تحت `gifts/` يحمل اسم slug المجموعة، ويصدر `models` و`patterns` و`backdrops` بالإضافة إلى كائن `collection`. ملف `collections.ts` فهرس خفيف لتجنب تكرار البيانات؛ أما التفاصيل فتبقى داخل مجلد المجموعة.

## الاستخدام

```ts
import { backdrops, collections } from './index.js';
import giftCollection from './gifts/algorithmcup/index.js';

console.log(backdrops.length, collections.length);
console.log(giftCollection.models, giftCollection.patterns, giftCollection.backdrops);
```

يمكن استيراد أي مجموعة مباشرة من `gifts/<slug>/index.js` بعد التحويل/التجميع إلى JavaScript، أو من ملف TypeScript في بيئة تدعم ذلك.

## إعادة توليد البيانات

يقبل المولد ملف المصدر الأصلي الذي يصدّر `{ backdrops, collections }`:

```bash
npm install
npm run generate -- /path/to/collections.js
npm run typecheck
```

## البيانات الحالية

تتضمن البيانات المولدة 80 خلفية فريدة و123 مجموعة، تضم 7,806 موديلات و26,065 باترونًا و8,696 خلفية مرتبطة بالمجموعات.
