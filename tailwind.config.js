import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#1D4ED8',    // blue-700
                    light: '#3B82F6',      // blue-500
                    dark: '#1E40AF',       // blue-800
                },
                secondary: {
                    DEFAULT: '#F59E0B',    // amber-500
                    light: '#FBBF24',      // amber-400
                    dark: '#B45309',       // amber-700
                },
                accent: {
                    DEFAULT: '#9333EA',    // purple-600
                    light: '#A855F7',      // purple-500
                    dark: '#6B21A8',       // purple-800
                },
                neutral: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                },
                success: {
                    DEFAULT: '#16A34A', // green-600
                    light: '#22C55E',
                    dark: '#15803D',
                },
                error: {
                    DEFAULT: '#DC2626', // red-600
                    light: '#EF4444',
                    dark: '#B91C1C',
                },
            },
        },
    },

    plugins: [forms],
};
