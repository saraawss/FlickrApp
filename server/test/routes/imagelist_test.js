
var supertest = require('supertest');  
var chai = require('chai');  
var uuid = require('uuid');  
//var app = require('../../app.jss');
var app = require('../../../app.js');

global.app = app;  
global.uuid = uuid;  
global.expect = chai.expect;  
global.request = supertest(app);  
global.tag = 'happy'; 


describe('GET /image list', function() {
    // Testing all image list
    it('returns image list', function(done) {
    	request.get('/images')
            .expect(200)
            .end(function(err, res) {
                expect(res.body) > 0;
                done(err);
        });
    });
    
    // Testing image list by tag
    it('returns image list by tag', function(done) {
    	request.get('/images/' + tag)
            .expect(200)
            .end(function(err, res) {
                expect(res.body) > 0;
                done(err);
        });
    });
});