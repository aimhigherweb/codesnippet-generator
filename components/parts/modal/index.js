import { renderToStaticMarkup } from "react-dom/server";
import FAQCode from '../faq/code';

const Modal = ({ type }) => {
	const data = window?.localStorage?.getItem('contentData')
	let Code;

	if (type === `faq`) {
		Code = FAQCode;
	}

	return (
		<div>
			<pre>
				{renderToStaticMarkup(<Code data={JSON.parse(data)} />)}
			</pre>
		</div>
	);
};

export default Modal;
