const data = [
  {
    id: "recipes",
    icon: "iconsminds-chef-hat",
    label: "menu.recipes",
    to: "/app/recipes",
    newWindow:false
  },
  {
    id: "places",
    icon: "iconsminds-shop",
    label: "menu.places",
    to: "/app/second-menu",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.second",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "users",
    icon: "iconsminds-male-female",
    label: "menu.users",
    to: "/app/blank-page"
  },
  
];
export default data;
