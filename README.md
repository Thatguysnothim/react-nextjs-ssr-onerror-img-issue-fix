# 🖼️ Next.js SSR Image Fallback Issue

This project demonstrates a known issue in **Next.js + React**:  
When using `<img onError={...} />` in **server-side rendered (SSR)** pages, the `onError` handler is **never triggered** for broken images.

---

## 🤔 Realization While Working on a Production Project

While building a Next.js production project, I used a regular `<img>` tag with an `onError` fallback — and it didn't work during SSR. Even if the image link was invalid, the `onError` never fired.

At first, I thought I was doing something wrong — but turns out, this is a **known bug** affecting both **React** and **Next.js** in server-rendered environments.

---

## 🔍 What's the Actual Issue?

When a page is SSR-rendered, React doesn't hydrate **broken `<img>` tags** correctly. So `onError` doesn't fire at all.

This impacts:
- 🕸️ SEO (bots see broken images)
- 👀 User Experience (no fallback shown)
- 🧑‍🦯 Accessibility

---

## 🧵 Reference Links

- 📌 Next.js Discussion: [#69067](https://github.com/vercel/next.js/discussions/69067)  
- 🐞 Next.js Issue: [#16127](https://github.com/vercel/next.js/issues/16127)  
- ⚠️ React Issue (core problem): [facebook/react#15446](https://github.com/facebook/react/issues/15446)

---

## ✅ Two Fixes That Work

| Route | Description | When to Use |
|-------|-------------|-------------|
| `/server` | ❌ Uses `<img onError={...} />` directly. Fails in SSR. | Don't use this for SSR or SEO. |
| `/server-fix` | ✅ Wraps `<img>` in a Client Component using `"use client"` | Works for users with JS enabled. |
| `/server-fix-seo` | ✅ Validates image URLs via HEAD request on server | Best for bots, SEO, and fallback reliability. |

---

## 💡 Server-side HEAD Check Strategy

To make sure the image exists before rendering, check it server-side:

```js
const getImgSrc = async (src, fallback) => {
  const fullSrc = src.startsWith('http') ? src : `http://localhost:3000/${src}`;
  try {
    const res = await fetch(fullSrc, { method: 'HEAD' });
    const type = res.headers.get('Content-Type') || '';
    if (res.ok && type.startsWith('image/')) {
      return fullSrc;
    }
  } catch (e) {}
  return fallback || '';
};
```

This ensures that **invalid images are caught at build or render time**, not left to fail in the browser.

---

## 🛠️ How to Run the Project

1. **Clone the Repo**
```bash
git clone https://github.com/code-soubhik/nextjs-image-fallback-issue.git
cd nextjs-image-fallback-issue
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run the App**
```bash
npm run dev
```

4. **Explore the Routes**
- `/server` → Broken SSR fallback demo  
- `/server-fix` → Client-side image fallback  
- `/server-fix-seo` → Server-side validated fallback

---

## 🧠 Final Thoughts & Recommendations

- Don't rely solely on `<img onError={...}>` for SSR.
- Use `"use client"` for dynamic fallback after hydration.
- Use a **server-side check (HEAD request)** to catch invalid URLs at render time.
- Combine both strategies for the best of **SEO, UX, and performance**.

---

Have questions or want to contribute? Open an issue or PR!