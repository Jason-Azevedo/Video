import React from "react";

export default function withPage<P>(Page: React.ComponentType<P>) {
  return (props: P) => (
    <main className="main">
      <Page {...props} />
    </main>
  );
}
