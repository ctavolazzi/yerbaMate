/* previous working solution

console.log("hello world");

//calculate warehouse inventory of different flavors of Yerba Mate

/*
- take the number of rows of each flavor, and the number of individual cases, and calculate a complete list of all flavors that can be simply copy/pasted into Slack
- function takes number of cases, then number of rows as input
- function multiplies number of rows by a predetermined number of cases per row
- function returns the full number of cases on hand for each flavor
- function assigns a number value to each predetermined flavor varible 
- function prints out number of cases of the flavor


function calcCases(type, numCases, numRows){
    type = type.toString();
    type = type.toLowerCase();
    if(type == "bolt"){
       let rowCases = numRows * 20;
        return rowCases + numCases; 
    } else if(type == "bolts"){
       let rowCases = numRows * 20;
       return rowCases + numCases;
    } else if(type == "can"){
       let rowCases = numRows * 20;
       return rowCases + numCases;
    } else if(type == "cans"){
       let rowCases = numRows * 20;
        return rowCases + numCases;
    } else if(type == "tall cans"){
       let rowCases = numRows * 20;
        return rowCases + numCases;
    } else if(type == "big cans"){
       let rowCases = numRows * 20;
        return rowCases + numCases;
    } else if(type == "big boys"){
       let rowCases = numRows * 20;
        return rowCases + numCases;
    } else if(type =="spark"){
        let rowCases = numRows * 26;
        return rowCases + numCases;
    } else if(type =="sparks"){
        let rowCases = numRows * 26;
        return rowCases + numCases;
    } else if(type =="sparklers"){
        let rowCases = numRows * 26;
        return rowCases + numCases;
    } else if(type =="sparkling"){
        let rowCases = numRows * 26;
        return rowCases + numCases;
    } else if(type =="bubbly"){
        let rowCases = numRows * 26;
        return rowCases + numCases;
    } else if(type =="short cans"){
        let rowCases = numRows * 26;
    } else if(type =="small cans"){
        let rowCases = numRows * 26;
        return rowCases + numCases;
        return rowCases + numCases;
    } else if(type =="glass"){
        let rowCases = numRows * 16;
        return rowCases + numCases;
    } else if(type =="bottle"){
        let rowCases = numRows * 16;
        return rowCases + numCases;
    } else if(type =="bottles"){
        let rowCases = numRows * 16;
        return rowCases + numCases;
    } else if(type ==""){
        return "Please Enter Product Type:"
    } else if(type !=""){
        return "Type Must Be \"bolt, spark, or bottle\""
    } else return "Error, please reload."
}

/*TESTS /////////////////////////////
////////
////////

console.log(calcCases("bolt" , 1, 1));
//should return 21

console.log(calcCases("", 1, 1));
//should return error message

console.log(calcCases(5, 1, 1));
//should return error message

console.log(calcCases("spark", 1, 1));
//should return 27

console.log(calcCases("bottle", 1, 1));
//should return 17
*/




/*NEW WEB-BASED SOLUTION ???/////////
//////////
//////////
*/

/* function calcCases() should:
- take the appropriate values from the HTML form and parse them into the appropriate functions
- return the sum of multiplying the number of rows by a predetermined number of cases
- add the answer to the number of lose cases counted
- return the sum on the HTML page under a new field called "Total:"
*/

var form=document.getElementById('form');

