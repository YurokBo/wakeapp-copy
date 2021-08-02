<template>
  <section class="AboutPage">
    <AboutSlider :options="options" :slider="slider"/>
  </section>
</template>

<script>
import AboutSlider from "@/components/AboutSlider";

export default {
  name: "AboutPage",
  components: {AboutSlider},
  data() {
    return {
      options: {
        slidesPerView: 1,
        spaceBetween: 100,
        /*pagination: {
          el: '.CommonSwiper-SlideProgressBar',
          type: 'progressbar',
          progressbarFillClass: "Progress--fill"
        },*/
        navigation: {
          nextEl: '.AboutSlider-ButtonNext',
          prevEl: '.AboutSlider-ButtonPrev',
          disabledClass: 'AboutSlider-Button--disabled'
        }
      },
      slider: {
        slide1: {
          title: "WakeApp in-app Network",
          items: {
            googleDisplayNetwork: {
              title: "Google Display Network",
              items: [
                {
                  title: "Google Display Network",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            googleUAC: {
              title: "Google UAC",
              items: [
                {
                  title: "Google UAC",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            baidu: {
              title: "Baidu",
              items: [
                {
                  title: "Baidu",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            facebook: {
              title: "Facebook",
              items: [
                {
                  title: "Facebook",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            wakeAppNetwork: {
              title: "WakeApp Network",
              items: [
                {
                  title: "WakeApp Network",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            snapchat: {
              title: "Snapchat",
              items: [
                {
                  title: "Snapchat",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            twitter: {
              title: "Twitter",
              items: [
                {
                  title: "Twitter",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            taboola: {
              title: "Taboola",
              items: [
                {
                  title: "Taboola",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            googleSearchNetwork: {
              title: "Google Search Network / PPC",
              items: [
                {
                  title: "Google Search Network / PPC",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            shareIt: {
              title: "ShareIt",
              items: [
                {
                  title: "ShareIt",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            mopub: {
              title: "Mopub",
              items: [
                {
                  title: "Mopub",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            appleSearchAds: {
              title: "Apple Search Ads",
              items: [
                {
                  title: "Apple Search Ads",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            unity: {
              title: "Unity",
              items: [
                {
                  title: "Unity",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            crossinstall: {
              title: "Сrossinstall",
              items: [
                {
                  title: "Сrossinstall",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            adColony: {
              title: "AdColony",
              items: [
                {
                  title: "AdColony",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
            digitalTurbine: {
              title: "Digital Turbine",
              items: [
                {
                  title: "Digital Turbine",
                  text: "The Wake app network works with the largest mobile advertising platforms. Over 1 billion impressions monthly and over 1 million attracted users.",
                  icons: [
                    "apple.svg",
                    "russia.svg"
                  ],
                  items: [
                    {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
                    {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
                    {title: "Installs", icon: "arrow-up.svg", text: "80M"},
                  ]
                },
              ]
            },
          },
        },
        slide2: {
          title: "Network formats",
          items: {
            text: [
              "Our special traffic distribution algorithm",
              "We work with any KPI and check traffic for fraud: Protect 360, indicators: CTIT, CR, any caps, uninstal rates, etc.",
              "Only high-quality traffic is present in our network",
            ],
            items: [
              {title: "Clicks", icon: "arrow-up.svg", text: "150M"},
              {title: "Impressions", icon: "arrow-up.svg", text: "1B"},
              {title: "Installs", icon: "arrow-up.svg", text: "80M"},
            ],
          },
          img: [
            "phone-1.png",
            "phone-2.png",
            "phone-3.png",
          ],
        }
      }
    }
  }
}
</script>

<style lang="scss">
.AboutPage {
  //height: 100vh;
  padding: 148px 0 148px;
  background-color: var(--color-body1);
  background-image: url(~@/assets/images/about-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
}
</style>