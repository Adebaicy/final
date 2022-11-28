// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should
// display none.
// ==================================
const linkk = document.getElementsByClassName("link");
const ham = document.getElementsByClassName("hamburger");

for (var i = 0; i < linkk.length; i++) {
  linkk[i].style.display = "none";
}

for (var i = 0; i < ham.length; i++) {
  ham[i].style.display = "block";
}

function harm() {
  for (var i = 0; i < ham.length; i++) {
    ham[i].style.display = "none";
  }
}

ham[0].addEventListener("click", harm);
/*
// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================


//console.log(productTab.value);

console.log(productTab.length);


console.log(catalogue);

function dd()
{
    console.log(3);
    productTab=document.getElementById("tab2");
    console.log(productTab.value);
}

function fun(e){
//    productTab=document.querySelector('[name="tabset"]');
    console.log('test');

    if (productTab.value=="Male")
{
    productTab.value;
    console.log(2);
    console.log(productTab.value);
    for (var i=0; i<catalogue.length;i++) {
        console.log(i);
    
        
       if (catalogue[i].textContent.includes('Male'))

        //if (productTab.value=="Male")
        {
            console.log("true");
            catalogue[i].innerHTML=catalogue[i].innerHTML;   
          
        }

        else{
            document.getElementById("marzen").innerHTML='Item not found';
        }

    }
   // console.log(2);
  //  catalogue[0].style.display = 'none';
  //  console.log(catalogue[0].textContent.includes('Male'));
//catalogue[4].innerHTML=catalogue[0].innerHTML;
}
 }

productTab.addEventListener('change', fun())





// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================
*/

catalogue = document.querySelectorAll(".catalogue");

const el=document.createElement('span');
el.textContent = "no related search item";
el.classList.add("dead");
document.getElementById("marzen").appendChild(el);
fulll=document.querySelector(".dead");

search = document.querySelector(".search_product");
search.addEventListener("input", () => {
  var emp = [];
  catalogue.forEach(
    (ccat) => {
      ccat.style.display = "none";
      mm = search.value.toUpperCase();


      let title = ccat.querySelector("p").innerHTML;
      title = title.toUpperCase();
      
      if (title.includes(mm)) {
        ccat.style.display = "block";
        emp.push(ccat);
      }


    }
  );
  if (emp.length === 0) {
    fulll.style.display="block";
  } 
 else{
  fulll.style.display='none';
 }
});
