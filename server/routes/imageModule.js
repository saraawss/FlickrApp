const express = require('express');
var parser = require('fast-xml-parser');
var FeedParser = require('feedparser')
var request = require('request');
var defaultConstants = require('../config/defaultConstant.js');

var images_ = [];

var imageModule = function() {

	var getImageList = function(callback, tag){ 
		
	  var req = function(){};
	  var feedparser = new FeedParser();
	    
	  if(tag == ''){
	     req = request(defaultConstants.flickr_endpoint);
	  }else{
	  	 req = request(defaultConstants.flickr_endpoint + '?tags='+tag);
	  }
	  
	  req.on('error', function (error) {
	  	console.log(error);
	  });
	  
	  req.on('response', function (res) {
		  var stream = this;
		  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
		  stream.pipe(feedparser);
	  });
	  
	  feedparser.on('error', function(error) {
	  	console.log(error);
	  });
	  
	  feedparser.on('readable', function() {
	  
	  var stream = this
	    , meta = this.meta 
	    , item;
	
		  while (item = stream.read()) {
		   
		    item = {
				  image: item.enclosures[0].url,
				  title: item.title
				}
		    images_.push(item);
			
		  }
		  
	  });
	  
	   feedparser.on('end', function() {  
		 	callback(images_,null);
	   });
	   
	   
	}
	
	return {
        getImageList: getImageList
    }
}();

	
module.exports = imageModule;