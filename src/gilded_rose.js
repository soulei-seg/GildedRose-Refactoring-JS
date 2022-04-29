class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Standard extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  changeQuality() {
    this.sellIn --;
    if (this.quality > 0) {
      this.quality --;
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
    return this.quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].changeQuality();
          }
        }
      } else {
          this.items[i].quality = this.items[i].changeQuality();
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].changeQuality();
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}



module.exports = {
  Item,
  Shop,
  Standard,
  Cheese,
  Concert,
  Legendary
}
