const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//**************** update nav ****************
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav[`nav-item-${i}`];
  navLinks[i].style.color = "green";
}

const prepended = document.createElement("a");
prepended.textContent = "Prepended";
prepended.style.color = "green";

const appended = document.createElement("a");
appended.textContent = "Appended";
appended.style.color = "green";

nav.appendChild(appended);
nav.prepend(prepended);

//**************** update cta ****************
const cta = document.querySelector(".cta");

cta.querySelector("h1").textContent = siteContent.cta.h1;
cta.querySelector("button").textContent = siteContent.cta.button;
document.getElementById("cta-img").src = siteContent.cta["img-src"];

//**************** stretch cta ****************
//create new style element
const boldStyle = document.createElement("style");
boldStyle.type = "text/css";
boldStyle.innerHTML = ".bold { font-weight: bold; }";
document.querySelector("head").appendChild(boldStyle);
//click function
const boldText = () => {
  const bolded = document.querySelectorAll("p.bold");
  const paragraphs = document.querySelectorAll("p");
  if (bolded.length) {
    paragraphs.forEach(p => p.classList.remove("bold"));
  } else {
    paragraphs.forEach(p => p.classList.add("bold"));
  }
};

//create button
const bodyHeader = document.querySelector(".container");
const boldButton = document.createElement("button");

boldButton.classList.add("bold-button");
boldButton.textContent = "Bold";
boldButton.style.padding = "2rem 6rem";
boldButton.style.borderRadius = "10px";
boldButton.style["font-size"] = "3rem";

boldButton.addEventListener("click", function() {
  boldText();
});

bodyHeader.prepend(boldButton);

//**************** main-content selector ****************
const mainContent = document.querySelector(".main-content");

//**************** update top-content ****************
const topContent = mainContent.querySelectorAll(".top-content .text-content");
const features = topContent[0];
const about = topContent[1];

//update feKatures h4
features.querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];

//update features p
features.querySelector("p").textContent =
  siteContent["main-content"]["features-content"];

//update about h4
about.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];

//update about p
about.querySelector("p").textContent =
  siteContent["main-content"]["about-content"];

//**************** update middle-img     ****************
document.getElementById("middle-img").src =
  siteContent["main-content"]["middle-img-src"];

//**************** update bottom-content ****************
const bottomContent = mainContent.querySelectorAll(
  ".bottom-content .text-content"
);
const services = bottomContent[0];
const product = bottomContent[1];
const vision = bottomContent[2];

//update services h4
services.querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];

//update services p
services.querySelector("p").textContent =
  siteContent["main-content"]["product-content"];

//update product h4
product.querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];

//update product p
product.querySelector("p").textContent =
  siteContent["main-content"]["product-content"];

//update vision h4
vision.querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];

//update vision p
vision.querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

//**************** update constact ****************
const contact = document.querySelector(".contact");
const contactDetails = contact.querySelectorAll("p");

contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];

contactDetails[0].textContent = siteContent.contact.address;
contactDetails[1].textContent = siteContent.contact.phone;
contactDetails[2].textContent = siteContent.contact.email;

//**************** update footer ****************
document.querySelector("footer p").textContent = siteContent.footer.copyright;
