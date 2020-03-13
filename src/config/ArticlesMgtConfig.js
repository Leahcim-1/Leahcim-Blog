import React from 'react';
import { Divider, Tag } from 'antd';

export const COLUMNS = [
    {
        title: 'Article',
        dataIndex: 'article',
        key: 'article',
        width: '20%',
        ellipsis: true,
       render: text => <a>{text}</a>
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        width: '25%',
        align: 'center',
        render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag.length <= 3) {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
            })}
            </span>
        ),
    },
    {
        title: "Author",
        dataIndex: "author",
        key: "author",
        width: '10%',
        align: 'center',
    },
    {
        title: "Last Edit Time",
        dataIndex: 'last_edit_time',
        key: 'last_edit__time',
        width: '15%',
        align: 'center',
    },
    {
        title: "Created Time",
        dataIndex: 'created_time',
        key: 'created_time',
        width: '15%',
        align: 'center',
    },
    {
        title: 'Action',
        key: 'action',
        align: 'center',
        render: (text, record) => (
            <span>
              <a>Edit {record.name}</a>
              <Divider type="vertical" />
              <a>Delete</a>
            </span>
        ),
    },
];


export const DATA = [
    {
        key: '1',
        article: 'React tutorial',
        author: 'Xinhao',
        last_edit_time: '1',
        created_time: '2',
        tags: ['React', 'Front-end', 'js'],
      },
]

