const { Item } = require("./gilded_rose");

class Standard extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }
    changeQuality() {
        this.sellIn --;
        let multiplier = this.sellIn < 0 ? 2 : 1;
        if (this.quality-multiplier > 0) {
            this.quality -= multiplier;
        } else {
            this.quality = 0;
        }
        return this.quality
    }
}

class Cheese extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    changeQuality() {
        this.sellIn --;
        if (this.quality < 50) {
            this.quality ++;
        }
        return this.quality
    }
}

class Concert extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    changeQuality() {
        this.sellIn --;
        if (this.sellIn <= 0) {
            this.quality = 0;
        } else if (this.sellIn <= 5) {
            this.quality += 3;
        } else if (this.sellIn <= 10) {
            this.quality += 2;
        } else this.quality += 1;
        return this.quality
    }
}

class Legendary extends Item {
    constructor(name, quality) {
        super(name, 0, quality)
    }
    changeQuality() {
        return this.quality = 80;
    }
}

class Conjured extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    changeQuality(){
        this.sellIn --;
        let multiplier = this.sellIn < 0 ? 4 : 2;
        if (this.quality-multiplier >= 0) {
            this.quality -= multiplier;
        } else {
            this.quality = 0;
        }
        return this.quality;
    }
}

module.exports = {
    Standard,
    Cheese,
    Concert,
    Legendary,
    Conjured
}
