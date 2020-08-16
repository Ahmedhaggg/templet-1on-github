class LoadGame {

    // classes of icons
    static classIcon = [
        "fa-html5", "fa-css3-alt", "fa-node-js", "fa-js", 
        "fa-php", "fa-react", "fa-angular",
        "fa-vuejs","fa-html5", "fa-css3-alt", "fa-node-js", "fa-js", 
        "fa-php", "fa-react", "fa-angular",
        "fa-vuejs"
    ]

    // function to do array to set random number
    static setArray(arrNums) {
        
        // set to remove values reapeting
        let set = new Set()

        // loap for random some numbers unknown
        for (let i = 0; i < LoadGame.classIcon.length; i++) {
            set.add(Math.floor(Math.random() * LoadGame.classIcon.length))
        }

        // loop for complete the nums for 16 number
        for (let i = 0; i < LoadGame.classIcon.length; i++) {
            
            //check set less 16 or no 
            if(set.size < LoadGame.classIcon.length) {
                
                // add num to complet set
                set.add(i)

            } else {
                // return false
                false;
            
            }
        }

        // turn on set for array for loop
        arrNums = [...set];
        
        // give the classes to icons 
        for (let i = 0; i < document.querySelectorAll(".back-face i").length; i++) {
            document.querySelectorAll(".back-face i")[i].classList.add(LoadGame.classIcon[arrNums[i]])
        }

    }
}

// event to set icons
window.addEventListener("DOMContentLoaded", () => {
    LoadGame.setArray();
})


// function start
class Start {
    startgame(e) {
       e.parentElement.remove(); 
    }
}
document.querySelector("#start-btn").addEventListener("click", el => {

    // put e vaiable
    let e = el.target;

    // turn on class start 
    let start = new Start(); 

    //run function to remove parent
    start.startgame(e); 

})

class Game {
    
    // role
    static attempts = 0;
    static wrong = 0;
    static score = 0;
    

    // add transform class on items clicked
    addClassTrans(item) {

        if (!item.target.classList.contains("trans")) {
            item.target.classList.add("trans");
        } else {
            false;
        }
        
    }
    
    // remove class trans from elements isnt alike
    static clearclasstrans(elHasClTrans) {
        
        setTimeout(() => {

            elHasClTrans.forEach(item => {

                item.classList.remove("trans");

            })
        }, 500)
            
        
    }


    // intstead class trans with alike
    addClassLike(elHasClTrans , firstclone, secondclone) {
        firstclone = elHasClTrans[0];
        secondclone = elHasClTrans[1];

        // attempts plus
        Game.attempts++

        if (firstclone.children[1].children[0].classList[1] === secondclone.children[1].children[0].classList[1]) {
            
            // score plus
            Game.score++
            
            // remove class trans 
            firstclone.classList.remove("trans")
            secondclone.classList.remove("trans")

            // replace class trans with class alike
            firstclone.classList.add("alike")
            secondclone.classList.add("alike")


        } else {
            //wrong plus
            Game.wrong++;

            // turn on func to remove all class trans
            Game.clearclasstrans(elHasClTrans);
        }
    }

    //install show the lement or no
    removeClassTrans(elHasClTrans) {
        // element has trans
        elHasClTrans = document.querySelectorAll(".item-content.trans"); 
        
        // check if length of elments has class trans = 2 or no 
        if(elHasClTrans.length == 2) {
            
            // add function to check 2 element hava class trans
            this.addClassLike(elHasClTrans)

        } else {
            false;
        }
    }
    // show label of game
    role() {
        document.querySelector("#attempts").innerHTML = Game.attempts;
        document.querySelector("#score").innerHTML = Game.score;
        document.querySelector("#wrong").innerHTML = Game.wrong;
    }
    // to give the player level
    static levelRole(levelplayer, statcolor) {

        // attempets to give color and level
        if(Game.attempts <= 12) {
            levelplayer = "excellent";
            statcolor = "text-success";
        } else if (Game.attempts <= 16) {
            levelplayer = "good";
            statcolor = "text-primary";
        } else if (Game.attempts <= 20) {
            levelplayer = "meduim"
            statcolor = "text-warning";
        } else {
            levelplayer = "bad";
            statcolor = "text-danger";
        }

        // add color and level to level element
        document.querySelector(".level").textContent = levelplayer;
        document.querySelector(".level").classList.add(statcolor)

    }
    // to end role
    endgame() {
        
        // length of element has class alike
        let itemsClassAlike = document.querySelectorAll(".alike").length;
        
        // alert end game
        let alert = document.querySelector(".alert")
        // check is items has class alike = 16 or no
        if (itemsClassAlike == 16) {
            
            //turn on function to end game 
            Game.levelRole();
            alert.classList.add("show");

        } else { 
            false;
        }
    }
    
    
}


document.querySelectorAll(".item-content").forEach(el => {

    el.addEventListener("click", item => {

        // turn new game
        let game = new Game();

        // add class trans for element we press it
        game.addClassTrans(item);

        /*game.removeClassTrans(item);*/
        game.removeClassTrans()

        // turn label of role
        game.role()

        // end game 
        game.endgame();
    
    })
})

