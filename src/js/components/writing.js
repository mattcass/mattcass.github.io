// Import React
import React from 'react';
import { Link } from 'react-router';

const blogPosts = [
  { file: '2016',              meta: '2016',    title: 'Reading List 2016' }, 
  { file: 'work',              meta: '2016',    title: 'Work' }, 
  { file: 'morning',           meta: '2015',    title: 'Morning' }, 
  { file: '2015',              meta: '2015',    title: 'Reading List 2015' }, 
  { file: 'accessibility',     meta: '2014',    title: 'Accessibility In The Modern Age' }, 
  { file: '2014',              meta: '2014',    title: 'Reading List 2014' }, 
  { file: 'vim',               meta: '2014',    title: 'Working With Vim' }, 
  { file: 'reading',           meta: '2014',    title: 'More, Better, Reading' }, 
  { file: 'tales',             meta: '2014',    title: 'Tales Of Development' }, 
];

export default class Writing extends React.Component {
  render() {

    var posts = blogPosts.map( function(postDetail, i){
        
        var listItem = <li className="mb4" key={ i } >
                        <Link to={"blog/"+postDetail.file} className="h2 bold">{ postDetail.title }</Link>
                        <small className="block">{ postDetail.meta }</small>
                      </li> 

        return listItem;
    });

    return (
        <ul className="list-reset mt4" id="writing">
          { posts } 
        </ul>
    )
  }
}
