import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
/*
  beforeEach(() => {
    // Reset the local storage before each test
    cy.mount(<Quiz />);
  });
  */

  it('renders the quiz component to the screen', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
  });

  it('renders a button to the screen', () => {
    cy.mount(<Quiz />);
    cy.get('button').should('exist');
  });
 
  it('renders a button to the screen', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz');
  });
});

