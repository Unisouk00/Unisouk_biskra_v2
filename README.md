# UniSouk V2 — السوق الجامعي

منصة Web RTL موجهة لطلبة جامعة محمد خيضر بسكرة لعرض وشراء وتبادل المنتجات والخدمات الجامعية.

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- Supabase Auth / PostgreSQL / Storage
- Netlify deployment

## Local development
1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and fill in your Supabase project URL and publishable key.
3. Run `npm install`.
4. Run `npm run dev`.

## Security
Never put a Supabase service-role key in frontend code or commit secrets. Use only the public publishable key in browser apps. Existing Supabase database objects are preserved; migrations are not automatically applied from this repository.