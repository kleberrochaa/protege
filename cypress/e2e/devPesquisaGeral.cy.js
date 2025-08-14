describe('Protege INTRANET', () => {
    beforeEach(() => {
        cy.visit('http://wfly18hml02.sesp.parana/sespintranet/');
        cy.viewport(1280, 720);
        cy.fazerLoginDev(); // usa a função criada
    });

    it('Acessando Consulta Geral', () => {
        //Acessando a Consulta Geral
        cy.origin('http://protfacil-intra-protegefacil-hml.paas.celepar.parana', () => {
            cy.get('.btn.btn-outline-secondary.btn-sm').eq(0).click();
        });
    });
    it('Validando Consulta por CPF', () => {
        //Pesquisando por CPF    
        cy.origin('http://protfacil-intra-protegefacil-hml.paas.celepar.parana', () => {
            cy.get('.btn.btn-outline-secondary.btn-sm').eq(0).click();
            cy.get('#__BVID__84').type('04545778429');
            cy.get('button.btn:nth-child(2)').click();//BOTAO PESQUISAR
            cy.get('li.page-item:nth-child(3) > button:nth-child(1)').should('be.visible'); //Paginação
            cy.screenshot('Validando Consulta por CPF')
            cy.get('button.button-color:nth-child(1)').click(); //BOTAO LIMPAR
        });
    });
    it('Validando Consulta por Proprietario', () => {
        //Pesquisando por Nome Proprietario
        cy.origin('http://protfacil-intra-protegefacil-hml.paas.celepar.parana', () => {
            cy.get('.btn.btn-outline-secondary.btn-sm').eq(0).click();
            cy.get('#__BVID__87').type('KLEBER WELLINGTON CARLOS ROCHA');
            cy.get('button.btn:nth-child(2)').click();//BOTAO PESQUISAR
            cy.get('li.page-item:nth-child(3) > button:nth-child(1)').should('be.visible'); //Clicar na paginação
            cy.screenshot('Validando Consulta por Proprietario')
            cy.get('button.button-color:nth-child(1)').click(); //BOTAO LIMPAR
        });
    });
    it('Validando Consulta por Nome Edificação', () => {
        //Pesquisando por Nome Edificação
        cy.origin('http://protfacil-intra-protegefacil-hml.paas.celepar.parana', () => {
            cy.get('.btn.btn-outline-secondary.btn-sm').eq(0).click();
            cy.get('#__BVID__89').type('EDIFICIO AUTOMACAO').end();
            cy.get('button.btn:nth-child(2)').click();//BOTAO PESQUISAR
            cy.get('li.page-item:nth-child(3) > button:nth-child(1)').should('be.visible'); //Clicar na paginação
            cy.screenshot('Validando Consulta por Nome Edificação')
            cy.get('button.button-color:nth-child(1)').click(); //BOTAO LIMPAR
        });
    });
});


