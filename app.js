const resources = [
    {
        "name": "Low Income Home Energy Assistance Program (LIHEAP)",
        "category": "Emergency Grant",
        "location": "Los Angeles",
        "description": "Helps eligible income-qualified households to manage and meet their immediate home heating and/or cooling needs.",
        "link": "https://www.ladwp.com/residential-services/assistance-programs/low-income-home-energy-assistance-program-liheap",
        "eligibility": "Must be 18 years+ and have a social security number, Income Requirements apply."
    }, 
    {
        "name": "Energy Assistance Fund (EAF)",
        "category": "Emergency Grant",
        "location": "Los Angeles",
        "description": "The Energy Assistance Fund (EAF) is SCE's charitable, non-profit organization that offers direct payment assistance to those in need, including seniors on fixed incomes, young families with children, and veterans.",
        "link": "https://www.sce.com/sites/default/files/custom-files/PDF_Files/2025%20EAF%20Partner%20List%20-%201.14.25%20EAF.pdf",
        "eligibility": "Current SCE residential customer, name matches the name on the bill in the applicant's primary residence, and total household income falls within the income guidlines."
    },
    {
        "name": "Cal Waters Cares Hardship Program",
        "category": "Emergency Grant",
        "location": "Los Angeles",
        "description": "The Cal Water Cares Hardship Program, which is administered by Dollar Energy Fund, assists eligible utility customers with their California Water Service Company bills.",
        "link": "https://www.dollarenergy.org/program/cal-water-cares-hardship-program/",
        "eligibility": "Must be a Cal Water customer experiencing a temporary financial hardship with an outstanding bill of at least $100."
    },
    {
        "name": "General Relief (GR) Housing Subsidy",
        "category": "Housing Assistance",
        "location": "Los Angeles",
        "description": "The General Relief (GR) Housing Subsidy provides rental assistance to adults and couples without children who are experiencing homelessness or at-risk of homelessness who are receiving a General Relief (GR) grant.",
        "link": "https://dpss.lacounty.gov/en/cash/gr/housing.html",
        "eligibility": "Experiencing Homelessness and at risk of being evicted or staying in a place not made for human beings or temporairly staying in shelter or sharing a home with family/friends on a temp basis or do not have a permanent, fixed, and regular nighttime house."
    },
    {
        "name": "CalWORKS Homeless Assistance(HA)",
        "category": "Housing Assistance",
        "location": "Los Angeles",
        "description": "The CalWORKs Homeless Assistance (HA) Program was established to help families in the CalWORKs program meet the costs of securing or maintaining permanent housing or to provide emergency shelter when a family is experiencing homelessness.",
        "link": "https://www.cdss.ca.gov/inforesources/cdss-programs/housing-programs/calworks-homeless-assistance",
        "eligibility": "CalWORKS recipients or CalWORKs eligible applicants who are experiencing homelessness or at risk of homelessness."
    },
    {
        "name": "Home Again Los Angeles",
        "category": "Housing Assistance",
        "location": "Los Angeles",
        "description": "Home Again L.A. was created to support the families that are unhoused and those on the verge of homelessness.",
        "link": "https://www.homeagainla.org/90-dayshelter",
        "eligibility": "Must be a situationally homeless family, chronically homeless family, or at-risk of homelessness."
    },
    {
        "name": "Housing Authority of the city of LA Section 8 Valley Office",
        "category": "Housing Assistance",
        "location": "Los Angeles",
        "description": "HACLA has grown to become one of the nation’s largest and leading public housing authorities, providing the largest supply of quality affordable housing to residents of the City of Los Angeles.",
        "link": "https://publichousing-hacla.securecafe.com/",
        "eligibility": "Section 8 assistance is available only to U.S. citizens, non-citizens with legal immigration status, and \"mixed families\" (families in which at least one, but not all members have eligible immigration status). Assistance.  the household must be either a family or a single person whose income does not exceed the area limits as set by U.S. Department of Housing and Urban Development (HUD)."
    },
    {
        "name": "Asencia Glendale Access Center",
        "category":"Housing Assistance",
        "location": "Glendale",
        "description": "Ascencia is a 501(c)(3) nonprofit organization providing housing and support services for homeless individuals and families.",
        "link": "https://www.ascenciaca.org/get-help/",
        "eligibility": "18 + and homeless in the glendale, northeast los angeles or west hollywood area or in imminent danger of becoming homeless within the next two weeks."
    },
    {
        "name": "211 Housing Resource",
        "category": "Housing Assistance",
        "location": "Los Angeles",
        "description": "211 LA is a 501(c)(3) nonprofit organization and the trusted hub for health, human, and social services in Los Angeles County.",
        "link": "https://211la.org/resources/subcategory/housing",
        "eligibility": "Eligibility varties upon the services needed for each individual. Visit the website for more information."
    },
    {
        "name": "Safe Parking Program",
        "category": "Housing Assistance",
        "location": "Los Angeles",
        "description": "Safe Parking LA provides safe overnight parking to facilitate stability and housing in Los Angeles County for individuals living in their vehicles, and advocates for fair and equitable treatment and resources for the unhoused.",
        "link": "https://safeparkingla.org/need-help/",
        "eligibility": "Vehicle must be operational, valid DL, Authorized operator of vehicle, Safe Parking lot designation/referrals, vehicle compliance documents submited, complete welcome packet and issue a SPLA Parking Permit."
    },
    {
        "name": "CalFresh",
        "category": "Food Assistance",
        "location": "Los Angeles",
        "description": "CalFresh is California’s food assistance program, federally known as the Supplemental Nutrition Assistance Program (SNAP), which provides monthly electronic benefits to low-income individuals and families to purchase groceries.",
        "link": "https://benefitscal.com/ApplyForBenefits/begin/ABOVR?lang=en",
        "eligibility": "Eligibility is based on income, household size, and other factors. Visit the website for more information."
    },
    {
        "name": "MEND",
        "category": "Food Assistance",
        "location": "Pacoima",
        "description": "The agency provides education services, emergency food, employment services, health services, holiday assistance, household goods, and personal goods for low-income people who live in the northeast part of the San Fernando Valley.",
        "link": "https://mendpoverty.org/Client-Information",
        "eligibility": "Services are available to individuals and families in need. You must register to have access to services. When registering, you must bring a photo ID."
    },
    {
        "name": "Valley Food Bank",
        "category": "Food Assistance",
        "location": "San Fernando Valley",
        "description": "The warehouse facility in Pacoima is a central hub that collects, processes, and distributes surplus food at no-charge to a network of food pantries, rescue missions, and other non-profit organizations to provide hot nutritious meals and food baskets to the hungry and homeless in Southern California.",
        "link": "https://valleyfoodbank.org/our-mission/",
        "eligibility": "Households to meet specific income guidelines or suffering from sudden financial crises."
    },
    {
        "name": "North Valley Caring Services",
        "category": "Food Assistance",
        "location": "San Fernando Valley",
        "description": "North Valley Caring Services (NVCS) is a nonprofit organization serving the residents in the Northeast San Fernando Valley area of Los Angeles.",
        "link": "https://www.nvcsinc.org/",
        "eligibility": "Open to anyone in need; photo ID is typically required."
    },
    {
        "name": "WIC",
        "category": "Food Assistance",
        "location": "Los Angeles",
        "description": "California WIC is the largest WIC program in the nation, offering families access to healthy food, expert advice, and resources.",
        "link": "https://myfamily.wic.ca.gov",
        "eligibility": "Eligibility is based on income, residency, and nutritional risk. Visit the website for more information."
    },
    {
        "name": "Valley Park Church",
        "category": "Food Assistance",
        "location": "San Fernando Valley",
        "description": "For nearly a decade, the members of Valley Park Church and dedicated volunteers have been steadfastly managing a vital food pantry, extending nourishment and hope to our community.",
        "link": "https://www.weteachjesus.org/food-program",
        "eligibility": "No strict eligibility requirements."
    },
    {
       "name": "West Valley Food Pantry",
       "category": "Food Assistance",
       "location": "San Fernando Valley",
       "description": "The West Valley Food Pantry works to end hunger in the San Fernando Valley. We do this by providing food and supportive services for individuals and families in need.",
       "link": "https://www.westvalleyfoodpantry.org",
       "eligibility": "Open to all in need; picture ID required if available."
    },
    {
        "name": "LAMC Food Pantry",
        "category": "Food Assistance",
        "location": "Sylmar",
        "description": "The LA Mission College (LAMC) Basic Needs Center offers a food pantry, hot meals, and CalFresh application assistance to support students experiencing food insecurity.",
        "link": "https://www.lamission.edu/student-services/spr/basic-needs-center",
    }
]
function loadData(){
    populateFilters();
    renderCards(resources);
}
// pulls unique categories and locations from the data to build the dropdown options
function populateFilters(){
    const categories = [...new Set(resources.map(r => r.category))].sort(); 
    const locations = [...new Set(resources.map(r => r.location))].sort();

    const catSelect = document.getElementById("category-filter");
    const locSelect = document.getElementById("location-filter");

    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        catSelect.appendChild(opt);
    });

    locations.forEach(loc => {
        const opt = document.createElement('option');
        opt.value = loc;
        opt.textContent = loc;
        locSelect.appendChild(opt);
    });
}
function applyFilters() {
    const query = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    const location = document.getElementById('location-filter').value;

    const filtered = resources.filter(r => {
        const matchesSearch = !query ||
        Object.values(r).some(val => val.toLowerCase().includes(query));
        const matchesCategory = !category || r.category === category;
        const matchesLocation = !location || r.location === location;
        return matchesSearch && matchesCategory && matchesLocation;
    });

    renderCards(filtered)
}

