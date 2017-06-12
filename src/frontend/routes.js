import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './component/App';
import PostsIndex from './component/posts_index';
import PostsNew from './component/posts_new';
import PostsDetails from './component/posts_details';

export default (
<Route path="/" component={App} >
  <IndexRoute component={PostsIndex} />
  <Route path="posts/new" component={PostsNew} />
  <Route path="posts/:id" component={PostsDetails} />
</Route>
);
