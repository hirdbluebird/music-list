import React from 'react';

export default function HomePage(props) {
  const { match } = props;
  return (
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          {`This is profile page. The profile ID is: ${match.params.id}`}
        </div>
        <aside className="col-sm-12 col-lg-8">
          {'This is the sidebar'}
        </aside>
      </div>
    </section>
  );
}
