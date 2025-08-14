describe('Protege INTRANET', () => {
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

    it('Cadastrar Edificação Medio Risco', () => {
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
            cy.get('#input-group-alturaEdificacao > div > #input-alturaEdificacao').type('10');

            //Número Total de Pavimentos da Edificação *
            cy.get('#input-group-pavimentos > div > #input-alturaEdificacao').type('1');

            //A Edificação Possui Pavimentos em Subsolo? *
            cy.get('label[for="__BVID__257"]').click();

            //A Edificação possui Líquido Inflamável e/ou Combustível? *
            cy.get('label[for="__BVID__261"]').click();

            //A Edificação possui Gás Liquefeito de Petróleo (GLP)? *
            cy.get('label[for="__BVID__265"]').click();

            //A Edificação possui Gás Natural? *
            cy.get('label[for="__BVID__269"]').click();

            //Capacidade de Público da Edificação 
            cy.get('#input-capacidade').type('11');

            //A Edificação possui Memorial Simplificado? 
            cy.get('label[for="__BVID__275"]').click();

            //A Edificação possui Projeto Técnico Aprovado (PPI, PSCIP, PTPID)? 
            cy.get('label[for="__BVID__301"]').click();

            //Risco de Incêndio da Edificação
            cy.get('#input-risco-incendio').select('1');

            //Medidas de Prevenção e Combate a Incêndio da Edificação 
            cy.get('#input-medidas').select('52');
            cy.get('button:has(i.fa-plus-circle)').contains('Incluir Medida').click();

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
            cy.get('#bv-modal-cadastro-medio-alto-edificacao').contains('Médio Risco').should('be.visible');
            cy.wait(500);
            cy.screenshot('Sucesso/Edificação de Medio Risco OK');

            //Clicar no Botão OK
            cy.get('button:has(i.fa-check-circle)').contains('OK').click();
        });
    });
})
