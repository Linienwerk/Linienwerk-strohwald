(function () {
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Only elements below the fold are hidden, so nothing visible on load flickers.
  var fold = window.innerHeight;
  var targets = document.querySelectorAll(
    ".stat-tile, .results-list li, .process-card, .faq-item, .contact-card, .about-card, .cta-section .container, .quote-section blockquote"
  );

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
      var value = entry.target.querySelector(".stat-value");
      if (value) countUp(value);
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  targets.forEach(function (el) {
    if (el.getBoundingClientRect().top < fold) return;
    var index = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.transitionDelay = Math.min(index, 5) * 80 + "ms";
    el.classList.add("reveal");
    observer.observe(el);
  });

  // Counts the leading number of a stat ("250 t", "+100 t", "90 %") up to its final value.
  function countUp(el) {
    var match = el.textContent.match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;
    var prefix = match[1], target = parseInt(match[2], 10), suffix = match[3];
    var duration = 1200, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
