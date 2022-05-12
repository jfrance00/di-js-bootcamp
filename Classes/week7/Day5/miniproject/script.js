// Model

const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];



// View


    const searchBar = document.getElementById("searchBar");
    const displaySection = document.getElementById("displaySection"); 


    // Display card and append to display div


 // Control

    class Robot {
        constructor(id, name, username, email, image){
            this.id = id; 
            this.name = name; 
            this.username = username; 
            this.email = email; 
            this.image = image;
            this.cardDiv = document.createElement("div"); 
            this.shown = true;
            // this.displaySection = document.getElementById("displaySection");  // correct to put displayt in the class object since it is shared by all objects?

        }

        createHTML(){
            console.log(`createHTML called`);

            let robotName = document.createElement("h5");
            robotName.textContent = this.name;
    
            let text = document.createElement("p");
            text.setAttribute("class", "card-text");
            text.textContent = this.email;
    
            let textDiv = document.createElement("div");
            textDiv.setAttribute("class", "card-body");
    
            let image = document.createElement("img");
            image.setAttribute("src", this.image); 
            image.setAttribute("class", "card-img0-top");
            image.setAttribute("alt", "robot-picture");
    
            this.cardDiv.setAttribute("class", "card");
            this.cardDiv.setAttribute("style", "width: 18rem;");
            
            textDiv.appendChild(robotName);
            textDiv.appendChild(text);
            this.cardDiv.appendChild(image);
            this.cardDiv.appendChild(textDiv);
            displaySection.appendChild(this.cardDiv);    
        }
        

        show(){
            console.log(`Show() called`)
            displaySection.appendChild(this.cardDiv);
            this.shown = true;
        };
        hide(){
            console.log(`hide() called`)
            this.cardDiv.remove();  
            this.shown = false;          
        }
    }

    searchBar.addEventListener("input", (e) => {
        let userSearch = e.target.value;
        let robotSearch = robotsInstances.filter(character => character.name.includes(userSearch));
        robotsInstances.map(robot => (!robotSearch.includes(robot)) ? robot.hide() : null)               // hides robots not in search list this code is repetative, how to reduce it?
        robotsInstances.map(robot => (robotSearch.includes(robot) && !robot.shown) ? robot.show() : null)  // shows robots that were hidden but re-added to search
    })

    robotsInstances = robots.map(character => {            // Start program creates an array of class objects and displays card
        character = Object.values(character);
        let [id, name, username, email, image] = character;
        newRobot = new Robot(id, name, username, email, image);
        newRobot.createHTML();
        return newRobot;
    });        




    // Search function -> filters cards to display