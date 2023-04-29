import {getNewDog} from "./Dog.js"
import dogs from "./data.js"
let isWaiting = false

// Remember to import the data and Dog class!
let asd = getNewDog()
let likeArr = []
let disLikeArr = []


function avatar(){
    document.getElementById("doogs").style.backgroundImage=`url("${asd.avatar}")`
    likePic()
    disLikePic()
    }

// avatar()


function render(){
    let root =document.getElementById("root")
    root.innerHTML=`

    <div>
        <header>
            <img class="header-icons" id="profile" src="./images/icon-profile.png">
            
            <a href="#" onclick="window.location.reload(true)"><img class="header-icons" id="logo" src="./images/logo.png"></a>
            <img class="header-icons" id="chat"src="./images/icon-chat.png">
        </header>
        <main id="main">
            <div id="doogs">
                <section>
                    ${asd.describe()}
                </section>
                <div id="dis-like"></div>
                
            </div>
           
            
        </main>
        <footer id="footer">
            <button class="like-nope" id="nope"><img class="but-img" src="./images/icon-cross.png"></button>
            <button class="like-nope" id="like"><img class="but-img" src="./images/icon-heart.png"></button>
        </footer>
        
        </div>
        `
        avatar()
}

render()
function likePic(){
    document.getElementById("like").addEventListener("click",function(){
    
    asd.hasBeenSwiped = true
    asd.hasBeenLiked = true
    likeArr.push(asd.avatar)
    document.getElementById("dis-like").innerHTML=asd.likemark()
    
    isWaiting=true
    if(isWaiting){
        document.getElementById("like").disabled= true
        document.getElementById("nope").disabled= true
        }
    setTimeout(function(){
        if(dogs.length>0){
            
            asd=getNewDog()
        document.getElementById("like").disabled= false
        document.getElementById("nope").disabled= true
        render()
        }else{
            let likedImages = likeArr.map(item=>{
                return `<img id="smalls" src="${item}">`
            })
            document.getElementById("main").innerHTML= `<H1>You Liked</H1>${likedImages}`
           
            document.getElementById("footer").innerHTML=""
            
        }
        
    },1500)

})

// console.log(likeArr)

}

function disLikePic(){
    document.getElementById("nope").addEventListener("click",function(){
    disLikeArr.push(asd)
    asd.hasBeenSwiped = true
    
    document.getElementById("dis-like").innerHTML=asd.disLikemark()
    
    isWaiting=true
    if(isWaiting){
        document.getElementById("nope").disabled= true
        document.getElementById("like").disabled= true
        }
    setTimeout(function(){
        if(dogs.length>0){
            asd=getNewDog()
        document.getElementById("nope").disabled= false
        document.getElementById("like").disabled= false
        render()
        }else{
            let likedImages = likeArr.map(item=>{
                return `<img id="smalls" src="${item}">`
            })
            document.getElementById("main").innerHTML= `<H1>You Liked</H1>${likedImages}`
            
            
            document.getElementById("footer").innerHTML=""
            
        }
        
    },1500)

})


}



