export const clearData = () => {
	window.localStorage.removeItem(`contentData`);
};

export const addData = (data) => {
	window.localStorage.setItem(`contentData`, JSON.stringify(data));
};

export const getData = () => {
	if (window && window.localStorage.getItem(`contentData`)) {
		return JSON.parse(window.localStorage.getItem(`contentData`));
	}

	return [];
};
