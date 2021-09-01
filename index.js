var truth= [ 
    "Who was your first crush, or who is your current crush?", 
    "How old were you when you had your first kiss?", 
    "What would you do if your current boyfriend/girlfriend ended things right now?", 
    "Have you ever cheated on a boyfriend/girlfriend?", 
    "Have you ever been cheated on by a boyfriend/girlfriend?", 
    "If you could go on a date with anyone in the room, who would it be?", 
    "What personality traits would cause you to end a friendship?", 
    "Would you go behind a friend's back with a crush?", 
    "Have you ever lied to your best friend?", 
    "Would you ever cheat off a friends paper?", 
    "How many different best friends have you had during your lifetime?", 
    "If you were stuck on a deserted island, which friend would you want with you?", 
    "How long have you gone without showering?", 
    "Have you ever told a lie during a game of Truth or Dare? What was it and why?", 
    "Have you ever had a crush on anyone here?", 
    "Have you ever stolen anything?", 
    "What's your scariest nightmare?", 
    "What do you think is your biggest physical flaw?", 
    "Have you ever gone skinny dipping?", 
    "What kind of pajamas do you wear to bed?", 
    "What's the dumbest thing you've ever done on a dare?", 
    "What color is your underwear?", 
    "Have you ever peed in the swimming pool?", 
    "If you weren't here, what would you be doing?", 
    "If you couldn't go to the college or get the job of your dreams, what would you do?", 
    "What is one thing you've never told anyone else?", 
    "What do you want to be when you grow up?", 
    "What kind of person do you want to marry someday?", 
    "Do you want to have kids? How many?", 
    "If you could switch places with someone for a day, who would it be?", 
    "If you could invent anything, what would it be?", 
    "If you knew the world was about to end, what would you do?", 
    "If you could be born again, who would you come back as?", 
    "Are you scared of dying? Why?", 
    "What is your biggest fear?", 
    "What happened on worst day of your life?", 
    "Have you ever climbed a tree?", 
    "Have you ever sang and danced in the grocery store?", 
    "If you could be a superhero, what would your power be?", 
    "What would you do if you were invisible for a day?", 
    "If you life were made into a movie, who would play you?", 
    "What's your biggest pet peeve?", 
    "What is your special talent?", 
    "What's the best meal you've ever had?", 
    "What's you favorite Disney movie and why?", 
    "What would you do with a million dollars if you ever won the lottery?" 
  ];

  var dare= [ 
    "Go outside and sing a clip of your favorite Disney song at the top of your lungs.", 
    "Exchange shirts with the person next to you for the next round of questions.", 
    "Wear a funny hat on your head for the next three rounds of questions.", 
    "Drink a mystery brew concocted by the rest of the group. Make sure there is nothing harmful or dangerous in the concoction, and set areasonable limit of sips the person must take to complete the dare.", 
    "Everything you say for the rest of the game has to rhyme.", 
    "Give someone in the group a piggyback ride around the room.", 
    "Pretend that you're swimming underwater for the next three rounds of questions.", 
    "Prank call someone you know (perhaps another girl in the group that couldn't make it that night).", 
    "Set up a tea party between any of the stuffed animals in the house. Invite the girls in your group to come join.", 
    "Eat a mouthful of crackers and try to whistle.", 
    "If there is a pet at the event, have that person try and hold the pet for the rest of the night.", 
    "Repeat everything another player says for the next three rounds of the game.", 
    "Wear your pants backward for the rest of the game.", 
    "Ask the neighbors to borrow a cup of sugar.", 
    "Sing instead of speaking for the next two rounds of the game.", 
    "Post a YouTube video after singing a currently popular song.", 
    "Make up a rap about the person to your right.", 
    "Run around the room imitating a monkey.", 
    "Say the alphabet backwards in a British accent.", 
    "Crack an egg on your head." 
  ] ;

  const name=document.querySelector("#name");
  const age=document.querySelector("#age");
  const td=document.querySelector("#td");
  const ans=document.querySelector("#ans");
  const complete=document.querySelector(".complete");
  const optimize=document.querySelector(".optimize");
  const textarea=document.querySelector("textarea");
  optimize.addEventListener('click',()=>{
      var choose=td.value;
       choose=choose.toLowerCase();
      
     if(age.value>=18)
     {
        if(choose==="truth")
      {
            var i=0;
            var id=setInterval(()=>{
                document.querySelector(".box").innerHTML=`<h1>${i}</h1>`;
                if(i==60)
                {   
                    document.querySelector(".box").innerHTML=`<img src="think3.jpg" style="width: 100%; object-fit: contain;" alt="">`;
                    document.querySelector(".result").innerHTML=`<div class="box2">
                    <h4 class="text-white">Truth:</h4>
                    <h5 class="text-center text-white">${truth[Math.round(Math.random()*(truth.length-1))]}</h5>
               </div>`;
                   complete.addEventListener('click',()=>{
                    if(ans.value.trim()!='')
                    {
                        document.querySelector(".name").innerHTML=`<div class="box3">
                    <h2 class="text-center text-white" style="font-family: 'Hina Mincho', serif;">
                        Thankyou! For Playing This Game <span class="text-danger text-capitalize">${name.value}</span> Have Nice Day !
                    </h2>
                </div>`;
                alert("Your Answer Is Submitted!")
                    name.value='';
                   age.value='';
                   td.value='';
                   textarea.value='';
                    }
                    else{
                        alert("type Your Answer!");
                    }
                   });
                  
                    clearInterval(id);
                }
                i++;
            },100);
            
      }
      else if(choose==="dare")
      {
        var i=0;
            var id=setInterval(()=>{
                document.querySelector(".box").innerHTML=`<h1>${i}</h1>`;
                if(i==60)
                {   
                    document.querySelector(".box").innerHTML=`<img src="think3.jpg" style="width: 100%; object-fit: contain;" alt="">`;
                    document.querySelector(".result").innerHTML=`<div class="box2">
                    <h4 class="text-white">Dare:</h4>
                    <h5 class="text-center text-white">${truth[Math.round(Math.random()*(dare.length-1))]}</h5>
               </div>`;
                   complete.addEventListener('click',()=>{
                    if(ans.value.trim()!='')
                    {
                        document.querySelector(".name").innerHTML=`<div class="box3">
                    <h2 class="text-center text-white" style="font-family: 'Hina Mincho', serif;">
                        Thankyou! For Playing This Game <span class="text-danger text-capitalize">${name.value}</span> Have Nice Day !
                    </h2>
                </div>`;
                alert("Your Answer Is Submitted!")
                name.value='';
                   age.value='';
                   td.value='';
                   textarea.value='';
                    }
                    else{
                        alert("type Your Answer!");
                    }
                   });
                  
                    clearInterval(id);
                }

                i++;
            },100);
      }
      else{
          alert("Type truth or dare ! Play Again !")
      }
     }
     else
     {
         alert("Your Age Is Below 18 !! Sorry");
     }
  });