window.addEventListener('DOMContentLoaded', verseRead);
let readBook;
let book = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
let select = document.getElementById("books");

for(var i = 0; i < book.length; i++){
    select.options.add(new Option(book[i], book[i]));
    
} 
let selectedBook = document.getElementById('books').value
selectedBook.addEventListener("input", verseRead)
function searchRead(e){
    e.preventDefault()
console.log(e.value + "called")
   
    let books = document.getElementById('books').target.value;
    console.log(books)

}

function verseRead( books='Genesis', chapter = 1,verse=1){
console.log("welcome")
fetch(`https://bible-api.com/Genesis${chapter}:${verse}`)
.then((resp) => resp.json())
.then((data) => {
    let scripture = document.getElementById("bibleScriptures")
scripture.innerHTML = `<h2>${data.reference}</h2><p> ${data.text}</p>`
})
.catch((error) => console.log(error + "Error!!"))}


for(var i = 0; i < book.length; i++){
    select.options.add(new Option(book[i], book[i]));
} 

let dailyVerse = Math.Random()
console.log(dailyVerse)


var someStr = 'He said "Hello, my name is Foo"';
console.log(someStr.replace(/['"]+/g, ''));

