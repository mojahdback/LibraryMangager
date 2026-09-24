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


function recherch(Libry) {
    let id = Number(p("Recherch par ID : "));
    let verfi = 0;

    Libry.forEach(book => {

        if (book.id == id) {
            console.log("============= Found it ============");

            console.log(`\t title => ${book.title}`);
            console.log(`\t author => ${book.author}`);
            console.log(`\t category => ${book.category}`);
            console.log(`\t pubYear => ${book.pubYear}`);
            console.log(`\t status => ${book.status}`);

            console.log("________________________\n");

            verfi = 1;
        }
    });

    if (verfi == 0) {
        console.log("\n===========================\n");
        console.log(`\tThe libry dosn't have any book has this ID => ${id} `);
        console.log("===========================\n");
    }
}

  do{
    menu();
    choix = Number(p("Choose an option: "));

  switch(choix){
    case 1 : add();
             p("Click to Move...!")
             console.clear()
             break;
    case 2 : display();
             p("Click to Move...!")
             console.clear()
             break ;
    case 3 : recherch(Libry);
             p("Click to Move...!")
             console.clear()
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
 