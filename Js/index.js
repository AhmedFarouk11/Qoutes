var quotes = [];
var previousQoute = -1;


function YourQuote() {
    quotes = [
        {
            qoute: "Be yourself; everyone else is already taken.",
            author: "Oscar Wilde"
        },
        {
            qoute: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            author: "Marilyn Monroe"
        },
       {
        qoute: "So many books, so little time.",
        author:"Frank Zappa"
       },
       {
        qoute:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein"
       },
       {
        qoute:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero"
       }

    ]
    do {
        randomQoute = Math.floor(Math.random() * quotes.length);
    } while (randomQoute === previousQoute);

    previousQoute = randomQoute;
    document.getElementById("Quote").innerHTML = quotes[randomQoute].qoute;
    document.getElementById("Aouthor").innerHTML = quotes[randomQoute].author;

}
