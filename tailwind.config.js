module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 16 column grid
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            screens: {
                '3xl': '1800px',
            }
        },
    },
    plugins: [],
}
