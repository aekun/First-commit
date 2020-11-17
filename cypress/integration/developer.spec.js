describe('developerj',function(){

  it('Visit the URL',function(){
      cy.visit('http://a.testaddressbook.com/');
  });

  it('Click on calculator',function () {
    cy.get('#sign-in').click();
    cy.get('#session_email').type('michael');
    cy.get('#session_password').type('forever');
    //cy.get('#Sign-up').click();
    //cy.get('#user_email').type('Test');



  });

});
