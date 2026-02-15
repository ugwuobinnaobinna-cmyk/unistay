 const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'
    : window.location.origin;


 
 let currentHouseIndex = 0;
        let currentModalHouse = null;
        let currentModalImageIndex = 0;
        let currenthousingData = [];


        // Sample housing data
        const housingData = [
            {
                id: 1,
                title: "Self-contain",
                location: "Behind flat",
                price: 250000,
                bedrooms: "1",
                bathrooms: 1,
                furnished: "UnFurnished",
                description: [
                    "Selfcon(PVC) available in Behind-flat",
                    "Good light supply and water",
                    "A spacious kitchen with good ventilation"
                ],
                images: ["./images/selfcontain.jpg", "./images/house1a.jpg", "./images/house1b.jpg", "./images/house1c.jpg"],
                badge: "Popular"
            },
            {
                id: 2,
                title: "2-Bedroom flat",
                location: "Odim",
                price: 700000,
                bedrooms: 2,
                bathrooms: 2,
                furnished: "UnFurnished",
                description: "Spacious 2-bedroom house with modern amenities. Includes fully equipped kitchen, spacious living room, and private compound. Ideal for 2-3 students. Features include air conditioning, modern fixtures, and 24/7 security.",
                images: ["./images/2bedroom.jpg", "./images/house2a.jpeg", "./images/house2b.jpeg", "./images/house2c.jpeg", "./images/house2d.jpeg", "./images/house2e.jpeg"],
                badge: "New"
            },
            {
                id: 3,
                title: "Self-contain Single room",
                location: "Hill-top",
                price: 350000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "UnFurnished",
                description: "Modern selfcon single room with running water for at least 5 hours a day. Features include proper ventilation and a medium size balcony, and well-maintained compound. Perfect for small groups seeking luxury and comfort.",
                images: ["./images/house3a.jpg", "./images/house3b.jpg", "./images/house3c.jpg", "./images/house3d.jpg"],
                badge: "Budget"
            },
            {
                id: 4,
                title: "Fully Spacious room and parlour Self-contain",
                location: "Behind flat",
                price: 500000,
                bedrooms: "Studio",
                bathrooms: 1,
                bathrooms: 1,
                furnished: "Semi-Furnished",
                description: "fully spacious room and parlour and a big bedroom big enough for two students. Close to market and food vendors. Secure and well-lit environment with 24/7 security.",
                images: ["./images/house4cover.jpg", "./images/house4a.jpg", "./images/house4b.jpg", "./images/house4c.jpg",],
                badge: "Budget"
            },
            {
                id: 5,
                title: "Room and parlour",
                location: "Odenigwe",
                price: 320000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "a lartge room and parlour with a large size bedroom to contain two students. Located in a quiet neighborhood with good road access direct to the school premises.",
                images: ["./images/house5a.jpg", "./images/house5b.jpg", "./images/house5c.jpg", "./images/house5d.jpg",],
                badge: "Spacious"
            },
            {
                id: 6,
                title: "Single Room Selfcontain",
                location: "Behind flat",
                price: 400000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Semi Furnished",
                description: "Contemporary 1-bedroom room with modern style constructed room with high quality ventilation and running water with constant light. Located in a secured estate with 24/7 security and modern amenities.",
                images: ["./images/house6.jpg", "./images/house6a.jpg", "./images/house6b.jpg", "./images/house6c.jpg"],
                badge: "Modern"
            },
            {
                id: 7,
                title: "Student Lodge",
                location: "Odim",
                price: 180000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "a very budget friendly single room selfcon. Includes shared kitchen and a bathroom.",
                images: ["./images/house7a.jpg", "./images/house7b.jpg", "./images/house7c.jpg", "./images/house7d.jpg",],
                badge: "Budget"
            },
            {
                id: 8,
                title: "A single room apartment",
                location: "Onuiyi",
                price: 450000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Fully Furnished",
                description: "A large single room apartment for someone looking for space and comfort. Perfect for a group of 2 seeking comfort and luxury in a premium location.",
                images: ["./images/house8a.jpg", "./images/house8b.jpg", "./images/house8c.jpg", "./images/house8d.jpg", "./images/house8e.jpg",],
                badge: "Premium"
            },
            {
                id: 9,
                title: "Single room selfcon",
                location: "Hilltop",
                price: 185000,
                bedrooms: "1",
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "Affordable student style  for students on a tight budget. Basic amenities with potential for personal customization. Close to public transport and essential services, and a loacation very close to school",
                images: ["./images/house9a.jpg", "./images/house9b.jpg", "./images/house9c.jpg", "./images/house9d.jpg",],
                badge: "Budget"
            },
            {
                id: 10,
                title: "A spacious single room",
                location: "Odenigwe",
                price: 300000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "Modern single room. Features include parking space for students with motorcycles, and modern kitchen. Located near river with scenic views and peaceful environment.",
                images: ["./images/house10a.jpg", "./images/house10b.jpg", "./images/house10c.jpg", "./images/house10d.jpg", "./images/house10e.jpg",],
                badge: "Scenic"
            },
            {
                id: 11,
                title: "Luxury single room ",
                location: "Odim",
                price: 600000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "Premium designed with high-end finishes. Features include panoramic views, and fully spacious kitchen bathrooms and also balcony.",
                images: ["./images/house11a.jpg", "./images/house11b.jpg", "./images/house11c.jpg", "./images/house11d.jpg", "./images/house11e.jpg",],
                badge: "Luxury"
            },
            {
                id: 12,
                title: "Traditional Compound Selfcon",
                location: "Behind flat",
                price: 150000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "Traditional compound style accommodation with cultural elements. Includes multiple rooms and shared common areas. Located in a historic neighborhood with rich cultural heritage.",
                images: ["./images/house12a.jpg", "./images/house12b.jpg", "./images/house12c.jpg", "./images/house12d.jpg", "./images/house12e.jpg",],
                badge: "Heritage"
            },
            {
                id: 13,
                title: "Luxry 2 Bedroom Apartment",
                location: "Onuiyi",
                price: 700000,
                bedrooms: 2,
                bathrooms: 2,
                furnished: "Unfurnished",
                description: " A luxurious 2 bedroom Apartment with a fully spacious sitting room, 2 bathrooms for each rooms a spacious kitchen and a big sized balcony",
                images: ["./images/house13a.jpg", "./images/house13b.jpg", "./images/house13c.jpg", "./images/house13d.jpg", "./images/house13e.jpg",],
                badge: "Luxry"
            },
            {
                id: 14,
                title: "A three bedroom Apartment ",
                location: "Hilltop",
                price: 1500000,
                bedrooms: 3,
                bathrooms: 3,
                furnished: "Unfurnished",
                description: "a high class apartment fully equiped for 3 to 4 sstudents in a high quality area with at least 22 hours light daily,running water, 24/7 security ",
                images: ["./images/house14a.jpg", "./images/house14b.jpg", "./images/house14c.jpg", "./images/house14d.jpg", "./images/house14e.jpg",],
                badge: "Luxury"
            },
            {
                id: 15,
                title: "luxry Bungalow Apartment",
                location: "Behind flat",
                price: 1800000,
                bedrooms: 3,
                bathrooms: 3,
                furnished: "Unfurnished",
                description: "A luxry 4 room apartment equiped with all basic neeed like running water,constant electricity,a very spacious kitchen with three bathroom a a spacious compound for parking.",
                images: ["./images/house15a.jpg", "./images/house15b.jpg", "./images/house15c.jpg", "./images/house16d.jpg", "./images/house16e.jpg",],
                badge: "Comfort"
            },
            {
                id: 16,
                title: "Single room selfcon",
                location: "Onuiyi",
                price: 250000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "Modern selfcon single room with running water for at least 5 hours a day. Features include proper ventilation and a medium size balcony, and well-maintained compound. Perfect for small groups seeking luxury and comfort. ",
                images: ["./images/house16a.jpg", "./images/house16b.jpg", "./images/house16c.jpg", "./images/house16d.jpg", "./images/house16e.jpg",],
                badge: "Popular"
            },
            {
                id: 17,
                title: "2 Bedroom Apartment",
                location: "Odenigwe",
                price: 700000,
                bedrooms: 2,
                bathrooms: 2,
                furnished: "Unfurnished",
                description: "Modern single room. Features include parking space for students with motorcycles, and modern kitchen. Located near river with scenic views and peaceful environment.",
                images: ["./images/house17a.jpg", "./images/house17b.jpg", "./images/house17c.jpg", "./images/house17d.jpg",],
                badge: "New"
            },
            {
                id: 18,
                title: "Luxury single room",
                location: "Odim",
                price: 300000,
                bedrooms: 1,
                bathrooms: 1,
                furnished: "Unfurnished",
                description: "fully spacious room and parlour and a big bedroom big enough for two students. Close to market and food vendors. Secure and well-lit environment with 24/7 security.",
                images: ["./images/house18a.jpg", "./images/house18b.jpg", "./images/house18c.jpg", "./images/house18d.jpg", "./images/house18e.jpg",],
                badge: "New"
            },


        ];




        // DOM Elements
        const housingGrid = document.getElementById('housingGrid');
        const searchInput = document.getElementById('searchInput');
        const bedroomsFilter = document.getElementById('bedroomsFilter');
        const furnishingFilter = document.getElementById('furnishingFilter');
        const priceFilter = document.getElementById('priceFilter');
        const modal = document.getElementById('modal');
        const closeModal = document.getElementById('closeModal');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalLocation = document.getElementById('modalLocation');
        const modalBedrooms = document.getElementById('modalBedrooms');
        const modalBathrooms = document.getElementById('modalBathrooms');
        const modalFurnished = document.getElementById('modalFurnished');
        const modalDescription = document.getElementById('modalDescription');
        const modalBadge = document.getElementById('modalBadge');

        let currentHouse = [...housingData];
        let currentIndex = 0;

       function renderHousing(houses) {
    const housingGrid = document.getElementById('housingGrid');
    if (!housingGrid) return;
    housingGrid.innerHTML = '';

    houses.forEach((house, index) => {
        const card = document.createElement('div');
        card.className = 'housing-card';
       

        // 1. SAFETY: Use _id if id is missing (for MongoDB houses)
        const houseId = house.id || house._id;

         card.setAttribute('data-id', houseId);
// Safety check: ensure imagesToDisplay is ALWAYS an array
const imagesToDisplay = Array.isArray(house.images) ? house.images : [house.images || 'default-house.jpg'];

const sliderHtml = imagesToDisplay.map((img, i) => `
    <div class="slide ${i === 0 ? 'active' : ''}" style="background-image: url('${img}')"></div>
`).join('');
              card.innerHTML = `
    <div class="slider-container">
        ${sliderHtml}
        <div class="card-badge">${house.badge || 'New'}</div>
        <div class="slider-btns">
            <button class="prev-btn" onclick="moveSlide(this, -1)">❮</button>
            <button class="next-btn" onclick="moveSlide(this, 1)">❯</button>
        </div>
    </div>
    <div class="card-content">
        <h3 class="card-title">${house.title || 'Untitled Property'}</h3>
        <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${house.location || 'Location Pending'}</p>
        <div class="card-price">
            ₦${house.price ? Number(house.price).toLocaleString() : 'Negotiable'}
        </div>
        <div class="card-features">
            <span><i class="fas fa-bed"></i> ${house.bedrooms || 0}</span>
            <span><i class="fas fa-bath"></i> ${house.bathrooms || 0}</span>
            <span><i class="fas fa-couch"></i> ${house.furnished || 'Standard'}</span>
        </div>
     
<button class="mini-delete-btn" onclick="deleteHouse('${houseId}')">&times;</button>


    </div>
`;
                // Fixes the typo from your photo [cite: 332]
                card.addEventListener('click', (e) => {
                    if (e.target.closest('.slider-btn')) {
                        return; x
                    }
                    card.classList.toggle('show-controls');
                    openModal(house, index);
                });

                housingGrid.appendChild(card);
            });
        }



        
        function filterHouses() {
            // 1. Grab the current values from the screen
            const searchTerm = searchInput.value.toLowerCase();
            const locValue = locationFilter.value; // Using a unique name 'locValue'
            const bedValue = bedroomsFilter.value;
            const furnValue = furnishingFilter.value;
            const priceValue = priceFilter.value;

            // 2. Filter the array
            currentFilteredHouses = housingData.filter(house => {
                // Search check
                const matchesSearch = house.title.toLowerCase().includes(searchTerm) ||
                    house.location.toLowerCase().includes(searchTerm);

                // Location check (Fixed to avoid ReferenceError)
                const matchesLocation = locValue === "" || locValue === "All" || house.location === locValue;

                // Bedrooms check
                const matchesBedrooms = bedValue === "" || bedValue === "All" ||
                    (bedValue === 'Studio' ? house.bedrooms === 'Studio' : house.bedrooms.toString() === bedValue);

                // Furnishing check
                const matchesFurnishing = furnValue === "" || furnValue === "All" || house.furnished === furnValue;

                // Price correlation check (Math comparison)
                const matchesPrice = priceValue === "" || priceValue === "All" || Number(house.price) <= Number(priceValue);

                // Only return true if the house matches EVERY selected filter
                return matchesSearch && matchesLocation && matchesBedrooms && matchesFurnishing && matchesPrice;
            });

            // 3. Update the display
            renderHousing(currentFilteredHouses);
        }
        function openModal(house, index) {
            // 1. Set the global trackers
            currentModalIndex = index;
            currentModalHouse = house;

            // 2. Map all your text content (Name, Price, Location, etc.)
            modalTitle.textContent = house.title;
            modalPrice.textContent = `₦${house.price.toLocaleString()}`;
            modalLocation.textContent = house.location;
            modalBedrooms.textContent = house.bedrooms;
            modalBathrooms.textContent = house.bathrooms;
            modalFurnished.textContent = house.furnished;
            modalBadge.textContent = house.badge;

            // 3. Property Description (No bullets, no extra style)
            const propertyPoints = Array.isArray(house.description)
                ? house.description.join('<br>')
                : house.description;

            // 4. Agent Info (Enugu details, Fixed Numbers)
            const agentInfo = `
        <div style="margin-top: 20px;">
            <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em;">Agent Info</div>
            <div style="line-height: 2.0; color: #444;">
                <i class="fa-solid fa-location-dot" style="color: #666; width: 20px;"></i> Enugu, Nigeria<br>
                <i class="fa-solid fa-phone" style="color: #007bff; width: 20px;"></i> 09137654746, 09126367366<br>
                <i class="fa-brands fa-whatsapp" style="color: #25D366; width: 20px;"></i> +2349096829453<br>
                <div style="color: #888; font-size: 0.85em; margin-top: 5px;">
                    Registered 2 months ago
                </div>
            </div>
        </div>
    `;

            // 5. Update the description area
            modalDescription.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em;">Property Description</div>
        <div style="margin-bottom: 20px; color: #555;">${propertyPoints}</div>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
        ${agentInfo}
    `;

            // 6. THE IMAGE FIX: Force the background to update to THIS specific house
            // We check if 'images' array exists; if not, we use the single 'image' property.
            const modalImage = document.getElementById('modalImage');
            const images = (house.images && house.images.length > 0) ? house.images : [house.image];

            // Target your modal image element directly
            // Make sure 'modalImage' is the correct variable name for your image div
            modalImage.style.backgroundImage = `url('${images[0]}')`;

            // 7. Open the modal
            const modal = document.getElementById('modal');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        // Close modal
        function closeModalFunc() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }


        

function nextHouse() {
  currentIndex++;

  if (currentIndex >= housingData.length) {
    currentIndex = 0;
  }

  displayHouse(currentIndex);
}

function prevHouse() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = housingData.length - 1;
  }

  displayHouse(currentIndex);
}



        // --- 3. THE GALLERY SLIDE (Inner Arrows on the Photo) ---
        function moveModalSlide(direction, event) {
            if (event) event.stopPropagation();
            if (!currentModalHouse) return;

            const images = (currentModalHouse.images && currentModalHouse.images.length > 0)
                ? currentModalHouse.images
                : [currentModalHouse.image];

            if (images.length <= 1) return;

            // Update the index and loop correctly
            currentModalImageIndex = (currentModalImageIndex + direction + images.length) % images.length;

            // Update the background using backticks
            const modalImageElement = document.getElementById('modalImage');
            modalImageElement.style.backgroundImage = `url('${images[currentModalImageIndex]}')`;
        }

      const searchBox = document.getElementById('searchInput');

if (searchBox) {
    searchBox.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = housingData.filter(house => {
            return house.title.toLowerCase().includes(term) ||
                   house.location.toLowerCase().includes(term);
        });
        renderHousing(filtered);
    });
}
// Check if we are on the page with filters before running this
if (document.getElementById('bedroomsFilter')) {
    searchInput.addEventListener('input', filterHouses);
    bedroomsFilter.addEventListener('change', filterHouses);
    furnishingFilter.addEventListener('change', filterHouses);
    priceFilter.addEventListener('change', filterHouses);
    closeModal.addEventListener('click', closeModalFunc);
    prevBtn.addEventListener('click', prevHouse);

    nextBtn.addEventListener('click', () => {
        currentHouseIndex = (currentHouseIndex + 1) % housingData.length;
        const house = housingData[currentHouseIndex];
        currentModalHouse = house;
        currentModalImageIndex = 0;

        // Update the image and title in the modal
        const imgPath = (house.images && house.images.length > 0) ? house.images[0] : 'images/placeholder.jpg';
        document.getElementById('modalImage').style.backgroundImage = `url('${imgPath}')`;
        document.getElementById('modalTitle').textContent = house.title;

        // Update global variables
        currentModalHouse = house;
        currentModalImageIndex = 0;
    });
}


        function updateModalWithNewHouse(list) {
            // 1. Get the specific house from the list using the current index
            const house = list[currentHouseIndex];

            // 2. Set this as the active house for the image gallery
            currentModalHouse = house;
            currentModalImageIndex = 0;

            // 3. Update the Text (Title, Price, Location)
            document.getElementById('modalTitle').textContent = house.title;
            document.getElementById('modalPrice').textContent = `₦${house.price.toLocaleString()}`;
            document.getElementById('modalLocation').textContent = house.location;
            document.getElementById('modalBedrooms').textContent = house.bedrooms;
            document.getElementById('modalBathrooms').textContent = house.bathrooms;
            document.getElementById('modalFurnished').textContent = house.furnished;

            // 4. Update the Description and Agent Info
            // This uses the logic you already wrote for the description points
            const propertyPoints = Array.isArray(house.description) ? house.description.join('<br>') : house.description;
            document.getElementById('modalDescription').innerHTML = `
        <div style="font-weight: bold; margin-bottom: 10px; font-size: 1.1em;">Property Description</div>
        <div style="margin-bottom: 20px; color: #555;">${propertyPoints}</div>
    `;

            // 5. Update the Image
            // Uses getElementById (Fixed spelling) to find the image div
            const modalImgDiv = document.getElementById('modalImage');
            const imgPath = house.image;
            modalImgDiv.style.backgroundImage = url('${imgPath}')`;`
        }





        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (modal.classList.contains('active')) {
                if (e.key === 'Escape') closeModalFunc();
                if (e.key === 'ArrowRight') nextHouse();
                if (e.key === 'ArrowLeft') prevHouse();
            }
        });
        
        // Initial render
        renderHousing(housingData);





async function loadRealHouses() {
    try {
        const response = await fetch(`${API_URL}/api/houses`);
        const mongoHouses = await response.json();

        // We clean the data here so nothing is "compulsory"
        const cleanedMongoHouses = mongoHouses.map(h => ({
            ...h,
            id: h._id, // Fixes the ID issue
            title: h.title || "Newly Added Property",
            price: h.price || 0,
            location: h.location || "Contact for Location",
            images: Array.isArray(h.images) ? h.images : [h.images || 'default.jpg'],
            bedrooms: h.bedrooms || "-",
            bathrooms: h.bathrooms || "-",
            furnished: h.furnished || "Standard"
        }));

        // Merge with your 18 original houses
        const combined = [...housingData, ...cleanedMongoHouses];
        renderHousing(combined);
        console.log("Success! Total houses:", combined.length);
    } catch (err) {
        console.log("Server not reached, showing original 18 only.");
        renderHousing(housingData);
    }
}
loadRealHouses();




// Function 1: The Secret Unlock
function unlockAdmin() {
    const key = prompt("Enter Admin Key:");
    if (key === 'pahtreek123') {
        document.querySelectorAll('.mini-delete-btn').forEach(btn => btn.style.display = 'block');
        alert("Admin Mode Active.");
    } else {
        alert("Access Denied.");
    }
}

// Function 2: The actual Delete command
async function deleteHouse(id) {
    if (confirm("Permanently delete this property?")) {
        const response = await fetch(`${API_URL}/api/houses/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            location.reload();
        }
    }
}

