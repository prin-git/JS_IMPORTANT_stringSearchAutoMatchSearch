var search_terms = [
  "apple",
  "apple watch",
  "apple macbook",
  "apple macbook pro",
  "iphone",
  "iphone 12"
];

/* function autocompleteMatch(input) {
  if (input === "") {
    return [];
  }
  var reg = new RegExp(input);

  let list = search_terms.filter((term) => term.match(reg));
  return list;
} */

function autoMatch(input) {
  if (input === "") {
    return [];
  }

  let list = search_terms.filter((term) =>
    term.toLowerCase().includes(input.toLowerCase)
  );
  return list;
}

function showResults(val) {
  let res = document.getElementById("result");
  res.innerHTML = "";
  let list = "";
  let terms = autoMatch(val);
  for (let i = 0; i < terms.length; i++) {
    list += "<li>" + terms[i] + "</li>";
  }
  res.innerHTML = "<ul>" + list + "</ul>";
}
