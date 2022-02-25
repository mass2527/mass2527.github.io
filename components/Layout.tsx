import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
