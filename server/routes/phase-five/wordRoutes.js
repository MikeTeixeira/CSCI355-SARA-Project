const express = require('express');
const router = express.Router();
const WordModel = require('../../models/word');
const PageModel = require('../../models/page');
const $ = require("cheerio");
const mongoose = require('mongoose');
const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const myUrl = "http://localhost:4200/portfolio/queens-college/phases/5/dummy-page-one";




//Posting a word to the DB

// router.post('/new-word', (req, res) => {
    
//     let WORD = new WordModel();
//     let PAGE = new PageModel();

//     PAGE.url = req.body.url;
//     PAGE.locationx = req.body.locationx;
//     PAGE.locationy = req.body.locationy;


//     let options = {
//         new : true,
//         upsert : true
//     }

//     //Save the page with the words position
//     PAGE.save().then((savedPage, err) => {

//         //pushes the id into the words pages array
//         let update = {
//             $push: {pages: savedPage._id},
//             $inc: {total: 1},
//         }

//         //Once the page is saved, find the word and update it's values with the page
//         if(savedPage){

//             WordModel.findOneAndUpdate({word: req.body.word}, update, options, (err, updatedWord) => {
//                 console.log(updatedWord);

//                 if(err){
//                     console.log(err);
//                 } else {
//                     res.send({
//                         message: "Updated word",
//                         result: updatedWord
//                     })
//                 }
//             })
//         }
//     })
//   }




router.get('/', (req, res) => {

  let content;

  rp(myUrl).then((html) => {
    console.log(html);

    console.log($('#dummyContent'))

  }).catch((err) => {
    console.log(err);
  })

  //   rp(url).then(function(html) {
  //   //success!
  //   const wikiUrls = [];
  //   for (let i = 0; i < 45; i++) {
  //     wikiUrls.push($('big > a', html)[i].attribs.href);
  //   }
  //   return Promise.all(
  //     wikiUrls.map(function(url) {
  //       return presParse("https://en.wikipedia.org" + url);
  //     })
  //   );
  // }).then((presidents) => {
  //     console.log(presidents);
  // })
  // .catch(function(err) {
  //   //handle error
  // });
})

// function presParse(url){
//   return rp(url)
//     .then(function(html) {
//       return {
//         name: $('.firstHeading', html).text(),
//         birthday: $('.bday', html).text(),
//       };
//     })
//     .catch(function(err) {
//       //handle error
//     });
// };


module.exports = router