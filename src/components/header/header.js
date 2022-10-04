import Image from "../../assets/bg.jpeg";
import "./header.css";

const renderHeader = () => {
  const headerLayout = `
  <header>
   <div class="header-logo">
    <img src="${Image}" />
   </div>
  </header>
`;

  document?.body?.innerHTML = headerLayout;
};

export default renderHeader;
