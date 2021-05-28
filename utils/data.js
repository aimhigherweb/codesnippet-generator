export const clearData = (type) => {
	window.localStorage.removeItem(`data_${type}`);
};

export const addData = (data, type) => {
	window.localStorage.setItem(`data_${type}`, JSON.stringify(data));
};

export const getData = (type) => {
	if (window && window.localStorage.getItem(`data_${type}`)) {
		return JSON.parse(window.localStorage.getItem(`data_${type}`));
	}

	return [];
};
