const express = require('express');
const { route } = require('express/lib/application');
const async = require('hbs/lib/async');
const MoviesModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req,res,next)=>{
    MoviesModel.find()
    
    .then((response) => {
    
      console.log(response);
      res.render("movies.hbs", {
        

        movieslist: response, 
      });
    })

    .catch((err) => {
      console.log(err);
    });

})

router.get("/movies/:idmovies", async (req,res,next)=>{
    const {idmovies} = req.params
    
    try{
        const response = await MoviesModel.findById(idmovies)
        console.log(response);
        console.log(req.params);

        res.render('movie-detail.hbs',{
            details: response
        })


    }catch (err){
        console.log(err);
    }

})

module.exports = router;
