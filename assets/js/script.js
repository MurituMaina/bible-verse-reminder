// For Verse HTML
window.addEventListener('DOMContentLoaded', () => {
versesRead();
dailyVerse();
didYou();
// ();
})
document.addEventListener('DOMContentLoaded',setReminder)

function versesRead( books = 'Genesis', chapter ,verse =1){
    // https://bible-api.com/john%203:16?verse_numbers=true
    fetch(`https://bible-api.com/Genesis${chapter}:1-${verse}?verse_numbers=true`)
    .then((resp) => resp.json())
    .then((data) => {
    let scripture = document.getElementById("versesToRead")
    scripture.innerHTML = `<h4 class="main_header">${data.reference}</h4>
    <p class="main_verses">${data.text}</p>`
    })
  .catch((error) => console.log(error + "Error!!"))
}

let book = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua",
 "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles",
  "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];

const booksChapters ={ Genesis: 50,  Exodus: 40,  Leviticus: 27, Numbers: 36, Deuteronomy: 34,  Joshua: 24,  Judges: 21,  Ruth: 4,  "1 Samuel": 31,  "2 Samuel": 24,  "1 Kings": 22,  "2 Kings": 25,  "1 Chronicles": 29,  "2 Chronicles": 36,  Ezra: 10,  Nehemiah: 13,  Esther: 10,  Job: 42,  Psalms: 150,  Proverbs: 31,  Ecclesiastes: 12,  "Song of Solomon": 8,  Isaiah: 66,  Jeremiah: 52,  Lamentations: 5,  Ezekiel: 48,  Daniel: 12,  Hosea: 14,  Joel: 3,  Amos: 9,  Obadiah: 1,  Jonah: 4,  Micah: 7,  Nahum: 3,  Habakkuk : 3,  Zephaniah: 3,  Haggai: 2,  Zechariah: 14,  Malachi: 4,   Matthew:28,  Mark:16,  Luke:24,  John:21,  Acts:28,  Romans:16,  "1 Corinthians":16,  "2 Corinthians":13,  Galatians:6,  Ephesians:6,  Philippians:4,  Colossians:4,  "1 Thessalonians":5,  "2 Thessalonians":3,  "1 Timothy":6,  "2 Timothy":4,  Titus:3,  Philemon:1,  Hebrews:13,  James:5,  "1 Peter":5,  "2 Peter":3,  "1 John":5,  "2 John":1,  "3 John":1,  Jude:1,  Revelation:22  }

let select = document.getElementById("books");
let chapterSelect = document.getElementById("chapter");
let verseSelect = document.getElementById('verse');

for(var i = 0; i < book.length; i++){
    select.options.add(new Option(book[i], book[i]));
}

for(let i= 0; i < 150; i++){
chapterSelect.options.add(new Option([i+1], i+1),)
}
for(let i =0; i< 175; i++){
verseSelect.options.add(new Option(i+1))
}

let search = document.getElementById("searchRead");
search.addEventListener('change', searchRead);
function searchRead(event){
    event.preventDefault()
    let bookToRead = document.getElementById('books').value;
    let chapterToRead = document.getElementById('chapter').value;
    let verse = document.getElementById("verse").value;
    verseRead(bookToRead, chapterToRead, verse)
}

function verseRead( books = 'Genesis', chapter =1 ,verse=1){
  fetch(`https://bible-api.com/${books}${chapter}:1-${verse}?verse_numbers=true`)
  .then((resp) => resp.json())
  .then((data) => {
  let scripture = document.getElementById("versesToRead")
  if(data.text === undefined){
    scripture.innerHTML = '<p>No Verses Found!</p>';
  }
  else{
  scripture.innerHTML = `<h4 class ="main_header">${data.reference}</h4><p id="translation">${data.translation_name}</p><p id="verses">${data.text}</p>`

  }
})
.catch((error) => console.log(error + "Error!!"))
}


function dailyVerse (){
    let books =  book[Math.floor(Math.random()*book.length)]
    let chapters = Math.floor(Math.random()*booksChapters[books]+1) ;
    let verse = Math.floor(Math.random()*10) //10 is number of
    // console.log(books, chapters, verse)
    if(verse === 0){
            verse +=1;
        }
      fetch(`https://bible-api.com/${books}${chapters}:${verse}`)
      .then((resp) => resp.json())
      .then((data) => {
          // console.log(data.reference, data.text)
        let daily_verse = document.getElementById("daily_verse");
        daily_verse.innerHTML = `<h3>${data.reference}</h3><h4>${data.translation_name}</h4><p> ${data.text}</p><a href=#readmore>Read More...</a>`})
        .catch((error) => console.log(error + " daily Error!!"))

    }
// End

//menu formatting
// menu.addEventListener("click", menuShow)
function menuShow() {
let menu = document.getElementById("menu");
  // console.log("Hello World!")
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
  let iconshow = document.getElementById("closeMenu")
iconshow.addEventListener("click", ()=>{
    let icon = document.getElementById('openMenu');
    if(icon.style.display === 'none'){
        icon.style.display = 'block';
    }
    else{
        icon.style.display = 'block';
    }
})

  function menuHide() {
    // var menu = document.getElementById("menu");
    if (menu.style.display === "block") {

      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}



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

function didYou(){
   // https://bible-api.com/john%203:16?verse_numbers=true
   fetch(`https://bible-api.com/Psalms$118:29`)
   .then((resp) => resp.json())
   .then((data) => {
    // console.log(data.reference, data.text)
let did_youKnow = document.getElementById('did_youKnow')

  did_youKnow.innerHTML = `<h4 id="quote_head">${data.reference}</h4>
   <p id="quote_verses">${data.text}</p>`
   })
 .catch((error) => console.log(error + "did Error!!"))
}


//TIMER Reset and settings
// Collapsible button
let coll = document.getElementsByClassName("collapsible");

// for (let i = 0; i < coll.length; i++) {
  coll.addEventListener("click", function() {
    coll.classList.toggle("active");
    let content = document.getElementById("setReminderTime")
    if (content.style.display === "none") {
      // console.log("hello Kenya")
      content.style.display = "block";
    } else {
      content.style.display = "block";
    }
  });
// }


//function to set reminder
// let dateInput=document.getElementById('date');
// let date = dateInput.target.value;
// let timeInput = document.getElementById('time');
// let time = timeInput.target.value;
// console.log(date, time)

let reminder = document.getElementById('setter');
 reminder.addEventListener("click", starter)

 const starter =  (event)=> {
  event.preventDefault();
  let dateInput=document.getElementById('date').value;  
  alert(dateInput);
  console.log("date:" + dateInput)
  let timeInput = document.getElementById('time');
  let time = timeInput.target.value;
  console.log("Got this"+dateInput, time)

  setReminder(event, date, time)
}


function setReminder(event,
  date='01-25-2023', time= '05:00'){
  event.preventDefault();
  const [m, d, y] = date.split('-');
  let setTime = [m,d,y,time];
  setTime =setTime.join(" ");
//TIMER
const yearDate = new Date(`${setTime}`).getTime();
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
       if (distance < 0) {
        clearInterval(wait);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
}, 1000)



}
