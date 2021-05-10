const header = document.querySelector("h1");
const para = document.querySelector("p");
const input = document.querySelector("input");
const helps = [
  " - Open + website URL to open it in the browser",
  " - Google + keyword to search directly in Google",
  " - YouTube + keyword to search directly in YouTube",
  " - Wiki + keyword to search directly in Wikipedia",
  " - 'Time' will display the current time.",
  " - 'Date' will display the current date.",
  " - 'tech' will make you expert by watching videos",
  " * More keywords will find their way to this world soon",
].join("<br>");

input.addEventListener("change", () => {
  header.innerText = input.value;
  const date = new Date();
  let options = {};
  let typed = "";
  switch (header.innerText) {
    case "Hello":
      para.innerHTML = "Hey there Bud";
      break;
    // case "Help":
    //   break;
    case "YouTube":
      window.open("https://www.youtube.com");
      options = {
        strings: [`Trying to open YouTube for you`],
        typespeed: 40,
      };
      typed = new Typed(".result-content", options);

      break;
    case "Date":
      options = {
        strings: [date.toLocaleDateString()],
        typespeed: 40,
      };
      typed = new Typed(".result-content", options);

      break;
    case "Help":
      options = {
        strings: [helps],
        typespeed: 40,
      };
      typed = new Typed(".result-content", options);
      break;
    case "Time":
      const hours = addZero(date.getHours());
      const minutes = addZero(date.getMinutes());
      const seconds = addZero(date.getSeconds());
      options = {
        strings: [hours + ":" + minutes + ":" + seconds],
        typespeed: 40,
      };
      typed = new Typed(".result-content", options);
      break;
    default:
      para.innerHTML = `The command <b><i>${header.innerText}</i></b> was not found.. Try using <b><i>Help</i></b> to get the list of commands`;
      //   options = {
      //     strings: [
      //       `The command <b><i>${header.innerText}</i></b> was not found.. Try using <b><i>Help</i></b> to get the list of commands`,
      //     ],
      //     typespeed: 40,
      //   };
      //   typed = new Typed(".result-content", options);
      //   para.innerHTML = typed;
      break;
  }
  if (header.innerText.includes("YouTube +")) {
    const path = header.innerText.substring(10);
    window.open(`https://www.youtube.com/results?search_query=${path}`);
    para.innerHTML = `Trying to search <b><i>${path}</i></b> in YouTube for you ..should open up in a bit `;
  }
  if (header.innerText.includes("Google +")) {
    const path = header.innerText.substring(9);
    window.open(`https://www.google.com/search?q=${path}`);
    para.innerHTML = `Trying to search <b><i>${path}</i></b> with Google for you ..should open up in a bit `;
  }
  if (header.innerText.includes("Wiki +")) {
    const path = header.innerText.substring(7);
    window.open(`https://en.wikipedia.org/wiki/${path}`);
    para.innerHTML = `Trying to search <b><i>${path}</i></b> in Wiki for you ..should open up in a bit `;
  }

  if (header.innerText.includes("Open +")) {
    const path = header.innerText.substring(7);
    window.open(`https://${path}`);
    para.innerHTML = `Trying to search <b><i>${path}</i></b> in Wiki for you ..should open up in a bit `;
  }
  clearInput();
});

function clearInput() {
  input.value = "";
}

function addZero(t) {
  if (t < 10) {
    t = "0" + t;
  }
  return t;
}
