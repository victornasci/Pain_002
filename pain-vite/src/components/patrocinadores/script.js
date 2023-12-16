function initPage() {
	const marqueeCloneDiv = document.querySelectorAll(
		"[data-role='double-content']"
	)
	marqueeCloneDiv.forEach(
		(element) => (element.innerHTML = element.previousElementSibling.innerHTML)
	)
}

// Associar a função ao evento "load" do objeto window
window.addEventListener("load", initPage);


