import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as Style } from "react-syntax-highlighter/dist/styles/prism";

class CodeBlock extends PureComponent {
	static defaultProps = {
		language: null
	};

	render() {
		const { language, value } = this.props;
		return (
			<SyntaxHighlighter
				showLineNumbers
				lineNumberStyle={{ fontSize: "12px", opacity: ".33" }}
				customStyle={{ overflow: "auto", borderRadius: "4px", padding: "16px 8px" }}
				language={language}
				style={Style}
			>
				{value}
			</SyntaxHighlighter>
		);
	}
}

export default CodeBlock;
