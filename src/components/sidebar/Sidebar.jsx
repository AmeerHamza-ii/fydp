import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  const dashboard = "Dashboard";
  const categories = "Categories";

  return (
    <div className="firstdiv">
      <div className="innerfirst">
        <List className="parent">
          <ListItemButton>
            <Link to="/categories">
              <div className="text">
                <CategoryIcon className="icon" />
                <ListItemText primary={categories} className="ListItemText" />
              </div>
            </Link>
          </ListItemButton>

          <ListItemButton>
            <Link to="/">
              <div className="text">
                <span>
                  <DashboardIcon className="icon" />
                </span>
                <span className="secondspan">
                  <ListItemText primary={dashboard} />
                </span>
              </div>
            </Link>
          </ListItemButton>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
