import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        frost: {
          50: "hsl(200 80% 95%)",
          100: "hsl(200 80% 90%)",
          200: "hsl(200 80% 80%)",
          300: "hsl(200 80% 70%)",
          400: "hsl(200 80% 65%)",
          500: "hsl(200 75% 55%)",
          600: "hsl(200 70% 45%)",
          700: "hsl(200 65% 35%)",
          800: "hsl(200 60% 25%)",
          900: "hsl(200 55% 15%)",
        },
        ember: {
          50: "hsl(20 100% 95%)",
          100: "hsl(20 95% 90%)",
          200: "hsl(20 90% 80%)",
          300: "hsl(20 85% 70%)",
          400: "hsl(20 85% 60%)",
          500: "hsl(20 85% 55%)",
          600: "hsl(20 80% 45%)",
          700: "hsl(20 75% 35%)",
          800: "hsl(20 70% 25%)",
          900: "hsl(20 65% 15%)",
        },
        alpine: {
          950: "hsl(220 20% 4%)",
          900: "hsl(220 20% 6%)",
          800: "hsl(220 18% 10%)",
          700: "hsl(220 15% 15%)",
          600: "hsl(220 15% 20%)",
          500: "hsl(220 12% 30%)",
          400: "hsl(215 15% 45%)",
          300: "hsl(215 15% 55%)",
          200: "hsl(210 15% 70%)",
          100: "hsl(210 18% 85%)",
          50: "hsl(210 20% 95%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "expand": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "shimmer-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "text-morph": {
          "0%": { opacity: "0", filter: "blur(10px)", transform: "translateY(20px)" },
          "50%": { opacity: "1", filter: "blur(0px)", transform: "translateY(0)" },
          "100%": { opacity: "0", filter: "blur(10px)", transform: "translateY(-20px)" },
        },
        "snow-fall": {
          "0%": { transform: "translateY(-10px) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100px) translateX(20px)", opacity: "0" },
        },
        "magnetic-attract": {
          "0%": { transform: "translate(var(--x), var(--y))" },
          "100%": { transform: "translate(0, 0)" },
        },
        "stroke-draw": {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
        "mega-menu-in": {
          "0%": { opacity: "0", transform: "translateY(-10px) scaleY(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
        },
        "mega-menu-out": {
          "0%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
          "100%": { opacity: "0", transform: "translateY(-10px) scaleY(0.95)" },
        },
        "hero-expand": {
          "0%": { clipPath: "inset(10% 20% 10% 20% round 20px)" },
          "100%": { clipPath: "inset(0% 0% 0% 0% round 0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-down": "slide-down 0.6s ease-out forwards",
        "expand": "expand 1s ease-out forwards",
        "morph": "morph 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer-sweep": "shimmer-sweep 2s linear infinite",
        "text-morph": "text-morph 3s ease-in-out infinite",
        "snow-fall": "snow-fall 3s linear infinite",
        "magnetic-attract": "magnetic-attract 0.3s ease-out forwards",
        "stroke-draw": "stroke-draw 2s ease-out forwards",
        "mega-menu-in": "mega-menu-in 0.3s ease-out forwards",
        "mega-menu-out": "mega-menu-out 0.2s ease-in forwards",
        "hero-expand": "hero-expand 1s ease-out forwards",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)',
        'frost-gradient': 'linear-gradient(135deg, hsl(200 80% 65% / 0.2) 0%, hsl(195 70% 50% / 0.1) 100%)',
        'ember-gradient': 'linear-gradient(135deg, hsl(20 85% 55%) 0%, hsl(30 90% 60%) 100%)',
      },
      boxShadow: {
        'glow': '0 0 60px hsl(200 80% 65% / 0.3)',
        'glow-lg': '0 0 100px hsl(200 80% 65% / 0.4)',
        'ember': '0 0 40px hsl(20 85% 55% / 0.4)',
        'elevated': '0 25px 50px -12px hsl(220 20% 2% / 0.8)',
        'card': '0 10px 40px -10px hsl(220 20% 2% / 0.6)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
