const changeClass = (refs, index, className) => {
	refs.forEach(ref => {
		ref.classList.remove(className);
	});

	refs[index].classList.add(className);
};

export default changeClass;
