const [$img, $img_boca_juniors] = document.getElementsByTagName('img');

setInterval(() => {
  $img.classList.toggle('hidden');
  $img_boca_juniors.classList.toggle('hidden');

  if (!$img_boca_juniors.classList.contains('hidden')) {
    $img_boca_juniors.attributes['aria-hidden'].value = 'false';
  } else {
    $img_boca_juniors.attributes['aria-hidden'].value = 'true';
  }
}, 5000)