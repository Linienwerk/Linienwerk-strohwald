(function () {
  var shareBtn = document.getElementById("vcard-share");
  var dialog = document.getElementById("vcard-qr");
  var pageUrl = "https://strohwald-verpackungsentwicklung.de/visitenkarte.html";

  // Prefer sending the vCard itself (arrives as a contact in Messages/WhatsApp), fall back to the link.
  shareBtn.addEventListener("click", function () {
    var shareLink = function () {
      if (navigator.share) {
        return navigator.share({ title: "André Strohwald", text: "Kontakt André Strohwald, Strohwald Verpackungsentwicklung", url: pageUrl });
      }
      if (navigator.clipboard) {
        return navigator.clipboard.writeText(pageUrl).then(function () {
          shareBtn.lastChild.textContent = " Link kopiert";
        });
      }
      window.location.href = "mailto:?subject=Kontakt%20Andr%C3%A9%20Strohwald&body=" + encodeURIComponent(pageUrl);
    };

    if (!navigator.canShare) {
      shareLink();
      return;
    }
    fetch("assets/andre-strohwald.vcf")
      .then(function (r) { return r.blob(); })
      .then(function (blob) {
        var file = new File([blob], "Andre-Strohwald.vcf", { type: "text/vcard" });
        if (navigator.canShare({ files: [file] })) {
          return navigator.share({ files: [file], title: "André Strohwald" });
        }
        return shareLink();
      })
      .catch(function (err) {
        if (err && err.name === "AbortError") return;
        shareLink();
      });
  });

  document.getElementById("vcard-qr-open").addEventListener("click", function () {
    if (dialog.showModal) dialog.showModal();
    else dialog.setAttribute("open", "");
  });
  document.getElementById("vcard-qr-close").addEventListener("click", function () {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute("open");
  });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog && dialog.close) dialog.close();
  });
})();
