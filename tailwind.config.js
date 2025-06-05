/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6",
          dark: "#2563eb"
        },
        secondary: {
          light: "#10b981",
          dark: "#059669"
        },
        accent: {
          light: "#f59e0b",
          dark: "#d97706"
        },
        dark: {
          800: "#1e293b",
          900: "#0f172a"
        },
        glass: "rgba(255, 255, 255, 0.1)",
        neon: {
          blue: "#00f5ff",
          pink: "#ff00f5",
          purple: "#9400ff"
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'button': '0 4px 15px rgba(0, 245, 255, 0.3)',
        'button-active': '0 2px 5px rgba(0, 245, 255, 0.5)',
        'neon-glow': '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff'
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px'
      }
    }
  },
  plugins: [],
}

