const quotes = [{
    quote: `Take risks now. Do something bold. You won’t regret it.`,
    author: ` Elon Musk`
}, {
    quote: `It's fine to celebrate success, but it is more important to heed the lessons of failure..`,
    author: `Bill Gates`
},  {
    quote: `The moral, in one word, is that you are divine.`,
    author: `Swami Vivekananda`
}, {
    quote: `Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.`,
    author: `mark zuckerberg`
}, {
    quote: `Innovation distinguishes between a leader and a follower.`,
    author: `Steve Jobs`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})