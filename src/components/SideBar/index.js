import React, { useContext, useState, useEffect, useId } from "react";
import {
  IconButton,
  Container,
  Box,
  AppBar,
  Menu,
  Divider,
} from "@mui/material";
import { SideBarModeContext } from "../../App";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const sideBarContext = useContext(SideBarModeContext);
  const tabList = [
    {
      title: "lorem1",
      key: useId(),
      icon: "https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY2NDUwOTQ1Ng&ixlib=rb-1.2.1&q=85&w=3120",
      choosed: false,
    },
    {
      title: "lorem2",
      key: useId(),
      icon: "https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY2NDUwOTQ1Ng&ixlib=rb-1.2.1&q=85&w=3120",
      choosed: false,
    },
    {
      title: "lorem3",
      key: useId(),
      icon: "https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY2NDUwOTQ1Ng&ixlib=rb-1.2.1&q=85&w=3120",
      choosed: false,
    },
    {
      title: "lorem4",
      key: useId(),
      icon: "https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY2NDUwOTQ1Ng&ixlib=rb-1.2.1&q=85&w=3120",
      choosed: false,
    },
    {
      title: "lorem5",
      key: useId(),
      icon: "https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY2NDUwOTQ1Ng&ixlib=rb-1.2.1&q=85&w=3120",
      choosed: false,
    },
    {
      title: "lorem6",
      key: useId(),
      icon: "https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY2NDUwOTQ1Ng&ixlib=rb-1.2.1&q=85&w=3120",
      choosed: false,
    },
    {
      title: "lorem7",
      key: useId(),
      icon: "https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY2NDUwOTQ1Ng&ixlib=rb-1.2.1&q=85&w=3120",
      choosed: false,
    },
  ];
  const [barList, setBarList] = useState(tabList);
  const [sidebar, setSideBar] = useState(sideBarContext.sideBar);
  useEffect(() => {
    setSideBar(sideBarContext.sideBar);
  }, [sideBarContext]);

  const handleBarChoosed = (item, index) => {
    let tempList = [...tabList];
    tempList[index].choosed = true;
    setBarList([...tempList]);
    navigate(`/projects/${item.title}`, { project: item, index: index });
  };
  return (
    <div
      style={{
        width: sidebar === "normal" ? "16rem" : "4rem",
        position: "fixed",
        left: 0,
      }}
    >
      <AppBar
        position="absolute"
        id="sideBarMain"
        style={{
          width: "100%",
          left: 0,
          top: "8vh",
          height: "92vh",
          overflow: "hidden scroll",
          zIndex: "10000",
          padding: "2rem 0",
        }}
      >
        {barList.map((item, index) => {
          return (
            <Box
              key={item.key}
              onClick={() => handleBarChoosed(item, index)}
              className={item.choosed ? "selectedSideBarItem" : "sideBarItem"}
              style={{
                justifyContent: sidebar === "normal" ? "flex-start" : "center",
              }}
            >
              <img
                className={"sideBarItemImg"}
                src={item.icon}
                alt={item.title}
              />
              {sidebar === "normal" && (
                <h3 className={"sideBarItemTitle"}>{item.title}</h3>
              )}
            </Box>
          );
        })}
      </AppBar>
    </div>
  );
};

export default SideBar;

