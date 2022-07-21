const studentName = "abu";
let score = 90;
function get(){
    if(score >= 70){
        console.log("Distinction");
        }
    else if(score >= 60){
        console.log("Very good");
            }
    else if(score >= 50){
        console.log("Credit");
                }
    else if(score >= 40){
        console.log("Pass");
                    }
    else if(score <= 39){
        console.log("Failed");
                                    }
    else{
        console.log("sorry didn't take the test")
    }
}

switch(studentName){
    case "abu":
       get()
        break;
    case "adamu":
        get()
        break;
    case "aliyu":
        get()
        break;
    default:
        console.log("student not registered");
        break
}
