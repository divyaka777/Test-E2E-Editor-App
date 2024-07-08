import { imageGalleryPage } from "../pages/imageGalleryPage"

describe('Image Element Test', () => {
    beforeEach(() => {
      // Visit the  Home page before each test
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
        //Check if the image is visible and can introduce greyscale changes 
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getWidthInput().type('100');
        imageGalleryPage.getGreyScale().check();
        imageGalleryPage.getDiscardChangesElement().should('be.visible').click();


    })

    it('should be able to edit changes to the image', () => {
        //Check if the image is visible and editable and downloadable
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getWidthInput().type('100');
        imageGalleryPage.getHeightInput().type('400');
        imageGalleryPage.getDownloadImageElement().should('be.visible').click();

    })

    it('should be able to add blur to the image ', () => {
        //Check if the image is visible and could be blurred to a specific value
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getBlurScaleElement().should('have.value','5');

    })

    it('should be able to discard changes to the image', () => {
        //Check if the image is visible and editable and could discard the changes
        imageGalleryPage.getImageElement().should('be.visible').click();
        imageGalleryPage.getWidthInput().type('100');
        imageGalleryPage.getHeightInput().type('400');
        imageGalleryPage.getGreyScale().check();
        imageGalleryPage.getBlurScaleElement().should('have.value','5');
        imageGalleryPage.getDiscardChangesElement().should('be.visible').click();

    })
    
  

  
  })
  