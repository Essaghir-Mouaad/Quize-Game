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
