function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('div#nested div div div div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');
   for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n);
  }
}

function deepestChild() {
  let returnElement = '#grand-node div'
  const lis = document.querySelectorAll('#grand-node div')
   for (let i = 1; i < lis.length; i++) {
    returnElement = returnElement + ' div'
  }
  return document.querySelector(returnElement);
}