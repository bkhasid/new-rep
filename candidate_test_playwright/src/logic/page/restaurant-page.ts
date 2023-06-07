import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

const POPUP_TITLE = "//h2[contains(text(),'Create new restaurant')]"

export class RestaurantPage extends BasePage {

    private createNewResturantButton: Locator
    private popupTitle: Locator

    constructor(page: Page) {
        super(page);
        this.createNewResturantButton = this.page.locator("//button[contains(text(),'Create new')]")
        this.popupTitle = this.page.locator("//h2[contains(text(),'Create new restaurant')]")
    }

    clickreateNewRestaurantButtone = async () => {
        await this.createNewResturantButton.click()
    }
    returnPopupTitle = async () => {
        return this.popupTitle.isVisible()
    }
}