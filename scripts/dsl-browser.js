
var imageData = getImageList();
var is_display_wall;

// Look for ?display-number=N in URL
// save as array index - e.g. display-number=1 gets stored as displayNumber = 0;

var displayNumber = (window.location.search.search(/display-number=\d+/) !== -1
                      ? parseInt(window.location.search.match(/display-number=(\d+)/)[1]) - 1
                      : -1);

// Set up Pusher service

// Enable pusher logging - don't include this in production

Pusher.log = function (message) {
  if (window.console && window.console.log) window.console.log(message);
};

var pusher  = new Pusher('ccd0e24bbd911bcef19d');
var channel = pusher.subscribe('DSL-1');

channel.bind('my_event', function (data) {

  if (  displayNumber > -1 
        && imageData[data].secondary_image_urls !== undefined
        && imageData[data].secondary_image_urls[displayNumber] !== undefined ) {
        
    openImage(imageData[data].secondary_image_urls[displayNumber]);
  } else {
    openImage(imageData[data].image_url);
  }
});

// Function to open image

function openImage(imageUrl) {
  document.body.style.backgroundImage = "url('" + imageUrl + "')";
}

// onload function

$(function() {

  // Check if we're displaying on the wall
  
  is_display_wall = ($(window).width() > 5000);
  
  // If using display wall, show the navigation
  
  if (is_display_wall) { $('body').addClass('show-nav') }
});

// Can this be pulled from JSON without putting it through Apache? 

