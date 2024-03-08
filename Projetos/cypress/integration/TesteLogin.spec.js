describe('Teste de Login', () => {
    before(() => {
        cy.visit('https://front.serverest.dev/login');  
    });
   
    let nome = 'Robson do Santos'
    it('Teste 1', () => {

        cy.get('[data-testid=cadastrar]').click();
        cy.get('[data-testid=nome]').type(nome);
        cy.get('[data-testid=email]').type('robsondossantos@gmail.com');
        cy.get('[data-testid=password]').type('12345678');
        cy.get('[data-testid=checkbox]').check();
        // cy.get('[data-testid=cadastrar]').click();
        // cy.get('[data-testid=listarUsuarios]').click();

        
    });
});