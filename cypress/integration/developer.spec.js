describe('developerj',function(){

  it('Visit the URL',function(){
      cy.visit('http://automationpractice.com/index.php?controller=order');
  });

  it('Click on calculator',function () {
    cy.get('#searchbox').type('women dress');
    cy.get('.button-search').click();
    cy.get('.cat-title').click({force: true});
    cy.get('#contact-link').click();
    cy.get('#uniform-id_contact').click();
    cy.get('select').select('Customer service');
    cy.get('select').select('Webmaster');
    cy.get('#email').type('shawn');
    cy.get('#email').type('shawnesco@hotmail.co.uk');
    cy.get('#id_order').type('bfbsvbj');
    cy.get('#message').type('gfrhjfgfruygbfgukzg');
    cy.get('.submit').click();
    //cy.get('#data-validate=isEmail').type('shawnesco@hotmail.co.uk');



  });

});
