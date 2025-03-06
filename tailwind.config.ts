
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Kingdom Entrepreneurs Academy
				kea: {
					blue: {
						light: '#33C3F0',
						DEFAULT: '#0FA0CE',
						dark: '#087ca1'
					},
					gold: {
						light: '#f0e6cc',
						DEFAULT: '#dbc070',
						dark: '#b89d43'
					},
					gray: {
						50: '#f9f9fb',
						100: '#f1f0fb',
						200: '#e4e3ed',
						300: '#d2d0dd',
						400: '#9f9daf',
						500: '#8E9196',
						600: '#5d5b69'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'image-rotate': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(2deg) scale(1.02)' },
					'100%': { transform: 'rotate(0deg) scale(1)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'image-rotate': 'image-rotate 10s infinite ease-in-out',
				'pulse-soft': 'pulse-soft 3s infinite ease-in-out'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Playfair Display', 'serif'],
				body: ['Montserrat', 'sans-serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.7))'
			},
			boxShadow: {
				'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
				'button': '0 4px 14px 0 rgba(15, 160, 206, 0.2)'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'inherit',
						a: {
							color: 'inherit',
							opacity: 0.8,
							fontWeight: '500',
							textDecoration: 'underline',
							'&:hover': {
								opacity: 1,
								color: 'var(--tw-text-opacity: 1) rgba(15, 160, 206, var(--tw-text-opacity))',
							},
						},
						b: { color: 'inherit' },
						strong: { color: 'inherit' },
						em: { color: 'inherit' },
						h1: { color: 'inherit' },
						h2: { color: 'inherit' },
						h3: { color: 'inherit' },
						h4: { color: 'inherit' },
						code: { color: 'inherit' },
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
