import { imageGalleryPage } from "../pages/imageGalleryPage"

describe('Image Element Test', () => {
    const pageSizes = [25, 50, 75, 100];
    beforeEach(() => {
      // Visit the  Home page before each test
      imageGalleryPage.visit();
      
    })

    it('User should navigate to the next page', () => {
        // Check if the user is navigated to the next page
        imageGalleryPage.getNextPage().click({multiple:true});
      })

      it('User should navigate to the previous page', () => {
        // Check if the user is navigated to the previous page
        imageGalleryPage.getNextPage().click({multiple:true});
        imageGalleryPage.getPreviousPage().click({multiple:true});
      })

      it('Check whether the Previous Page is disabled', () => {
        // Check whether the Previous Page button is disabled
        imageGalleryPage.getPreviousPage().should('be.disabled');
      })
      it(`should paginate with items per page`, () => {
                  // Select the page size from the dropdown
        cy.get('select').eq(1).select('50');
      })
            
                 



})
