import numeral from 'numeral'

numeral.register('locale', 'RSD', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'h',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: (number) => number === 1 ? 'er' : 'ème',
    currency: {
        symbol: 'RSD'
    }
})

numeral.locale('RSD')

export { numeral as default }