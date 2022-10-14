// const vote = document.querySelector("#vate");
// const form= document.querySelector("#form");

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let textInput=document.querySelector('#textInput');
//     value();
//     textInput.innerText="";
//     select="";

// })

// const value=()=>{
//     let select= document.form.candidate.value;
//     won.innerText=select;
// }

// const vivek = document.querySelector('#vivek')

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

let won = document.querySelector("#resSpanW");
let lost = document.querySelector("#resSpanL");

const vote = document.querySelector("#vote");
const form = document.querySelector("#form");

let pramod3 = document.querySelector("#pramod3");
let sandip3 = document.querySelector("#sandip3");
let vivek3 = document.querySelector("#vivek3");
let maulik3 = document.querySelector("#maulik3");
let mohit3 = document.querySelector("#mohit3");
let pramod3tot = 0;
let sandip3tot = 0;
let vivek3tot = 0;
let maulik3tot = 0;
let mohit3tot = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let textInput = document.querySelector("#textInput");
  value();
  textInput.value = "";
  // plus();
});
const value = () => {
  let select = document.form.candidate.value;
  if (select === "Vivek_Pipaliya") {
    vivek3tot++;
  } else if (select === "Sandip_Pipaliya") {
    sandip3tot++;
  } else if (select === "Pramod_Pipaliya") {
    pramod3tot++;
  } else if (select === "Maulik_Pipaliya") {
    maulik3tot++;
  } else if (select === "Mohit_Pipaliya") {
    mohit3tot++;
  }

  // console.log(pramod3tot , sandip3tot , vivek3tot , maulik3tot , mohit3tot);

  pramod3.innerText = parseInt(pramod3tot);
  sandip3.innerText = parseInt(sandip3tot);
  vivek3.innerText = parseInt(vivek3tot);
  maulik3.innerText = parseInt(maulik3tot);
  mohit3.innerText = parseInt(mohit3tot);

  let pp = document.querySelector("#pp");
  let sp = document.querySelector("#sp");
  let vp = document.querySelector("#vp");
  let mup = document.querySelector("#mup");
  let mp = document.querySelector("#mp");

  if (
    parseInt(pramod3.innerText) > parseInt(sandip3.innerText)  &&
    parseInt(pramod3.innerText) > parseInt(vivek3.innerText)  &&
    parseInt(pramod3.innerText) > parseInt( maulik3.innerText) &&
    parseInt(pramod3.innerText) > parseInt(mohit3.innerText) 
  ) {
    won.innerText = pp.innerText;
    lost.innerText =
      "Sandip Pipaliya , Vivek Pipaliya , Maulik Pipaliya , Mohit Pipaliya";
  } else if (
    parseInt(sandip3.innerText) > parseInt(pramod3.innerText)  &&
    parseInt(sandip3.innerText) > parseInt(vivek3.innerText)  &&
    parseInt(sandip3.innerText) > parseInt(maulik3.innerText)  &&
    parseInt(sandip3.innerText) > parseInt(mohit3.innerText) 
  ) {
    won.innerText = sp.innerText;
    lost.innerText =
      "Pramod Pipaliya , Vivek Pipaliya , Maulik Pipaliya , Mohit Pipaliya";
  } else if (
    parseInt(vivek3.innerText) > parseInt(sandip3.innerText)  &&
    parseInt(vivek3.innerText) > parseInt(pramod3.innerText)  &&
    parseInt(vivek3.innerText) > parseInt(maulik3.innerText)  &&
    parseInt(vivek3.innerText) > parseInt(mohit3.innerText) 
  ) {
    won.innerText = vp.innerText;
    lost.innerText =
      "Pramod Pipaliya , Sandip Pipaliya , Maulik Pipaliya , Mohit Pipaliya";
  } else if (
    parseInt(maulik3.innerText) > parseInt(sandip3.innerText)  &&
    parseInt(maulik3.innerText) > parseInt(vivek3.innerText)  &&
    parseInt(maulik3.innerText) > parseInt(pramod3.innerText)  &&
    parseInt(maulik3.innerText) > parseInt(mohit3.innerText) 
  ) {
    won.innerText = mup.innerText;
    lost.innerText =
      "Pramod Pipaliya , Sandip Pipaliya , Vivek Pipaliya , Mohit Pipaliya";
  } else if (
    parseInt(mohit3.innerText) > parseInt(sandip3.innerText)  &&
    parseInt(mohit3.innerText) > parseInt(vivek3.innerText)  &&
    parseInt(mohit3.innerText) > parseInt(maulik3.innerText)  &&
    parseInt(mohit3.innerText) > parseInt(pramod3.innerText) 
  ) {
    won.innerText = mp.innerText;
    lost.innerText =
      "Pramod Pipaliya , Sandip Pipaliya , Vivek Pipaliya , Maulik Pipaliya";
  }
};


