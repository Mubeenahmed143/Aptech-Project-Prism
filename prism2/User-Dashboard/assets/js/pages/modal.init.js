var exampleModal=document.getElementById("exampleModal");exampleModal.addEventListener("show.bs.modal",function(e){var e=e.relatedTarget.getAttribute("data-bs-whatever"),t=exampleModal.querySelector(".modal-title"),a=exampleModal.querySelector(".modal-body input");t.textContent="New message to "+e,a.value=e});