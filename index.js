const readme = `\
⏰ Updated on ${new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    dateStyle: 'full',
    timeStyle: 'long'
}).format(new Date())}
`
console.log(readme)
