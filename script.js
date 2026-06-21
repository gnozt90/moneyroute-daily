const form = document.querySelector("#signup-form");
const input = document.querySelector("#contact");
const note = document.querySelector("#form-note");
const tabs = [...document.querySelectorAll(".channel-tab")];
const todayDate = document.querySelector("#today-date");

const singaporeDate = new Intl.DateTimeFormat("en-SG", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Singapore",
}).format(new Date());

todayDate.textContent = `Today · ${singaporeDate}`;

let selectedChannel = "Email";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedChannel = tab.dataset.channel;
    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    input.placeholder = selectedChannel === "Email" ? "you@domain.com" : "@yourtelegram";
    input.autocomplete = selectedChannel === "Email" ? "email" : "off";
    input.focus();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const contact = input.value.trim();
  if (!contact) return;

  const leads = JSON.parse(localStorage.getItem("moneyroute-leads") || "[]");
  leads.push({
    contact,
    channel: selectedChannel,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem("moneyroute-leads", JSON.stringify(leads));

  note.textContent = `Saved locally. Next step: connect this form to Cloudflare Forms, ConvertKit, Beehiiv or Telegram.`;
  note.classList.add("success");
  form.reset();
});
