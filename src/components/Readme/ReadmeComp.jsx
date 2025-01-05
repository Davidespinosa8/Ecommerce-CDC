import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./Picfinal1.jpg";
import Footer from "./Footer";

const ReadmeComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenReadme");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
  }, []);

  const handleOpen = () => {
    setHasSeenReadme(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasSeenReadme(true);
    localStorage.setItem("hasSeenReadme", "true");
  };

  return (
    <>
      {!hasSeenReadme && (
        <Dialog
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          open={open}
          PaperProps={{
            sx: {
              borderRadius: "1rem",
              maxHeight: "70vh",
            },
          }}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-row justify-between items-center h-16">
              <Typography variant="h6">
                <span className="text-blue-500 hover:underline text-base md:text-lg">
                  <a href="https://github.com/Davidespinosa8/Ecommerce-CDC/blob/master/README.md">
                    𝐀𝐩𝐩 𝐑𝐞𝐚𝐝𝐦𝐞
                  </a>
                </span>
              </Typography>

              <IconButton>
                <a
                  href="https://github.com/Davidespinosa8?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar
                    alt="Davidespinosa8"
                    src={profilePic}
                    sx={{
                      width: isMobile ? "60px" : "70px",
                      height: "auto",
                      border: "2px solid #3B82F6",
                    }}
                  />
                </a>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? ".9rem" : "1.25rem" }}
              >
                My Name is David and this is my final work.
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
              >
                𝐓𝐡𝐢𝐬 𝐄-𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐞 𝐚𝐩𝐩 𝐛𝐮𝐢𝐥𝐭 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭, 𝐕𝐢𝐭𝐞, 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒,
                𝐅𝐢𝐫𝐞𝐛𝐚𝐬𝐞, 𝐑𝐞𝐚𝐜𝐭 𝐑𝐨𝐮𝐭𝐞𝐫 𝐚𝐧𝐝 𝐂𝐨𝐧𝐭𝐞𝐱𝐭 𝐀𝐏𝐈.
              </Typography>
              <Divider />
              <Typography
                paragraph
                className="text-gray-800 "
                style={{
                  fontSize: isMobile ? "1rem" : "1.25rem",
                  marginTop: "1rem",
                  fontWeight: "bold",
                }}
              >
                Key Features:
              </Typography>
              <Footer />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}

      <IconButton
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 transition duration-300"
        onClick={handleOpen}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <BsExclamation className="hover:bg-red-500 rounded-full w-6 h-auto md:w-8 md:h-8" />
      </IconButton>
    </>
  );
};

export default ReadmeComponent;
