document.getElementById('add-image-btn').addEventListener('click', function() {
  const imageUrl = document.getElementById('image-url').value;
  if (imageUrl) {
      addImageToGallery(imageUrl);
      document.getElementById('image-url').value = ''; // Clear input field after adding
  } else {
      alert("Please enter a valid image URL.");
  }
});

function addImageToGallery(url) {
  const imageGallery = document.getElementById('image-gallery');

  // Create image item container
  const imageItem = document.createElement('div');
  imageItem.classList.add('image-item');

  // Create image element
  const img = document.createElement('img');
  img.src = url;

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'X';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', function() {
      imageGallery.removeChild(imageItem); // Remove image item from gallery
  });

  // Append image and remove button to image item
  imageItem.appendChild(img);
  imageItem.appendChild(removeBtn);

  // Append image item to gallery
  imageGallery.appendChild(imageItem);
}
