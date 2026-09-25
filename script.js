function togglePricing() {
  const prices = document.querySelectorAll(".price");
  const toggleBtn = document.getElementById("toggleBtn");

  const isYearly = toggleBtn.textContent === "Monthly";

  prices.forEach(price => {
    if (isYearly) {
      price.textContent = "$" + price.dataset.yearly;
    } else {
      price.textContent = "$" + price.dataset.monthly;
    }
  });

  toggleBtn.textContent = isYearly ? "Yearly" : "Monthly";
}
