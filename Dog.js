import dogs from "./data.js"

// Create the Dog class here
class Dog{
    constructor(data){
        Object.assign(this,data)
        
    }
    describe(){
        return `<h3>${this.name}, ${this.age}</h3>
        <h5>${this.bio}</h5>`
    }
    likemark(){
        return `<img class="qwe" src="./images/badge-like.png">`
    }
    disLikemark(){
        return `<img class="qwe" src="./images/badge-nope.png">`
    }
}

function getNewDog(){
    if(dogs.length<=0){
        document.getElementById("doogs").innerHTML=`<p>awdawd</p>`
    }
    if(dogs.length>0){
        
    return new Dog(dogs.shift())
    
    }
   
}

 

export  {getNewDog } 

