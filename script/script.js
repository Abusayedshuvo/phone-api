const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, isShowAll);
};

loadPhone("iphone");

const displayPhone = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("allPhones");
  phoneContainer.textContent = "";
  const showAll = document.getElementById("showAll");
  if (phones.length > 9 && !isShowAll) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }
  if (!isShowAll) {
    phones = phones.slice(0, 9);
  }

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = "border rounded-lg p-10 text-center";
    phoneCard.innerHTML = `
    <div class="bg-[#0d6dfd1a] p-10 rounded-lg">
              <img class="mx-auto" src="${phone.image}" alt="" />
            </div>
            <div class="space-y-5 mt-5">
              <p class="font-bold text-3xl"> ${phone.phone_name}</p>
              <p>
                There are many variations of passages of available, but the
                majority have suffered
              </p>
              <p class="font-bold text-2xl">$999</p>
              <button class="btn btn-primary px-10">Show Details</button>
            </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
  handleLoading(false);
};

const handleSearch = (isShowAll) => {
  handleLoading(true);
  const searchText = document.getElementById("search-input").value;
  loadPhone(searchText, isShowAll);
};

const handleLoading = (isLoading) => {
  const loading = document.getElementById("loading");
  if (isLoading) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
};

const handleShowAll = () => {
  handleSearch(true);
};
