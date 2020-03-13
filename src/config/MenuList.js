
const MenuLists = [
    { 
        title: "Home",
        key: "/home",
        type: "home",
    },
    {
        title: "Blogs",
        key: "Blogs",
        type: "file-text",
        children: [
            {
                title: "Add Blog",
                key: "/add_blog",
                type: "file-add",
            },
            {
                title: "Blogs' List",
                key: "/blogs_list",
                type: "unordered-list",
            },
            {
                title: "Draft Box",
                key: '/draft_box',
                type: 'edit'
            }
        ]
    },
    {
        title: "Users",
        key: "users",
        type: "user",
        children: [
            {
                title: "Add Users",
                key: "/add_users",
                type: "user-add"
            },
            {
                title: "Users Control",
                key: "/users_control",
                type: "usergroup-delete"
            }
        ]
    },
    {
        title: "Settings",
        key: "/settings",
        type: "tool"
    }


];
export default  MenuLists;