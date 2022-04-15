const elems = document.querySelectorAll(".UserList label.button:first-child");


for(let i = 0; i < elems.length; i++) {
   setTimeout(()=>{
      elems[i].click();
      },i * 800 ); // multiple i by 1000
}
