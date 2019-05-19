const express = require('express');
const router = express.Router();
const Word = require('../../models/Word');
const Page = require('../../models/Page');
const PageWord = require('../../models/Page_Word');


let descriptions = [{
  "phase": "one",
  "description": "Basic styling and html setup to display search results",
  "title": "Phase One" 
}]


//Creates the tables for the page and word to store into the database
router.post('/page-words', (req, res) => {
    
  const url = req.body.url;
  const words = req.body.wordsOnPage;
  const title = req.body.title;
  const description = req.body.description;
  const isModified = req.body.isModified;

  const wordObjects = [];
  const pageWords = [];
  let pageId;

  Page.find({url: url}, (err, foundedPage) => {
    //If the page is found and it's not updated
    if(foundedPage && !isModified){
      res.send({message: "Page is already updated"});
    } else {

      //Save the page into the DB
      let page = new Page({
        url: url,
        title: title,
        description: description,
        lastModified: new Date(),
        lastIndexed: new Date(),
        timeToIndex: 0, 
      });

      page.save((err, savedPage) => {
        if(err){
          res.send({error: err, message: "error saving the page"});
        }

        //Grab the pageId and go through all of the incoming words on the document
        pageId = savedPage._id;

        words.map(name => {
          if (name) {
            //Removes the special characters at the end
            if (name.endsWith(".") || name.endsWith(",")) {
              name = name.substring(0, name.length - 1);
            }

            let wordToSave = new Word({ wordName: name });
            wordObjects.push(wordToSave);
          }
        });

      //Saves the words on the given page to the word model
        Word.insertMany(wordObjects, (err, savedWords) => {
          if(err){
            res.send(err);
          }

          

          //When the words are successfully saved,
          //we create a join table to save to the page-words collection
          savedWords.map((savedWord) => {


            //Need to update a word frequency if it's already there
            Word.find({wordName: savedWord.wordName}, (err, foundedWords) => {
              if(err){
                console.log(err);
              }

              let pageWord = new PageWord({
                pageId: pageId,
                wordId: savedWord._id,
                frequency: 0
              });

              if(foundedWords){
                //if we found the word, we update it's frequency
                pageWord.frequency = foundedWords.length;
              }

              //push each word on the page into the array to add to the collection
              pageWords.push(pageWord);

              //Since the variable scoping doesn't allow us to scope outside of a function
              //check to see if the amount of words in the DB for the page are equal
              //to the number of words on the page. Then save all of the wordIds/PageIds in Db
              if(savedWords.length == pageWords.length){

                PageWord.insertMany(pageWords, (pageWordErr, savedPageWords) => {
                  if(pageWordErr){
                    res.send({error: pageWordErr, message: "Error saving Page Words"});
                  }

                  res.send({message: "Successfully saved page words", content: savedPageWords});

                })
              }
            })

          })


        });

      })
    }


  })
    
});















router.post("/get-word-matches", (req, res) => {
  let word = req.body.word;
  console.log(word);


  //Finds the corresponding word id
  Word.find({wordName: word}, (err, wordsFound) => {
    if(err){
      console.log(err);
    }

      let pageWordsArr = [];

    //once the words are found
    //we must go through them and find all the pages that are related to it
    wordsFound.map((word) => {

      PageWord.find({ wordId: word._id}, (error, pageWordFound) => {
        if (error) {
          console.log(error);
        }

        //push each word that corresponds to a page into an array
        pageWordsArr.push(pageWordFound[0]);

        //once the values in the results
        //we can send back the data to the user
        if(pageWordsArr.length === wordsFound.length){
          

          let pageObjects = [];
          //Find the page url of each by searching the ID
          pageWordsArr.map((pageWord) => {
            let pageWordPageId = pageWord.pageId;

            Page.findById(pageWordPageId, (err, pageFound) => {
              if(err){
                console.log(err);
              }

              //push all the pages into the page objects
              pageObjects.push(pageFound);

              //once the lengths are equal, create a set to hold only 1 url
              if(pageObjects.length === pageWordsArr.length){
                let modPageObjects = new Set();

                //map throught the pageObjects and append only the url
                // into the set
                pageObjects.map((pageObject) => {
                  modPageObjects.add(pageObject.url);
                })

                //assign the page objects to be an empty array
                pageObjects = [];

                //put only the unique urls in the page objects to send
                modPageObjects.forEach((page) => {
                  pageObjects.push(page);
                });


                

                res.send({pages: pageObjects, word: word});

                
              }
            })
          })


        }
        
        
      });
    });





  });
});


module.exports = router;