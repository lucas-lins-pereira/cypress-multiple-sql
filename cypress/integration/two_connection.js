describe('Test two connection - Fist database', () => {
    it('cy.sqlServer', () => {
        cy.sqlServer('SELECT 10').should('eq', 10);
    })

    it('cy.sqlServer retrieving value', async () => {
        const firstValue = await cy.sqlServer('SELECT 20');
        expect(firstValue[0][0].value).to.equal(20);
    })

    it('cy.task', async () => {
        const secondValue = await cy.task('sqlServer:execute', 'SELECT 30');
        expect(secondValue[0][0].value).to.equal(30);
    })
})

describe('Test two connection - Second database', () => {
    it('cy.task', async () => {
        const thidValue = await cy.task('sqlSecondary:execute', 'SELECT 40');
        expect(thidValue[0][0].value).to.equal(40);
    })
})