function moveSlide(button, direction) {
    const card = button.closest('.housing-card');
    const slides = card.querySelectorAll('.slide');
    if (!slides.length) return;

    // 1. Change the image
    let currentIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');

    // 2. Get the specific House Data using the 'data-id' we set above
    const houseId = card.getAttribute('data-id');
   
    // Use the 'houses' array that was passed into renderHousing
    const house = allHousesData.find(h => (h.id || h._id) === houseId);

    if (house) {
        // 3. Update the Price
        const priceElement = card.querySelector('.card-price');
        if (priceElement) {
            priceElement.innerHTML = `₦${Number(house.price).toLocaleString()}`;
        }
       
        // 4. Update Bed/Bath/Furnished
        const spans = card.querySelectorAll('.card-features span');
        if (spans.length >= 3) {
            spans[0].innerHTML = `<i class="fas fa-bed"></i> ${house.bedrooms || 0}`;
            spans[1].innerHTML = `<i class="fas fa-bath"></i> ${house.bathrooms || 0}`;
            spans[2].innerHTML = `<i class="fas fa-couch"></i> ${house.furnished || 'Standard'}`;
        }
    }
}


function resetFilters() {
    console.log("Resetting filters...");

    // 1. Clear the location text (using the ID from your search bar)
    const loc = document.getElementById('locationFilter');
    if (loc) loc.value = '';

    // 2. Clear the dropdowns
    const type = document.getElementById('propertyType'); // Try 'propertyType' instead of 'typeFilter'
    if (type) type.value = 'all';

    const price = document.getElementById('priceRange'); // Try 'priceRange' instead of 'priceFilter'
    if (price) price.value = 'all';

    // 3. Show all houses again
    // We try 'allHousesData' because that's usually the global variable name
    if (typeof allHousesData !== 'undefined') {
        renderHousing(allHousesData);
    } else if (typeof houses !== 'undefined') {
        renderHousing(houses);
    } else {
        // If all else fails, just reload the page to reset everything
        location.reload();
    }
}


function displayHouse(index) {
  const house = housingData[index];  //

  document.getElementById("house-image").src = house.image;
  document.getElementById("house-title").textContent = house.name;
  document.getElementById("house-price").textContent = house.price;
  document.getElementById("house-bedrooms").textContent = house.bedrooms;
  document.getElementById("house-bathrooms").textContent = house.bathrooms;
  document.getElementById("house-description").textContent = house.description;
}


