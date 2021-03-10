document.addEventListener("turbolinks:load", function() {
	var Shots = {
		previewShot() {
			if (window.File && window.FileList && window.FileReader) {
				
				function handleFileSelect(e) {
					e.stopPropagation();
					e.preventDefault();

					let files = e.target.files || e.dataTransfer.files;
					// files is a fileList of File ob. List props here
					for (var i=0, f; f = files[i]; i++) {
						// Only process image files
						if (!f.type.match('image.*')) {
							continue;
						}
						const reader = new FileReader();

						// Closure to capture the file information
						reader.onload = (function(theFile) {
							return function(e) {
								// Render thumbnail
								let span = document.createElement('span');
								span.innerHTML = ['<img class="thumb" src="', e.target.result,
									'" title="', escape(theFile.name), '"/>'].join('');
								document.getElementById('list').insertBefore(span, null);
							};
						})(f);

						reader.readAsDataURL(f);
					}
				}

				function handleDragOver(e) {
					e.stopPropagation();
					e.preventDefault();
					e.dataTransfer.dropEffect = 'copy';
				}

				const dropZone = document.getElementById('dop_zone');
				const target = document.documentElement;
				const fileInput = document.getElementById('shot_user_shot');
				const previewImage = document.getElementById('previewImage');
				const newShotForm = document.getElementById('new_shot');

				if(dropZone) {
					dropZone.addEventListener('dragover', handleDragOver, false)
					dropZone.addEventListener('drop', handleFileSelect, false)
			
					dropZone.addEventListener('dragover', () => {
						dropZone.classList.add('fire');
					}, false);
	
					dropZone.addEventListener('dragleave', () => {
						dropZone.classList.remove('fire');
					}, false);
	
				dropZone.addEventListener('drop', (e) => {
					e.preventDefault();
					dropZone.classList.remove('fire');
					fileInput.files = e.dataTransfer.files;
					// if on shot/id/edit hide preview image on drop
					if(previewImage) {
						previewImage.style.display = 'none';
					}
					// If on shots/new hide dropzone on drop
					if(newShotForm) {
						dropZone.style.display = 'none';
					}
				}, false);

				target.addEventListener('dragover', (e) => {
					e.preventDefault();
					dropZone.classList.add('dragging');
				}, false);

				// remove dragging class from body when not dragging
				target.addEventListener('dragleave', () => {
					dropZone.classList.remove('dragging');
					dropZone.classList.remove('fire');
				}, false);
			}
		}
	},
};
	Shots.previewShot();
})
