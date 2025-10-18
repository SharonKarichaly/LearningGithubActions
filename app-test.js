let mongoose = require("mongoose");
let server = require("./app");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp); 

describe('Tech Stack API Suite', () => {

    describe('Fetching Tech Stack Details', () => {
        it('it should fetch Python details', (done) => {
            let payload = {
                id: 1
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(1);
                    res.body.should.have.property('name').eql('Python');
                done();
              });
        });

        it('it should fetch JavaScript details', (done) => {
            let payload = {
                id: 2
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(2);
                    res.body.should.have.property('name').eql('JavaScript');
                done();
              });
        });

        it('it should fetch Java details', (done) => {
            let payload = {
                id: 3
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(3);
                    res.body.should.have.property('name').eql('Java');
                done();
              });
        });

        it('it should fetch Go details', (done) => {
            let payload = {
                id: 4
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(4);
                    res.body.should.have.property('name').eql('Go (Golang)');
                done();
              });
        });

        it('it should fetch Rust details', (done) => {
            let payload = {
                id: 5
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(5);
                    res.body.should.have.property('name').eql('Rust');
                done();
              });
        });

        it('it should fetch TypeScript details', (done) => {
            let payload = {
                id: 6
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(6);
                    res.body.should.have.property('name').eql('TypeScript');
                done();
              });
        });

        it('it should fetch C++ details', (done) => {
            let payload = {
                id: 7
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(7);
                    res.body.should.have.property('name').eql('C++');
                done();
              });
        });

        it('it should fetch Ruby details', (done) => {
            let payload = {
                id: 8
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(8);
                    res.body.should.have.property('name').eql('Ruby');
                done();
              });
        });

        it('it should fetch PHP details', (done) => {
            let payload = {
                id: 9
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(9);
                    res.body.should.have.property('name').eql('PHP');
                done();
              });
        });

        it('it should return 404 for invalid tech stack ID', (done) => {
            let payload = {
                id: 999
            }
          chai.request(server)
              .post('/techstack')
              .send(payload)
              .end((err, res) => {
                    res.should.have.status(404);
                done();
              });
        });

    });        
});

//Use below test case to achieve coverage
describe('Testing Other Endpoints', () => {

    describe('it should fetch OS Details', () => {
        it('it should fetch OS details', (done) => {
          chai.request(server)
              .get('/os')
              .end((err, res) => {
                    res.should.have.status(200);
                done();
              });
        });
    });

    describe('it should fetch Live Status', () => {
        it('it checks Liveness endpoint', (done) => {
          chai.request(server)
              .get('/live')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql('live');
                done();
              });
        });
    });

    describe('it should fetch Ready Status', () => {
        it('it checks Readiness endpoint', (done) => {
          chai.request(server)
              .get('/ready')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql('ready');
                done();
              });
        });
    });

});