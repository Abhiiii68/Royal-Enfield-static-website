function fn(userInput) {
    // --------- Motorcycle section ------------------
    if (userInput == 'shotgun650') {
        document.getElementById('motorImg').src = "./image/motorcycleimages/motor.jpg"
    } else if (userInput == "newHimalayan") {
        document.getElementById('motorImg').src = "./image/motorcycleimages/himalayan-home-motorcycle.avif"
    } else if (userInput == "bullet350") {
        document.getElementById('motorImg').src = "./image/motorcycleimages/bullet-350-new.avif"
    } else if (userInput == "interceptor") {
        document.getElementById('motorImg').src = "./image/motorcycleimages/interceptor_650_motorcycle.jpg"
    } else if (userInput == "continentalGT") {
        document.getElementById('motorImg').src = "./image/motorcycleimages/continental_gt_650_motorcycle.webp"
    } else if (userInput == "superMeteor650") {
        document.getElementById('motorImg').src = "./image/motorcycleimages/super-meteor-650.avif"
    } else if (userInput == "hunter350") {
        document.getElementById('motorImg').src = "./image/motorcycleimages/hunter-350-motorcycle.jpg"
    }
    // ------ Rides section ------------------
    else if (userInput == 'waveRunner') {
        document.getElementById('rideImg').src = './image/rideimges/himalayan-tibet.jpg'
    } else if (userInput == 'cruiseBrews') {
        document.getElementById('rideImg').src = './image/rideimges/cruise-brews.png'
    } else if (userInput == 'cosmicCaravan') {
        document.getElementById('rideImg').src = './image/rideimges/himalayan-manang-registrations-closed.avif'
    } else if (userInput == 'motoverse') {
        document.getElementById('rideImg').src = './image/rideimges/motoverse-2024.jpg'
    } else if (userInput == 'trackSchool') {
        document.getElementById('rideImg').src = './image/rideimges/treak1.png'
    } else if (userInput == 'GTcup') {
        document.getElementById('rideImg').src = './image/rideimges/gt cupmain-banner-2023.jpg'
    } else if (userInput == 'rentals') {
        document.getElementById('rideImg').src = './image/rideimges/royal-enfield-rentals.avif'
    }
    // ------- Apparel section ---------------
    else if (userInput == 'shotgun2650') {
        document.getElementById('apparelImg').src = './image/apparelimages/apparel.avif'
    } else if (userInput == 'royalAlpinestar') {
        document.getElementById('apparelImg').src = './image/apparelimages/royal-enfield-x-alpinestar.jpg'
    } else if (userInput == 'royalTCX') {
        document.getElementById('apparelImg').src = './image/apparelimages/royal-enfield-tcx.jpg'
    } else if (userInput == 'miyJacket') {
        document.getElementById('apparelImg').src = './image/apparelimages/miy-riding-jacket.avif'
    }

    // --------- Accessories section ----------
    else if (userInput == 'genuineAccessories') {
        document.getElementById('accessoriesImg').src = './image/accessoriesimage/shot-gun-gma-banner-1.jpg'
    } else if (userInput == 'makeItYours') {
        document.getElementById('accessoriesImg').src = './image/accessoriesimage/himalayan-homepage-accessories2-miy.avif'
    }

    // --------- Locate Us section ----------
    else if (userInput == 'stores') {
        document.getElementById('locateImg').src = './image/locateimages/dealers-home-new.jpg'
    } else if (userInput == 'serviceCentres') {
        document.getElementById('locateImg').src = './image/locateimages/service-centres.jpg'
    } else if (userInput == 'genuineParts') {
        document.getElementById('locateImg').src = './image/locateimages/genuine-parts.avif'
    } else if (userInput == 'goaGarage') {
        document.getElementById('locateImg').src = './image/locateimages/goa-garage-cafe-new.avif'
    }

}



function showcolor(socialMediaName) {
    
    switch (socialMediaName) {

        case 'twitter':
           event.target.src ='images/twitter_color.png';
            break;
        case 'facebook':
           event.target.src="images/facebook_color.png";
            break;
        case 'youtube':
            event.target.src="images/youtube_color.png";
            break;
        case 'linkedin':
            event.target.src="images/linkedin_color.png";
            break;
        case 'instagram':
            event.target.src="images/instagram_color.png";
            break;
        default:
            break;
    }
}

function hidecolor(socialMediaName) {
    
    switch (socialMediaName) {

        case 'twitter':
           event.target.src ='images/twitter.png';
            break;
        case 'facebook':
           event.target.src="images/facebook.png";
            break;
        case 'youtube':
            event.target.src="images/youtube.png";
            break;
        case 'linkedin':
            event.target.src="images/linkedin.png";
            break;
        case 'instagram':
            event.target.src="images/instagram.png";
            break;
        default:
            break;
    }
}
