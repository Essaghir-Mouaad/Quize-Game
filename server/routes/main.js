const express = require("express");

const _ = require("lodash");

const router = express.Router();

/**
 * GET/
 * Home
 */
const blogs = [
  {
    title:"Learn to tame JavaScript strings with Stringo",
    article:"Stringo is the latest coding game from Codepip. In Stringo, you meet an old-timer who uses letter tiles to teach you the ins-and-outs of JavaScript strings. As you level up, you will hone your skills and perhaps even gain a bit of gold. Stringo introduces the length property, and many powerful methods for manipulating strings like…",
    date:"2-12-2004"
  },
  {
    title:"Learn to tame JavaScript strings with Stringo",
    article:"Stringo is the latest coding game from Codepip. In Stringo, you meet an old-timer who uses letter tiles to teach you the ins-and-outs of JavaScript strings. As you level up, you will hone your skills and perhaps even gain a bit of gold. Stringo introduces the length property, and many powerful methods for manipulating strings like…",
    date:"2-12-2004"
  },
  {
    title:"Learn to tame JavaScript strings with Stringo",
    article:"Stringo is the latest coding game from Codepip. In Stringo, you meet an old-timer who uses letter tiles to teach you the ins-and-outs of JavaScript strings. As you level up, you will hone your skills and perhaps even gain a bit of gold. Stringo introduces the length property, and many powerful methods for manipulating strings like…",
    date:"2-12-2004"
  },
  {
    title:"Learn to tame JavaScript strings with Stringo",
    article:"Stringo is the latest coding game from Codepip. In Stringo, you meet an old-timer who uses letter tiles to teach you the ins-and-outs of JavaScript strings. As you level up, you will hone your skills and perhaps even gain a bit of gold. Stringo introduces the length property, and many powerful methods for manipulating strings like…",
    date:"2-12-2004"
  }

];


const game = {
  name:"cascade",
  description:"Face a barrage of fast-paced CSS microgames, inspired by the likes of WarioWare, that put your CSS knowledge to the test. Includes dozens of microgames focused on a wide range of CSS that will keep you on your toes",
  Learning_Objectives:"Exercise your recall on a variety of CSS <code>features</code> ,  <code>including</code> <code>flexbox</code> , <code>grid</code> , <code>transform</code> , <code>direction</code> , <code>filter</code> , <code>counter</code> , <code>nth-child</code> , calc and more.",
  Prerequisites:"For everyone from beginners to experts with a basic familiarity of CSS"
}

router.get("/", (req, res)=>{
  res.render("home");
});


/**
 * GET/
 * Quizes
 */
router.get("/games", (req, res) => {
  res.render("games");
});

router.get("/games/:game_name", (req, res)=>{
  var path = _.lowerCase(req.params.game_name);
  var found = false;

  if (path === _.lowerCase(game.name)) {
    res.render("game_name", {name: game.name, description: game.description, Learning_Objectives:game.Learning_Objectives, Prerequisites:game.Prerequisites});
    found = truez
  }
})



router.get("/blogs", (req, res) => {
  res.render("blogs", { blogs: blogs });
});



router.get("/blogs/:article", (req, res) => {
  var path = _.lowerCase(req.params.article);
  let found = false;

  blogs.forEach(element => {
    if (path === _.lowerCase(element.title)) {
      found = true;
      return res.render("more_details", {
        title: element.title,
        article: element.article,
        date: element.date
      });
    }
  });

  if (!found) {
    res.status(404).send("Article not found");
  }
});





module.exports = router;
