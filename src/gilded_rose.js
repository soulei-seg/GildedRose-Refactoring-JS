class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].quality = this.items[i].changeQuality();
    }
    return this.items;
  }
}



module.exports = {
  Item,
  Shop
}
