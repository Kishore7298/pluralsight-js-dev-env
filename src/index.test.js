import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () => {
	it('should pass',() => {
		expect(true).to.equal(true);
	});
});

describe('index.html',()=> {
	it('should passs', ()=>  {
		const INDEX = fs.readFileSync('src/index.html', "utf-8");
		jsdom.env(INDEX, function(err, window){
			const P1 = window.document.getElementsByTagName('p')[0];
			expect(P1.innerHTML).to.equal("Hello World!");
			window.close();
		})
	})
})
