const galleryRow = document.getElementById('gallery-row');

photoData.forEach(photo => {
    const photoHtml = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 text-center">
            <button type="button" class="btn btn-secondary-subtle p-0 border-0 shadow-sm" data-bs-toggle="modal" data-bs-target="#modal${photo.id}">
                <img src="photos/photo${photo.id}.jpg" class="img-fluid rounded" alt="${photo.title}">
            </button>

            <div class="modal fade" id="modal${photo.id}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5">${photo.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="photos/photo${photo.id}.jpg" class="img-fluid mb-3 rounded" alt="${photo.title}">
                            <p class="text-secondary">${photo.desc}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    galleryRow.innerHTML += photoHtml;
});