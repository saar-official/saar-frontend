import { Home, LocalLibraryRounded } from "@mui/icons-material";
import Dashboard from "@mui/icons-material/Dashboard";
const LINKS = [
  {
    name: "Home",
    route: "",
    icon: <Home />,
    disabled: false,
  },
  {
    name: "Feed",
    route: "feed",
    icon: <LocalLibraryRounded />,
    disabled: false,
  },
  // {
  //   name: "Summary",
  //   route: "summary",
  //   icon: <Dashboard />,
  //   disabled: false,
  // },
  {
    name: "Design",
    route: "design",
    icon: <Dashboard />,
    disabled: true,
  },
];

export default LINKS;
