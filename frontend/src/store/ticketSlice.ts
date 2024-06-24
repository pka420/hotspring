import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axios";
import { AxiosResponse } from "axios";

export interface ticketState {
    suggestions: string[];
    results?: any;
}

const initialState: ticketState = {
    suggestions: [],
    results: {
    "_embedded": {
        "events": [
            {
                "name": "2024 IU HEREH WORLD TOUR CONCERT",
                "type": "event",
                "id": "vv170ZbAGkI_-Pjv",
                "test": false,
                "url": "https://www.ticketmaster.com/2024-iu-hereh-world-tour-concert-inglewood-california-08-02-2024/event/0900605A19865701",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    }
                ],
                "distance": 8.77,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-03-07T20:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-08-03T03:30:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-03-07T20:00:00Z",
                            "endDateTime": "2024-08-03T03:30:00Z",
                            "name": "Official Platinum"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-08-02",
                        "localTime": "19:30:00",
                        "dateTime": "2024-08-03T02:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAev",
                            "name": "Pop"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vkE1",
                            "name": "K-Pop"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "653",
                    "name": "LIVE NATION MUSIC",
                    "description": "LIVE NATION MUSIC / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "653",
                        "name": "LIVE NATION MUSIC",
                        "description": "LIVE NATION MUSIC / NTL / USA"
                    }
                ],
                "info": "- DELIVERY DELAY 72 HRS PRIOR TO SHOWDATE *",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 59.5,
                        "max": 199.5
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ KIA FORUM",
                        "id": "vv170ZbAGkccwYz2",
                        "url": "https://www.ticketmaster.com/parkwhiz-kia-forum-inglewood-california-08-02-2024/event/0900605B6DCB0E0F",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    },
                    {
                        "name": "Parking | IU",
                        "id": "vv1AaZkv-Gkdy-pV0",
                        "url": "https://www.ticketmaster.com/parking-iu-inglewood-california-08-02-2024/event/09006061F9856D24",
                        "type": "Parking",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0900605A19865701/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 3,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 6 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vv170ZbAGkI_-Pjv?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917j460?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAEkn6A?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Kia Forum",
                            "type": "venue",
                            "id": "KovZpZAEkn6A",
                            "test": false,
                            "url": "https://www.ticketmaster.com/kia-forum-tickets-inglewood/venue/73750",
                            "locale": "en-us",
                            "aliases": [
                                "the forum",
                                "forum"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22354v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 8.77,
                            "units": "MILES",
                            "postalCode": "90305",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Inglewood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "3900 W Manchester Blvd."
                            },
                            "location": {
                                "longitude": "-118.341868",
                                "latitude": "33.9583"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "openHoursDetail": "Box office Hours: The Kia Forum Box Office is located on the West side (Prairie Avenue side) of the venue. Box Office hours: Open Friday, noon to 6pm and all event days at noon.",
                                "acceptedPaymentDetail": "Kia Forum is a cashless venue. ONLY credit & debit cards are accepted for payment",
                                "willCallDetail": "Location: Box Office Will Call is only open on days of events. Will Call opens two (2) hours prior to the start of the show and closes (1) hour after the start of the show. Will Call tickets can be picked up on the night of the event only. Customers must have the actual credit card used to place the order, photo ID and their confirmation number. Tickets may not be dropped off or left for other guests."
                            },
                            "parkingDetail": "Parking fees vary per event. Disabled parking is located on all sides of the main Kia Forum lot. Please have your CA State placard available for the attendants.",
                            "accessibleSeatingDetail": "Wheelchair and Disabled Seating Policy: Wheelchair and Transfer seating is reserved exclusively for patrons with accessible needs and their companions. Accessible seating is intended for use by an individual with a mobility disability or other disability who requires the accessible features of accessible seating due to a disability, and that individual's companions. Kia Forum reserves the right to investigate potential misuse of accessible seating and to take all appropriate action against individuals who fraudulently obtain tickets for accessible seating. In the event such ticket is transferred to a non-disabled individual, Kia Forum reserves the right to deny entry to the wheelchair seating area or transfer that individual to other available seating. Wheelchair and Disabled Seating Tickets for people with accessible needs, subject to availability, may be purchased in several ways: 1) Order Online with Ticketmaster 2) Visit Kia Forum Box Office (Box Office hours: Tuesday, Wednesday, Thursday 11am to 7pm + Open @ Noon on all event days) 3) Call Kia Forum Guest Relations at 310-862-6200. For additional information regarding accessibility at Kia Forum or to request an interpreted performance or any other accommodations, please call Kia Forum Guest Relations Department Monday to Friday, 11am to 7pm. Accessible Restrooms, Disabled and family restrooms are located on the concourse across from sections 209-210 and 227-228. On the floor, disabled restrooms are located in the hallways adjacent to the North Hospitality. While disabled guests are provided preference at disabled restrooms, any guest may use these restrooms if they require that type of accommodation. Kia Forum can provide wheelchair escorts for individuals who have limited mobility to transport from a guest services location to their seating areas. Upon arrival at Kia Forum, please ask Guest Services for assistance. Please be aware Kia Forum escort staff are unable to remain with guests for the performance, provide restroom or concessions assistance, nor are they permitted to escort guests into the parking lots, city streets, or surrounding area. If you require a wheelchair for the duration of the show, you must bring your own wheelchair to the venue. Wheelchair Storage Guests who wish to transfer to a fixed seat from their wheelchair or mobility device, can check their device at any Guest Services location. Claim checks will be issued and guests may pick up their wheelchair until 30 minutes after conclusion of the show.",
                            "generalInfo": {
                                "generalRule": "ARRIVE EARLY: Please arrive at least one-hour prior to show time. Kia Forum has a clear bag policy. All bags, including purses, will be inspected prior to entry while all patrons will go through a screening process including the use of metal detectors and pat downs as needed. Please be mindful of traffic conditions and local street closures/construction. For a list of prohibited items, please visit www.thekiaforum.com. No smoking of any substance and no electronic cigarettes are permitted in Kia Forum. No recording devices are permitted. No reentry. No outside food or beverage is permitted. There are no bag or coat check facilities. Staff is trained in the National Restaurant Association Training program. Alcohol sales will be limited to two alcoholic drinks per customer per transaction. Guests are not permitted to bring alcoholic beverages from outside Kia Forum and may not leave with alcohol purchased at Kia Forum. Management reserves the right to refuse the sale of alcohol to any guest. All guests may be required to show ID to purchase alcohol. Please be aware it is the policy of Kia Forum to require all guests who appear to be under forty (40) years of age or younger to present a valid form of ID with proof of age in order to purchase alcoholic beverages at Kia Forum. Pursuant to applicable state law, Kia Forum accepts only ID cards issued by a governmental agency that include a current description and picture of the person presenting it, which reasonably describes the person as to date of birth, weight, height, sex, and colors of eyes/hair. Kia Forum will not accept an ID that has been altered or is expired. We will also not accept a registration certificate issued under the Federal Selective Service Act.",
                                "childRule": "Events are all ages (unless noted). Everyone must have a ticket to enter the venue, regardless of age. For age restricted events a valid government issues ID will be required for entry."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 66,
                                "_total": 66,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAEkn6A?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "IU",
                            "type": "attraction",
                            "id": "K8vZ917j460",
                            "test": false,
                            "url": "https://www.ticketmaster.com/iu-tickets/artist/3104589",
                            "locale": "en-us",
                            "externalLinks": {
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/iu.loen"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c5d/68ac95da-2f00-4c5c-9001-8651e7f22c5d_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAev",
                                        "name": "Pop"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vkE1",
                                        "name": "K-Pop"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAd7",
                                        "name": "Musician"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "ticketmaster": 6,
                                "_total": 6,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917j460?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Andrea Bocelli In Concert",
                "type": "event",
                "id": "vv170Zb6GkiBOJYN",
                "test": false,
                "url": "https://www.ticketmaster.com/andrea-bocelli-in-concert-inglewood-california-12-08-2024/event/0900607B3A826C23",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    }
                ],
                "distance": 8.77,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-04-16T17:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-12-09T05:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-04-09T17:00:00Z",
                            "endDateTime": "2024-04-16T06:00:00Z",
                            "name": "Citi® Cardmember Presale"
                        },
                        {
                            "startDateTime": "2024-04-09T17:00:00Z",
                            "endDateTime": "2024-04-16T06:00:00Z",
                            "name": "Stifel PreSale"
                        },
                        {
                            "startDateTime": "2024-04-10T17:00:00Z",
                            "endDateTime": "2024-04-16T06:00:00Z",
                            "name": "Spotify Presale"
                        },
                        {
                            "startDateTime": "2024-04-10T17:00:00Z",
                            "endDateTime": "2024-04-16T06:00:00Z",
                            "name": "Fan Club Presale"
                        },
                        {
                            "startDateTime": "2024-04-10T17:00:00Z",
                            "endDateTime": "2024-04-16T06:00:00Z",
                            "name": "Venue Presale"
                        },
                        {
                            "startDateTime": "2024-04-10T17:00:00Z",
                            "endDateTime": "2024-04-16T06:00:00Z",
                            "name": "Ticketmaster Presale"
                        },
                        {
                            "startDateTime": "2024-04-09T17:00:00Z",
                            "endDateTime": "2024-04-16T06:00:00Z",
                            "name": "Official Platinum Presale"
                        },
                        {
                            "startDateTime": "2024-04-16T17:00:00Z",
                            "endDateTime": "2024-12-09T05:00:00Z",
                            "name": "Official Platinum Onsale"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-12-08",
                        "localTime": "20:00:00",
                        "dateTime": "2024-12-09T04:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeJ",
                            "name": "Classical"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vF1A",
                            "name": "Classical/Vocal"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "494",
                    "name": "PROMOTED BY VENUE",
                    "description": "PROMOTED BY VENUE / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "494",
                        "name": "PROMOTED BY VENUE",
                        "description": "PROMOTED BY VENUE / NTL / USA"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 88.0,
                        "max": 398.0
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ KIA FORUM",
                        "id": "vv170Zb6GkswDs7k",
                        "url": "https://www.ticketmaster.com/parkwhiz-kia-forum-inglewood-california-12-08-2024/event/0900607C72EF1106",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0900607B3A826C23/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 3,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an 8 ticket limit per household.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vv170Zb6GkiBOJYN?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171bQ0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAEkn6A?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Kia Forum",
                            "type": "venue",
                            "id": "KovZpZAEkn6A",
                            "test": false,
                            "url": "https://www.ticketmaster.com/kia-forum-tickets-inglewood/venue/73750",
                            "locale": "en-us",
                            "aliases": [
                                "the forum",
                                "forum"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22354v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 8.77,
                            "units": "MILES",
                            "postalCode": "90305",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Inglewood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "3900 W Manchester Blvd."
                            },
                            "location": {
                                "longitude": "-118.341868",
                                "latitude": "33.9583"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "openHoursDetail": "Box office Hours: The Kia Forum Box Office is located on the West side (Prairie Avenue side) of the venue. Box Office hours: Open Friday, noon to 6pm and all event days at noon.",
                                "acceptedPaymentDetail": "Kia Forum is a cashless venue. ONLY credit & debit cards are accepted for payment",
                                "willCallDetail": "Location: Box Office Will Call is only open on days of events. Will Call opens two (2) hours prior to the start of the show and closes (1) hour after the start of the show. Will Call tickets can be picked up on the night of the event only. Customers must have the actual credit card used to place the order, photo ID and their confirmation number. Tickets may not be dropped off or left for other guests."
                            },
                            "parkingDetail": "Parking fees vary per event. Disabled parking is located on all sides of the main Kia Forum lot. Please have your CA State placard available for the attendants.",
                            "accessibleSeatingDetail": "Wheelchair and Disabled Seating Policy: Wheelchair and Transfer seating is reserved exclusively for patrons with accessible needs and their companions. Accessible seating is intended for use by an individual with a mobility disability or other disability who requires the accessible features of accessible seating due to a disability, and that individual's companions. Kia Forum reserves the right to investigate potential misuse of accessible seating and to take all appropriate action against individuals who fraudulently obtain tickets for accessible seating. In the event such ticket is transferred to a non-disabled individual, Kia Forum reserves the right to deny entry to the wheelchair seating area or transfer that individual to other available seating. Wheelchair and Disabled Seating Tickets for people with accessible needs, subject to availability, may be purchased in several ways: 1) Order Online with Ticketmaster 2) Visit Kia Forum Box Office (Box Office hours: Tuesday, Wednesday, Thursday 11am to 7pm + Open @ Noon on all event days) 3) Call Kia Forum Guest Relations at 310-862-6200. For additional information regarding accessibility at Kia Forum or to request an interpreted performance or any other accommodations, please call Kia Forum Guest Relations Department Monday to Friday, 11am to 7pm. Accessible Restrooms, Disabled and family restrooms are located on the concourse across from sections 209-210 and 227-228. On the floor, disabled restrooms are located in the hallways adjacent to the North Hospitality. While disabled guests are provided preference at disabled restrooms, any guest may use these restrooms if they require that type of accommodation. Kia Forum can provide wheelchair escorts for individuals who have limited mobility to transport from a guest services location to their seating areas. Upon arrival at Kia Forum, please ask Guest Services for assistance. Please be aware Kia Forum escort staff are unable to remain with guests for the performance, provide restroom or concessions assistance, nor are they permitted to escort guests into the parking lots, city streets, or surrounding area. If you require a wheelchair for the duration of the show, you must bring your own wheelchair to the venue. Wheelchair Storage Guests who wish to transfer to a fixed seat from their wheelchair or mobility device, can check their device at any Guest Services location. Claim checks will be issued and guests may pick up their wheelchair until 30 minutes after conclusion of the show.",
                            "generalInfo": {
                                "generalRule": "ARRIVE EARLY: Please arrive at least one-hour prior to show time. Kia Forum has a clear bag policy. All bags, including purses, will be inspected prior to entry while all patrons will go through a screening process including the use of metal detectors and pat downs as needed. Please be mindful of traffic conditions and local street closures/construction. For a list of prohibited items, please visit www.thekiaforum.com. No smoking of any substance and no electronic cigarettes are permitted in Kia Forum. No recording devices are permitted. No reentry. No outside food or beverage is permitted. There are no bag or coat check facilities. Staff is trained in the National Restaurant Association Training program. Alcohol sales will be limited to two alcoholic drinks per customer per transaction. Guests are not permitted to bring alcoholic beverages from outside Kia Forum and may not leave with alcohol purchased at Kia Forum. Management reserves the right to refuse the sale of alcohol to any guest. All guests may be required to show ID to purchase alcohol. Please be aware it is the policy of Kia Forum to require all guests who appear to be under forty (40) years of age or younger to present a valid form of ID with proof of age in order to purchase alcoholic beverages at Kia Forum. Pursuant to applicable state law, Kia Forum accepts only ID cards issued by a governmental agency that include a current description and picture of the person presenting it, which reasonably describes the person as to date of birth, weight, height, sex, and colors of eyes/hair. Kia Forum will not accept an ID that has been altered or is expired. We will also not accept a registration certificate issued under the Federal Selective Service Act.",
                                "childRule": "Events are all ages (unless noted). Everyone must have a ticket to enter the venue, regardless of age. For age restricted events a valid government issues ID will be required for entry."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 66,
                                "_total": 66,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAEkn6A?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Andrea Bocelli",
                            "type": "attraction",
                            "id": "K8vZ9171bQ0",
                            "test": false,
                            "url": "https://www.ticketmaster.com/andrea-bocelli-tickets/artist/773296",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/user/andreabocelli"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/bocelliandrea"
                                    }
                                ],
                                "lastfm": [
                                    {
                                        "url": "http://www.last.fm/music/Andrea+Bocelli"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/AndreaBocelliOfficial"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Andrea_Bocelli"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "c5a0a216-c33c-42dc-92b8-4b60236f8dad"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.andreabocelli.com/"
                                    },
                                    {
                                        "url": "http://deccarecords-us.com/artist/releases/default.aspx?aid=108"
                                    }
                                ]
                            },
                            "aliases": [
                                "andre boccelli",
                                "andrea bocelli",
                                "andre bocelli",
                                "andre bochelli",
                                "andrea bocceli",
                                "andrea boccelli",
                                "andrea boceli",
                                "andrea bochelli",
                                "bocceli",
                                "boccelli",
                                "bochelli"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c8a/45ed870b-c8a7-46db-823e-44f5929bac8a_1839671_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1A",
                                        "name": "Classical/Vocal"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-za": 3,
                                "tmr": 2,
                                "ticketmaster": 12,
                                "_total": 17,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171bQ0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "The Concert: A Tribute To ABBA",
                "type": "event",
                "id": "Z7r9jZ1A7AVAN",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1A7AVAN",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    }
                ],
                "distance": 5.77,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-09-21T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2024-09-20",
                        "localTime": "20:00:00",
                        "dateTime": "2024-09-21T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvl",
                            "name": "Other"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk1I",
                            "name": "Other"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.hollywoodbowl.com/events/performances/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/the-concert-a-tribute-to-abba-los-angeles-california-09-20-2024/event/Z7r9jZ1A7AVAN",
                        "type": "tmMarketPlace"
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/737-0-0-1-HollywoodBowl79262.png",
                    "id": "seatmap"
                },
                "ticketing": {
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1A7AVAN?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uQif?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/Z6r9jZF7Fe?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Hollywood Bowl",
                            "type": "venue",
                            "id": "Z6r9jZF7Fe",
                            "test": false,
                            "locale": "en-us",
                            "distance": 5.77,
                            "units": "MILES",
                            "postalCode": "90078",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "2301 N. Highland Ave."
                            },
                            "location": {
                                "longitude": "-118.327301",
                                "latitude": "34.100201"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 37,
                                "ticketmaster": 19,
                                "_total": 56,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/Z6r9jZF7Fe?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "The Concert: A Tribute To ABBA",
                            "type": "attraction",
                            "id": "K8vZ917uQif",
                            "test": false,
                            "url": "https://www.ticketmaster.com/the-concert-a-tribute-to-abba-tickets/artist/1469412",
                            "locale": "en-us",
                            "externalLinks": {
                                "musicbrainz": [
                                    {
                                        "id": "5b6b6df6-4ef3-4c2a-84e2-96f8b358d076"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://theconcert.se/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/730/e8eebe69-f2bf-4ed9-800f-ccd37ad52730_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeA",
                                        "name": "Rock"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v6F1",
                                        "name": "Pop"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 13,
                                "ticketmaster": 18,
                                "_total": 31,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uQif?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "NB RIDAZ LIVE IN CONCERT AR DON QUIXOTE IN LOS ANGELES",
                "type": "event",
                "id": "rZ7HnEZ1AKuy40",
                "test": false,
                "url": "https://www.ticketweb.com/event/nb-ridaz-live-in-concert-don-quixote-tickets/13379564",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "url": "https://i.ticketweb.com/i/00/12/17/50/54_Edp.jpg",
                        "width": 462,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    }
                ],
                "distance": 2.55,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-03-29T04:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-07-28T05:00:00Z"
                    }
                },
                "dates": {
                    "access": {
                        "startDateTime": "2024-07-28T02:00:00Z",
                        "startApproximate": false,
                        "endApproximate": false
                    },
                    "start": {
                        "localDate": "2024-07-27",
                        "localTime": "19:00:00",
                        "dateTime": "2024-07-28T02:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "end": {
                        "approximate": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "cancelled"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAv1",
                            "name": "Hip-Hop/Rap"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vke1",
                            "name": "Latin Hip-Hop"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 15.0,
                        "max": 100.0
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/rZ7HnEZ1AKuy40?locale=en-us"
                    },
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/rZ7HnEZ17fZ44?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Don Quixote",
                            "type": "venue",
                            "id": "rZ7HnEZ17fZ44",
                            "test": false,
                            "url": "https://www.ticketweb.com/venue/don-quixote-los-angeles-ca/500555",
                            "locale": "en-us",
                            "distance": 2.55,
                            "units": "MILES",
                            "postalCode": "90023",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "2811 E Olympic Blvd"
                            },
                            "location": {
                                "longitude": "-118.2193519",
                                "latitude": "34.0235111"
                            },
                            "upcomingEvents": {
                                "ticketweb": 1,
                                "_total": 1,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/rZ7HnEZ17fZ44?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Spider-Man: Across The Spider-Verse - Live In Concert",
                "type": "event",
                "id": "vvG10ZbGUNgxre",
                "test": false,
                "url": "https://www.ticketmaster.com/spiderman-across-the-spiderverse-live-in-hollywood-california-10-25-2024/event/090060CDA3D62782",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    }
                ],
                "distance": 6.45,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-06-26T17:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-10-26T03:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-06-24T17:00:00Z",
                            "endDateTime": "2024-06-26T06:59:00Z",
                            "name": "Presale Offers"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-10-25",
                        "localTime": "20:00:00",
                        "dateTime": "2024-10-26T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7ld",
                            "name": "Miscellaneous Theatre"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7lk",
                            "name": "Miscellaneous Theatre"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "5431",
                    "name": "BROADWAY IN HOLLYWOOD",
                    "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                },
                "promoters": [
                    {
                        "id": "5431",
                        "name": "BROADWAY IN HOLLYWOOD",
                        "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                    }
                ],
                "info": "Building on the success of the sold out global shows of the first Oscar-winning Spider-Man animated Spider-Verse film, comes the highly anticipated sequel: SPIDER-MAN ACROSS THE SPIDER-VERSE, set to captivate audiences in concert venues worldwide. These films have garnered immense popularity, largely due to their groundbreaking soundtracks praised for their innovative fusion of orchestral and electronic elements alongside scratch DJ techniques. The upcoming spectacle will feature the movie showcased on a colossal HD screen, complemented by a diverse ensemble of musicians and instrumentalists performing the iconic score and soundtrack live. This extraordinary lineup includes a full orchestra, a skilled scratch DJ on turntables, as well as percussion and electronic instrumentalists.",
                "pleaseNote": "Building on the success of the sold out global shows of the first Oscar-winning Spider-Man animated Spider-Verse film, comes the highly anticipated sequel: SPIDER-MAN ACROSS THE SPIDER-VERSE, set to captivate audiences in concert venues worldwide. These films have garnered immense popularity, largely due to their groundbreaking soundtracks praised for their innovative fusion of orchestral and electronic elements alongside scratch DJ techniques. The upcoming spectacle will feature the movie showcased on a colossal HD screen, complemented by a diverse ensemble of musicians and instrumentalists performing the iconic score and soundtrack live. This extraordinary lineup includes a full orchestra, a skilled scratch DJ on turntables, as well as percussion and electronic instrumentalists.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 46.25,
                        "max": 139.0
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ DOLBY THEATRE",
                        "id": "vvG10ZbGymL8UB",
                        "url": "https://www.ticketmaster.com/parkwhiz-dolby-theatre-hollywood-california-10-25-2024/event/090060CE6E7D0DBA",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/090060CDA3D62782/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 2,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 8 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": true
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10ZbGUNgxre?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917jlLV?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Dolby Theatre",
                            "type": "venue",
                            "id": "KovZpZAdtaEA",
                            "test": false,
                            "url": "https://www.ticketmaster.com/dolby-theatre-tickets-hollywood/venue/74167",
                            "locale": "en-us",
                            "aliases": [
                                "kodac theater",
                                "kodak theatre",
                                "kodac theatre",
                                "kodak theater"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22912v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 6.45,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6801 Hollywood Blvd."
                            },
                            "location": {
                                "longitude": "-118.34020235",
                                "latitude": "34.10177237"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "Dolby Theatre Administration: 323-308-6300",
                                "openHoursDetail": "NON-EVENT DAYS: Monday-Saturday 10am-5pm, Sunday 10am-4pm EVENT DAYS: Monday-Sunday 10am- 1/2 hour after scheduled start time of event.",
                                "acceptedPaymentDetail": "Cash, Visa, MasterCard, American Express and Discover. No checks are accepted.",
                                "willCallDetail": "Will Call is available for pickup during regular box office hours. Photo ID and credit card used for the purchase are required."
                            },
                            "parkingDetail": "2,000 parking spaces within a 10 minute walk, plus 3,000 parking spaces at Ovation Hollywood Center. For parking information visit: http://maps.google.com/maps?hl=en&gl=us&daddr=6801+Hollywood+Blvd,+Hollywood,+CA+90028",
                            "accessibleSeatingDetail": "Accessible seating is available by phone through Ticketmaster or Dolby Theatre. There are elevators to each level, however only the seats indicated on the seating chart are without stairs and have space to accommodate wheelchairs and motorized carts.",
                            "generalInfo": {
                                "generalRule": "The Dolby Theatre is a non-smoking facility. No outside foods or beverages. No cameras or recording devices are allowed. Rules are subject to change for some events.",
                                "childRule": "All guests require a ticket, regardless of age. Some events, rules subject to change and may not be suitable for children. Also disruptions to other guests experience may be cause to be asked to step out with no refunds or exchanges."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 20,
                                "_total": 20,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Spider-Man: Across The Spider-Verse - Live In Concert",
                            "type": "attraction",
                            "id": "K8vZ917jlLV",
                            "test": false,
                            "url": "https://www.ticketmaster.com/spiderman-across-the-spiderverse-live-in-tickets/artist/3142420",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7le",
                                        "name": "Miscellaneous"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1k",
                                        "name": "Miscellaneous"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA6J",
                                        "name": "Concert"
                                    },
                                    "family": true
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-se": 1,
                                "tmr": 11,
                                "mfx-nl": 2,
                                "ticketmaster": 28,
                                "_total": 42,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917jlLV?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Spider-Man: Across The Spider-Verse - Live In Concert",
                "type": "event",
                "id": "vvG10ZbGUNMwr2",
                "test": false,
                "url": "https://www.ticketmaster.com/spiderman-across-the-spiderverse-live-in-hollywood-california-10-26-2024/event/090060CDA3DF278F",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    }
                ],
                "distance": 6.45,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-06-26T17:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-10-26T21:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-06-24T17:00:00Z",
                            "endDateTime": "2024-06-26T06:59:00Z",
                            "name": "Presale Offers"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-10-26",
                        "localTime": "14:00:00",
                        "dateTime": "2024-10-26T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7ld",
                            "name": "Miscellaneous Theatre"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7lk",
                            "name": "Miscellaneous Theatre"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "5431",
                    "name": "BROADWAY IN HOLLYWOOD",
                    "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                },
                "promoters": [
                    {
                        "id": "5431",
                        "name": "BROADWAY IN HOLLYWOOD",
                        "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                    }
                ],
                "info": "Building on the success of the sold out global shows of the first Oscar-winning Spider-Man animated Spider-Verse film, comes the highly anticipated sequel: SPIDER-MAN ACROSS THE SPIDER-VERSE, set to captivate audiences in concert venues worldwide. These films have garnered immense popularity, largely due to their groundbreaking soundtracks praised for their innovative fusion of orchestral and electronic elements alongside scratch DJ techniques. The upcoming spectacle will feature the movie showcased on a colossal HD screen, complemented by a diverse ensemble of musicians and instrumentalists performing the iconic score and soundtrack live. This extraordinary lineup includes a full orchestra, a skilled scratch DJ on turntables, as well as percussion and electronic instrumentalists.",
                "pleaseNote": "Building on the success of the sold out global shows of the first Oscar-winning Spider-Man animated Spider-Verse film, comes the highly anticipated sequel: SPIDER-MAN ACROSS THE SPIDER-VERSE, set to captivate audiences in concert venues worldwide. These films have garnered immense popularity, largely due to their groundbreaking soundtracks praised for their innovative fusion of orchestral and electronic elements alongside scratch DJ techniques. The upcoming spectacle will feature the movie showcased on a colossal HD screen, complemented by a diverse ensemble of musicians and instrumentalists performing the iconic score and soundtrack live. This extraordinary lineup includes a full orchestra, a skilled scratch DJ on turntables, as well as percussion and electronic instrumentalists.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 46.25,
                        "max": 139.0
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ DOLBY THEATRE",
                        "id": "vvG10ZbGym-OM5",
                        "url": "https://www.ticketmaster.com/parkwhiz-dolby-theatre-hollywood-california-10-26-2024/event/090060CE6E860DCB",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/090060CDA3DF278F/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 2,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 8 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": true
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10ZbGUNMwr2?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917jlLV?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Dolby Theatre",
                            "type": "venue",
                            "id": "KovZpZAdtaEA",
                            "test": false,
                            "url": "https://www.ticketmaster.com/dolby-theatre-tickets-hollywood/venue/74167",
                            "locale": "en-us",
                            "aliases": [
                                "kodac theater",
                                "kodak theatre",
                                "kodac theatre",
                                "kodak theater"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22912v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 6.45,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6801 Hollywood Blvd."
                            },
                            "location": {
                                "longitude": "-118.34020235",
                                "latitude": "34.10177237"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "Dolby Theatre Administration: 323-308-6300",
                                "openHoursDetail": "NON-EVENT DAYS: Monday-Saturday 10am-5pm, Sunday 10am-4pm EVENT DAYS: Monday-Sunday 10am- 1/2 hour after scheduled start time of event.",
                                "acceptedPaymentDetail": "Cash, Visa, MasterCard, American Express and Discover. No checks are accepted.",
                                "willCallDetail": "Will Call is available for pickup during regular box office hours. Photo ID and credit card used for the purchase are required."
                            },
                            "parkingDetail": "2,000 parking spaces within a 10 minute walk, plus 3,000 parking spaces at Ovation Hollywood Center. For parking information visit: http://maps.google.com/maps?hl=en&gl=us&daddr=6801+Hollywood+Blvd,+Hollywood,+CA+90028",
                            "accessibleSeatingDetail": "Accessible seating is available by phone through Ticketmaster or Dolby Theatre. There are elevators to each level, however only the seats indicated on the seating chart are without stairs and have space to accommodate wheelchairs and motorized carts.",
                            "generalInfo": {
                                "generalRule": "The Dolby Theatre is a non-smoking facility. No outside foods or beverages. No cameras or recording devices are allowed. Rules are subject to change for some events.",
                                "childRule": "All guests require a ticket, regardless of age. Some events, rules subject to change and may not be suitable for children. Also disruptions to other guests experience may be cause to be asked to step out with no refunds or exchanges."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 20,
                                "_total": 20,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Spider-Man: Across The Spider-Verse - Live In Concert",
                            "type": "attraction",
                            "id": "K8vZ917jlLV",
                            "test": false,
                            "url": "https://www.ticketmaster.com/spiderman-across-the-spiderverse-live-in-tickets/artist/3142420",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7le",
                                        "name": "Miscellaneous"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1k",
                                        "name": "Miscellaneous"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA6J",
                                        "name": "Concert"
                                    },
                                    "family": true
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-se": 1,
                                "tmr": 11,
                                "mfx-nl": 2,
                                "ticketmaster": 28,
                                "_total": 42,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917jlLV?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Spider-Man: Across The Spider-Verse - Live In Concert",
                "type": "event",
                "id": "vvG10ZbGUNUwr6",
                "test": false,
                "url": "https://www.ticketmaster.com/spiderman-across-the-spiderverse-live-in-hollywood-california-10-26-2024/event/090060CDA3DB2787",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    }
                ],
                "distance": 6.45,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-06-26T17:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-10-27T03:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-06-24T17:00:00Z",
                            "endDateTime": "2024-06-26T06:59:00Z",
                            "name": "Presale Offers"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-10-26",
                        "localTime": "20:00:00",
                        "dateTime": "2024-10-27T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7na",
                            "name": "Arts & Theatre"
                        },
                        "genre": {
                            "id": "KnvZfZ7v7ld",
                            "name": "Miscellaneous Theatre"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v7lk",
                            "name": "Miscellaneous Theatre"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "5431",
                    "name": "BROADWAY IN HOLLYWOOD",
                    "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                },
                "promoters": [
                    {
                        "id": "5431",
                        "name": "BROADWAY IN HOLLYWOOD",
                        "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                    }
                ],
                "info": "Building on the success of the sold out global shows of the first Oscar-winning Spider-Man animated Spider-Verse film, comes the highly anticipated sequel: SPIDER-MAN ACROSS THE SPIDER-VERSE, set to captivate audiences in concert venues worldwide. These films have garnered immense popularity, largely due to their groundbreaking soundtracks praised for their innovative fusion of orchestral and electronic elements alongside scratch DJ techniques. The upcoming spectacle will feature the movie showcased on a colossal HD screen, complemented by a diverse ensemble of musicians and instrumentalists performing the iconic score and soundtrack live. This extraordinary lineup includes a full orchestra, a skilled scratch DJ on turntables, as well as percussion and electronic instrumentalists.",
                "pleaseNote": "Building on the success of the sold out global shows of the first Oscar-winning Spider-Man animated Spider-Verse film, comes the highly anticipated sequel: SPIDER-MAN ACROSS THE SPIDER-VERSE, set to captivate audiences in concert venues worldwide. These films have garnered immense popularity, largely due to their groundbreaking soundtracks praised for their innovative fusion of orchestral and electronic elements alongside scratch DJ techniques. The upcoming spectacle will feature the movie showcased on a colossal HD screen, complemented by a diverse ensemble of musicians and instrumentalists performing the iconic score and soundtrack live. This extraordinary lineup includes a full orchestra, a skilled scratch DJ on turntables, as well as percussion and electronic instrumentalists.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 46.25,
                        "max": 139.0
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ DOLBY THEATRE",
                        "id": "vvG10ZbGymOOM6",
                        "url": "https://www.ticketmaster.com/parkwhiz-dolby-theatre-hollywood-california-10-26-2024/event/090060CE6E820DC7",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/090060CDA3DB2787/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 2,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 8 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": true
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10ZbGUNUwr6?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917jlLV?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Dolby Theatre",
                            "type": "venue",
                            "id": "KovZpZAdtaEA",
                            "test": false,
                            "url": "https://www.ticketmaster.com/dolby-theatre-tickets-hollywood/venue/74167",
                            "locale": "en-us",
                            "aliases": [
                                "kodac theater",
                                "kodak theatre",
                                "kodac theatre",
                                "kodak theater"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22912v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 6.45,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6801 Hollywood Blvd."
                            },
                            "location": {
                                "longitude": "-118.34020235",
                                "latitude": "34.10177237"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "Dolby Theatre Administration: 323-308-6300",
                                "openHoursDetail": "NON-EVENT DAYS: Monday-Saturday 10am-5pm, Sunday 10am-4pm EVENT DAYS: Monday-Sunday 10am- 1/2 hour after scheduled start time of event.",
                                "acceptedPaymentDetail": "Cash, Visa, MasterCard, American Express and Discover. No checks are accepted.",
                                "willCallDetail": "Will Call is available for pickup during regular box office hours. Photo ID and credit card used for the purchase are required."
                            },
                            "parkingDetail": "2,000 parking spaces within a 10 minute walk, plus 3,000 parking spaces at Ovation Hollywood Center. For parking information visit: http://maps.google.com/maps?hl=en&gl=us&daddr=6801+Hollywood+Blvd,+Hollywood,+CA+90028",
                            "accessibleSeatingDetail": "Accessible seating is available by phone through Ticketmaster or Dolby Theatre. There are elevators to each level, however only the seats indicated on the seating chart are without stairs and have space to accommodate wheelchairs and motorized carts.",
                            "generalInfo": {
                                "generalRule": "The Dolby Theatre is a non-smoking facility. No outside foods or beverages. No cameras or recording devices are allowed. Rules are subject to change for some events.",
                                "childRule": "All guests require a ticket, regardless of age. Some events, rules subject to change and may not be suitable for children. Also disruptions to other guests experience may be cause to be asked to step out with no refunds or exchanges."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 20,
                                "_total": 20,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Spider-Man: Across The Spider-Verse - Live In Concert",
                            "type": "attraction",
                            "id": "K8vZ917jlLV",
                            "test": false,
                            "url": "https://www.ticketmaster.com/spiderman-across-the-spiderverse-live-in-tickets/artist/3142420",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/c37/4c84b54f-7ff0-4c06-8a58-378677222c37_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7le",
                                        "name": "Miscellaneous"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vF1k",
                                        "name": "Miscellaneous"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vA6J",
                                        "name": "Concert"
                                    },
                                    "family": true
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-se": 1,
                                "tmr": 11,
                                "mfx-nl": 2,
                                "ticketmaster": 28,
                                "_total": 42,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917jlLV?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "JONATHAN KARRANT & FRIENDS! : A HOLIDAY CONCERT (Acclaimed Jazz Recording Artist)",
                "type": "event",
                "id": "rZ7HnEZ1AK4317",
                "test": false,
                "url": "https://www.ticketweb.com/event/jonathan-karrant-friends-catalina-bar-grill-tickets/13552284",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://i.ticketweb.com/i/00/12/33/45/94_Edp.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    }
                ],
                "distance": 6.19,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-06-25T17:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-12-12T01:00:00Z"
                    }
                },
                "dates": {
                    "access": {
                        "startDateTime": "2024-12-12T03:00:00Z",
                        "startApproximate": false,
                        "endApproximate": false
                    },
                    "start": {
                        "localDate": "2024-12-11",
                        "localTime": "20:30:00",
                        "dateTime": "2024-12-12T04:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "end": {
                        "approximate": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "offsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk7a",
                            "name": "Contemporary Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvl",
                            "name": "Other"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk7a",
                            "name": "Contemporary Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "info": "Jazz Recording Artist & Award-winning singer, JONATHAN KARRANT & FRIENDS celebrates the holidays at Catalina Jazz Club, Hollywood.LIVE - Wed, Dec 11th at 8:30pm. Dinner begins at 7:00pm.Special guests to be announced! Tickets: $25-35, VIP & Artist Circle Seating Available. Ticket online at CatalinaJazzClub.com or TicketWeb.com Catalina Jazz Club 6725 West Sunset Blvd.Hollywood, CA 90028Proudly presented by Chris Isaacson Presents*Tickets purchased online receive priority seating.*Single Entree or Drink minimums apply for all ticketsABOUT THE ARTIST:Jonathan Karrants album, On and On hit #4 on the Billboard Jazz charts and his album Live hit #2 on the iTunes Jazz Charts. He has received honors throughout the states including; the New York City Cabaret Jazz Honors, Best Singer for the Bravo California Awards and was named one of the top 10 rising vocalists by Downbeat.A voice, romantic without being cloying, warm but not forced, Jonathan carries songs with an emotional weight that reaches your soul. At the same time he can swing with the kind of jazz suave that was patented by Mel Torme. - Jazz Corner",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 25.0,
                        "max": 45.0
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/rZ7HnEZ1AK4317?locale=en-us"
                    },
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Catalina Bar & Grill",
                            "type": "venue",
                            "id": "rZ7HnEZa7Yy",
                            "test": false,
                            "url": "https://www.ticketweb.com/venue/catalina-bar--grill-hollywood-ca/19513",
                            "locale": "en-us",
                            "distance": 6.19,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6725 W. Sunset Blvd."
                            },
                            "location": {
                                "longitude": "-118.337228",
                                "latitude": "34.098337"
                            },
                            "upcomingEvents": {
                                "ticketweb": 54,
                                "_total": 54,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "SHELLY BERG TRIO | \"ALEGRIA\" CD Release Concert with special guests CARLITOS DEL PUERTO & DAFNIS PRIETO",
                "type": "event",
                "id": "rZ7HnEZ1AKfJC7",
                "test": false,
                "url": "https://www.ticketweb.com/event/shelly-berg-trio-alegria-catalina-bar-grill-tickets/13526384",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    }
                ],
                "distance": 6.19,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-05-18T02:55:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-08-30T01:00:00Z"
                    }
                },
                "dates": {
                    "access": {
                        "startDateTime": "2024-08-30T02:00:00Z",
                        "startApproximate": false,
                        "endApproximate": false
                    },
                    "start": {
                        "localDate": "2024-08-29",
                        "localTime": "20:30:00",
                        "dateTime": "2024-08-30T03:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "end": {
                        "approximate": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vkda",
                            "name": "Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeF",
                            "name": "World"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vFdJ",
                            "name": "Latin"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vkda",
                            "name": "Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk7a",
                            "name": "Contemporary Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "info": "Shelly Berg is a Steinway piano artist and multi-Grammy nominated arranger and producer. His newest album Alegra will be recorded with bassist Carlitos Del Puerto and drummer Dafnis Prieto and released in June 2024 through ArtistShare.His prior album Gershwin Reimagined: An American in London with the Royal Philharmonic Orchestra was conducted by Jos Serebrier and produced by Gregg Field (Decca Gold). It is praised as A magnificent tribute to the genius of George Gershwin, chock-full of major musical talent and delivered in superb sound, by Colin Clarke in Fanfare, and described as a bold leap in creating a hybrid mixture of seminal Gershwin that is fresh, inspiring and virtuosic, by singer Michael Feinstein.The All Music Guide says Shelly Berg is one of the finest pianists around in the early 21st century playing modern mainstream jazz. His recording project The Deep with bassist Dave Finck on Chesky Records is widely admired for its versatility and virtuosity with 4.5 stars from DownBeat magazine. His solo project Shelly Berg: The Nearness of You (Arbors) and a two-piano album with Dick Hyman Meeting of Minds (Victoria) are also both critically acclaimed. His album Blackbird, recorded with the Shelly Berg Trio on the Concord Records label, reached #1 in US jazz radio and garnered Record of the Year and Artist of the Year nominations (Jazzweek, 2005).Berg was nominated for a Grammy Award in the Best Arrangement, Instruments and Vocals category as co-arranger of I Loves You Porgy / Theres a Boat Thats Leavin Soon for New York from the album Rendezvous (2018) featuring jazz singers Clint Holmes and Dee Dee Bridgewater with The Count Basie Orchestra. He was nominated for a Grammy Award in the Best Arrangement Accompanying Vocals category for his arrangement of Be My Muse on Lorraine Feathers album Flirting with Disaster (2015), as well as his arrangement of What a Wonderful World on Gloria Estefan: The Standards (2014), and Out There on Lorraine Feathers Tales of the Unusual (2013). He was also nominated for a Grammy as co-producer of Gloria Estefan: The Standards in the Best Traditional Pop Album category.",
                "pleaseNote": "Dinner or two-drink minimum required in addition to the tickets, plus a $0.49 music royalty fee per patron. Doors open for dinner 1 1/2 hour before the first show and 1/2 hour before the second show if there is a second show. Except for Private Events. Ticket sales are final. Catalina's Management",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 25.0,
                        "max": 25.0
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/rZ7HnEZ1AKfJC7?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uThV?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ917ujRf?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ917uB27?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Catalina Bar & Grill",
                            "type": "venue",
                            "id": "rZ7HnEZa7Yy",
                            "test": false,
                            "url": "https://www.ticketweb.com/venue/catalina-bar--grill-hollywood-ca/19513",
                            "locale": "en-us",
                            "distance": 6.19,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6725 W. Sunset Blvd."
                            },
                            "location": {
                                "longitude": "-118.337228",
                                "latitude": "34.098337"
                            },
                            "upcomingEvents": {
                                "ticketweb": 54,
                                "_total": 54,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Shelly Berg",
                            "type": "attraction",
                            "id": "K8vZ917uThV",
                            "test": false,
                            "url": "https://www.ticketmaster.com/shelly-berg-tickets/artist/776030",
                            "locale": "en-us",
                            "externalLinks": {
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Shelly_Berg"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "1c66448e-a92d-4703-8429-68e7e181e578"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.shellyberg.com/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/578/02d98487-37ec-40d6-b547-654e2e730578_1520001_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAvE",
                                        "name": "Jazz"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vkda",
                                        "name": "Jazz"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "ticketweb": 1,
                                "_total": 1,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uThV?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Carlitos Del Puerto",
                            "type": "attraction",
                            "id": "K8vZ917ujRf",
                            "test": false,
                            "url": "https://www.ticketmaster.com/carlitos-del-puerto-tickets/artist/1513689",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeF",
                                        "name": "World"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vFdJ",
                                        "name": "Latin"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "ticketweb": 1,
                                "_total": 1,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917ujRf?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Dafnis Prieto",
                            "type": "attraction",
                            "id": "K8vZ917uB27",
                            "test": false,
                            "url": "https://www.ticketmaster.com/dafnis-prieto-tickets/artist/1366225",
                            "locale": "en-us",
                            "externalLinks": {
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Dafnis_Prieto"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "8ae4b637-590d-4bc7-b351-994a424ae66f"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.dafnisprieto.com/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAvE",
                                        "name": "Jazz"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vkda",
                                        "name": "Jazz"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "ticketweb": 1,
                                "_total": 1,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917uB27?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "ALISAN PORTER (Winner of NBC's The Voice, Singer, Actor & Songwriter): \"THE RIDE\" EP Release Concert Event",
                "type": "event",
                "id": "rZ7HnEZ1AKf34d",
                "test": false,
                "url": "https://www.ticketweb.com/event/alisan-porter-winner-of-nbcs-catalina-bar-grill-tickets/13512543",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "1_1",
                        "url": "https://i.ticketweb.com/i/00/12/27/05/93_Edp.jpg",
                        "width": 427,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    }
                ],
                "distance": 6.19,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-03-05T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-07-01T00:30:00Z"
                    }
                },
                "dates": {
                    "access": {
                        "startDateTime": "2024-07-01T01:00:00Z",
                        "startApproximate": false,
                        "endApproximate": false
                    },
                    "start": {
                        "localDate": "2024-06-30",
                        "localTime": "19:30:00",
                        "dateTime": "2024-07-01T02:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "end": {
                        "approximate": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAev",
                            "name": "Pop"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vkIv",
                            "name": "Pop Vocal"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvl",
                            "name": "Other"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk7a",
                            "name": "Contemporary Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "info": "Winner of NBCs The Voice, acclaimed singer, actor, and songwriter ALISAN PORTER, marks the release of her new EP entitled The Ride with a special concert at Catalina Jazz Club, Hollywood! Join us Live! Sun, June 30th at 7:30pm. Doors at 6:00pm Ms. Porter began developing her vocal skills early in life. She debuted on Star Search at age 5 singing Over the Rainbow, has performed on Broadway in A Chorus Line, and went on to starring roles in Television and Film; including the John Hughes 1991 classic Curly Sue. As her own music developed, Alisan fell in love with works by artists Joni Mitchell, Linda Ronstadt, Pat Benatar, Patty Griffin, Mariah Carey and more. These artists and her experience on the Great White Way influenced her own songwriting and vocal phrasing. In THE RIDE, Alisan Porter continues to explore Americana music bathed in distinctive and rich threads of country, soul, and rock, matching her powerful country-soul vocals with melodic guitars, mandolins and violins, delicate acoustic piano, and sweet harmonies.Her songwriting on The Ride mines the emotional rollercoaster of the music industry (The Ride), sharing her heart and fanning the flames of desire in a modern union (Meant For Me, See In The Dark), and speaks to the challenges of keeping tradition, faith and understanding within her walls (Rivers Dry, Bleedin). Alisan Porter will release The Ride worldwide on Fri, Jun 21, 2024. Fans of her work on NBCs The Voice? In addition to these new songs, Ms. Porter will perform fan favorites from her performances on the Emmy Award-winning program. Tickets: $25-35, VIP & Artist Circle Seating Available. Ticket online at CatalinaJazzClub.com or TicketWeb.com Catalina Jazz Club 6725 West Sunset Blvd.Hollywood, CA 90028*Tickets purchased online receive priority seating.*Single Entree or Drink minimums apply for all tickets",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 25.0,
                        "max": 60.0
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/rZ7HnEZ1AKf34d?locale=en-us"
                    },
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Catalina Bar & Grill",
                            "type": "venue",
                            "id": "rZ7HnEZa7Yy",
                            "test": false,
                            "url": "https://www.ticketweb.com/venue/catalina-bar--grill-hollywood-ca/19513",
                            "locale": "en-us",
                            "distance": 6.19,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6725 W. Sunset Blvd."
                            },
                            "location": {
                                "longitude": "-118.337228",
                                "latitude": "34.098337"
                            },
                            "upcomingEvents": {
                                "ticketweb": 54,
                                "_total": 54,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Max Styler",
                "type": "event",
                "id": "rZ7HnEZ1AKoYuV",
                "test": false,
                "url": "https://www.ticketweb.com/event/max-styler-la-state-historic-park-on-tickets/13470374",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://i.ticketweb.com/i/00/12/25/54/84_Edp.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    }
                ],
                "distance": 0.88,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-04-30T19:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-07-01T02:00:00Z"
                    }
                },
                "dates": {
                    "access": {
                        "startDateTime": "2024-06-30T21:00:00Z",
                        "startApproximate": false,
                        "endDateTime": "2024-07-01T03:00:00Z",
                        "endApproximate": false
                    },
                    "start": {
                        "localDate": "2024-06-30",
                        "localTime": "14:00:00",
                        "dateTime": "2024-06-30T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "end": {
                        "localDate": "2024-06-30",
                        "localTime": "20:00:00",
                        "dateTime": "2024-07-01T03:00:00Z",
                        "approximate": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvF",
                            "name": "Dance/Electronic"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vA1E",
                            "name": "Dance/Electronic"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "info": "Ages 21 +**NOTE ON TICKETS**After finalizing your purchase, you have officially reserved your spot to this event, and your digital ticket will be released 3 days before event date. If you still havent received your tickets 48 hours before the event please contact info@ticketweb.comENTRY GUIDELINESThis event will follow all local & state health guidelines. Ages 21+. All sales are final.STUBHUB / VIVID SEATS / OTHER THIRD-PARTY RESELLERSLA State Historic Park: On The Promenade has NO association with StubHub, Vivid Seats, or any third-party resellers. Tickets purchased from these sites will not be valid for entry. Any tickets purchased from a third party will not give the buyer access to the ticket and its benefits. The only acceptable tickets for entry may be purchased through TicketWeb and, in some cases, TIXR.Your government-issued ID must match the name on the ticket.",
                "pleaseNote": "This event is 21 and over. Any ticket holder unable to present valid identification indicating that they are at least 21 years of age will not be admitted to this event, and will not be eligible for a refund. PLEASE NOTE: A valid and physical form of identification indicating that they are at least 21 years old must be presented. The Promenade at LA State Historic Park is a cashless venue. Accepted forms of payment: credit/debit cards, Apple/Google/Samsung Pay.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 0.0,
                        "max": 0.0
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/rZ7HnEZ1AKoYuV?locale=en-us"
                    },
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/rZ7HnEZ17ASqf?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "LA State Historic Park: On The Promenade",
                            "type": "venue",
                            "id": "rZ7HnEZ17ASqf",
                            "test": false,
                            "url": "https://www.ticketweb.com/venue/la-state-historic-park-on-the-promenade-los-angeles-ca/173754",
                            "locale": "en-us",
                            "distance": 0.88,
                            "units": "MILES",
                            "postalCode": "90012",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "1279 N. Spring St"
                            },
                            "location": {
                                "longitude": "-118.234521",
                                "latitude": "34.0657701"
                            },
                            "upcomingEvents": {
                                "ticketweb": 7,
                                "_total": 7,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/rZ7HnEZ17ASqf?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "ThxSoMch with Max Fry",
                "type": "event",
                "id": "vvG10Z9zbbHfuX",
                "test": false,
                "url": "https://concerts.livenation.com/thxsomch-with-max-fry-los-angeles-california-07-02-2024/event/09005F8618F1437E",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    }
                ],
                "distance": 1.87,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2023-12-08T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-07-03T02:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2023-12-07T16:00:00Z",
                            "endDateTime": "2023-12-08T06:00:00Z",
                            "name": "Live Nation Presale"
                        },
                        {
                            "startDateTime": "2023-12-07T16:00:00Z",
                            "endDateTime": "2023-12-08T06:00:00Z",
                            "name": "Bandsintown Presale"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-07-02",
                        "localTime": "19:00:00",
                        "dateTime": "2024-07-03T02:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "initialStartDate": {
                        "localDate": "2024-04-29",
                        "localTime": "19:00:00",
                        "dateTime": "2024-04-30T02:00:00Z"
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "rescheduled"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeA",
                            "name": "Rock"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v6dt",
                            "name": "Alternative Rock"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "653",
                    "name": "LIVE NATION MUSIC",
                    "description": "LIVE NATION MUSIC / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "653",
                        "name": "LIVE NATION MUSIC",
                        "description": "LIVE NATION MUSIC / NTL / USA"
                    }
                ],
                "info": "Keep up to date with all our upcoming events by visiting The Echo's social media and website. @theechola theecho.com Entry for the Echoplex will be located at: 1154 Glendale Blvd, Los Angeles, CA 90026",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 22.0,
                        "max": 22.0
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/09005F8618F1437E/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an 2 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": true
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10Z9zbbHfuX?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917hb4f?locale=en-us"
                        },
                        {
                            "href": "/discovery/v2/attractions/K8vZ917jwh7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpa6OCe?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Echoplex",
                            "type": "venue",
                            "id": "KovZpa6OCe",
                            "test": false,
                            "url": "https://www.ticketmaster.com/echoplex-tickets-los-angeles/venue/74535",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/21888v.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                }
                            ],
                            "distance": 1.87,
                            "units": "MILES",
                            "postalCode": "90026",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "1154 Glendale Blvd"
                            },
                            "location": {
                                "longitude": "-118.2606316",
                                "latitude": "34.0775847"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "parkingDetail": "There is ample street parking in the area and most meters end at 9pm if not earlier. Public lots within walking distance of the venues located off of Sunset Blvd & Lemoyne. You can go to http://parkinginla.lacity.org/, click “Central”, find Lot 643, 662, 663, 676, 679.",
                            "generalInfo": {
                                "generalRule": "General Rules: Please check the age restrictions before purchasing your ticket to a show. Age restrictions change depending on show. 21+ shows require a Valid ID to enter the venue. 18+ shows require a Valid ID to enter the venue. Accepted forms of ID are current and non-expired: State Issued ID or Driver’s License, Military & Passport ID. Guests are not permitted to bring bottles, cans, weapons, back packs, posters, outside food and beverage items, stickers, cameras with detachable lenses, audio/video recording devices, tripods/monopods, alcohol, drugs and illegal substances, large bags or backpacks inside the venue. There are no \"in's and out's\" permitted. All sales are final. We don't offer refunds or exchanges unless a show is canceled. Please keep in mind that support acts and set times are subject to change at any time and this does not warrant a refund.",
                                "childRule": "Child Rules: No children will be permitted unless it is an All-Ages show. Everyone must have a ticket."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 35,
                                "_total": 35,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpa6OCe?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "ThxSoMch",
                            "type": "attraction",
                            "id": "K8vZ917hb4f",
                            "test": false,
                            "url": "https://www.livenation.com/artist/K8vZ917hb4f/thxsomch-events",
                            "locale": "en-us",
                            "externalLinks": {
                                "spotify": [
                                    {
                                        "url": "https://open.spotify.com/artist/4MvZhE1iuzttcoyepkpfdF"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/thxsomch"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/75d/a79b7549-dec4-47cc-8763-656f6c0b375d_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAvv",
                                        "name": "Alternative"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vAde",
                                        "name": "Indie Rock"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAd7",
                                        "name": "Musician"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-cz": 1,
                                "mfx-nl": 1,
                                "ticketmaster": 8,
                                "ticketweb": 1,
                                "mfx-de": 3,
                                "_total": 14,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917hb4f?locale=en-us"
                                }
                            }
                        },
                        {
                            "name": "Max Fry",
                            "type": "attraction",
                            "id": "K8vZ917jwh7",
                            "test": false,
                            "url": "https://www.livenation.com/artist/K8vZ917jwh7/max-fry-events",
                            "locale": "en-us",
                            "externalLinks": {
                                "instagram": [
                                    {
                                        "url": "https://www.instagram.com/maxfry/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/f50/96fa13be-e395-429b-8558-a51bb9054f50_105951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": true
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": true
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": true
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": true
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAvv",
                                        "name": "Alternative"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vAvn",
                                        "name": "Alternative Rock"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAd7",
                                        "name": "Musician"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "ticketmaster": 2,
                                "_total": 2,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917jwh7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Max Richter",
                "type": "event",
                "id": "Z7r9jZ1A7FkvF",
                "test": false,
                "url": "https://www.ticketmaster.com/event/Z7r9jZ1A7FkvF",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    }
                ],
                "distance": 4.42,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "1900-01-01T06:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2025-05-10T03:00:00Z"
                    }
                },
                "dates": {
                    "start": {
                        "localDate": "2025-05-09",
                        "localTime": "20:00:00",
                        "dateTime": "2025-05-10T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvl",
                            "name": "Other"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk1I",
                            "name": "Other"
                        },
                        "family": false
                    }
                ],
                "outlets": [
                    {
                        "url": "https://www.laphil.com/",
                        "type": "venueBoxOffice"
                    },
                    {
                        "url": "https://www.ticketmaster.com/max-richter-los-angeles-california-05-09-2025/event/Z7r9jZ1A7FkvF",
                        "type": "tmMarketPlace"
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://content.resale.ticketmaster.com/maps/3080-1-1-main.gif",
                    "id": "seatmap"
                },
                "ticketing": {
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/Z7r9jZ1A7FkvF?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9173B00?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Walt Disney Concert Hall",
                            "type": "venue",
                            "id": "ZFr9jZ7vav",
                            "test": false,
                            "locale": "en-us",
                            "distance": 4.42,
                            "units": "MILES",
                            "postalCode": "90037",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line2": "Los Angeles, CA"
                            },
                            "location": {
                                "longitude": "-118.287804",
                                "latitude": "34.003101"
                            },
                            "dmas": [
                                {
                                    "id": 324
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 8,
                                "_total": 8,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/ZFr9jZ7vav?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Max Richter",
                            "type": "attraction",
                            "id": "K8vZ9173B00",
                            "test": false,
                            "url": "https://www.ticketmaster.com/max-richter-tickets/artist/2051940",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_1103811_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/096/fa76e8b1-61c0-4525-ab2f-849995d98096_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7na",
                                        "name": "Arts & Theatre"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7v7nJ",
                                        "name": "Classical"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v7nI",
                                        "name": "Symphonic"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "tmr": 2,
                                "ticketmaster": 6,
                                "_total": 8,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9173B00?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Joe Jackson Solo and The Music of Max Champion",
                "type": "event",
                "id": "vvG10Z9MUS5ecz",
                "test": false,
                "url": "https://www.ticketmaster.com/joe-jackson-solo-and-the-music-los-angeles-california-06-25-2024/event/09005F7DB32C2B78",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    }
                ],
                "distance": 1.13,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2023-12-08T18:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-06-26T05:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2023-12-05T18:00:00Z",
                            "endDateTime": "2023-12-08T06:00:00Z",
                            "name": "Artist Presale"
                        },
                        {
                            "startDateTime": "2023-12-07T18:00:00Z",
                            "endDateTime": "2023-12-08T06:00:00Z",
                            "name": "Local Presale"
                        },
                        {
                            "startDateTime": "2023-12-05T18:00:00Z",
                            "endDateTime": "2023-12-08T06:00:00Z",
                            "name": "Official Platinum Presale"
                        },
                        {
                            "startDateTime": "2023-12-08T18:00:00Z",
                            "endDateTime": "2024-06-26T05:00:00Z",
                            "name": "Official Platinum Onsale"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-06-25",
                        "localTime": "20:00:00",
                        "dateTime": "2024-06-26T03:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeA",
                            "name": "Rock"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v6F1",
                            "name": "Pop"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "494",
                    "name": "PROMOTED BY VENUE",
                    "description": "PROMOTED BY VENUE / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "494",
                        "name": "PROMOTED BY VENUE",
                        "description": "PROMOTED BY VENUE / NTL / USA"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 49.5,
                        "max": 99.5
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ ORPHEUM THEATRE",
                        "id": "vv1AaZkvSGkdtOxDh",
                        "url": "https://www.ticketmaster.com/parkwhiz-orpheum-theatre-los-angeles-california-06-25-2024/event/09006073E9822EDB",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/09005F7DB32C2B78/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "info": "ADA Wheelchair and Companion seating are configured as 1+1 and 1+2 arrangements on the Orchestra and Balcony.",
                    "ticketLimit": 3,
                    "id": "accessibility"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "doorsTimes": {
                    "localDate": "2024-06-25",
                    "localTime": "19:00:00",
                    "dateTime": "2024-06-26T02:00:00Z",
                    "id": "doorsTimes"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10Z9MUS5ecz?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171b_7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpa3uCe?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Orpheum Theatre",
                            "type": "venue",
                            "id": "KovZpa3uCe",
                            "test": false,
                            "url": "https://www.ticketmaster.com/orpheum-theatre-tickets-los-angeles/venue/73785",
                            "locale": "en-us",
                            "distance": 1.13,
                            "units": "MILES",
                            "postalCode": "90014",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "842 S. Broadway "
                            },
                            "location": {
                                "longitude": "-118.25558624",
                                "latitude": "34.04263554"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "social": {
                                "twitter": {
                                    "handle": "@LAOrpheum"
                                }
                            },
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "(877) 677-4386",
                                "openHoursDetail": "One hour before show time.",
                                "acceptedPaymentDetail": "Cash only. ATM is available in the outside lobby near the box office.",
                                "willCallDetail": "Will Call is located at the front of the theatre in on Broadway and opens one hour before show time."
                            },
                            "parkingDetail": "Parking is available in many lots surrounding the theatre at prices ranging from $5-$10. Parking operators are independent and set their own prices.",
                            "accessibleSeatingDetail": "Available through Ticketmaster and the Box Office. Wheelchair accessible seating is available on the orchestra level and balcony level in designated areas. Please refer to the Orpheum Theatre Seating Chart. Orpheum Theatre ushers will direct you to this area once you enter the theatre the day of your event. The Orpheum has restrooms to accommodate accessible patrons at each level. Restrooms are accessible by means of an elevator located at the front entrance of the theater lobby. Accessible seating areas are solely for disabled persons and their companions. By purchasing an accessible seating ticket through Ticketmaster, you agree to the following: The ticket will be used only by a person with a disability and his/her companion. A ticket holder may be denied entry to, or removed from, the accessible seating area if he or she is not disabled or the legitimate companion. If this occurs, the venue shall have no obligation to provide alternate seating. If Ticketmaster or the event provider believes, in its sole discretion, that your order violates or may violate this policy, Ticketmaster may cancel your order without notice.",
                            "generalInfo": {
                                "generalRule": "Video and still photography not permitted. Outside food and drink cannot be brought into the theatre. Shirt, pants, and shoes are required. Dress code may be more restrictive for some events. Smoking is not permitted. Exit and re-entry is not permitted.",
                                "childRule": "Attendance for children may be restricted for certain shows. For shows where children are admitted, children under age one (1) may be admitted without a ticket."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 33,
                                "_total": 33,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpa3uCe?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Joe Jackson",
                            "type": "attraction",
                            "id": "K8vZ9171b_7",
                            "test": false,
                            "url": "https://www.ticketmaster.com/joe-jackson-tickets/artist/735355",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/user/JoeJacksonVEVO"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/OfficialJoeJackson"
                                    }
                                ],
                                "wiki": [
                                    {
                                        "url": "https://en.wikipedia.org/wiki/Joe_Jackson_(musician)"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "07f6d469-38f3-46da-9cfa-2f532422b84e"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://joejackson.com/"
                                    }
                                ]
                            },
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/284/ca682cf7-8f9f-4db4-a870-23a469f84284_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAeA",
                                        "name": "Rock"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v6F1",
                                        "name": "Pop"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7nI",
                                        "name": "Undefined"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7v7lJ",
                                        "name": "Undefined"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "ticketnet": 1,
                                "mfx-be": 2,
                                "tmr": 3,
                                "mfx-nl": 3,
                                "ticketmaster": 15,
                                "mfx-de": 1,
                                "_total": 25,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171b_7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "It's Murph, Never Dull, Max Low, Naar",
                "type": "event",
                "id": "rZ7HnEZ1AKoYC7",
                "test": false,
                "url": "https://www.ticketweb.com/event/its-murph-never-dull-max-la-state-historic-park-on-tickets/13470384",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://i.ticketweb.com/i/00/12/25/54/94_Edp.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    }
                ],
                "distance": 0.88,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-04-30T19:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-07-15T02:00:00Z"
                    }
                },
                "dates": {
                    "access": {
                        "startDateTime": "2024-07-14T21:00:00Z",
                        "startApproximate": false,
                        "endDateTime": "2024-07-15T03:00:00Z",
                        "endApproximate": false
                    },
                    "start": {
                        "localDate": "2024-07-14",
                        "localTime": "14:00:00",
                        "dateTime": "2024-07-14T21:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "end": {
                        "localDate": "2024-07-14",
                        "localTime": "20:00:00",
                        "dateTime": "2024-07-15T03:00:00Z",
                        "approximate": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvF",
                            "name": "Dance/Electronic"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vA1E",
                            "name": "Dance/Electronic"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvF",
                            "name": "Dance/Electronic"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vA1E",
                            "name": "Dance/Electronic"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvF",
                            "name": "Dance/Electronic"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vA1E",
                            "name": "Dance/Electronic"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "info": "Ages 21 +**NOTE ON TICKETS**After finalizing your purchase, you have officially reserved your spot to this event, and your digital ticket will be released 3 days before event date. If you still havent received your tickets 48 hours before the event please contact info@ticketweb.comENTRY GUIDELINESThis event will follow all local & state health guidelines. Ages 21+. All sales are final.STUBHUB / VIVID SEATS / OTHER THIRD-PARTY RESELLERSLA State Historic Park: On The Promenade has NO association with StubHub, Vivid Seats, or any third-party resellers. Tickets purchased from these sites will not be valid for entry. Any tickets purchased from a third party will not give the buyer access to the ticket and its benefits. The only acceptable tickets for entry may be purchased through TicketWeb and, in some cases, TIXR.Your government-issued ID must match the name on the ticket.",
                "pleaseNote": "This event is 21 and over. Any ticket holder unable to present valid identification indicating that they are at least 21 years of age will not be admitted to this event, and will not be eligible for a refund. PLEASE NOTE: A valid and physical form of identification indicating that they are at least 21 years old must be presented. The Promenade at LA State Historic Park is a cashless venue. Accepted forms of payment: credit/debit cards, Apple/Google/Samsung Pay.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 35.0,
                        "max": 35.0
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/rZ7HnEZ1AKoYC7?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917hRP0?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/rZ7HnEZ17ASqf?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "LA State Historic Park: On The Promenade",
                            "type": "venue",
                            "id": "rZ7HnEZ17ASqf",
                            "test": false,
                            "url": "https://www.ticketweb.com/venue/la-state-historic-park-on-the-promenade-los-angeles-ca/173754",
                            "locale": "en-us",
                            "distance": 0.88,
                            "units": "MILES",
                            "postalCode": "90012",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Los Angeles"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "1279 N. Spring St"
                            },
                            "location": {
                                "longitude": "-118.234521",
                                "latitude": "34.0657701"
                            },
                            "upcomingEvents": {
                                "ticketweb": 7,
                                "_total": 7,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/rZ7HnEZ17ASqf?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "it's murph",
                            "type": "attraction",
                            "id": "K8vZ917hRP0",
                            "test": false,
                            "url": "https://www.ticketmaster.com/its-murph-tickets/artist/3059808",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/a8a/6ec869b7-4fe5-4c53-8190-bff795b73a8a_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAvF",
                                        "name": "Dance/Electronic"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vA1E",
                                        "name": "Dance/Electronic"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAd7",
                                        "name": "Musician"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "universe": 1,
                                "mfx-nl": 1,
                                "ticketmaster": 4,
                                "ticketweb": 1,
                                "_total": 7,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917hRP0?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Shakira - Las Mujeres Ya No Lloran - World Tour",
                "type": "event",
                "id": "vv170ZbFGkMDd4OB",
                "test": false,
                "url": "https://www.ticketmaster.com/shakira-las-mujeres-ya-no-lloran-inglewood-california-11-09-2024/event/0900608DFB0D583A",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    }
                ],
                "distance": 8.77,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-04-22T17:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-11-10T04:30:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-04-17T17:00:00Z",
                            "endDateTime": "2024-04-22T05:00:00Z",
                            "name": "Citi Presale"
                        },
                        {
                            "startDateTime": "2024-04-19T17:00:00Z",
                            "endDateTime": "2024-04-22T05:00:00Z",
                            "name": "Artist Presale"
                        },
                        {
                            "startDateTime": "2024-04-19T19:00:00Z",
                            "endDateTime": "2024-04-22T05:00:00Z",
                            "name": "Live Nation Presale"
                        },
                        {
                            "startDateTime": "2024-04-19T19:00:00Z",
                            "endDateTime": "2024-04-22T05:00:00Z",
                            "name": "Ticketmaster Presale"
                        },
                        {
                            "startDateTime": "2024-04-19T21:00:00Z",
                            "endDateTime": "2024-04-22T05:00:00Z",
                            "name": "Spotify Presale"
                        },
                        {
                            "startDateTime": "2024-04-19T23:00:00Z",
                            "endDateTime": "2024-04-22T05:00:00Z",
                            "name": "Venue Presale"
                        },
                        {
                            "startDateTime": "2024-04-22T17:00:00Z",
                            "endDateTime": "2024-10-13T05:00:00Z",
                            "name": "Citi Cardmember Preferred Tickets"
                        },
                        {
                            "startDateTime": "2024-04-17T17:00:00Z",
                            "endDateTime": "2024-04-22T05:00:00Z",
                            "name": "VIP Packages Presale"
                        },
                        {
                            "startDateTime": "2024-04-22T17:00:00Z",
                            "endDateTime": "2024-11-03T05:00:00Z",
                            "name": "VIP Package Public Onsale"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-11-09",
                        "localTime": "19:30:00",
                        "dateTime": "2024-11-10T03:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAev",
                            "name": "Pop"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk1t",
                            "name": "Pop"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "653",
                    "name": "LIVE NATION MUSIC",
                    "description": "LIVE NATION MUSIC / NTL / USA"
                },
                "promoters": [
                    {
                        "id": "653",
                        "name": "LIVE NATION MUSIC",
                        "description": "LIVE NATION MUSIC / NTL / USA"
                    }
                ],
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 249.5,
                        "max": 589.5
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ KIA FORUM",
                        "id": "vv170ZbFGkWUPOgQ",
                        "url": "https://www.ticketmaster.com/parkwhiz-kia-forum-inglewood-california-11-09-2024/event/0900608F76960D5A",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0900608DFB0D583A/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 3,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 6 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vv170ZbFGkMDd4OB?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ9171xeV?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAEkn6A?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Kia Forum",
                            "type": "venue",
                            "id": "KovZpZAEkn6A",
                            "test": false,
                            "url": "https://www.ticketmaster.com/kia-forum-tickets-inglewood/venue/73750",
                            "locale": "en-us",
                            "aliases": [
                                "the forum",
                                "forum"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22354v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 8.77,
                            "units": "MILES",
                            "postalCode": "90305",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Inglewood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "3900 W Manchester Blvd."
                            },
                            "location": {
                                "longitude": "-118.341868",
                                "latitude": "33.9583"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "openHoursDetail": "Box office Hours: The Kia Forum Box Office is located on the West side (Prairie Avenue side) of the venue. Box Office hours: Open Friday, noon to 6pm and all event days at noon.",
                                "acceptedPaymentDetail": "Kia Forum is a cashless venue. ONLY credit & debit cards are accepted for payment",
                                "willCallDetail": "Location: Box Office Will Call is only open on days of events. Will Call opens two (2) hours prior to the start of the show and closes (1) hour after the start of the show. Will Call tickets can be picked up on the night of the event only. Customers must have the actual credit card used to place the order, photo ID and their confirmation number. Tickets may not be dropped off or left for other guests."
                            },
                            "parkingDetail": "Parking fees vary per event. Disabled parking is located on all sides of the main Kia Forum lot. Please have your CA State placard available for the attendants.",
                            "accessibleSeatingDetail": "Wheelchair and Disabled Seating Policy: Wheelchair and Transfer seating is reserved exclusively for patrons with accessible needs and their companions. Accessible seating is intended for use by an individual with a mobility disability or other disability who requires the accessible features of accessible seating due to a disability, and that individual's companions. Kia Forum reserves the right to investigate potential misuse of accessible seating and to take all appropriate action against individuals who fraudulently obtain tickets for accessible seating. In the event such ticket is transferred to a non-disabled individual, Kia Forum reserves the right to deny entry to the wheelchair seating area or transfer that individual to other available seating. Wheelchair and Disabled Seating Tickets for people with accessible needs, subject to availability, may be purchased in several ways: 1) Order Online with Ticketmaster 2) Visit Kia Forum Box Office (Box Office hours: Tuesday, Wednesday, Thursday 11am to 7pm + Open @ Noon on all event days) 3) Call Kia Forum Guest Relations at 310-862-6200. For additional information regarding accessibility at Kia Forum or to request an interpreted performance or any other accommodations, please call Kia Forum Guest Relations Department Monday to Friday, 11am to 7pm. Accessible Restrooms, Disabled and family restrooms are located on the concourse across from sections 209-210 and 227-228. On the floor, disabled restrooms are located in the hallways adjacent to the North Hospitality. While disabled guests are provided preference at disabled restrooms, any guest may use these restrooms if they require that type of accommodation. Kia Forum can provide wheelchair escorts for individuals who have limited mobility to transport from a guest services location to their seating areas. Upon arrival at Kia Forum, please ask Guest Services for assistance. Please be aware Kia Forum escort staff are unable to remain with guests for the performance, provide restroom or concessions assistance, nor are they permitted to escort guests into the parking lots, city streets, or surrounding area. If you require a wheelchair for the duration of the show, you must bring your own wheelchair to the venue. Wheelchair Storage Guests who wish to transfer to a fixed seat from their wheelchair or mobility device, can check their device at any Guest Services location. Claim checks will be issued and guests may pick up their wheelchair until 30 minutes after conclusion of the show.",
                            "generalInfo": {
                                "generalRule": "ARRIVE EARLY: Please arrive at least one-hour prior to show time. Kia Forum has a clear bag policy. All bags, including purses, will be inspected prior to entry while all patrons will go through a screening process including the use of metal detectors and pat downs as needed. Please be mindful of traffic conditions and local street closures/construction. For a list of prohibited items, please visit www.thekiaforum.com. No smoking of any substance and no electronic cigarettes are permitted in Kia Forum. No recording devices are permitted. No reentry. No outside food or beverage is permitted. There are no bag or coat check facilities. Staff is trained in the National Restaurant Association Training program. Alcohol sales will be limited to two alcoholic drinks per customer per transaction. Guests are not permitted to bring alcoholic beverages from outside Kia Forum and may not leave with alcohol purchased at Kia Forum. Management reserves the right to refuse the sale of alcohol to any guest. All guests may be required to show ID to purchase alcohol. Please be aware it is the policy of Kia Forum to require all guests who appear to be under forty (40) years of age or younger to present a valid form of ID with proof of age in order to purchase alcoholic beverages at Kia Forum. Pursuant to applicable state law, Kia Forum accepts only ID cards issued by a governmental agency that include a current description and picture of the person presenting it, which reasonably describes the person as to date of birth, weight, height, sex, and colors of eyes/hair. Kia Forum will not accept an ID that has been altered or is expired. We will also not accept a registration certificate issued under the Federal Selective Service Act.",
                                "childRule": "Events are all ages (unless noted). Everyone must have a ticket to enter the venue, regardless of age. For age restricted events a valid government issues ID will be required for entry."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 66,
                                "_total": 66,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAEkn6A?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Shakira",
                            "type": "attraction",
                            "id": "K8vZ9171xeV",
                            "test": false,
                            "url": "https://www.ticketmaster.com/shakira-tickets/artist/779049",
                            "locale": "en-us",
                            "externalLinks": {
                                "youtube": [
                                    {
                                        "url": "https://www.youtube.com/user/shakira"
                                    },
                                    {
                                        "url": "https://www.youtube.com/user/shakiraVEVO"
                                    }
                                ],
                                "twitter": [
                                    {
                                        "url": "https://twitter.com/shakira"
                                    }
                                ],
                                "itunes": [
                                    {
                                        "url": "https://itunes.apple.com/artist/id889327"
                                    }
                                ],
                                "lastfm": [
                                    {
                                        "url": "https://www.last.fm/music/Shakira"
                                    }
                                ],
                                "facebook": [
                                    {
                                        "url": "https://www.facebook.com/shakira"
                                    }
                                ],
                                "instagram": [
                                    {
                                        "url": "https://instagram.com/shakira"
                                    }
                                ],
                                "musicbrainz": [
                                    {
                                        "id": "bf24ca37-25f4-4e34-9aec-460b94364cfc"
                                    }
                                ],
                                "homepage": [
                                    {
                                        "url": "http://www.shakira-online.de/"
                                    },
                                    {
                                        "url": "http://www.shakira.com/"
                                    }
                                ]
                            },
                            "aliases": [
                                "sakira",
                                "shakira",
                                "shakira concert",
                                "shakria",
                                "sharika",
                                "sharkira",
                                "shikira",
                                "skakira"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/948/b2af9578-af9a-4d19-ba25-a8d2ef7f7948_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAev",
                                        "name": "Pop"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7vk1t",
                                        "name": "Pop"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7la",
                                        "name": "Individual"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAde",
                                        "name": "Singer/Vocalist"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "ticketmaster": 18,
                                "_total": 18,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ9171xeV?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "MAX POLLACK & AFRO-CUBAN JAZZ TAP",
                "type": "event",
                "id": "rZ7HnEZ1AK4krf",
                "test": false,
                "url": "https://www.ticketweb.com/event/max-pollack-afro-cuban-catalina-bar-grill-tickets/13546794",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    },
                    {
                        "ratio": "1_1",
                        "url": "https://i.ticketweb.com/i/00/12/32/89/24_Edp.jpg",
                        "width": 427,
                        "height": 427,
                        "fallback": false
                    }
                ],
                "distance": 6.19,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-05-25T00:35:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-07-17T01:00:00Z"
                    }
                },
                "dates": {
                    "access": {
                        "startDateTime": "2024-07-17T02:00:00Z",
                        "startApproximate": false,
                        "endApproximate": false
                    },
                    "start": {
                        "localDate": "2024-07-16",
                        "localTime": "20:30:00",
                        "dateTime": "2024-07-17T03:30:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "end": {
                        "approximate": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vkdE",
                            "name": "Afro-Cuban Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    },
                    {
                        "primary": false,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvE",
                            "name": "Jazz"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk7a",
                            "name": "Contemporary Jazz"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "info": "Max Pollak: Percussive dancer and World Music expert. He was born in Vienna, Austria and became known for his work in percussive dance, World Music, tap dance, and choreography. He created RumbaTap, which merged American Rhythm Tap with Afro-Cuban music and dance.Afro-Cuban Jazz It changed my life, Pollak recalls. We played in a big band, and I had to play different instruments and learn as much as I possibly could. The learning process included learning Afro-Cuban traditional music, like Los Muequitos de Matanzas. That really struck a chord. I told Bobby I was a tap dancer and that I wanted to tap dance to this music. He asked me if I wanted to tap dance to Cuban music, or tap dance Cuban music. Then he reached for the claves,the rhythmic base of Afro-Cuban musicand said, You have to play claves while you dance, the rest is history.Catalina Jazz Club: Housed in Hollywood and decked out in a timeless charm, the club offers a cozy ambience under sparkling stage lights garnished with its signature concoction, Jazz. Over the past 36 years, the Catalina Jazz Club has hosted the most illustrious legends of all time from Dizzy Gillespie and McCoy Tyner, to Joshua Redman, Kenny Burrell, and Steve Tyrell, among others.Catalina Jazz Club6725 West Sunset Blvd.Hollywood, CA 90028*Tickets purchased online receive priority seating.*Single Entree or Drink minimums apply for all tickets",
                "pleaseNote": "Dinner or two-drink minimum required in addition to the tickets, plus a $0.49 music royalty fee per patron. Doors open for dinner 1 1/2 hour before the first show and 1/2 hour before the second show if there is a second show. Except for Private Events. Ticket sales are final. Catalina's Management",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 30.0,
                        "max": 45.0
                    }
                ],
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/rZ7HnEZ1AK4krf?locale=en-us"
                    },
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Catalina Bar & Grill",
                            "type": "venue",
                            "id": "rZ7HnEZa7Yy",
                            "test": false,
                            "url": "https://www.ticketweb.com/venue/catalina-bar--grill-hollywood-ca/19513",
                            "locale": "en-us",
                            "distance": 6.19,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6725 W. Sunset Blvd."
                            },
                            "location": {
                                "longitude": "-118.337228",
                                "latitude": "34.098337"
                            },
                            "upcomingEvents": {
                                "ticketweb": 54,
                                "_total": 54,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/rZ7HnEZa7Yy?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Avatar - The Last Airbender",
                "type": "event",
                "id": "vvG10Zb5LQ3JPO",
                "test": false,
                "url": "https://www.ticketmaster.com/avatar-the-last-airbender-hollywood-california-11-23-2024/event/090060B7DA4A6960",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    }
                ],
                "distance": 6.45,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-05-31T14:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-11-24T04:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-05-30T14:00:00Z",
                            "endDateTime": "2024-05-31T13:59:00Z",
                            "name": "Presale Offer"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-11-23",
                        "localTime": "20:00:00",
                        "dateTime": "2024-11-24T04:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvl",
                            "name": "Other"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk1I",
                            "name": "Other"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "5431",
                    "name": "BROADWAY IN HOLLYWOOD",
                    "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                },
                "promoters": [
                    {
                        "id": "5431",
                        "name": "BROADWAY IN HOLLYWOOD",
                        "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                    }
                ],
                "info": "Avatar: The Last Airbender In Concert offers a unique opportunity for fans and music enthusiasts to fully immerse themselves in the mesmerizing world of Aang, Katara, Toph, Sokka, Zuko, and more. Composed and arranged by Jeremy Zuckerman, the mastermind behind the original music, this spectacular concert will feature a specially curated live orchestra that will breathe life into the iconic score, perfectly synchronized with the series most unforgettable moments on a full size cinema screen.",
                "pleaseNote": "Avatar: The Last Airbender In Concert offers a unique opportunity for fans and music enthusiasts to fully immerse themselves in the mesmerizing world of Aang, Katara, Toph, Sokka, Zuko, and more. Composed and arranged by Jeremy Zuckerman, the mastermind behind the original music, this spectacular concert will feature a specially curated live orchestra that will breathe life into the iconic score, perfectly synchronized with the series most unforgettable moments on a full size cinema screen.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 109.9,
                        "max": 229.9
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ DOLBY THEATRE",
                        "id": "vvG10Zb5SrLdC9",
                        "url": "https://www.ticketmaster.com/parkwhiz-dolby-theatre-hollywood-california-11-23-2024/event/090060BCDE7C3397",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    },
                    {
                        "name": "Avatar - Last Airbender Vip Experience",
                        "id": "vvG10Zb5SvGwh4",
                        "url": "https://www.ticketmaster.com/avatar-last-airbender-vip-experience-hollywood-california-11-23-2024/event/090060BCC13326D5",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7v7nJ",
                                    "name": "Upsell"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7v7lv",
                                    "name": "Special Entry"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/090060B7DA4A6960/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 2,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 8 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10Zb5LQ3JPO?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917hMg7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Dolby Theatre",
                            "type": "venue",
                            "id": "KovZpZAdtaEA",
                            "test": false,
                            "url": "https://www.ticketmaster.com/dolby-theatre-tickets-hollywood/venue/74167",
                            "locale": "en-us",
                            "aliases": [
                                "kodac theater",
                                "kodak theatre",
                                "kodac theatre",
                                "kodak theater"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22912v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 6.45,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6801 Hollywood Blvd."
                            },
                            "location": {
                                "longitude": "-118.34020235",
                                "latitude": "34.10177237"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "Dolby Theatre Administration: 323-308-6300",
                                "openHoursDetail": "NON-EVENT DAYS: Monday-Saturday 10am-5pm, Sunday 10am-4pm EVENT DAYS: Monday-Sunday 10am- 1/2 hour after scheduled start time of event.",
                                "acceptedPaymentDetail": "Cash, Visa, MasterCard, American Express and Discover. No checks are accepted.",
                                "willCallDetail": "Will Call is available for pickup during regular box office hours. Photo ID and credit card used for the purchase are required."
                            },
                            "parkingDetail": "2,000 parking spaces within a 10 minute walk, plus 3,000 parking spaces at Ovation Hollywood Center. For parking information visit: http://maps.google.com/maps?hl=en&gl=us&daddr=6801+Hollywood+Blvd,+Hollywood,+CA+90028",
                            "accessibleSeatingDetail": "Accessible seating is available by phone through Ticketmaster or Dolby Theatre. There are elevators to each level, however only the seats indicated on the seating chart are without stairs and have space to accommodate wheelchairs and motorized carts.",
                            "generalInfo": {
                                "generalRule": "The Dolby Theatre is a non-smoking facility. No outside foods or beverages. No cameras or recording devices are allowed. Rules are subject to change for some events.",
                                "childRule": "All guests require a ticket, regardless of age. Some events, rules subject to change and may not be suitable for children. Also disruptions to other guests experience may be cause to be asked to step out with no refunds or exchanges."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 20,
                                "_total": 20,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Avatar - The Last Airbender",
                            "type": "attraction",
                            "id": "K8vZ917hMg7",
                            "test": false,
                            "url": "https://www.ticketmaster.com/avatar-the-last-airbender-tickets/artist/3071251",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe6",
                                        "name": "Undefined"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v6JI",
                                        "name": "Undefined"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAAt",
                                        "name": "Touring Show/Production"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-cz": 2,
                                "mfx-se": 2,
                                "mfx-be": 2,
                                "mfx-nl": 8,
                                "tmr": 50,
                                "mfx-es": 1,
                                "ticketmaster": 59,
                                "mfx-no": 1,
                                "mfx-de": 1,
                                "_total": 126,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917hMg7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Avatar - The Last Airbender",
                "type": "event",
                "id": "vvG10Zb5LQopPq",
                "test": false,
                "url": "https://www.ticketmaster.com/avatar-the-last-airbender-hollywood-california-11-22-2024/event/090060B7DA45695D",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    }
                ],
                "distance": 6.45,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-05-31T14:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-11-23T04:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-05-30T14:00:00Z",
                            "endDateTime": "2024-05-31T13:59:00Z",
                            "name": "Presale Offer"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-11-22",
                        "localTime": "20:00:00",
                        "dateTime": "2024-11-23T04:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvl",
                            "name": "Other"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk1I",
                            "name": "Other"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "5431",
                    "name": "BROADWAY IN HOLLYWOOD",
                    "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                },
                "promoters": [
                    {
                        "id": "5431",
                        "name": "BROADWAY IN HOLLYWOOD",
                        "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                    }
                ],
                "info": "Avatar: The Last Airbender In Concert offers a unique opportunity for fans and music enthusiasts to fully immerse themselves in the mesmerizing world of Aang, Katara, Toph, Sokka, Zuko, and more. Composed and arranged by Jeremy Zuckerman, the mastermind behind the original music, this spectacular concert will feature a specially curated live orchestra that will breathe life into the iconic score, perfectly synchronized with the series most unforgettable moments on a full size cinema screen.",
                "pleaseNote": "Avatar: The Last Airbender In Concert offers a unique opportunity for fans and music enthusiasts to fully immerse themselves in the mesmerizing world of Aang, Katara, Toph, Sokka, Zuko, and more. Composed and arranged by Jeremy Zuckerman, the mastermind behind the original music, this spectacular concert will feature a specially curated live orchestra that will breathe life into the iconic score, perfectly synchronized with the series most unforgettable moments on a full size cinema screen.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 109.9,
                        "max": 229.9
                    }
                ],
                "products": [
                    {
                        "name": "PARKWHIZ DOLBY THEATRE",
                        "id": "vvG10Zb5SrrduM",
                        "url": "https://www.ticketmaster.com/parkwhiz-dolby-theatre-hollywood-california-11-22-2024/event/090060BCDE783377",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    },
                    {
                        "name": "Avatar Last Airbender Vip Experience",
                        "id": "vvG10Zb5wX6wbP",
                        "url": "https://www.ticketmaster.com/avatar-last-airbender-vip-experience-hollywood-california-11-22-2024/event/090060BCBE1F2625",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7v7nJ",
                                    "name": "Upsell"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7v7lv",
                                    "name": "Special Entry"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/090060B7DA45695D/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 2,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 8 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10Zb5LQopPq?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917hMg7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Dolby Theatre",
                            "type": "venue",
                            "id": "KovZpZAdtaEA",
                            "test": false,
                            "url": "https://www.ticketmaster.com/dolby-theatre-tickets-hollywood/venue/74167",
                            "locale": "en-us",
                            "aliases": [
                                "kodac theater",
                                "kodak theatre",
                                "kodac theatre",
                                "kodak theater"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22912v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 6.45,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6801 Hollywood Blvd."
                            },
                            "location": {
                                "longitude": "-118.34020235",
                                "latitude": "34.10177237"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "Dolby Theatre Administration: 323-308-6300",
                                "openHoursDetail": "NON-EVENT DAYS: Monday-Saturday 10am-5pm, Sunday 10am-4pm EVENT DAYS: Monday-Sunday 10am- 1/2 hour after scheduled start time of event.",
                                "acceptedPaymentDetail": "Cash, Visa, MasterCard, American Express and Discover. No checks are accepted.",
                                "willCallDetail": "Will Call is available for pickup during regular box office hours. Photo ID and credit card used for the purchase are required."
                            },
                            "parkingDetail": "2,000 parking spaces within a 10 minute walk, plus 3,000 parking spaces at Ovation Hollywood Center. For parking information visit: http://maps.google.com/maps?hl=en&gl=us&daddr=6801+Hollywood+Blvd,+Hollywood,+CA+90028",
                            "accessibleSeatingDetail": "Accessible seating is available by phone through Ticketmaster or Dolby Theatre. There are elevators to each level, however only the seats indicated on the seating chart are without stairs and have space to accommodate wheelchairs and motorized carts.",
                            "generalInfo": {
                                "generalRule": "The Dolby Theatre is a non-smoking facility. No outside foods or beverages. No cameras or recording devices are allowed. Rules are subject to change for some events.",
                                "childRule": "All guests require a ticket, regardless of age. Some events, rules subject to change and may not be suitable for children. Also disruptions to other guests experience may be cause to be asked to step out with no refunds or exchanges."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 20,
                                "_total": 20,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Avatar - The Last Airbender",
                            "type": "attraction",
                            "id": "K8vZ917hMg7",
                            "test": false,
                            "url": "https://www.ticketmaster.com/avatar-the-last-airbender-tickets/artist/3071251",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe6",
                                        "name": "Undefined"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v6JI",
                                        "name": "Undefined"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAAt",
                                        "name": "Touring Show/Production"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-cz": 2,
                                "mfx-se": 2,
                                "mfx-be": 2,
                                "mfx-nl": 8,
                                "tmr": 50,
                                "mfx-es": 1,
                                "ticketmaster": 59,
                                "mfx-no": 1,
                                "mfx-de": 1,
                                "_total": 126,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917hMg7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "name": "Avatar - The Last Airbender",
                "type": "event",
                "id": "vvG10Zb5LQKJPP",
                "test": false,
                "url": "https://www.ticketmaster.com/avatar-the-last-airbender-hollywood-california-11-23-2024/event/090060B7DA4E6965",
                "locale": "en-us",
                "images": [
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    },
                    {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    },
                    {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    },
                    {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_SOURCE",
                        "width": 2426,
                        "height": 1365,
                        "fallback": false
                    }
                ],
                "distance": 6.45,
                "units": "MILES",
                "sales": {
                    "public": {
                        "startDateTime": "2024-05-31T14:00:00Z",
                        "startTBD": false,
                        "startTBA": false,
                        "endDateTime": "2024-11-23T22:00:00Z"
                    },
                    "presales": [
                        {
                            "startDateTime": "2024-05-30T14:00:00Z",
                            "endDateTime": "2024-05-31T13:59:00Z",
                            "name": "Presale Offer"
                        }
                    ]
                },
                "dates": {
                    "start": {
                        "localDate": "2024-11-23",
                        "localTime": "14:00:00",
                        "dateTime": "2024-11-23T22:00:00Z",
                        "dateTBD": false,
                        "dateTBA": false,
                        "timeTBA": false,
                        "noSpecificTime": false
                    },
                    "timezone": "America/Los_Angeles",
                    "status": {
                        "code": "onsale"
                    },
                    "spanMultipleDays": false
                },
                "classifications": [
                    {
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAvl",
                            "name": "Other"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vk1I",
                            "name": "Other"
                        },
                        "type": {
                            "id": "KZAyXgnZfZ7v7nI",
                            "name": "Undefined"
                        },
                        "subType": {
                            "id": "KZFzBErXgnZfZ7v7lJ",
                            "name": "Undefined"
                        },
                        "family": false
                    }
                ],
                "promoter": {
                    "id": "5431",
                    "name": "BROADWAY IN HOLLYWOOD",
                    "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                },
                "promoters": [
                    {
                        "id": "5431",
                        "name": "BROADWAY IN HOLLYWOOD",
                        "description": "BROADWAY IN HOLLYWOOD / LOC / HOLLYWOOD"
                    }
                ],
                "info": "Avatar: The Last Airbender In Concert offers a unique opportunity for fans and music enthusiasts to fully immerse themselves in the mesmerizing world of Aang, Katara, Toph, Sokka, Zuko, and more. Composed and arranged by Jeremy Zuckerman, the mastermind behind the original music, this spectacular concert will feature a specially curated live orchestra that will breathe life into the iconic score, perfectly synchronized with the series most unforgettable moments on a full size cinema screen.",
                "pleaseNote": "Avatar: The Last Airbender In Concert offers a unique opportunity for fans and music enthusiasts to fully immerse themselves in the mesmerizing world of Aang, Katara, Toph, Sokka, Zuko, and more. Composed and arranged by Jeremy Zuckerman, the mastermind behind the original music, this spectacular concert will feature a specially curated live orchestra that will breathe life into the iconic score, perfectly synchronized with the series most unforgettable moments on a full size cinema screen.",
                "priceRanges": [
                    {
                        "type": "standard",
                        "currency": "USD",
                        "min": 109.9,
                        "max": 229.9
                    }
                ],
                "products": [
                    {
                        "name": "Avatar - Last Airbender Vip Experience",
                        "id": "vvG10Zb5SZdw_D",
                        "url": "https://www.ticketmaster.com/avatar-last-airbender-vip-experience-hollywood-california-11-23-2024/event/090060BCC00F267B",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7v7nJ",
                                    "name": "Upsell"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7v7lv",
                                    "name": "Special Entry"
                                },
                                "family": false
                            }
                        ]
                    },
                    {
                        "name": "PARKWHIZ DOLBY THEATRE",
                        "id": "vvG10Zb5SrOdCL",
                        "url": "https://www.ticketmaster.com/parkwhiz-dolby-theatre-hollywood-california-11-23-2024/event/090060BCDE80339F",
                        "type": "Upsell",
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7n1",
                                    "name": "Miscellaneous"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7ll",
                                    "name": "Undefined"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAv1",
                                    "name": "Undefined"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7vAva",
                                    "name": "Parking"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7vAFe",
                                    "name": "Regular"
                                },
                                "family": false
                            }
                        ]
                    }
                ],
                "seatmap": {
                    "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/090060B7DA4E6965/staticImage?type=png&systemId=HOST",
                    "id": "seatmap"
                },
                "accessibility": {
                    "ticketLimit": 2,
                    "id": "accessibility"
                },
                "ticketLimit": {
                    "info": "There is an overall 8 ticket limit for this event.",
                    "id": "ticketLimit"
                },
                "ageRestrictions": {
                    "legalAgeEnforced": false,
                    "id": "ageRestrictions"
                },
                "ticketing": {
                    "safeTix": {
                        "enabled": true,
                        "inAppOnlyEnabled": false
                    },
                    "allInclusivePricing": {
                        "enabled": false
                    },
                    "id": "ticketing"
                },
                "_links": {
                    "self": {
                        "href": "/discovery/v2/events/vvG10Zb5LQKJPP?locale=en-us"
                    },
                    "attractions": [
                        {
                            "href": "/discovery/v2/attractions/K8vZ917hMg7?locale=en-us"
                        }
                    ],
                    "venues": [
                        {
                            "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                        }
                    ]
                },
                "_embedded": {
                    "venues": [
                        {
                            "name": "Dolby Theatre",
                            "type": "venue",
                            "id": "KovZpZAdtaEA",
                            "test": false,
                            "url": "https://www.ticketmaster.com/dolby-theatre-tickets-hollywood/venue/74167",
                            "locale": "en-us",
                            "aliases": [
                                "kodac theater",
                                "kodak theatre",
                                "kodac theatre",
                                "kodak theater"
                            ],
                            "images": [
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dbimages/22912v.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                }
                            ],
                            "distance": 6.45,
                            "units": "MILES",
                            "postalCode": "90028",
                            "timezone": "America/Los_Angeles",
                            "city": {
                                "name": "Hollywood"
                            },
                            "state": {
                                "name": "California",
                                "stateCode": "CA"
                            },
                            "country": {
                                "name": "United States Of America",
                                "countryCode": "US"
                            },
                            "address": {
                                "line1": "6801 Hollywood Blvd."
                            },
                            "location": {
                                "longitude": "-118.34020235",
                                "latitude": "34.10177237"
                            },
                            "markets": [
                                {
                                    "name": "Los Angeles",
                                    "id": "27"
                                }
                            ],
                            "dmas": [
                                {
                                    "id": 223
                                },
                                {
                                    "id": 324
                                },
                                {
                                    "id": 354
                                },
                                {
                                    "id": 383
                                }
                            ],
                            "boxOfficeInfo": {
                                "phoneNumberDetail": "Dolby Theatre Administration: 323-308-6300",
                                "openHoursDetail": "NON-EVENT DAYS: Monday-Saturday 10am-5pm, Sunday 10am-4pm EVENT DAYS: Monday-Sunday 10am- 1/2 hour after scheduled start time of event.",
                                "acceptedPaymentDetail": "Cash, Visa, MasterCard, American Express and Discover. No checks are accepted.",
                                "willCallDetail": "Will Call is available for pickup during regular box office hours. Photo ID and credit card used for the purchase are required."
                            },
                            "parkingDetail": "2,000 parking spaces within a 10 minute walk, plus 3,000 parking spaces at Ovation Hollywood Center. For parking information visit: http://maps.google.com/maps?hl=en&gl=us&daddr=6801+Hollywood+Blvd,+Hollywood,+CA+90028",
                            "accessibleSeatingDetail": "Accessible seating is available by phone through Ticketmaster or Dolby Theatre. There are elevators to each level, however only the seats indicated on the seating chart are without stairs and have space to accommodate wheelchairs and motorized carts.",
                            "generalInfo": {
                                "generalRule": "The Dolby Theatre is a non-smoking facility. No outside foods or beverages. No cameras or recording devices are allowed. Rules are subject to change for some events.",
                                "childRule": "All guests require a ticket, regardless of age. Some events, rules subject to change and may not be suitable for children. Also disruptions to other guests experience may be cause to be asked to step out with no refunds or exchanges."
                            },
                            "upcomingEvents": {
                                "ticketmaster": 20,
                                "_total": 20,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/venues/KovZpZAdtaEA?locale=en-us"
                                }
                            }
                        }
                    ],
                    "attractions": [
                        {
                            "name": "Avatar - The Last Airbender",
                            "type": "attraction",
                            "id": "K8vZ917hMg7",
                            "test": false,
                            "url": "https://www.ticketmaster.com/avatar-the-last-airbender-tickets/artist/3071251",
                            "locale": "en-us",
                            "images": [
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_3_2.jpg",
                                    "width": 1024,
                                    "height": 683,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_3_2.jpg",
                                    "width": 640,
                                    "height": 427,
                                    "fallback": false
                                },
                                {
                                    "ratio": "4_3",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_CUSTOM.jpg",
                                    "width": 305,
                                    "height": 225,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_EVENT_DETAIL_PAGE_16_9.jpg",
                                    "width": 205,
                                    "height": 115,
                                    "fallback": false
                                },
                                {
                                    "ratio": "3_2",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_ARTIST_PAGE_3_2.jpg",
                                    "width": 305,
                                    "height": 203,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_16_9.jpg",
                                    "width": 1024,
                                    "height": 576,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_LANDSCAPE_16_9.jpg",
                                    "width": 1136,
                                    "height": 639,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                    "width": 2048,
                                    "height": 1152,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RETINA_PORTRAIT_16_9.jpg",
                                    "width": 640,
                                    "height": 360,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_RECOMENDATION_16_9.jpg",
                                    "width": 100,
                                    "height": 56,
                                    "fallback": false
                                },
                                {
                                    "ratio": "16_9",
                                    "url": "https://s1.ticketm.net/dam/a/87a/539f1963-7ff7-44a1-b66f-adf2824ff87a_SOURCE",
                                    "width": 2426,
                                    "height": 1365,
                                    "fallback": false
                                }
                            ],
                            "classifications": [
                                {
                                    "primary": true,
                                    "segment": {
                                        "id": "KZFzniwnSyZfZ7v7nJ",
                                        "name": "Music"
                                    },
                                    "genre": {
                                        "id": "KnvZfZ7vAe6",
                                        "name": "Undefined"
                                    },
                                    "subGenre": {
                                        "id": "KZazBEonSMnZfZ7v6JI",
                                        "name": "Undefined"
                                    },
                                    "type": {
                                        "id": "KZAyXgnZfZ7v7lt",
                                        "name": "Event Style"
                                    },
                                    "subType": {
                                        "id": "KZFzBErXgnZfZ7vAAt",
                                        "name": "Touring Show/Production"
                                    },
                                    "family": false
                                }
                            ],
                            "upcomingEvents": {
                                "mfx-cz": 2,
                                "mfx-se": 2,
                                "mfx-be": 2,
                                "mfx-nl": 8,
                                "tmr": 50,
                                "mfx-es": 1,
                                "ticketmaster": 59,
                                "mfx-no": 1,
                                "mfx-de": 1,
                                "_total": 126,
                                "_filtered": 0
                            },
                            "_links": {
                                "self": {
                                    "href": "/discovery/v2/attractions/K8vZ917hMg7?locale=en-us"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    "_links": {
        "first": {
            "href": "/discovery/v2/events?unit=miles&keyword=Concert&radius=10&geoPoint=34.0549076%2C-118.242643&page=0&size=20"
        },
        "self": {
            "href": "/discovery/v2/events?unit=miles&keyword=Concert&radius=10&geoPoint=34.0549076%2C-118.242643"
        },
        "next": {
            "href": "/discovery/v2/events?unit=miles&keyword=Concert&radius=10&geoPoint=34.0549076%2C-118.242643&page=1&size=20"
        },
        "last": {
            "href": "/discovery/v2/events?unit=miles&keyword=Concert&radius=10&geoPoint=34.0549076%2C-118.242643&page=1&size=20"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 35,
        "totalPages": 2,
        "number": 0
    }
}
};

export const getKeywordSuggestions = createAsyncThunk<
    AxiosResponse<any, any>,
    string,
    { rejectValue: string }
>("getKeywordSuggestions", async (keyword, thunkAPI) => {
    try {
        const resp = axiosInstance.get(
            `/api/keyword-suggestions?keyword=${keyword}`,
        );
        return resp;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getEvents = createAsyncThunk<
    AxiosResponse<any, any>,
    any,
    { rejectValue: string }
>("getEvents", async (params, thunkAPI) => {
    try {
        let url = `/api/events?`;
        const resp = axiosInstance.get(url);
        return resp;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getKeywordSuggestions.fulfilled, (state, action) => {
                state.suggestions = action.payload.data;
            })
            .addCase(getKeywordSuggestions.rejected, (state, action) => {
                state.suggestions = [];
            });
    },
});

export const {} = ticketSlice.actions;
export default ticketSlice.reducer;
