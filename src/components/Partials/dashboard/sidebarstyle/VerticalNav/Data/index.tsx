import { AccordionDTO } from "../../../../../Accordion/Item/interface";
import { icons } from "../../../../../Icons";

type MenuData = Record<string, AccordionDTO>;

const usersMenu: AccordionDTO = {
  name: "users",
  title: "User",
  eventKey: "users",
  tooltip: "Users",
  leftIcon: icons.users,
  items: [
    {
      title: "View All",
      link: "users/view-all",
      overlayTriggerTitle: "V",
      tooltip: "View All Users",
      requiredPermissions: ["view user"],
    },
    {
      title: "Add User",
      link: "users/add",
      overlayTriggerTitle: "A",
      tooltip: "Add New User",
      requiredPermissions: ["add user"],
    },
  ],
  requiredPermissions: ["view user", "add user"],
};


const announcementsMenu: AccordionDTO = {
  name: "announcement",
  title: "Announcement",
  eventKey: "announcement",
  tooltip: "Announcement",
  leftIcon: icons.controller,
  requiredPermissions: [""],

  items: [
    {
      title: "Feeds",
      link: "announcement/feeds",
      overlayTriggerTitle: "F",
      tooltip: "Feeds",
      requiredPermissions: [],
    },
  ],
};


const testMenu: AccordionDTO = {
  name: "testMenu",
  title: "Test",
  eventKey: "testMenu",
  tooltip: "test",
  leftIcon: icons.y,
  requiredPermissions: [],

  items: [
    {
      title: "Test",
      link: "test",
      overlayTriggerTitle: "T",
      tooltip: "Test",
      requiredPermissions: [],
    },
  ],
};

export const menuData: MenuData = {
  users: usersMenu,
  Announcements: announcementsMenu,
  test: testMenu,
};
