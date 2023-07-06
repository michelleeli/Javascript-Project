document.addEventListener("DOMContentLoaded", async () => {
    const circlegraph = document.getElementById('chart').getContext('2d');

    const modal = document.querySelector(".modal")
    const content = document.getElementById("modalcontent")
    const close = document.getElementById("close")
    const open = document.getElementById("openmodal")

    function closeModal () {
        modal.style.display = "none"
    }

    function openModal() {
        modal.style.display = "block"
    }

    close.addEventListener('click', closeModal)
    open.addEventListener('click', openModal)
});