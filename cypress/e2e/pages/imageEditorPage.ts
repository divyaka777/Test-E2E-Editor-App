class ImageEditorPage
{
    getWidthInput() {
        return cy.get('#width-input')
      }
    getHeightInput() {
        return cy.get('#height-input')
      }
    getGreyScale()
      {
        return cy.get ('[id="greyscale-input"]')
      }
    getDownloadImageElement() {
        return cy.get('[aria-label="Download edited image"]')
      }
    getBlurScaleElement(){
        return cy.get('[id="blur-input"]').invoke('val',5)
    }
    getDiscardChangesElement() {
        return cy.get('[aria-label="Discard changes to the image"]')
      }
    getNavigationHome() {
        return cy.get('a[href="/"]')
    }
}

export  const imageEditorPage = new ImageEditorPage;