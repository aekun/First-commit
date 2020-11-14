describe('developerj',function(){

  it('Visit the URL',function(){
      cy.visit('https://www.google.com/');
  });

  it('Click on calculator',function () {
    cy.get('.gLFyf.gsfi').click();


  });

});
