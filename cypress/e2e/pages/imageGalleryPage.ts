class ImageGalleryPage
{
    visit(){
        cy.visit('/')
    }
}

export const imageGalleryPage = new ImageGalleryPage();
