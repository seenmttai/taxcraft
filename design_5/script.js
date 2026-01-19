document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("servicePopup");
    const close = document.querySelector(".close-btn");
    const select = document.getElementById("service-select");

    setTimeout(() => modal.style.display = "block", 200);

    close.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

    window.prefillService = (val) => {
        modal.style.display = "none";
        select.value = val;
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
});
