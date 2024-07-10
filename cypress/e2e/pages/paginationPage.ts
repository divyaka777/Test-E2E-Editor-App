// cypress/pages/paginationPage.ts
class PaginationPage {
    visit() {
      cy.visit('http://localhost:5173');
    }
  
    selectPageSize(size: number) {
        cy.get('select').eq(0).select(`${size}`);
    }
  
    assertUrl(size: number) {
      cy.url().should('include', `?page=1&limit=${size}`);
    }
  }
  
  export const paginationPage = new PaginationPage();
  