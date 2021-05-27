import styles from './tile.module.scss';

const Tile = ({ heading, content }) => (
	<div>
		<img src="https://pacificautomation.com.au/content/files/images/linear.PNG" style={{ maxWidth: `250px` }} />
		<div>
			<h3 dangerouslySetInnerHTML={{ __html: heading }} />
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	</div>
);

export default Tile;