function renderCards(list) {
    const container = document.getElementById('resource-list');

    if (list.length == 0) {
        container.innerHTML = '<p class="no-results">No resources found matching your search.</p>';
        return; 
    }

    container.innerHTML = list.map((r, i) => `
    <div class="card" id="card-${i}">
      <div class="card-header" onclick="toggleCard(${i})">
        <div class="card-title-row">
          <h2>${r.name}</h2>
          <span class="chevron">&#9660;</span>
        </div>
        <div class="card-tags">
          <span class="tag category-tag">${r.category}</span>
          <span class="tag location-tag">${r.location}</span>
        </div>
      </div>
      <div class="card-body">
        <p>${r.description || ''}</p>
        <p><strong>Eligibility:</strong> ${r.eligibility || 'N/A'}</p>
        <a href="${r.link || '#'}" target="_blank" rel="noopener noreferrer">
          <button>Learn More</button>
        </a>
      </div>
    </div>
  `).join('');
}


//toggling the "expanded" class is what shows/hides the care body (handled in CSS)
function toggleCard(i) {
    const card = document.getElementById(`card-${i}`);
    card.classList.toggle("expanded");

}

document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('category-filter').addEventListener('change', applyFilters);
document.getElementById('location-filter').addEventListener('change', applyFilters);

document.addEventListener('DOMContentLoaded', loadData);