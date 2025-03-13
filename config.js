var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1IjoianVzdGlubGMiLCJhIjoiY204NzB3bmx3MGI0ZTJub21ubjNob291NSJ9.SzctpQNqR7ytFTQJ8snO9w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Invasive New Zealand Mud Snail',
    subtitle: 'One of Washingtons Fastest Growing Invasive Threats',
    byline: 'By Ty Mellish and Justin Callejo',
    footer: 'Source: USGS, Washington Geospatial Open Data Portal, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'national-sightings',
            alignment: 'right',
            hidden: false,
            title: 'National Sightings',
            image: 'images/side.png',
            description: 'The New Zealand Mud Snail (NZMS) was first found in a basin of the Snake River in Idaho, 1987. Since then, it has spread to a majority of the Pacific Northwest, and across many waterbodies of the United States, spanning even to the east coast. NZMS is known to have many negative effects on native populations, affecting invertebrates of the same tier in the food chain, with rippling effects to larger populations such as salmon and other native fish. NZMS is one of the fastest spreading, and most damaging freshwater invasive species that North America is currently dealing with, and its spread could be disastrous for North American biodiversity. Hover over any sighting to see additional information.',
            location: {
                center: [-95.5795, 41.9283],
                zoom: 3.75,
                pitch: 0,
                bearing: 0,
                speed:1
                // flyTo additional controls-
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'majorlakes',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'streams',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'waterbodies',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'watersheds',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'locations',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'maitenance',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'nas-sightings',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'snail-sightings',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'salmon-locations',
                    opacity: 0,
                    duration: 0
                }

            ],
            onChapterExit: [
                {
                    layer: 'nas-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'snail-sightings',
                    opacity: 0,
                    duration: 0
                }
            ]
        },
        {
            id: 'washington-locations',
            alignment: 'right',
            hidden: false,
            title: 'Washington Reported Locations',
            image: 'images/penny.png',
            description: 'Washington is one of the places where NZMS has the greatest impact, with densities approaching up to 750,000 per meter squared, able to consume food sources valuable to other native invertebrates at levels as high as 50%. This leads to native populations of integral invertebrate and insect populations being pushed out of their natural habitat, and a loss in population. Some affected species include mayflies, and native snail populations such as the Amnicola. The Washington Invasive Species Council (WISC) have marked the New Zealand Mud Snail to be a priority invasive species, and a high invasive threat to Washington biodiversity and the health of the environment. the graph below shows cumulative NZMS sightings in Washington state.',
            location: {
                center: [-118.7401, 47.2511], 
                zoom: 6.5,                     
                pitch: 0,                   
                bearing: 0,
                speed: 1
                // flyTo additional controls-
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'renderWashingtonGraph',
            onChapterEnter: [
                {
                    layer: 'majorlakes',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'streams',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'waterbodies',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'watersheds',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'maitenance',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'locations',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'nas-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'snail-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'salmon-locations',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'washington-water',
            alignment: 'left',
            hidden: false,
            title: 'Infested Waterbodies and Streams',
            image: 'images/dense.jpg',
            description: 'In red are the NZMS infested waterbodies and streams in Washington, while in blue are the non-infested ones as of now. One of the worst features of the NZMS is the ease at which it is transferred to different location and waterbodies, latching on to kayaks and paddleboard, or the clothes of people entering infested waterbodies. This is the main method that has allowed the spread of the NZMS, as well as through transportation of livestock and pets. The NZMS can pass through the digestive system of most fish unharmed, which means that it can often hitch a ride through fish either naturally or through human interference such as hunting and restocking.',
            location: {
                center: [-122.7401, 47.2511], 
                zoom: 6.5,                  
                pitch: 0,                 
                bearing: 0,
                speed: 0.5
                // flyTo additional controls-
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'majorlakes',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'watersheds',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'locations',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'maitenance',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'streams',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'waterbodies',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'nas-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'snail-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'salmon-locations',
                    opacity: 0,
                    duration: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'salmon-lines',
            alignment: 'right',
            hidden: false,
            title: 'Sockeye Salmon Population',
            image: 'images/salmon-chart.png',
            description: 'Another consequence of the NZMS being able to pass through a digestive system safely, is that when eaten by fish or other species, they give essentially zero nutritional value. This, especially when paired with the pushing out of other native food sources, can have a very negative impact on native fish populations, one of which being salmon. Seen here in yellow is the Sockeye salmon spawn and eventually are born to travel to the puget sound, shown in red on the next page are the locations of NZMS infestation.',
            location: {
                center: [-118.7401, 47.2511], 
                zoom: 6.5,                     
                pitch: 0,                   
                bearing: 0,
                speed: 1
                // flyTo additional controls-
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'majorlakes',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'streams',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'waterbodies',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'watersheds',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'maitenance',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'locations',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'nas-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'snail-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'salmon-locations',
                    opacity: 1,
                    duration: 500
                }

            ],
            onChapterExit: [
            ]
        },
        {
            id: 'washington-water-with-salmon',
            alignment: 'left',
            hidden: false,
            title: 'Infested Waterbodies and Streams With Salmon',
            image: 'images/salmon.jfif',
            description: 'The Sockeye salmon population in Washington is considered to be “in crisis” by the Washington State Governors Salmon Recovery Office, and many of the spawning areas for salmon, the point in their life where they need the most nutritional food, are infested with NZMS. This is perhaps the salmon population that is most in danger in the state of Washington, but the impact of NZMS is not exclusively on Sockeye populations. NZMS is having a wide scale effect on many levels of Washington and other states native ecosystems, some of which may have disastrous consequences to the native populations and biodiversity. Even the image above is actually sourced from an article announcing that the NZMS was found in the Lake Sonoma fish hatchery in California.',
            location: {
                center: [-122.7401, 47.2511], 
                zoom: 6.5,                  
                pitch: 0,                 
                bearing: 0,
                speed: 0.5
                // flyTo additional controls-
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'majorlakes',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'watersheds',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'locations',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'maitenance',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'streams',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'waterbodies',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'nas-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'snail-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'salmon-locations',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'washington-maitenance',
            alignment: 'right',
            hidden: false,
            title: 'Containment and Control Efforts',
            image: 'images/snail-efforts.webp',
            description: 'Shown here in green is the Washington State maintenance areas for the NZMS specifically. They are all roads close to waters infested with NZMS that have been labeled as high risk for transmission of the invasive species. The Washington Invasive Species Council (WISC) has several resources to report NZMS sightings, and guides to distinguish it from the native species, and prevent spread when engaging with Washington freshwater resources.',
            location: {
                center: [-118.7401, 47.2511], 
                zoom: 6.5,                     
                pitch: 0,                   
                bearing: 0,
                speed: 0.5
                // flyTo additional controls-
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'majorlakes',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'maitenance',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'locations',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'streams',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'waterbodies',
                    opacity: 0.75,
                    duration: 0
                },
                {
                    layer: 'watersheds',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'nas-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'snail-sightings',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'salmon-locations',
                    opacity: 0,
                    duration: 0
                }
                
            ],
            onChapterExit: [
            ]
        }
    ]
};
