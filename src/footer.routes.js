// @mui icons
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logo from "assets/images/full_logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Park Spot",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCcRiQ23UiuodGZbOCgLV1hA",
    },
  ],
  menus: [
    {
      name: "company",
      items: [{ name: "about us", href: "/" }],
    },
    {
      name: "resources",
      items: [{ name: "TBA", href: "https://iradesign.io/" }],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "mailto:nguyen@petertrung.com" }],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        // { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography component="a" href="/" rel="noreferrer" variant="button" fontWeight="regular">
        Park Spot
      </MKTypography>
      .
    </MKTypography>
  ),
};