function getImageList() {

  return [
  {
    "name": "Welcome to the Patrick Ma Digital Scholarship Lab",
    "category": "isotope-item banner",
    "tile_height": 3,
    "tile_width": 2,
    "image_url": "",
    "blurb": "<p>Select a topic to view on the display wall, or use the filters above to narrow your options.<\/p>"
  },
  {
    "name": "Archaeology in the field",
    "category": "isotope-item research archeology",
    "image_url": "materials/Sherds/In-the-field.jpg"
  },
  {
    "name": "Archaeology in the DSL",
    "category": "isotope-item research archeology",
    "image_url": "materials/Sherds/Sherds.png"
  },
  {
    "name": "Massimo Riva class",
    "category": "isotope-item teaching",
    "image_url": "materials/Massimo-class/Massimo-class.png"
  },
  {
    "name": "John Cayley performance",
    "category": "isotope-item teaching performance",
    "image_url": "materials/Classes/Cayley/Caleyvideowalldec10.jpg"
  },
  {
    "name": "Digital Storytelling",
    "category": "isotope-item teaching",
    "image_url": "materials/Classes/Denmead/Digital-storytelling.jpg"
  },
  {
    "name": "Exhibition design",
    "category": "isotope-item teaching",
    "image_url": "materials/Classes/Lubar/Lubar_2013-03-08.jpg"
  },
  {
    "name": "Sobral 1",
    "category": "isotope-item teaching",
    "image_url": "materials/Classes/Sobral/Sobral-1.jpg"
  },
  {
    "name": "Sobral 2",
    "category": "isotope-item teaching",
    "image_url": "materials/Classes/Sobral/Sobral-2.jpg"
  },
  {
    "name": "The Moon",
    "category": "isotope-item images",
    "image_url": "materials/Moon/Moon.png"
  },
  {
    "name": "Wood maps",
    "category": "isotope-item visualization",
    "image_url": "materials/Wood-map/Wood-map.png"
  },
  {
    "name": "Cars",
    "category": "isotope-item visualization blackText",
    "icon_image": "images/icons/Cars.png",
    "image_url": "materials/Car-less/Car_less.png"
  },
  {
    "name": "What if?",
    "category": "isotope-item visualization",
    "image_url": "materials/What_if_election/What_if.png"
  },
  {
    "name": "Quickest path",
    "category": "isotope-item visualization",
    "image_url": "materials/Quickest-path/Quickest-path.png"
  },
  {
    "name": "Basketball strategy",
    "category": "isotope-item visualization blackText",
    "icon_image": "images/icons/Basketball.png",
    "image_url": "materials/Basketball-network/Basketball-network.png"
  },
  {
    "name": "Orwell's 1984",
    "category": "isotope-item images",
    "image_url": "materials/Orwell/Orwell.png"
  },
  {
    "name": "Literature on a Palm Leaf",
    "category": "isotope-item images",
    "image_url": "materials/Palm-leaf/Palm-leaf.png"
  },
  {
    "name": "Bartok",
    "category": "isotope-item images",
    "image_url": "materials/Notation-compare/Notation-compare.png"
  },
  {
    "name": "Renaissance manuscript",
    "category": "isotope-item images",
    "image_url": "materials/Renaissance-manuscript/Renaissance-manuscript.png"
  },
  {
    "name": "The Elliot Bible",
    "category": "isotope-item images blackText",
    "icon_image": "images/icons/Elliot_bible.png",
    "image_url": "materials/Eliot-bible/Bible.png"
  },
  {
    "name": "A March dedicated to Lincoln",
    "category": "isotope-item images",
    "image_url": "materials/Lincoln-song/Lincoln-song.png"
  },
  {
    "name": "Garibaldi",
    "category": "isotope-item images",
    "icon_image": "images/icons/Garibaldi.png",
    "image_url": "materials/Garabaldi/Garabaldi.png"
  },
  {
    "name": "Digital Story 1",
    "category": "isotope-item teaching",
    "image_url": "materials/Kim/Exhibitgroup1a.png"
  },
  {
    "name": "Digital Story 2",
    "category": "isotope-item teaching",
    "image_url": "materials/Kim/Exhibitgroup2b.png"
  },
  {
    "name": "Digital Story 3",
    "category": "isotope-item teaching",
    "image_url": "materials/Kim/Exhibitgroup3.png"
  },
  {
    "name": "Intro",
    "category": "isotope-item images kim-arcand",
    "image_url": "materials/Kim/0_Intro.png",
    "secondary_image_urls": [
      "materials/Kim/0_Intro_cart1.jpg",
      "materials/Kim/0_Intro_cart2.jpg"
    ]
  },
  {
    "name": "City Lights",
    "category": "isotope-item images kim-arcand",
    "icon_image": "images/icons/City_lights.png",
    "image_url": "materials/Kim/1_CityLights.png",
    "secondary_image_urls": [
      "materials/Kim/1_CityLights_cart1.jpg",
      "materials/Kim/1_CityLights_cart2.jpg"
    ]
  },
  {
    "name": "Mount Sharp",
    "category": "isotope-item images kim-arcand s22",
    "tile_height": 2,
    "tile_width": 2,
    "icon_image": "images/icons/Mars.png",
    "image_url": "materials/Kim/2_MtSharp.png"
  },
  {
    "name": "The Sun",
    "category": "isotope-item images kim-arcand s22",
    "tile_height": 2,
    "tile_width": 2,
    "icon_image": "images/icons/Sun.png",
    "image_url": "materials/Kim/3_Sun.png"
  },
  {
    "name": "Vela",
    "category": "isotope-item images kim-arcand",
    "icon_image": "images/icons/Vela.png",
    "image_url": "materials/Kim/4_Vela.png"
  },
  {
    "name": "Carina Nebula",
    "category": "isotope-item images kim-arcand",
    "icon_image": "images/icons/Carina.png",
    "image_url": "materials/Kim/5_Carina.png"
  },
  {
    "name": "G Center",
    "category": "isotope-item images kim-arcand",
    "image_url": "materials/Kim/6_GCenter.png"
  },
  {
    "name": "Andromeda Galaxy",
    "category": "isotope-item images kim-arcand",
    "image_url": "materials/Kim/7_Andromeda.png"
  },
  {
    "name": "Deep Field",
    "category": "isotope-item images kim-arcand",
    "image_url": "materials/Kim/8_DeepField.png"
  },
  {
    "name": "Hackfest",
    "category": "isotope-item promotion",
    "image_url": "materials/hackfest2013/hackfest2013.png"
  },
  {
    "name": "DSL Plan",
    "category": "isotope-item images",
    "image_url": "materials/Lab-plan/Lab-plan.png"
  },
  {
    "name": "Aral Sea",
    "category": "isotope-item images",
    "icon_image": "images/icons/Aral.png",
    "image_url": "materials/Aral-sea/aral_sea.png"
  },
  {
    "name": "Chemical model",
    "category": "isotope-item images",
    "image_url": "materials/Molecule/molecule.png"
  },
  {
    "name": "Australian Bushfires",
    "category": "isotope-item images",
    "image_url": "materials/Bushfires/Bushfires.png"
  },
  {
    "name": "Rome",
    "category": "isotope-item images",
    "image_url": "materials/Rome/Rome.png"
  },
  {
    "name": "Animals",
    "category": "isotope-item visualization",
    "image_url": "materials/Tree_of_life/Animals.png"
  },
  {
    "name": "Photo BG",
    "category": "isotope-item images",
    "image_url": "../show_off/photo_bg/photo_bg.png"
  },
  {
    "name": "Diane",
    "category": "isotope-item images",
    "image_url": "materials/Diane/Diane.jpg"
  },
  {
    "name": "Tree 1",
    "category": "isotope-item images",
    "image_url": "materials/tree_1.jpg"
  },
  {
    "name": "Tree 2",
    "category": "isotope-item images",
    "image_url": "materials/tree_2.png"
  },
  {
    "name": "Tree 3",
    "category": "isotope-item images",
    "image_url": "materials/tree_3.jpg"
  }
]
}