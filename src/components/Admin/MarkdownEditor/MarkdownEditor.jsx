'use strict';
import React from 'react'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import MarkdownIt from 'markdown-it'

export default class MarkdownEditor extends React.Component {

	handleEditorChange({ html, text }) {
		this.getContent(html, text)
	}


	render() {

		const mdParser = new MarkdownIt({
			html: true,
			linkify: true,
			typographer: true,
		});
		return (
			<MdEditor
				value=""
				renderHTML={(text) => mdParser.render(text)}
				onChange={this.handleEditorChange}
				style={{ height: '35vh', width: '100%' }}
				getContent={this.props.getContent}
				
			/>

		)
	}
}