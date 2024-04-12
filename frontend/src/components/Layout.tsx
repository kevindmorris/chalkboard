const Layout = ({ children }: { children?: React.ReactNode }) => (
  <div className="container my-4">
    <div className="row justify-content-md-center">
      <div className="col-6">{children}</div>
    </div>
  </div>
);
export default Layout;
