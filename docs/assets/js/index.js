const inputs = document.querySelectorAll('input');
const handleUpdates = (e) => {
	const sufijo = e.target.dataset.sizing || '';
	document.documentElement.style.setProperty(
		`--${e.target.name}`,
		e.target.value + sufijo
	);
};

inputs.forEach((input) => input.addEventListener('touchmove', handleUpdates));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdates));
inputs.forEach((input) => input.addEventListener('change', handleUpdates));
