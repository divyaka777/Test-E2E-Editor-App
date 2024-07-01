import { imageGalleryPage } from "../pages/imageGalleryPage"

describe('Visit HomePage', () => {
    it('Homepage should load',() =>
    {
        imageGalleryPage.visit();
    })
})