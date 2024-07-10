import { imageGalleryPage } from "../pages/imageGalleryPage"

describe('Image Element Test', () => {
    const pageSizes = [25, 50, 75, 100];
    beforeEach(() => {
      // Visit the  Home page before each test
      imageGalleryPage.visit();
      
    })

    it('C8 User should navigate to the next page', () => {
        // Check if the user is navigated to the next page
        imageGalleryPage.getNextPage().click({multiple:true});
      })

      it('C9 User should navigate to the previous page', () => {
        // Check if the user is navigated to the previous page
        imageGalleryPage.getNextPage().click({multiple:true});
        imageGalleryPage.getPreviousPage().click({multiple:true});
      })

      it('C10 Check whether the Previous Page is disabled', () => {
        // Check whether the Previous Page button is disabled
        imageGalleryPage.getPreviousPage().should('be.disabled');
      })      
            
                

})
