export const adminRoutes = (url) => {
    return [
        {
            path: `${url}/home`,
            component:'containers/Admin/Home'
        },
        {
            path: `${url}/add_blog`,
            component: 'containers/Admin/AddBlog'
        },
        {
            path: `${url}/edit_blog`,
            component: 'containers/Admin/EditBlog' 
        },
        {
            path: `${url}/blogs_list`,
            component: 'containers/Admin/BlogsList' 
        },
        {
            path: `${url}/draft_box`,
            component: 'containers/Admin/DraftBox' 
        }
    ]
    
}
