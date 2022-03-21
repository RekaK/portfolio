import Footer from "../components/footer";
import Nav from "../components/nav";

const ProjectTemplate: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>Back button here</div>
      {children}
      <div>Back to the top here</div>
      <Footer />
    </div>
  );
};

export default ProjectTemplate;
