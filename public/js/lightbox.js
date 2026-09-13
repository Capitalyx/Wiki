// Lightbox léger : clic sur une image de contenu (galerie de métier, carousel)
// pour l'afficher en grand. Aucune dépendance externe.
(function () {
	const CLOSE_ICON_PATH =
		'<path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z"/>';

	const CLOSE_LABELS = { fr: 'Fermer', en: 'Close', es: 'Cerrar', de: 'Schließen' };
	const lang = document.documentElement.lang;
	const closeLabel = CLOSE_LABELS[lang] || CLOSE_LABELS.fr;

	let overlay;
	let overlayImg;
	let lastFocused;

	function buildOverlay() {
		overlay = document.createElement('div');
		overlay.className = 'cpx-lightbox';
		overlay.setAttribute('role', 'dialog');
		overlay.setAttribute('aria-modal', 'true');
		overlay.hidden = true;

		overlayImg = document.createElement('img');
		overlay.appendChild(overlayImg);

		const closeBtn = document.createElement('button');
		closeBtn.type = 'button';
		closeBtn.className = 'cpx-lightbox-close';
		closeBtn.setAttribute('aria-label', closeLabel);
		closeBtn.innerHTML =
			'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
			CLOSE_ICON_PATH +
			'</svg>';
		overlay.appendChild(closeBtn);

		overlay.addEventListener('click', (e) => {
			if (e.target === overlay || e.target === overlayImg) close();
		});
		closeBtn.addEventListener('click', close);

		document.body.appendChild(overlay);
	}

	function open(src, alt) {
		if (!overlay) buildOverlay();
		overlayImg.src = src;
		overlayImg.alt = alt || '';
		overlay.hidden = false;
		lastFocused = document.activeElement;
		overlay.querySelector('.cpx-lightbox-close').focus();
		document.documentElement.style.overflow = 'hidden';
	}

	function close() {
		if (!overlay || overlay.hidden) return;
		overlay.hidden = true;
		overlayImg.src = '';
		document.documentElement.style.overflow = '';
		if (lastFocused instanceof HTMLElement) lastFocused.focus();
	}

	document.addEventListener('click', (e) => {
		const img = e.target.closest(
			'.sl-markdown-content .job-gallery img, .sl-markdown-content .cpx-carousel img'
		);
		if (img) open(img.currentSrc || img.src, img.alt);
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') close();
	});
})();
