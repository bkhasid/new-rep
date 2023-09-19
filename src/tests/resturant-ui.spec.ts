import { test, expect } from '@playwright/test';
import { BrowseWrapper } from '../infra/browser/browser';
import configJson from '../../config.json'
import { RestaurantPage } from '../logic/page/restaurant-page';
import { generateRandomString, getRandomInt } from '../infra/utils';
import restaurantsAPI from '../logic/api/restaurantsAPI';


test.describe('Base UI Test', () => {

  let browser: BrowseWrapper
  let restaurantPage: RestaurantPage;

  test.beforeAll(async () => {
    browser = new BrowseWrapper()
  })
  test.beforeEach(async () => {
    restaurantPage = await browser.newPage(RestaurantPage, configJson.baseUiUrl)
  })

  test.afterEach(async () => {
    await browser.closeContext()
  })

  test.afterAll(async () => {
    await browser.close()
  })
  //gotech test
  test('Validate "Create new Restaurant Popup" opened', async () => {
    await restaurantPage.clickreateNewRestaurantButtone()
    await expect(restaurantPage.returnPopupTitle()).toBeTruthy()
  })

  test('Create and Delete restaurant', async () => {
    const myNewRest = { address: generateRandomString(10), id: getRandomInt(999, 100), name: generateRandomString(5), score: getRandomInt(99, 1) }

    await restaurantPage.clickreateNewRestaurantButtone()
    await expect(restaurantPage.returnPopupTitle()).toBeTruthy()

    //Create new restaurant
    await restaurantPage.createNewRest(myNewRest)
    await expect(restaurantPage.isCreateTitleVisible()).toBeTruthy()
    await restaurantPage.cliclOkButton()

    //Delete restaraunt
    await expect(restaurantPage.isDeleteButtonVisible()).toBeTruthy()
    await restaurantPage.clickDeleteButton()

    await expect(restaurantPage.isDeleteTitleVisible()).toBeTruthy()
    await restaurantPage.cliclOkButton()

    //API validation
    const deleteResponse = await restaurantsAPI.deleteRestaurantById(myNewRest.id);
    expect(deleteResponse.status()).toEqual(404)
  })
})