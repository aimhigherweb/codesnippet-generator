/* eslint-disable no-restricted-syntax */
import { addData } from '../data';

const parseProduct = (data) => {
	const banners = [];
	const navs = [];
	const container = data.children[0];
	const bannerItems = container.querySelector(`.pa_banner_home`);
	const navItems = container.querySelector(`.pa_banner_nav ul`);

	console.log(bannerItems.querySelectorAll('li[data-slide]'));

	for (const banner of bannerItems.querySelectorAll('li[data-slide]')) {
		const link = banner.querySelector(`a`)?.href;
		const image = banner.querySelector(`img`)?.src;

		console.log({link, image});

		if(image && image !== '') {
			banners.push({
				image,
				link
			});
		}

		
	}

	for (const navItem of navItems?.children) {
		const link = navItem.querySelector(`a`)?.href;
		const { text } = navItem.querySelector(`a`)?.dataset;

		if(text && text !== '') {
			navs.push({
				text,
				link
			});
		}
	}

	console.log({ banners, navs });

	return [banners, navs];
};

export default parseProduct;
