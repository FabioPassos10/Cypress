describe('ServeRest - cypress', () => {

beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
});
    it('Cenario de cadastro de usuário adm', () => {
        
        cy.get('[data-testid=cadastrar]').click();
        cy.get('[data-testid=nome]').type("UserADM")
        cy.get('[data-testid=email]').type("userteste@gmail.com")
        cy.get('[data-testid=password]').type("teste12345")
        cy.get('[data-testid=checkbox]').check()
        cy.get('[data-testid=cadastrar]').click()
        
    });
    it('Cenario de cadastro de usuário comum', () => {
        
        cy.get('[data-testid=cadastrar]').click();
        cy.get('[data-testid=nome]').type("UserComum")
        cy.get('[data-testid=email]').type("usercomum@gmail.com")
        cy.get('[data-testid=password]').type("12345678f")
        cy.get('[data-testid=cadastrar]').click()
        
    });

    
});