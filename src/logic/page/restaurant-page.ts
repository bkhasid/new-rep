import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { Restaurant } from '../../logic/api/api-request/get-restaurants-request';;


const POPUP_TITLE = "//h2[contains(text(),'Create new restaurant')]"

export class RestaurantPage extends BasePage {

    private createNewResturantButton: Locator
    private popupTitle: Locator
    private idInput: Locator
    private nameInput: Locator
    private addressInput: Locator
    private scoreInput: Locator
    private submitButton: Locator
    private createdTitle: Locator
    private okButton: Locator
    private deleteButton: Locator
    private deletePopup: Locator


    constructor(page: Page) {
        super(page);
        this.createNewResturantButton = this.page.locator("//button[contains(text(),'Create new')]")
        this.popupTitle = this.page.locator("//div[@id='create-new-popup']")
        this.idInput = this.page.locator("//input[@id='id']")
        this.nameInput = this.page.locator("//input[@id='name']")
        this.addressInput = this.page.locator("//input[@id='address']")
        this.scoreInput = this.page.locator("//input[@id='score']")
        this.submitButton = this.page.locator("//button[contains(text(),'Submit')]")
        this.createdTitle = this.page.locator("//h2[contains(text(),'Created')]")
        this.okButton = this.page.locator("//button[contains(text(),'OK')]")
        this.deleteButton = this.page.locator("//button[contains(text(),'X')]")
        this.deletePopup = this.page.locator("//h2[contains(text(),'Deleted!')]")
    }

    clickreateNewRestaurantButtone = async () => {
        await this.createNewResturantButton.click()
    }
    returnPopupTitle = async () => {
        return await this.popupTitle.isVisible()
    }

    isCreateTitleVisible = async () => {
        return await this.createdTitle.isVisible()
    }

    isDeleteTitleVisible = async () => {
        return await this.deletePopup.isVisible()
    }

    isDeleteButtonVisible = async () => {
        return await this.deleteButton.isVisible()
    }

    cliclOkButton = async () => {
        await this.okButton.click()
    }

    cliclSubmitButton = async () => {
        await this.submitButton.click()
    }

    clickDeleteButton = async () => {
        await this.deleteButton.click()
    }

    createNewRest = async (body: Restaurant) => {
        await this.idInput.fill("" + body.id)
        await this.nameInput.fill(body.name)
        await this.addressInput.fill(body.address)
        await this.scoreInput.fill("" + body.score)
        this.cliclSubmitButton()
    }

}