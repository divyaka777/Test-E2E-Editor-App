import { imageGalleryPage } from "../pages/imageGalleryPage"

describe('Image Element Test', () => {
    beforeEach(() => {
      // Visit the page before each test
      imageGalleryPage.visit();
    })
    
    it('should display the home page', () => {
        // Check if the homepage is loaded
        imageGalleryPage.getHomeText().should('be.visible');
      })

  
    it('should load the image element', () => {
      // Check if the image element is present and visible
      imageGalleryPage.getImageElement().should('be.visible');

    })

    it('should be able to dowload the image', () => {
        //Check if the image is visible and downloadable
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getDownloadImageElement().should('be.visible').click();

    })

    it('should be able to add greyscale changes to the image and discard them', () => {
        //Check if the image is visible and editable
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getWidthInput().type('100');
        imageGalleryPage.getGreyScale().check();
        imageGalleryPage.getDiscardChangesElement().should('be.visible').click();


    })

    it('should be able to edit changes to the image', () => {
        //Check if the image is visible and editable
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getWidthInput().type('100');

    })

    it('should be able to discard changes to the image', () => {
        //Check if the image is visible and editable and could discard the changes
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getDiscardChangesElement().should('be.visible').click();

    })
    
  
    it('should have the correct src attribute', () => {
      // Check if the image element has the correct src attribute
      cy.get('img[alt="Image by Alejandro Escamilla"]')
        .should('have.attr', 'src')
        .and('include', 'https://picsum.photos/id/0/5000/3333')
    })
  
  })
  