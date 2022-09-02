// For Verse HTML 
window.addEventListener('DOMContentLoaded', versesRead);
function versesRead( books = 'Genesis', chapter ,verse =1){
    
    fetch(`https://bible-api.com/Genesis${chapter}:1-${verse}`)
    .then((resp) => resp.json())
    .then((data) => {
        let scripture = document.getElementById("versesToRead")
    scripture.innerHTML = `<h4>${data.reference}</h4><p> ${data.text}</p>`
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
    //console.log(books)
    let chapters = document.getElementById('chapter').value;
    //console.log(chapters)
    let verse = document.getElementById("verse").value;
    //console.log(books, chapters, verse);
    verseRead(books, chapters, verse)

}

function verseRead( books = 'Genesis', chapter =1 ,verse=1){
    
fetch(`https://bible-api.com/${books}${chapter}:1-${verse}`)
.then((resp) => resp.json())
.then((data) => {
    let scripture = document.getElementById("versesToRead")
scripture.innerHTML = `<h4>${data.reference}</h4><p id="verses"> ${data.text}</p>`
})
.catch((error) => console.log(error + "Error!!"))}


// let testament = document.getElementById("testament");
for(var i = 0; i < book.length; i++){
    select.options.add(new Option(book[i], book[i]));
} 
// Daily Random Verse
window.addEventListener('DOMContentLoaded', dailyVerse);

let daily_verse = document.getElementById("daily_verse");

const booksChapters ={    Genesis: 50,  Exodus: 40,  Leviticus: 27, Numbers: 36, Deuteronomy: 34,  Joshua: 24,  Judges: 21,  Ruth: 4,  "1 Samuel": 31,  "2 Samuel": 24,  "1 Kings": 22,  "2 Kings": 25,  "1 Chronicles": 29,  "2 Chronicles": 36,  Ezra: 10,  Nehemiah: 13,  Esther: 10,  Job: 42,  Psalms: 150,  Proverbs: 31,  Ecclesiastes: 12,  "Song of Solomon": 8,  Isaiah: 66,  Jeremiah: 52,  Lamentations: 5,  Ezekiel: 48,  Daniel: 12,  Hosea: 14,  Joel: 3,  Amos: 9,  Obadiah: 1,  Jonah: 4,  Micah: 7,  Nahum: 3,  Habakkuk : 3,  Zephaniah: 3,  Haggai: 2,  Zechariah: 14,  Malachi: 4,   Matthew:28,  Mark:16,  Luke:24,  John:21,  Acts:28,  Romans:16,  "1 Corinthians":16,  "2 Corinthians":13,  Galatians:6,  Ephesians:6,  Philippians:4,  Colossians:4,  "1 Thessalonians":5,  "2 Thessalonians":3,  "1 Timothy":6,  "2 Timothy":4,  Titus:3,  Philemon:1,  Hebrews:13,  James:5,  "1 Peter":5,  "2 Peter":3,  "1 John":5,  "2 John":1,  "3 John":1,  Jude:1,  Revelation:22  } 
    
    
function dailyVerse (){
     
        let books =  book[Math.floor(Math.random()*book.length)]
        let chapter = Math.floor(Math.random()*booksChapters[books]+1) ; 
    
    //console.log(books)
    //console.log(chapter)
        let verse = Math.floor(Math.random()*10) //10 is number of 
        //console.log(verse)
        if(verse === 0){
            verse +=1;
        }
        // console.log(books,chapter, verse)
        daily_verse.textContent = ``
      
    
        fetch(`https://bible-api.com/${books}${chapter}:${verse}`)
        .then((resp) => resp.json())
        .then((data) => {
            

        daily_verse.innerHTML = `<h4>${data.reference}</h4><p id="verses"> ${data.text}</p>`
            })
        .catch((error) => console.log(error + "Error!!"))
        
    }


// End

//menu formatting

let menu = document.getElementById("menu");
function menuShow() {
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  function menuHide() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}
let iconshow = document.getElementById("closeMenu")
iconshow.addEventListener("click", ()=>{
    let icon = document.getElementById('openMenu');
    if(icon.style.display === 'no'){
        icon.style.display = 'block';
    }
    else{
        icon.style.display = 'block';
    }
})
let hide = document.getElementById("openMenu");
hide.addEventListener("click", () => {
    if(hide.style.display === 'block'){
        hide.style.display = 'none'
    }
    else{
        hide.style.display = "block"
    }
})
//End of Menu formatting
//Search

//End of Search
//Footer

//TIMER
let m;
let d;
let y;
let h;
const yearDate = new Date("Sep 8, 2022 05:00:00").getTime();
let x = setInterval( function ()
{
    let now = new Date().getTime();
    let distance = yearDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let timer =  document.getElementById("timer") 
    timer.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; 
    //    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
       if (distance < 0) {
        clearInterval(wait);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
}, 1000)

// let versesbg = document.getElementById("verses")
// versesbg.backgroundimage = "url('https://unsplash.com/photos/yC-Yzbqy7PY')"





// // hbbhh
