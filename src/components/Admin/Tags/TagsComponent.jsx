import React, { Component } from 'react';
import { Input, Icon, Tag, Tooltip, message } from 'antd';

var randomColor = require('randomcolor');

function showTags(tags=[], closable = false,  style={}, closeCallback = () => { }) {
    if (tags.length !== 0) {
        return tags.map((tag, index, tags) => {
            const isLongTag = tag.value.length > 15;
            const marginRight = index === tags.length -1 ? "0px" : "8px";
            const tagElem = (
                <Tag
                    key={tag.value}
                    closable={closable}
                    color={tag.color ? tag.color : null}
                    onClose={closeCallback(tag)}
                >
                    {isLongTag ? `${tag.value.slice(0, 15)}...` : tag.value}
                </Tag>
            );
            return isLongTag ? (
                <Tooltip title={tag.value} key={tag.value}>
                    {tagElem}
                </Tooltip>
            ) : (
                    tagElem
                );
        });
    }
};

export { showTags };



class TagsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [
            ],
            inputVisible: false,
            inputValue: "",
        };
    }

    tagCloseHandler = (removeTag) => {
        let tags = [...this.state.tags];
        const newTags = tags.filter((tag) => tag.value !== removeTag.value);
        this.setState({ tags: [...newTags] });
    }


    showInput = () => {
        console.log('show input')
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        const tags = this.state.tags;
        let color = randomColor({
            luminosity: 'bright'
        });

        if (inputValue && tags.every((tag) => tag.value !== inputValue)) {
            tags.unshift({
                value: inputValue,
                color: color
            })
        }
        else if (!inputValue !== "") {
            message.info("This tag already existed")
        }
        this.setState({
            tags: [...tags],
            inputVisible: false,
            inputValue: '',
        })
    }

    saveInputRef = input => { this.input = input };

    createTagsNode = (tags, inputVisible, inputValue) => {
        return (
            <div>
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 72, margin: "0 10px 10px 0" }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}

                {!inputVisible && (
                    <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <Icon type="plus" /> New Tag
                     </Tag>
                )}

                {
                    (tags.length !== 0) ? (
                        tags.map((tag, index) => {
                            const isLongTag = tag.value.length > 15;
                            const tagElem = (
                                <Tag 
                                    key={tag.value} 
                                    closable="true" 
                                    color={tag.color} 
                                    onClose={() => this.tagCloseHandler(tag)}
                                >
                                    {isLongTag ? `${tag.value.slice(0, 15)}...` : tag.value}
                                </Tag>
                            );
                            return isLongTag ? (
                                <Tooltip title={tag.value} key={tag.value}>
                                    {tagElem}
                                </Tooltip>
                            ) : (
                                    tagElem
                                );
                        })
                    ) : console.log()
                }


            </div>
        )
    }


    render() {
        const { tags, inputVisible, inputValue } = this.state;
        this.tagsNode = this.createTagsNode(tags, inputVisible, inputValue)
        return (
            <div className="tag-wrapper">
                {this.tagsNode}
            </div>
        );
    }

    componentDidUpdate() {
        this.props.getTags(this.state.tags);
    }
}

export default TagsComponent;



