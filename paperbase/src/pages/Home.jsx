import { useState } from "react";
// Material elements
import { Button, Avatar, Tabs, Tab } from "@mui/material";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import GroupIcon from "@mui/icons-material/Group";
import DnsIcon from "@mui/icons-material/Dns";
import PhotoIcon from "@mui/icons-material/Photo";
import PublicIcon from "@mui/icons-material/Public";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerIcon from "@mui/icons-material/Timer";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";

// Input
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";

// Global styles
import "../styles/global.scss";

const Home = () => {
  const [tabValue, setTabValue] = useState(0);

  // Tab coontent
  const tabContents = [
    <div key="tab1">
      <Input
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        fullWidth
        placeholder="Search by email, phone number, or user UID"
      />
      <div className="tab-one-content">No users for this project yet</div>
    </div>,
    <div key="tab2">Tab 2 Content</div>,
    <div key="tab3">Tab 3 Content</div>,
    <div key="tab4">Tab 4 Content</div>,
  ];

  // Define the handleChangeTab function to change the active tab
  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="container">
      {/* ------------Sidebar----------- */}
      <div className="sidebar">
        <span className="logo">Paperbase</span>

        {/* Sidebar Nav item */}
        <div className="sidebar-nav-item c-padding">
          <DeleteIcon />
          <span>Project Overview</span>
        </div>

        <div className="sidebar-nav-wrap">
          <div className="nav-title">Build</div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item active">
            <GroupIcon />
            <span>Authentitication</span>
          </div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <DnsIcon />
            <span>Database</span>
          </div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <PhotoIcon />
            <span>Storage</span>
          </div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <PublicIcon />
            <span>Hosting</span>
          </div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <CodeIcon />
            <span>Functions</span>
          </div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <DeleteIcon />
            <span>Machine Learning</span>
          </div>
        </div>

        <div className="sidebar-nav-wrap">
          <div className="nav-title">Quality</div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <SettingsIcon />
            <span>Analytics</span>
          </div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <TimerIcon />
            <span>Performance</span>
          </div>
          {/* Sidebar Nav item */}
          <div className="sidebar-nav-item">
            <AppSettingsAltIcon />
            <span>Test Lab</span>
          </div>
        </div>
      </div>
      {/* End Sidebar */}

      {/* ------------Main Content----------- */}
      <div className="content-wrap">

        <div className="header">
          {/* Header Top */}
          <div className="header-top">
            <span>Go to docs</span>
            <NotificationsIcon />
            <Avatar
              alt="Egle Paku"
              src="https://media.licdn.com/dms/image/D4E03AQEr6Il_GMbbng/profile-displayphoto-shrink_800_800/0/1683551054436?e=2147483647&v=beta&t=3KMYJ-J5bcCoWd74Ri4nSFsOYyznPAqdhCWJmcqaEU0"
            />
          </div>

          {/* Header Middle */}
          <div className="header-middle">
            <h2>Authentication</h2>
            <div className="middle-right">
              <Button
                variant="outlined"
                href="#outlined-buttons"
                color="primary"
              >
                Web setup
              </Button>
              <HelpIcon />
            </div>
          </div>

          {/* Header Bottom */}
          <div className="header-bottom">
            <Tabs
              value={tabValue}
              onChange={handleChangeTab}
              aria-label="Tabs Example"
            >
              <Tab label="Users" disableRipple />
              <Tab label="Sign-in method" disableRipple />
              <Tab label="Templates" disableRipple />
              <Tab label="Usage" disableRipple />
            </Tabs>
          </div>
        </div>
        {/* Tab Content */}
        <div className="tab-content">
          <div className="tab-content-wrap">{tabContents[tabValue]}</div>
        </div>
      </div>
      {/* End Main Content */}
    </div>
  );
};

export default Home;
