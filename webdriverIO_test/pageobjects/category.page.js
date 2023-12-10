const Page = require('./page');



class CategoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get bier() {
        return $('//a[@href="/bier"]'); 
    }
    get wasser() {
        return $('//a[@href="/wasser"]'); 
    }
    get rotwein() {
        return $('//a[@href="/weine"]'); 
    }

    get bier_pils() {
        return $('//a[@href="/bier/pils"]'); 
    }

    get wein_rotwein() {
        return $('//a[@href="/weine/rotwein"]'); 
    }
    
    get wasser_spritzig() {
        return $('//a[@href="/wasser/spritzig"]'); 
    }

    get shopping_cart() {
        return $('(//button[@type="button"])[1]');
    }

    get deliveryFee() {
        return $('mfe-basket');
    }

    get lieferGebühr() {
        return $('mfe-basket')
    }

    get firstLieferGebühr() {
        return $('div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)')
    }

    get secondLieferGebühr() {
        return $('div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)')
    }

    get thirdLieferGebühr() {
        return $('div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)')
    }

    

    
    


    
//////////////////////////////////////////***************** KEYWORDS */


    async navigateToCategory (randomCategory) {
        switch (randomCategory) {
            case 'bier':
                await this.bier.waitForExist();
                await this.bier.click();
                await this.bier_pils.waitForExist();
                await this.bier_pils.click();
                break;
            case 'wasser':
                await this.wasser.waitForExist();
                await this.wasser.click();
                await this.wasser_spritzig.waitForExist();
                await this.wasser_spritzig.click();
                break;
            case 'rotwein':
                await this.rotwein.waitForExist();
                await this.rotwein.click();
                await this.wein_rotwein.waitForExist();
                await this.wein_rotwein.click();
                break;
            default:
                throw new Error(`Unexpected category: ${randomCategory}`);
        }
        
        

        await browser.pause(2000);
        return randomCategory;
    }
    async addToBasket () {
        //var shadowHost = $('mfe-products-display');
        //var innerElement = this.shopping_cart.shadow$('div > swiper-container > swiper-slide > div :nth-child(3) > div :nth-child(2) > button');   It was in shadow , so i wrote shadow locator!!
        await this.shopping_cart.scrollIntoView();
        await this.shopping_cart.waitForExist();
        await this.shopping_cart.click();
        await browser.pause(2000);
    }
    async verifyDeliveryFee () {
        const lieferGebührPrice = await this.lieferGebühr.shadow$('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)');
        const Price = await lieferGebührPrice.getText();
        console.log(typeof Price);
        var deliveryFeeElement = await this.deliveryFee.shadow$('div > div > div > div > div:nth-child(3) > div.fp-basket_summary > div:nth-child(3) > span.delivery_fee');
        await deliveryFeeElement.click();
        await browser.pause(2000);
        const firstDeliveryCost = await this.firstLieferGebühr.getText();
        const secondDeliveryCost = await this.secondLieferGebühr.getText();
        const thirdDeliveryCost = await this.thirdLieferGebühr.getText();
        if (Price === firstDeliveryCost || Price === secondDeliveryCost || Price === thirdDeliveryCost) {
            console.log('delivery fee is in the table');
            return true;
        } else {
            // console.log('delivery fee is not in the table');
            browser.assert.fail('This test intentionally fails');
        }
    }

}

module.exports = new CategoryPage();
