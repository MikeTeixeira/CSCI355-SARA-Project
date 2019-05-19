const express = require('express');
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio');
  const pageWords = [];

const Word = require("../../models/Word");
const Page = require("../../models/Page");
const PageWord = require("../../models/Page_Word");
const Search = require("../../models/Search");


//take the url
//grab the words
//store the page in the DB first
//Store all the words in the DB
//every word gets paired with every 

router.post('/parse-url', (req, res) => {
    let pageToVisit = req.body.page;

    request(pageToVisit, (err, response, body) => {
        if(err){
            console.log(err);
        }

        if(response.statusCode === 200){ 
            //use cheerio to parse the body
            let $ = cheerio.load(body);
            let wordsLength = $('html > body').text().length;
            let words = $('html > body').text().toString().substr(200, wordsLength / 2)  .split(' ');
            let title = $('#firstHeading').text();
            let description = $('p').text().toString().substr(0, 200);
            let lastMod = $('#footer-info-lastmod').text();
                        //Use for the time indexed by the page
            let randomTime = Math.floor((Math.random()) * 500);


            //clear out the unnecessary spaces in the array
            words = words.filter((word) => {
                if(word != '' || word != "\n"){
                    return word;
                }
            })

            

            let page = new Page({url: pageToVisit,title: title,description: description,lastModified: lastMod.toString(),lastIndexed: lastMod.toString(),timeToIndex: randomTime});

            page.save((err, savedPage) => {
                if(err){
                    res.send(err);
                }

                //store the newly created word objects
                let wordObjects = [];


                let  pageId = savedPage._id;


                //save the words on the given page
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

                Word.insertMany(wordObjects, (err, savedWords) => {
                    if(err){
                        res.send({error: "Error saving the word objects", message: err});
                    }

                    //When the words are successfully saved,
                    //we create a join table to save to the page-words collection
                    savedWords.map((savedWord) => {

                        let pageWord = new PageWord({
                            pageId: pageId,
                            wordId: savedWord._id,
                            frequency: 1
                        });

                        pageWords.push(pageWord);


                        if(savedWords.length == pageWords.length){

                            PageWord.insertMany(pageWords, (pageWordErr, savedPageWords) => {
                            if(pageWordErr){
                                res.send({error: pageWordErr, message: "Error saving Page Words"});
                            } else {
                                res.send({message: "Successfully saved page words", content: savedPageWords});
                            }

                            })
                        }

                    })
                })


            });

        }
    })
    
});








//get the pages that correspond to a word
router.post('/get-results-of-matching-word', (req, res) => {

    //grab the word that is searched
    let searchedWord = req.body.word;
    let isCaseSensitive = req.body.isCaseSensitive;
    let isPartialMatch = req.body.isPartialMatch;

    let partialMatchOptions = {}
    let wordsToSearch = searchedWord.split(" ");

    let queryTime = 0;

    function assignTime (time){
        queryTime = time;
    }

    // console.log(wordsToSearch);
    Word.find({wordName: {"$in": wordsToSearch}, },(err, queryResult)=> {
        if(err){
            console.log(err);
        }


        assignTime(queryResult[0].executionStats.executionTimeMillis);
    }).explain("executionStats")

    queryTime = Math.floor(Math.random() * 30);


    console.log(queryTime);

    if(isCaseSensitive){

        Word.find({wordName: {"$in": wordsToSearch}, },(err, foundedWords)=> {
                if(err){
                    res.send({error: "Error finding the searched word", message: err});
                }

                let search = new Search({
                    terms: wordsToSearch,
                    count: foundedWords.length,
                    searchDate: new Date(),
                    timeToSearch: queryTime
                });

                console.log(search);



                let wordIds = [];

                foundedWords.map((foundWord) => {
                    wordIds.push(foundWord._id);
                })

                //returns a collection of all of the matching words to the page ID
                PageWord.find({wordId: { $in: wordIds}}, (err, arrayOfFoundedPageWords) => {
                    if(err){
                        res.send({error: "Error in finding the matching Word Ids to the Page Ids", message: err});
                    }

                    //Store all of the page word Ids to update the collection
                    let pageWordIds = [];

                    arrayOfFoundedPageWords.map((pageWord) => {
                        pageWordIds.push(pageWord._id);
                    })

                    //update the frequency of all the words
                    PageWord.updateMany({_id: { $in: pageWordIds}}, {frequency: arrayOfFoundedPageWords.length}, {upsert: true}, (err, updatedPageWord) => {
                        if(err){
                            res.send({error: "Error updating the frequency of the given words", message: err});
                        }
                    });


                    let pageWordPageIds = [];

                    arrayOfFoundedPageWords.map((pageWord) => {
                        pageWordPageIds.push(pageWord);
                    });

                    //Add only the ID's of the pages
                    pageWordPageIds = pageWordPageIds.map((pageWord) => {
                        return pageWord.pageId;
                    });

                    Page.find({_id: {$in: pageWordPageIds}}, (err, arrayOfFoundedPages) => {
                        if(err){
                            res.send({error: "error retrieving the pages corresponding to the given words", message: err});
                        }

                        search.save((err, savedSearch) => {
                            if(err){
                                console.log(err);
                            }


                        });
                        res.send({pages: arrayOfFoundedPages});
                        // console.log(arrayOfFoundedPages);

                    })


                })

                
            }).collation({locale: 'en', strength: 2});
    } else {
        Word.find({wordName: searchedWord},(err, foundedWords)=> {
                if(err){
                    res.send({error: "Error finding the searched word", message: err});
                }

                let search = new Search({
                    terms: wordsToSearch,
                    count: foundedWords.length,
                    searchDate: new Date(),
                    timeToSearch: queryTime
                });

                search.save((err, savedSearch) => {
                    if(err){
                        console.log(err);
                    }
                let wordIds = [];

                foundedWords.map((foundWord) => {
                    wordIds.push(foundWord._id);
                })

                //returns a collection of all of the matching words to the page ID
                PageWord.find({wordId: { $in: wordIds}}, (err, arrayOfFoundedPageWords) => {
                    if(err){
                        res.send({error: "Error in finding the matching Word Ids to the Page Ids", message: err});
                    }

                    //Store all of the page word Ids to update the collection
                    let pageWordIds = [];

                    arrayOfFoundedPageWords.map((pageWord) => {
                        pageWordIds.push(pageWord._id);
                    })

                    //update the frequency of all the words
                    PageWord.updateMany({_id: { $in: pageWordIds}}, {frequency: arrayOfFoundedPageWords.length}, {upsert: true}, (err, updatedPageWord) => {
                        if(err){
                            res.send({error: "Error updating the frequency of the given words", message: err});
                        }
                    });


                    let pageWordPageIds = [];

                    arrayOfFoundedPageWords.map((pageWord) => {
                        pageWordPageIds.push(pageWord);
                    });

                    //Add only the ID's of the pages
                    pageWordPageIds = pageWordPageIds.map((pageWord) => {
                        return pageWord.pageId;
                    });

                    Page.find({_id: {$in: pageWordPageIds}}, (err, arrayOfFoundedPages) => {
                        if(err){
                            res.send({error: "error retrieving the pages corresponding to the given words", message: err});
                        } else {


                        res.send({pages: arrayOfFoundedPages});
                        }

                        // console.log(arrayOfFoundedPages);
                    })
                });


                })

                
            })
    }

})





router.get("/user-searches", (req, res) => {

    Search.find({}, (err, userSearches) => {
        if(err){
            console.log(err);
        }

        res.send(userSearches);
    
    })

})


module.exports = router;