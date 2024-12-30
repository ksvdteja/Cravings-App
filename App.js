import React from "react";
import ReactDOM from "react-dom/client";

/* 
  ->App
    ->Header
      ->Logo
      ->Nav Items
    ->Body
      ->Search Bar
      ->Restaurants Container
        ->Restaurant Cards
    ->Footer
      ->CopyRight
      ->Links
      ->Address
      ->Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={require("./logo.jpg")} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { 
    name, 
    cuisines, 
    avgRating, 
    costForTwo, 
    cloudinaryImageId, 
    sla 
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "32844",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/98dffb76-fddd-424c-9d6d-6befcdb9ff4a_32844.jpg",
      locality: "LB Nagar",
      areaName: "Dharmapuri",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "45K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 14.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "14.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-31 03:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/mcdonalds-lb-nagar-dharmapuri-rest32844",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "953388",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/c12aade3-9a3d-4b58-963c-8e8ba7d9fd8c_953388.jpg",
      locality: "SHANTI NAGAR",
      areaName: "Vanasthalipuram",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.1,
      parentId: "11633",
      avgRatingString: "4.1",
      totalRatingsString: "160",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-31 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/olio-the-wood-fired-pizzeria-shanti-nagar-vanasthalipuram-rest953388",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "414944",
      name: "Raju Gari Biryani",
      cloudinaryImageId: "u1i7krbx8zclwkd256y4",
      locality: "Vanasthalipuram",
      areaName: "Vanasthalipuram",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Snacks", "Chinese", "Mughlai"],
      avgRating: 3.6,
      parentId: "165947",
      avgRatingString: "3.6",
      totalRatingsString: "4.4K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 14.1,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "14.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-31 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹76",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/raju-gari-biryani-vanasthalipuram-rest414944",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "699077",
      name: "1989 Pizza & Thickshake's",
      cloudinaryImageId: "5cf8104c7bf9bc2b62088f7813f6732f",
      locality: "Mansoorabad, Hayat Nagar",
      areaName: "Mansoorabad, Hayat Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Beverages",
        "Desserts",
        "Burgers",
        "Ice Cream",
      ],
      avgRating: 4.1,
      parentId: "8353",
      avgRatingString: "4.1",
      totalRatingsString: "254",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 13.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "13.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-31 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/1989-pizza-and-thickshakes-mansoorabad-hayat-nagar-rest699077",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "706053",
      name: "Fruitoholic",
      cloudinaryImageId: "d252c43531e004ac70d26fdb218b905d",
      locality: "Mallikarjuna Nagar",
      areaName: "Vanasthalipuram",
      costForTwo: "₹400 for two",
      cuisines: ["Juices", "Healthy Food", "Desserts"],
      avgRating: 4.5,
      veg: true,
      parentId: "84795",
      avgRatingString: "4.5",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 14.1,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "14.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/fruitoholic-mallikarjuna-nagar-vanasthalipuram-rest706053",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "262564",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/9ce5a728-128f-4638-b82f-e420810da063_262564.JPG",
      locality: "Vanasthalipuram",
      areaName: "Shirdi Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "21809",
      avgRatingString: "4.0",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 12.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "12.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-31 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Rolls.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Rolls.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/faasos-wraps-rolls-and-shawarma-vanasthalipuram-shirdi-nagar-rest262564",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "953389",
      name: "Crusto's - Cheese Burst Pizza By Olio",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/43efa043-de7c-40d6-b31c-9fabc54bc34c_953389.jpg",
      locality: "SHANTI NAGAR",
      areaName: "Vanasthalipuram",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.5,
      parentId: "268955",
      avgRatingString: "4.5",
      totalRatingsString: "71",
      sla: {
        deliveryTime: 57,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-31 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/crustos-cheese-burst-pizza-by-olio-shanti-nagar-vanasthalipuram-rest953389",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "853083",
      name: "Bentoz Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/5675c12d-2a95-41e4-aea1-f56fc071e22f_853083.jpg",
      locality: "Hayat Nagar Circle No.3",
      areaName: "Vanasthalipuram",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas", "Desserts", "Italian"],
      avgRating: 3.5,
      parentId: "477046",
      avgRatingString: "3.5",
      totalRatingsString: "50",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-12-31 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹899",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0d69c9e4-0c9e-4bfe-a7e1-13131bb12b58",
    },
    cta: {
      link: "https://www.swiggy.com/city/hyderabad/bentoz-pizza-hayat-nagar-circle-no-3-vanasthalipuram-rest853083",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
            resList.map(restaurant => <RestaurantCard resData={restaurant} />)
        }
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
