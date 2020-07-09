import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Vidit1'
          time='6:00pm'
          content='Nice Post'
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Vidit2'
          time='6:00pm'
          content='Nice Post'
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Vidit3'
          time='6:00pm'
          content='Nice Post'
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <h4>Warning!</h4>
        <h5>Are you Sure about this ?</h5>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
