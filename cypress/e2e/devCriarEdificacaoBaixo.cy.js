describe('Edificação Baixo Risco', () => {
    beforeEach(() => {
        cy.visit('http://wfly18hml02.sesp.parana/sespintranet/');
        cy.viewport(1280, 720);
        cy.fazerLoginDev(); // usa a função criada
    });
    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.printErro(this.currentTest.title)
        }
    });

    it('Cadastrar Edificação Baixo Risco', () => {
        //Acessando a Consulta Geral
        cy.origin('https://protfacildev-intra-protegefacildev-hml.paas.celepar.parana', () => {
            cy.contains('.menu-label', 'Cadastro').click();
            cy.get('a[href="/intranet/cadastrar-edificacao"]').should('be.visible').click();
            cy.get('#__BVID__149').type('04545778429');
            cy.get('button:has(i.fa-search)').contains('Consultar').click();
            cy.get('button:has(i.fa-thumbs-up)').contains('Sim').click();

            //Inserir endereço da edificação
            cy.get('#input-cep').type('83501-000');
            cy.get('#input-numero').type(Math.floor(Math.random() * 10000).toString());

            //Clique no botão Incluir Endereço
            cy.get('button:has(i.fa-plus-circle)').click();
            cy.wait(700);

            //clique no botão próximo
            cy.get('button:has(i.fa-arrow-right)').contains('Próximo').click();

            //ABA Edificação
            cy.get('#input-1').type('Edf Automação Baixo Risco');
            
            //Respodendo Perguntas
            cy.get('label[for="__BVID__218"]').click(); //Unifamiliar (Sim)
            cy.get('label[for="__BVID__223"]').click(); //silos e armazéns
            cy.get('label[for="__BVID__227"]').click(); // torre de transmissão

            //Incluir area da edificação
            cy.get('#input-areaEdificacao').type('100');

            //Número Total de Pavimentos da Edificação *
            cy.get('#input-group-pavimentos > div > #input-alturaEdificacao').type('1');

            //A Edificação Possui Pavimentos em Subsolo? *
            cy.get('label[for="__BVID__300"]').click();

            //Ciente
            cy.get('label[for="checkbox-1"]').click();


            //clique no botão próximo
            cy.get('button:has(i.fa-arrow-right)').contains('Próximo').click();

            //ABA Proprietário
            cy.get('#input-pessoa').type('04545778429');
            cy.wait(500);

            //clique no botão próximo
            cy.get('button:has(i.fa-arrow-right)').contains('Próximo').click();

            //ABA Acesso Principal
            cy.get('button:has(i.fa-archive)').contains('Gravar').click();

            //Modal de Confirmação
            cy.get('#bv-modal-cadastro-baixo').contains('Baixo Risco').should('be.visible');
            cy.wait(500);
            cy.screenshot('Sucesso/Edificação de Baixo Risco OK');

            //Clicar no Botão OK
            cy.get('button:has(i.fa-check-circle)').contains('OK').click();
        });
    });
})
