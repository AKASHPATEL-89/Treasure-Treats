document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // CTA button smooth scroll
    document.querySelector(".cta-button").addEventListener("click", function() {
        document.querySelector("#ideas").scrollIntoView({
            behavior: "smooth"
        });
    });

    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Image Lightbox functionality
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    galleryItems.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            const closeBtn = document.createElement("span");
            closeBtn.classList.add("lightbox-close");
            closeBtn.innerHTML = "&times;";
            closeBtn.addEventListener("click", () => {
                lightbox.classList.remove("active");
            });
            const imgCaption = document.createElement("p");
            imgCaption.textContent = image.alt;

            const contentDiv = document.createElement("div");
            contentDiv.classList.add("lightbox-content");
            contentDiv.appendChild(closeBtn);
            contentDiv.appendChild(img);
            contentDiv.appendChild(imgCaption);
            lightbox.appendChild(contentDiv);
        });
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    // Simple form submission (for demonstration)
    const contactForm = document.querySelector(".contact-us form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Message sent! (This is a demo, no actual email is sent)");
            contactForm.reset();
        });
    }
});


