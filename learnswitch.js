const studentName = "abu";
let score = 75;
function get(){
    if(score >= 70){
        console.log("Excellent");
        }
    else if(score >= 60){
        console.log("Very good");
            }
    else if(score >= 50){
        console.log("credit");
                }
    else if(score > 49){
        console.log("pass");
                    }
    else if(score > 39){
        console.log("failed");
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
