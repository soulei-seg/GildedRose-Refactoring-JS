const {Shop, Item} = require("../src/gilded_rose");

describe("Standard items", function() {
  it("Should create shop", function() {
    const gildedRose = new Shop([new Item("itemName", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("itemName");
  });

  it("Should decrease quality", function() {
    const gildedRose = new Shop([new Item("itemName", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it("Should decrease sellIn", function() {
    const gildedRose = new Shop([new Item("itemName", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    const gildedRose = new Shop([new Item("itemName", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
});

describe("Aged Brie", () => {
  it("should increase quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });
  it("quality is never more than 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 4, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Backstage passes to a TAFKAL80ETC", () => {
  it("concert more than 10 days - should increase quality by 1", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });
  it("concert less than 10 days - should increase quality by 2", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });
  it("concert less than 5 days - should increase quality by 3", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });
  it("after concert - quality drops to 0", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Sulfuras, Hand of Ragnaros", () => {
  it("should never change quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  });
  it("quality is never less than 0", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
