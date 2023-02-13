function toggleEvenColor() {
    let spanElements = document.querySelectorAll('#numbers span');
    spanElements.forEach(function(element) { 
        //Checks the current  value of element
        console.log(element.textContent);
      if (parseInt(element.textContent) % 2 === 0) {
        // Check the current background color
        console.log(element.style.backgroundColor);
        element.style.backgroundColor = (element.style.backgroundColor === 'red') ? 'transparent' : 'red';
      }
    });
  } 