form.addEventListener('submit', function calcCases(event){
  event.preventDefault();
  //setting bolt variables
  let enlightenMintRows = +document.getElementById('enlightenMintRows').value
  let enlightenMintCases = +document.getElementById('enlightenMintCases').value
  let revelBerryRows = +document.getElementById('revelBerryRows').value
  let revelBerryCases = +document.getElementById('revelBerryCases').value
  let bluephoriaRows = +document.getElementById('bluephoriaRows').value
  let bluephoriaCases = +document.getElementById('bluephoriaCases').value
  let orangeRows = +document.getElementById('orangeRows').value
  let orangeCases = +document.getElementById('orangeCases').value
  let lemonRows = +document.getElementById('lemonRows').value
  let lemonCases = +document.getElementById('lemonCases').value

  //MATH////////////
  //////
  //////
  //////
  let enlMintRowCasesMultiplied = enlightenMintRows * 20;
  let enlMintTotal = enlMintRowCasesMultiplied + enlightenMintCases;
  console.log("enlMintTotal: ")
  console.log(enlMintTotal);

  let revelRowCasesMultiplied= revelBerryRows * 20;
  let revelTotal = revelRowCasesMultiplied + revelBerryCases;
  console.log("revelTotal: ")
  console.log(revelTotal);

  let blueRowCasesMultiplied= bluephoriaRows * 20;
  let blueTotal = blueRowCasesMultiplied + bluephoriaCases;
  console.log("blueTotal: ")
  console.log(blueTotal);


  let orangeRowCasesMultiplied= orangeRows * 20;
  let orangeTotal = orangeRowCasesMultiplied + orangeCases;
  console.log("orangeTotal: ")
  console.log(orangeTotal);

  let lemonRowCasesMultiplied= lemonRows * 20;
  let lemonTotal = lemonRowCasesMultiplied + lemonCases;
  console.log("lemonTotal: ")
  console.log(lemonTotal);

  //write to "total divs"////////
  //////
  //////
  var total = document.getElementById('enlightenMintTotalBox');
  total.innerHTML = "Enlighten Mint Total: " + enlMintTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('revelBerryTotalBox');
  total.innerHTML = "Revel Berry Total: " + revelTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('bluephoriaTotalBox');
  total.innerHTML = "Bluephoria Total: " + blueTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('orangeTotalBox');
  total.innerHTML = "Orange Total: " + orangeTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('lemonTotalBox');
  total.innerHTML = "Lemon Total: " + lemonTotal;
  total.classList.add('newTotal');

  //setting spark variables
  let classicGoldRows = +document.getElementById('classicGoldRows').value
  let classicGoldCases = +document.getElementById('classicGoldCases').value
  let cranPomRows = +document.getElementById('cranPomRows').value
  let cranPomCases = +document.getElementById('cranPomCases').value
  let grapeGinRows = +document.getElementById('grapeGinRows').value
  let grapeGinCases = +document.getElementById('grapeGinCases').value
  let limaRows = +document.getElementById('limaRows').value
  let limaCases = +document.getElementById('limaCases').value
  let bbMintRows = +document.getElementById('bbMintRows').value
  let bbMintCases = +document.getElementById('bbMintCases').value
  let gingerSageRows = +document.getElementById('gingerSageRows').value
  let gingerSageCases = +document.getElementById('gingerSageCases').value

  //MATH////////////
  //////
  //////
  //////
  let classicGoldRowsMultiplied = classicGoldRows * 26;
  let classicGoldTotal = classicGoldRowsMultiplied + classicGoldCases;
  console.log("classicGoldTotal: ")
  console.log(classicGoldTotal);

  let cranPomRowCasesMultiplied= cranPomRows * 26;
  let cranPomTotal = cranPomRowCasesMultiplied + cranPomCases;
  console.log("cranPomTotal: ")
  console.log(cranPomTotal);

  let grapeGinRowCasesMultiplied= grapeGinRows * 26;
  let grapeGinTotal = grapeGinRowCasesMultiplied + grapeGinCases;
  console.log("grapeGinTotal: ")
  console.log(grapeGinTotal);


  let limaRowCasesMultiplied= limaRows * 26;
  let limaTotal = limaRowCasesMultiplied +limaCases;
  console.log("limaTotal: ")
  console.log(limaTotal);

  let bbMintRowCasesMultiplied= bbMintRows * 26;
  let bbMintTotal = bbMintRowCasesMultiplied + bbMintCases;
  console.log("bbMintTotal: ")
  console.log(bbMintTotal);

  let gingerSageRowCasesMultiplied= gingerSageRows * 26;
  let gingerSageTotal = gingerSageRowCasesMultiplied + gingerSageCases;
  console.log('gingerSageTotal: ')
  console.log(gingerSageTotal);

  //write to "total divs"////////
  //////
  //////
  var total = document.getElementById('classicGoldTotalBox');
  total.innerHTML = "Classic Gold Total: " + classicGoldTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('cranPomTotalBox');
  total.innerHTML = "Cran Pom Total: " + cranPomTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('grapeGinTotalBox');
  total.innerHTML = "Grapefruit Ginger Total: " + grapeGinTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('limaTotalBox');
  total.innerHTML = "Lima Limon Total: " + limaTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('bbMintTotalBox');
  total.innerHTML = "Blackberry Mint Total: " + bbMintTotal;
  total.classList.add('newTotal');

  var total = document.getElementById('gingerSageTotalBox');
  total.innerHTML = "Ginger Sage Total: " + gingerSageTotal;
  total.classList.add('newTotal');
})
