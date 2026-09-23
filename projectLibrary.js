const p = require("prompt-sync")();

let Libry = [];
 let choix ;

function menu(){
  console.log("\n ========== Library Manager ==========\n")  
  console.log("\t1. Add Book")
  console.log("\t2. Display Books")
  console.log("\t3. Search Books")
  console.log("\t4. Filter Books")
  console.log("\t5. Update Book")
  console.log("\t6. Delete Book")
  console.log("\t0. Exit\n")

}


function add(){

  let boxLibry = {} 
  let id = Number(p("Enter ID of book : "));
  let title = p("Enter title of book : ");
  let author = p("Enter author :");
  let category = p("Enter category : ");
  let pubYear = Number(p("Enter Publication Year : "));
  let status = p("what is status of book => AVAILABLE or => BORROWED : ");
  Libry.push(
     boxLibry = {
     id : id ,
     title : title,
     author : author ,
     category : category ,
     pubYear : pubYear,
     status : status
  })


}

function display(){

      
        for(let i =0 ; i < Libry.length ; i++){
                console.log(`============ BOOK ${i+1} =============`);
                console.log(Libry[i]);
                console.log("==================\n");

        }

 

}
  

  do{
    menu();
    choix = Number(p("Choose an option: "));

  switch(choix){
    case 1 : add();
             break;
    case 2 : display();
            break ;
    case 3 : 
            break ;
    case 4 : 
            break;
    case 5 : 
            break;
    case 6 : 
            break ;
    default : 
            break ;
   
  }

  }while(choix !== 0);
 