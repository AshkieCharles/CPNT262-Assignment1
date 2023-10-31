# CPNT262-Assignment1
### Code Implementations:
- So for my 2 toggles that I did, I put them both in the same function for it is the mobile hamburger menu that I recreated from previous projects. It is on line 6 of the client script. It is the long code with different if's statements that have been shortened to a ? and =. The second part of it is the classList toggle that I have used to create the navigation menu for mobile, which is activated through a media query with tailwind css. (Lines 2-6)
- I manipulated css through the my classList toggle to make sure the opacity is increased or decreased depending on th user. (Line 6)
- The conditionals I did for the toggles were for my hambuurger menu using an operator [(?)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) that is basically similar to an else if statements. (Lines 2-6)
- To prevent my form from refreshing the page I added a new function on the javascript file.(Lines 61-64)
- To generate the array needed to create the image gallery is located at (Lines 10-57)
### Code Journal
- The reason why are all the images are named from 1-9 is because it makes it easier for my to create a for loop with only the inter going up rather than a random list of names. Because if it was names I would have to create a list and create a loop within a loop to prevent the same name from appearing twice which I think is too hard for now but I do have an idea on how you would do it.
- So I didn't read the rubric that closely and failed to see that I needed an array of objects for the loop! So I asked for some assistance from Edward on how he did his.
- After forgetting the strict mode in javascript I placed it all the way to the top, and low and behold it broke my images. It took me 20 minutes to figure out that the problem  was my for loop have a (i = 1) instead of (let i = 1). After changing that it fixed everything.
- For some reason the margin auto without the margin left and right won't prevent the text from touching the edge of the screen. This is why I added a new query selector that has a margin left and right even with margin auto to prevent the words from hitting the edge of the screen.
- Was trying to figure out why my css wasn't working when I realized it was breaking because I left a css class empty and kept breaking it. Or so I thought but it was the classes and id's thats been breaking my css.
### Attributions 
# Images
- [Titanfall](https://images.app.goo.gl/htg1ZeMyFrsepNhx5)
- [Destiny](https://www.destinypedia.com/The_Final_Shape#/media/File:FinalShapePoster1.jpg)
- [Baldur](https://blog.playstation.com/tachyon/2023/02/f321c065cf3f405b6d0ac06fd5a550d6a95b5a5e-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5)
- [Spider](https://4kwallpapers.com/games/marvels-spider-man-12968.html)
- [Warframe](https://imgur.com/a/gZ4cP79)
- [Lego](https://www.deviantart.com/mr3210/art/LEGO-STAR-WARS-The-Skywalker-Saga-Wallpaper-924588084)
- [League](https://stryda.gg/games/lol-esports)
- [WoW](https://wall.alphacoders.com/big.php?i=1302314)
- [GTFO](https://store.steampowered.com/news/app/493520/view/1699476680686965554)

# Code 
- [Append](https://stackoverflow.com/a/2735894)
- [No-Refresh](https://youtu.be/eqSafEsK95w?si=ffUtvlA8Lra2ZRLy)
- [Radio](https://www.w3schools.com/action_page.php)

# Links
- [GH Repo](https://github.com/AshkieCharles/CPNT262-Assignment1.git)
- [GH Site](https://ashkiecharles.github.io/CPNT262-Assignment1/)