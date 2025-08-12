describe('Protege INTRANET', () => {
    beforeEach(() => {
        cy.visit('http://wfly18hml02.sesp.parana/sespintranet/');
        cy.viewport(1280, 720);
        cy.fazerLoginDev(); // usa a função criada
    });

    afterEach(function () {
  if (this.currentTest.state === 'failed') {
    cy.prtintErro(this.currentTest.title)
  }
})

    it('Cadastrar Edificação Medio Risco', () => {
        //Acessando a Consulta Geral
        cy.origin('http://protfacil-intra-protegefacil-hml.paas.celepar.parana', () => {
            cy.contains('.menu-label', 'Cadastro').click();
            cy.get('a[href="/intranet/cadastrar-edificacao"]').should('be.visible').click();
            cy.get('#__BVID__149').type('04545778429');
            cy.get('button:has(i.fa-search)').contains('Consultar').click();
            cy.get('button:has(i.fa-thumbs-up)').contains('Sim').click();

            //Inserir endereço da edificação
            cy.get('#input-cep').type('83501-000');
            cy.get('#input-numero').type('123');

            //Clique no botão Incluir Endereço
            cy.get('button:has(i.fa-plus-circle)').click();

            //clique no botão próximo
            cy.get('button:has(i.fa-arrow-right)').contains('Próximo').click();

            //ABA Edificação
            cy.get('#input-1').type('Edificação Automação');
            //Respodendo Perguntas
            cy.get('label[for="__BVID__219"]').click();
            cy.get('label[for="__BVID__223"]').click();
            cy.get('label[for="__BVID__227"]').click();

            //Seleciona Ocupação de Edificação Grupo
            cy.get('#input-grupo').select('6');
            //Seleciona Ocupação de Edificação Divisão
            cy.get('#input-divisao').select('26');

            //Clica no Botão Incluir Ocupação 
            cy.get('button:has(i.fa-plus-circle)').contains('Incluir Ocupação').click();
            
            //Incluir area da edificação
            cy.get('#input-areaEdificacao').type('100');  

            //A Edificação Possui Área de Risco?
            cy.get('label[for="__BVID__245"]').click();

            //A Edificação é de Uso Compartilhado ou em Condomínio? * 
            cy.get('label[for="__BVID__249"]').click();




            //Altura da Edificação (m)
            cy.get('#input-alturaEdificacao').contains('Altura da Edificação').type('10');
            

            //Número Total de Pavimentos da Edificação *
            cy.get('#input-alturaEdificacao').contains('  Número de Pavimentos da Edificação').type('1');

            //A Edificação Possui Pavimentos em Subsolo? *
            //A Edificação possui Líquido Inflamável e/ou Combustível? *
            //A Edificação possui Gás Liquefeito de Petróleo (GLP)? *
            //A Edificação possui Gás Natural? *
            //Capacidade de Público da Edificação 






        });
    });

});

