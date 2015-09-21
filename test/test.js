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
	.set('Accept', 'application/x-www-form-urlencoded')
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