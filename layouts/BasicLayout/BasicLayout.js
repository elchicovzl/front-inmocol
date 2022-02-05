import Header from "../../components/Header";
import Content from "../../components/Content";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      {/* begin content */}
      <Content />
      {/* finish content */}
      {children}
    </div>
  );
}
