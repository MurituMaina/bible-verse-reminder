// For Verse HTML 
window.addEventListener('DOMContentLoaded', versesRead);
function versesRead( books = 'Genesis', chapter =1 ,verse=20){
    
    fetch(`https://bible-api.com/Genesis${chapter}:1-${verse}`)
    .then((resp) => resp.json())
    .then((data) => {
        let scripture = document.getElementById("versesToRead")
    scripture.innerHTML = `<h2>${data.reference}</h2><p> ${data.text}</p>`
    })
    .catch((error) => console.log(error + "Error!!"))}


let readBook;
let book = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
let select = document.getElementById("books");

for(var i = 0; i < book.length; i++){
    select.options.add(new Option(book[i], book[i]));
    
} 
let chapterSelect = document.getElementById("chapter");
for(let i= 0; i < 150; i++){
chapterSelect.options.add(new Option([i+1], i+1),)
}
 let verseSelect = document.getElementById('verse');
 for(let i =0; i< 175; i++){
verseSelect.options.add(new Option(i+1))
}

let search = document.getElementById("searchRead");
search.addEventListener('submit', searchRead);

function searchRead(event){
    event.preventDefault()
    let books = document.getElementById('books').value;
    console.log(books)
    let chapters = document.getElementById('chapter').value;
    console.log(chapters)
    let verse = document.getElementById("verse").value;
    console.log(books, chapters, verse);
    verseRead(books, chapters, verse)

}

function verseRead( books = 'Genesis', chapter =1 ,verse=20){
    
fetch(`https://bible-api.com/${books}${chapter}:1-${verse}`)
.then((resp) => resp.json())
.then((data) => {
    let scripture = document.getElementById("versesToRead")
scripture.innerHTML = `<h2>${data.reference}</h2><p id="verses"> ${data.text}</p>`
})
.catch((error) => console.log(error + "Error!!"))}


// let testament = document.getElementById("testament");
for(var i = 0; i < book.length; i++){
    select.options.add(new Option(book[i], book[i]));
} 

// Daily Random Verse
// let dailyVerse = Math.Random()
// console.log(dailyVerse)


// var someStr = 'He said "Hello, my name is Foo"';
// console.log(someStr.replace(/['"]+/g, ''));

//For Verse HTML 
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });
// window.addEventListener('DOMContentLoaded', randomFoodGen)
// const display = document.getElementById("bibleScriptures")
// function randomFoodGen(){
//     fetch('https://bible-api.com/Genesis1:1-30')
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data.text)
//          display.innerHTML = `
//          <h2>${data.reference}</h2><p id='verse'> ${data.text}/n</p>`
//         //  display.background-color(red)
        
//     })
//     .catch(() => console.log("Errors"))
// }
