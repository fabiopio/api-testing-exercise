var should = require('chai').should(),
expect = require('chai').expect
supertest = require('supertest')
api = supertest('http://localhost:4567/')

describe ('Flight', function() {
});

it ('should return a 200 response', function(done) {
	api.get('api/flights')
	.set('Accept', 'application/json')
	.expect(200, done)
});

it ('should be a object with keys and values', function(done) {
	api.get('api/flights/1')
	.set('Accept', 'application/json')
	.expect(200)
	.end(function(err, res) {
		expect(res.body).to.have.property("data_partida");
		expect(res.body.data_partida).to.not.equal(null);
		expect(res.body).to.have.property("data_chegada");
		expect(res.body.data_chegada).to.not.equal(null);
		expect(res.body).to.have.property("numero");
		expect(res.body.numero).to.not.equal(null);
		expect(res.body).to.have.property("origem");
		expect(res.body.origem).to.not.equal(null);
		expect(res.body).to.have.property("destino");
		expect(res.body.destino).to.not.equal(null);
		expect(res.body).to.have.property("duracao");
		expect(res.body.duracao).to.not.equal(null);
		expect(res.body).to.have.property("lugares");
		expect(res.body.lugares).to.not.equal(null);
		expect(res.body).to.have.property("companhia");
		expect(res.body.companhia).to.not.equal(null);
		expect(res.body).to.have.property("id");
		expect(res.body.id).to.not.equal(null);
		done();
	});
});

it ('should be updated with a new origin', function(done) {
	api.put('api/flights/1')
	.set('Accept', 'application/json')
	.send({
		 data_partida: "2015-09-10",
 		 data_chegada: "2015-09-10",
  		 numero: "3344",
  		 origem: "Pampulha",
 		 destino: "GRU",
  		 duracao: 2,
  		 lugares: 2,
  		 companhia: "Azul",
  		 id: 1
	})
	.expect(200)
	.end(function(err, res) {
		expect(res.body.origem).to.equal("Pampulha");
		done();	
	});
});

it ('should access info to a specific flight', function(done) {
	api.get('api/flights/1')
	.set('Accept', 'application/json')
	.send({
		id: 1
	})
	.expect(200)
	.end(function(err, res) {
		expect(res.body.id).to.equal(1);
		expect(res.body.companhia).to.equal("Azul");
		done();
	});
});	

it ('should create a new flight', function(done) {
	api.post('api/flights')
	.set('Accept', 'application/json')
	.send({
		 data_partida: "2015-09-10",
 		 data_chegada: "2015-09-10",
  		 numero: "3344",
  		 origem: "Pampulha",
 		 destino: "GRU",
  		 duracao: 2,
  		 lugares: 2,
  		 companhia: "Azul",
  		 id: 15
	})
	.expect(200)
	 done();	
});


it ('should return no content for a nonexistent flight', function(done) {
	api.delete('api/flights/123')
	.set('Accept', 'application/json')
	.expect(204)
	// .end(function(err, res) {
	// 	if (err) return done(err);
	// 	expect(res.error.text).to.equal("no content");
	// 	done();
	// });
		done();
});

it ('should delete a flight', function(done) {
	api.delete('api/flights/1')
	.set('Accept', 'application/json')
	.expect(200)
	 done();
});
 	
