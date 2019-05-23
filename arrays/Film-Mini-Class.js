let film = ['Pokemon detecive Pikachu',
            "Spiderman 1",
            "The Pokemon movie",
            "Thor",
            "Deadpool",
            'Ready player one',
            "The Wolf Of Wall Street"]
            
console.log("my favorite third film is " + film[2])
console.log("my favorite film of all time is " +film[1])
console.log("i have " + film.length + " favourite film.")

let tvshows = ['Stranger things',
            "Teen Wolf",
            "Vampire Diaries",
            "Lucifer"]

console.log("I have " + tvshows.length + " favourite tvshows out of which " + tvshows[2] + " is my favourite")

let music = ['Post Malone',
                "The Beatles",
                "Marshmello",
                "Eminem",
                'Five finger death punch']

let favourite = [...film ,
                ...tvshows,] 

console.log ("I have " + film.length + " favourite films out of which " + film[2] + " is my all time Favourite. I have " + tvshows.length + " favourite Tv Shows out of which " + tvshows[2] + " is all my all time favourite")

let favouriteeverything = [...film ,
                ...tvshows,
                ...music]

console.log ("I have " + film.length + " favourite films out of which " + film[2] + " is my all time Favourite. I have " + tvshows.length + " favourite Tv Shows out of which " + tvshows[2] + " is all my all time favourite. As well as my favourite Films and Tv Shows, My all time favourite music is " + music[4])
console.log ("In total i have "+ favouriteeverything.length + "  tvs shows + films but my favourite band is " + music[4])