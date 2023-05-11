const HOME_URL = 'https://im.aua.am/'
const LOGIN_URL = 'https://im.aua.am/Account/Login'
const INVALID_LOGIN = 'invalidusername'
const INVALID_PASSWORD = 'invalidpassword'
const VALID_LOGIN = 'valid'
const VALID_PASSWORD = 'valid'

describe('Unsuccessful Login', () => {
  it('Should display an error message after an unsuccessful login', () => {
    cy.visit(LOGIN_URL)
    cy.get('input[id="UserName"]').type(INVALID_LOGIN)
    cy.get('input[id="Password"]').type(INVALID_PASSWORD)
    cy.get('button[id="btnLogin"]').click()
    cy.get('div[id="divError"]').should('have.css', 'display', 'block')
  })
})


describe('Successful Login', () => {
  it('Should lead us to home page after a successful login', () => {
    cy.visit(LOGIN_URL)
    cy.get('input[id="UserName"]').type(VALID_LOGIN)
    cy.get('input[id="Password"]').type(VALID_PASSWORD)
    cy.get('button[id="btnLogin"]').click()
    cy.url().should('eq', HOME_URL)  })
})


describe('Print button in view schedule page', () => {
  it('Should contain a Print button in the view schedule page', () => {
    cy.visit(LOGIN_URL)
    cy.get('input[id="UserName"]').type(VALID_LOGIN)
    cy.get('input[id="Password"]').type(VALID_PASSWORD)
    cy.get('button[id="btnLogin"]').click()
    cy.get('a:contains("View your Schedule")').click()
    cy.get('a:contains("Switch to week view")').click()
    cy.get('a:contains("Switch to basic view")').should('exist')  })
})