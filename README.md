# tg-gifts

مستودع TypeScript لهدايا Telegram. يحتفظ فهرس المجموعات ببيانات المستخدم الحالية مثل الاسم والصورة والعدد، وتحتوي ملفات المجموعات على الموديلات والباترونات والخلفيات ومسارات الأصول.

**مصدر بيانات وأصول الهدايا:** powered by [@GiftChanges](https://t.me/GiftChanges) عبر [api.changes.tg](https://api.changes.tg). شكرًا لـ @GiftChanges على توفير الواجهة.

## بنية المشروع

```text
backdrops.ts                       # مصفوفة جميع الخلفيات الفريدة
collections.ts                     # فهرس المجموعات والاسم والصورة والأعداد
index.ts                           # نقطة الدخول والإسناد
 types.ts                          # مخططات TypeScript
gifts/<slug>/index.ts              # موديلات وأنماط وخلفيات المجموعة
gifts/<slug>/assets/manifest.json  # أسماء API ومسارات الملفات
 gifts/<slug>/assets/models/        # SVG وTGS لكل موديل
gifts/<slug>/assets/patterns/      # PNG لكل باترون
scripts/generate-asset-manifests.mjs
scripts/download-assets.mjs
.github/workflows/download-assets.yml
```

كل عنصر موديل يملك `assets.svg` و`assets.tgs`؛ وكل عنصر باترون يملك `assets.png`. المسارات نسبية من جذر المستودع. يحافظ مولّد المسارات على الحقول الأخرى في عناصر المجموعات وفهرس `collections.ts`.

## الاستخدام

```ts
import { collections, DATA_ATTRIBUTION } from './index.js';
import sakuraFlower from './gifts/sakuraflower/index.js';

console.log(collections[0].name, collections[0].image, collections[0].count);
console.log(sakuraFlower.models[0].assets.svg, sakuraFlower.models[0].assets.tgs);
console.log(sakuraFlower.patterns[0].assets.png);

// اعرض هذا النص في About/Credits في التطبيق المستهلك.
console.log(DATA_ATTRIBUTION);
```

## توليد المسارات وتنزيل الملفات

```bash
npm run generate-assets
npm run download-assets
npm run typecheck
```

`generate-assets` يقرأ الموديلات والباترونات الموجودة في ملفات `gifts/<slug>/index.ts` ويحدّث حقول الأصول و`assets/manifest.json` دون إعادة إنشاء فهرس المستخدم. التنزيل يستأنف تلقائيًا ويتخطى الملفات السليمة الموجودة. استخدم `npm run download-assets -- --refresh` لإعادة تنزيل الموجود، أو `--kind=patterns --limit=10` لاختبار مجموعة فرعية. يضبط التوازي عبر `ASSET_DOWNLOAD_CONCURRENCY` (1–16؛ الافتراضي 6).

## GitHub Actions

`Download gift assets` يعمل يدويًا من تبويب **Actions** أو أسبوعيًا. افتراضيًا ينزّل الملفات الناقصة فقط، ثم يرفعها إلى الفرع الافتراضي باستخدام `GITHUB_TOKEN`. خيار `refresh_assets` يعيد تنزيل جميع الأصول. يحتاج إعداد Actions في المستودع إلى السماح للـworkflow بكتابة محتوى المستودع.

## إسناد المصدر

يصدر `index.ts` الثابت `DATA_ATTRIBUTION` ليستخدمه التطبيق المستهلك. عند عرض بيانات الهدايا أو أصولها للمستخدمين، أظهر الإسناد في صفحة About/Credits أو موضع ظاهر مناسب. أبقِ هذا الإسناد مع أي نسخة موزعة.
