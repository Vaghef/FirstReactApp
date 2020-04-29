import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(    
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Sam" TimeAgo="6:30 PM"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Jane" TimeAgo="4:00 PM"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Marry" TimeAgo="12:30 PM"/>
        </ApprovalCard>  
    </div>
    );
}
ReactDOM.render(<App/>, document.querySelector('#root'));
