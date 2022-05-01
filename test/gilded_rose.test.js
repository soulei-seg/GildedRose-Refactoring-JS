const {Shop} = require("../src/gilded_rose");
const { Standard, Cheese, Concert, Legendary, Conjured }= require("../src/item_types");

describe("Standard items", function() {
  it("Should create shop", function() {
    const gildedRose = new Shop([new Standard("itemName", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("itemName");
  });

  it("Should decrease quality", function() {
    const gildedRose = new Shop([new Standard("itemName", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it("Should decrease sellIn", function() {
    const gildedRose = new Shop([new Standard("itemName", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    const gildedRose = new Shop([new Standard("itemName", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("quality is never less than 0", function() {
    const gildedRose = new Shop([new Standard("itemName", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Aged Brie", () => {
  it("should increase quality", function() {
    const gildedRose = new Shop([new Cheese("Aged Brie", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });
  it("quality is never more than 50", function() {
    const gildedRose = new Shop([new Cheese("Aged Brie", 4, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Backstage passes to a TAFKAL80ETC", () => {
  it("concert more than 10 days - should increase quality by 1", function() {
    const gildedRose = new Shop([new Concert("Backstage passes to a TAFKAL80ETC concert", 12, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });
  it("concert less than 10 days - should increase quality by 2", function() {
    const gildedRose = new Shop([new Concert("Backstage passes to a TAFKAL80ETC concert", 9, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });
  it("concert less than 5 days - should increase quality by 3", function() {
    const gildedRose = new Shop([new Concert("Backstage passes to a TAFKAL80ETC concert", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });
  it("after concert - quality drops to 0", function() {
    const gildedRose = new Shop([new Concert("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Sulfuras, Hand of Ragnaros", () => {
  it("should always have a quality equal to 80, no matter what", function() {
    const gildedRose = new Shop([new Legendary("Sulfuras, Hand of Ragnaros", 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});

describe("Cursed Dark Wizard's Hand", () => {
  it("should decrease in quality twice faster than standard items", function () {
    const gildedRose = new Shop([new Conjured("Cursed Dark Wizard's Hand", 13, 10)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
  it("should decrease in quality two times faster if sellIn drops below 0", function () {
    const gildedRose = new Shop([new Conjured("Cursed Dark Wizard's Hand", 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  })
  it("should never have a quality below 0", function () {
    const gildedRose = new Shop([new Conjured("Cursed Dark Wizard's Hand", -1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  })
});
