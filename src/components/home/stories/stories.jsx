import React from 'react';

const Stories = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Top Stories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Stories : Brand Directory</h2>
          
          {/* Most Searched Products */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">MOST SEARCHED FOR ON FLIPKART:</h3>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-2">
                <span className="font-medium">Mobile Phones:</span> SAMSUNG Galaxy S25 Edge | MOTOROLA Razr 60 | CMF Phone 2 Pro | Google Pixel 9A | SAMSUNG F16 | iPhone 16a | SAMSUNG Galaxy S25 Ultra | SAMSUNG Galaxy S25 Plus | iPhone 16 | iPhone 16 Plus | iPhone 16 Pro | iPhone 16 Pro Max | vivo V50 | OPPO Reno13 Pro | POCO X7 | realme 14 Pro Plus | REDMI Note 14 Pro+ 5G | OPPO Find X8 | ShopVerse Exchange
              </p>
              <p className="mb-2">
                <span className="font-medium">Electronics:</span> Samsung Galaxy Tab S10 | iPad Air | MacBook Pro M4 | Lenovo ThinkPad | HP Pavilion | Dell Inspiron | ASUS ROG | Gaming Laptops | Wireless Headphones | Sony WH-1000XM5 | AirPods Pro | JBL Speakers | Canon EOS | Nikon DSLR
              </p>
            </div>
          </div>

          {/* Category Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">MOBILES</h4>
              <div className="text-gray-600 space-y-1">
                <p>Motorola g84 5G | OPPO Reno 12 | Motorola Edge 50 Fusion | REDMI 12 5G | REDMI Note 13 5G | Realme 12+ 5G | POCO C65 | Motorola G84 | Realme C53 | Infinix Smart 8</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">CAMERA</h4>
              <div className="text-gray-600 space-y-1">
                <p>GoPro Action Camera | Nikon Camera | Canon Camera | Sony Camera | Canon DSLR | Nikon DSLR</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">LAPTOPS</h4>
              <div className="text-gray-600 space-y-1">
                <p>Asus ROG Ally | MacBook Pro M2 | Premium Laptop | ASUS ROG Strix SCAR 16 | ASUS ROG Zephyrus M16 | ASUS Zenbook 14 OLED | Realme Book Prime</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">TVS</h4>
              <div className="text-gray-600 space-y-1">
                <p>LG TV | Sony TV | Samsung TV | TCL TV | Mi TV | Panasonic TV | OnePlus TVs | Iffalcon Tv | 32 Inch TV | 43 Inch TV | 50 Inch TV | 55 Inch TV | 65 Inch TV</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="space-y-12">
          {/* ShopVerse Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ShopVerse: The One-stop Shopping Destination</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles, ShopVerse houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories; to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, ShopVerse is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.
              </p>
              <p>
                What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from ShopVerse when there are multiple options available to you, well, the below will answer your question.
              </p>
            </div>
          </section>

          {/* ShopVerse Plus */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">ShopVerse Plus</h3>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                A world of limitless possibilities awaits you - ShopVerse Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on ShopVerse order, Plus members earn 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a ShopVerse Plus member.
              </p>
              <p className="font-medium">What's more, you can even use the ShopVerse supercoins for a number of exciting services, like:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>An annual Zomato Gold membership</li>
                <li>An annual Hotstar Premium membership</li>
                <li>6 months Gaana Plus subscription</li>
                <li>Rupay Insurance protection</li>
              </ul>
            </div>
          </section>

          {/* No Cost EMI */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">No Cost EMI</h3>
            <p className="text-gray-600 leading-relaxed">
              In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
            </p>
          </section>

          {/* EMI on Debit Cards */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">EMI on Debit Cards</h3>
            <p className="text-gray-600 leading-relaxed">
              Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, ShopVerse introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India, and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.
            </p>
          </section>

          {/* Mobile Exchange Offers */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mobile Exchange Offers</h3>
            <p className="text-gray-600 leading-relaxed">
              Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the ShopVerse experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.
            </p>
          </section>

          {/* What Can You Buy Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6">What Can You Buy From ShopVerse?</h3>
            
            <div className="space-y-8">
              {/* Mobile Phones */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Mobile Phones</h4>
                <p className="text-gray-600 leading-relaxed">
                  From budget-friendly smartphones to premium flagship devices, ShopVerse offers an extensive range of mobile phones from top brands like Samsung, Apple, OnePlus, Xiaomi, Realme, OPPO, Vivo, and many more. Whether you're looking for the latest iPhone, a powerful gaming phone, or an affordable daily driver, you'll find it here with the best deals and offers.
                </p>
              </div>

              {/* Large Appliances */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Large Appliances</h4>
                <p className="text-gray-600 leading-relaxed">
                  Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong; delivery and installation as per your convenience and a double warranty (Official Manufacturer Warranty along with an extended ShopVerse Warranty) - rest assured, value for money is what is promised and delivered.
                </p>
              </div>

              {/* Small Home Appliances */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Small Home Appliances</h4>
                <p className="text-gray-600 leading-relaxed">
                  Find handy and practical home appliances designed to make your life simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand blenders, coffee makers, and many more other time-saving appliances that are truly crafted for a quicker lifestyle. Live life king size with these appliances at home.
                </p>
              </div>

              {/* Lifestyle */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Lifestyle</h4>
                <p className="text-gray-600 leading-relaxed">
                  ShopVerse, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from hundreds of big brands such as Forever 21, Under Armour, Adidas, Fossil, Lavie, Nike, Puma, Revlon, Philips, and many more. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, for carefully curated designs that are the talk of the town.
                </p>
              </div>

              {/* Home and Furniture */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Home and Furniture</h4>
                <p className="text-gray-600 leading-relaxed">
                  Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be FurniSure, always.
                </p>
              </div>

              {/* Baby and Kids */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Baby and Kids</h4>
                <p className="text-gray-600 leading-relaxed">
                  Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can only rely on the most-trusted names in the business for your baby.
                </p>
              </div>

              {/* Books, Sports and Games */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Books, Sports and Games</h4>
                <p className="text-gray-600 leading-relaxed">
                  Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets with offers you cannot resist.
                </p>
              </div>
            </div>
          </section>

          {/* Best Selling Products */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">BEST SELLING ON FLIPKART</h3>
            <div className="text-gray-600 leading-relaxed">
              <p>
                <span className="font-medium">Electronics:</span> Headphones | Best Gas Geyser | Kitchen Geyser | Nutri Blenders | Portable Air Cooler | Best Air Cooler | Bags | Hitachi Refrigerator 3 Door | Books | Toys | Candles | Helmets | Wall Clocks | Baby Food | Chocolates | Cycles | Calculators | Lipsticks | Mask | Vertiv UPS | Fastrack Watches | Wallets | Earrings | Gold Coins | Realme Pad Mini | Handbags | conekt SW2 Smartwatch | Mivi DuoPods a350 | Speaker Cleaner
              </p>
            </div>
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p>Experience the best of online shopping with ShopVerse - Your trusted partner for all shopping needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;