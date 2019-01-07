import React from 'react';

import Sidebar from '../shared/Sidebar';

export default function HomePage(props) {
  const { match } = props;
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-8">
        {`This is profile page. The profile ID is: ${match.params.id}`}
      </div>
      <Sidebar />
    </div>
  );
}
