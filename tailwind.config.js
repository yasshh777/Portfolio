/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // very important
  ],
  theme: {
    extend: {

        fontFamily: {
        sans: ['Sora', 'sans-serif'], // you can name it anything
        mono: ['"JetBrains Mono"', 'monospace'],
      },

     colors: {
        background: '#0f172a',    // 🔹 Main dark background (entire page)
        foreground: '#f8fafc',    // 🔹 Main light text color (headings, paragraphs)
        
        primary: '#6366f1',       // 🔹 Main accent (buttons, links, highlights)
        secondary: '#14b8a6',     // 🔹 Secondary accent (icons, badges, borders)
        accent: '#ec4899',        // 🔹 Neon/pink highlight (call-to-action, hover)

        muted: '#334155',         // 🔹 Dark gray for cards, containers, sections
        border: '#1e293b',        // 🔹 Border or divider color (underlines, cards)
         neonBlue: '#60a5fa',      // for gradient start
        neonPink: '#e879f9',      // for gradient end
       
      },
    },
  },
  plugins: [],
}

