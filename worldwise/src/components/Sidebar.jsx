import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import CrFooter from "./CrFooter";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />;
      <AppNav />;<p>List of cities</p>
      <CrFooter />
    </div>
  );
}

export default Sidebar;
