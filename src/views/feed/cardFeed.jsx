import { InsertLinkOutlined } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { stambh } from "../../static";
const CardFeed = ({ data }) => {
  const { ministry, headline, link, id } = data;
  let navigate = useNavigate();
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 800,
        bgcolor: "background.paper",
        cursor: "pointer",
      }}
    >
      <ListItem
        secondaryAction={
          <Tooltip title="press release">
            <IconButton
            href={link}
            target="_blank"
            edge="end"
            aria-label="comments"
          >
            <InsertLinkOutlined />
          </IconButton>
          </Tooltip>
        }
      >
        <Box sx={{ px: 3 }}>
          <ListItemAvatar>
            <Avatar alt="Ashok chakra" src={stambh} />
            {/* <Avatar alt="Ashok chakra" src={ashokChakra} /> */}
          </ListItemAvatar>
        </Box>
        <ListItemText
          onClick={() => {
            navigate(`/summary/${id}`);
          }}
          primary={headline}
          secondary={ministry}
        />
      </ListItem>
    </List>
  );
};

export default CardFeed;
