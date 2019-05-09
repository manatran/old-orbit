import React, { Component } from 'react';
import { connect } from "react-redux";
import CategoriesList from "../subject/CategoriesList";

import { apiUrl } from "../../env";

class Categories extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			success: false,
			error: "",
			name: "",
			slug: "",
			description: "",
			thumbnail: "",
			parent: null
		}
		this.state.categories = this.props.categories;
	}

	createCategory(e) {
		e.preventDefault();
		let { name, slug, description, parent, thumbnail } = this.state;
		const { auth } = this.props;

		if (parent === "None") {
			parent = null;
		}

		const body = {
			name,
			slug,
			description,
			parent,
			thumbnail,
		};

		if (!name || !slug || !description || !thumbnail) {
			this.setState({ success: false });
			this.setState({ error: "Please fill in all the fields" });
		} else {
			fetch(`${apiUrl}/api/v1/categories`, {
				method: "POST",
				headers: {
					Authorization: auth.token,
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			})
				.then(res => res.json())
				.then(category => {
					if (category.error) {
						this.setState({ error: category.error });
						return;
					}
					this.setState({ error: "" });
					this.setState({ success: true });
					this.setState({ categories: [category, ...this.state.categories] });
					// Reset form
					this.setState({ name: "" });
					this.setState({ slug: "" });
					this.setState({ description: "" });
					this.setState({ thumbnail: "" });
					this.setState({ parent: null });
				}).catch(err => {
					this.setState({ error: err });
				})
		}
	}

	toggleForm = () => {
		const { showForm } = this.state;
		this.setState({ showForm: !showForm });
	}

	render() {
		const { showForm, categories } = this.state;
		return (
			<div>
				{showForm &&
					<>
						<h2>Create new category</h2>
						<form onSubmit={(e) => { this.createCategory(e) }}>
							{this.state.error ? <p className="error">{this.state.error}</p> : null}
							{this.state.success ? <p className="success">New category created!</p> : null}

							<input
								type="text"
								value={this.state.name}
								onChange={e => {
									this.setState({ name: e.target.value });
								}}
								onBlur={() => {
									if(!this.state.slug) {
										const slug = this.state.name
											.toLowerCase()
											.replace(/[^\w ]+/g,'')
											.replace(/ +/g,'-');
										this.setState({ slug });
									}
								}}
								placeholder="Category name"
							/>

							<input
								type="text"
								value={this.state.slug}
								onChange={e => {
									this.setState({ slug: e.target.value });
								}}
								placeholder="Category slug"
							/>

							<input
								type="text"
								value={this.state.description}
								onChange={e => {
									this.setState({ description: e.target.value });
								}}
								placeholder="Category description"
							/>

							<select
								onChange={e => {
									this.setState({ parent: e.target.value });
								}}
							>
								<option hidden>Parent category</option>
								<option value={null}>None</option>
								{categories && categories.map(el => (
									<option key={el.id} value={el.id}>{el.name}</option>
								))}
							</select>

							<div className="image-input">
								{this.state.thumbnail ? (
									<div
										className="thumbnail"
										style={{ backgroundImage: `url(${this.state.thumbnail})` }}
									/>
								) : null}
								<input
									type="text"
									placeholder="Thumbnail URL"
									value={this.state.thumbnail}
									onChange={e => {
										this.setState({ thumbnail: e.target.value });
									}}
								/>
							</div>

							<button type="submit" className="button">Submit category</button>

						</form>
					</>
				}

				<button className={`button ${showForm && 'light'}`} onClick={this.toggleForm}>
					{showForm ? `Cancel` : `New category`}
				</button>

				<h2>Manage Categories</h2>
				<CategoriesList categories={categories} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Categories);
