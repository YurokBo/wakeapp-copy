<template>
  <section class="ContactsPage">
    <div class="ContactsPage-Container">
      <h2 class="Title Title--h2 ContactsPage-SlideTitle">Contacts</h2>
      <div class="ContactsPage-Content">
        <div class="ContactsPage-ContentContacts">
          <p class="ContactsPage-ContentText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes
          </p>
          <Contacts :contacts="contacts"/>
        </div>
        <form class="Form" @submit.prevent="onSubmit()" novalidate>
          <div class="Form-Top">
            <div class="Form-Field">
              <input type="text"
                     class="Input Form-Input"
                     name="name"
                     placeholder="Name"
                     v-model.trim="form.name"
                     :class="$v.form.name.$error ? 'is-invalid' : ''"
              >
              <span v-if="$v.form.name.$dirty && !$v.form.name.required"
                    class="invalid-feedback">Required field!</span>

            </div>
            <div class="Form-Field">
              <input type="email"
                     class="Input Form-Input"
                     name="email"
                     placeholder="Email"
                     v-model.trim="form.email"
                     :class="$v.form.email.$error ? 'is-invalid' : ''"
              >
              <span v-if="$v.form.email.$dirty && !$v.form.email.required"
                    class="invalid-feedback">Required field!</span>
              <span v-if="$v.form.email.$dirty && !$v.form.email.email"
                    class="invalid-feedback">Incorrect email</span>
            </div>
          </div>
          <div class="Form-Field">
              <textarea name="message"
                        class="Input Form-Textarea"
                        placeholder="Your Message"
                        v-model.trim="form.message"
                        :class="$v.form.message.$error ? 'is-invalid' : ''"
              ></textarea>

            <span v-if="$v.form.message.$dirty && !$v.form.message.required"
                  class="invalid-feedback">Required field!</span>

          </div>
          <button type="submit" class="Btn Form-Btn">Send message</button>
        </form>
      </div>
    </div>
    <div class="ContactsPage-Map google-map" id="map">
      <GmapMap
          :center="{lat:55.77628944632881, lng:37.673744626870686}"
          :zoom="16"
          map-type-id="terrain"
          style="width: 100%; height: 500px"
          :options="mapStyle"
      >
      </GmapMap>
    </div>
  </section>
</template>

<script>
import Contacts from "@/components/Contacts";
import {validationMixin} from 'vuelidate'
import {email, required} from "vuelidate/lib/validators";

import axios from 'axios';
//import Modal from "@/components/Modal";

export default {
  mixins: [validationMixin],
  name: "ContactsPage",
  components: {Contacts},
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      contacts: [
        {title: "On employment issues", href: "mailto:", contact: "contact@wakeapp.com"},
        {title: "Telephone", href: "tel:", contact: "+7 (499) 110-07-35"},
        {title: "For all questions", href: "mailto:", contact: "hr@wakeapp.com"},
      ],
      mapStyle: {
        styles: [
          {
            stylers: [
              {
                color: "#4813c3"
              }
            ]
          },
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#280969"
              }
            ]
          },
          {
            elementType: "geometry.fill",
            stylers: [
              {
                weight: 3.5
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                weight: 5
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#3c1b88"
              },
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#613795"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#cab8f5"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#3d2386"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#334e87"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4f3498"
              }
            ]
          },
          {
            "featureType": "landscape.natural.landcover",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6549ca"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#2a53ac"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#29025a"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#513c80"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#6434ad"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f4d0fb"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#aa8adb"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#59278b"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#743691"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8e6fc8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#a85bd2"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#e6c7ff"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#283d6a"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3a4762"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#65348d"
              },
              {
                visibility: "off"
              }
            ]
          }]
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email
      },
      message: {
        required,
      },
    }
  },
  methods: {
    /* showAuthDialog() {
       this.$modal.show(
           Modal,
           {},
           {
             width: 428,
             height: 'auto',
             adaptive: true,
             scrollable: true,
             style: "{ backgroundColor: 'rgba(1,7,11,.7)'}",
             clickToClose: false,
           },
           {},
       );
     },*/
    onSubmit() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        const params = new URLSearchParams();
        params.append('name', this.form.name);
        params.append('email', this.form.email);
        params.append('message', this.form.message);

        axios.post(
            "/mail.php",
            params,
            {
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              }
            }
        ).then(() => {

        })
        /*this.showAuthDialog()*/
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
        this.$nextTick(() => {
          this.$v.$reset()
        })
      }
    },
  },

}
</script>

<style lang="scss">
.ContactsPage {
  padding: 163px 0 0;
  color: var(--color-text-main2);

  &-Container {
    max-width: 1026px;
    width: 100%;
    margin: 0 auto 66px;
  }

  &-SlideTitle {
    margin-bottom: 31px;
  }

  &-Content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-ContentContacts {

  }

  &-ContentText {
    width: 341px;
    margin-bottom: 60px;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: 0.05em;
  }
}

.Form {
  max-width: 400px;
  width: 100%;
  //padding: 40px 23px;
  //background-color: var(--color-text-main2);

  @media (min-width: $screen-l) {
    //padding: 43px 69px 57px 65px;
  }

  &-Top {
    margin-bottom: 38px;
    @media (min-width: $screen-l) {
      display: flex;
      align-items: center;
    }

    .Form-Field {
      margin-right: 18px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &-Field {
    width: 100%;
    max-width: 100%;
    //margin-bottom: 24px;
    position: relative;

    @media (min-width: $screen-l) {

    }
  }

  .Input {
    max-width: 100%;
    width: 100%;
    border-top: 2px solid var(--color-text-main);
    border-left: 2px solid var(--color-text-main);
    border-bottom: 2px solid var(--color-border-gost);
    border-right: 2px solid var(--color-text-main);
    outline: none;
    resize: none;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: 0.05em;
    color: var(--color-text-main2);

    &::placeholder {
      font-weight: 400;
    }

    &:focus {
      border-top: 2px solid var(--color-border-gost);
      border-right: 2px solid var(--color-border-gost);
      border-left: 2px solid var(--color-border-gost);
    }
  }

  &-Input {
    padding: 6px;
  }

  &-Textarea {
    height: 126px;
    padding: 6px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.33;
    letter-spacing: 0.05em;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &-Btn {
    margin: 67px 0 0;
    padding: 22px 52px;
  }

  .invalid-feedback {
    position: absolute;
    top: -15px;
    right: 0;
    font-size: 12px;
    color: var(--color-text-error);
  }
}
</style>