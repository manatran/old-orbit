import React, { Component } from 'react';
import Spinner from '../spinner';
import Lang from "../sidebar/Lang";

class CategoriesList extends Component {

	render() {
		const { categories } = this.props;
		if (categories) {
			return (
				<div>
					{categories.length ? (
						categories.map((el, i) => (
							<Lang
								key={el.id}
								url={`/subject/${el.slug}`}
								icon={el.thumbnail}
								title={el.name}
								description={el.description}
								subs={el.subscribers || 0}
								big
							/>
						))
					) : (
							<p className="light">No categories yet!</p>
						)}
				</div>
			);
		} else {
			return <Spinner size={32} />;
		}
	}
}

export default CategoriesList;
