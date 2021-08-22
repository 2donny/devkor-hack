import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const GetChattingData = ({
  setQuery,
  setChatUserImageList,
  setChatUserList,
  setChatList,
}) => {
  const accountUrl = "http://172.20.10.2/user/chat";
  const { isLoading, error, data } = useQuery("GetChattingData", async () => {
    const response = await axios.get(accountUrl, {
      headers: {
        userId: 1859557437,
      },
    });
    // console.log("query", response);
    return response.data.rooms;
  });

  //   console.log("query", data);

  if (data.length === 0) {
    setChatUserImageList([]);
    setChatUserList([]);
    setChatList([]);
    setQuery(false);
  }

  return <div></div>;
};

export default GetChattingData;
